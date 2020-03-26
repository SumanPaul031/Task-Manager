const express = require('express');
const app = express();

const port = process.env.PORT || 8080

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

//Load in the mongoose models
const { List, Task, User } = require('./db/models');

const jwt = require('jsonwebtoken');

/*Middleware*/

// Load middleware
app.use(bodyParser.json());

//CORS Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-access-token, x-refresh-token, _id, Content-Type, Accept");
    
    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );
    
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

//check whether the request has a valid JWT token
let authenticate = (req, res, next) => {
    let token = req.header('x-access-token');

    //verify the JWT
    jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
        if(err){
            //jwt is invalid -- Do not authenticate
            res.status(401).send(err);
        } else{
            req.user_id = decoded._id;
            next();
        }
    })
}

//Verify Refresh Token Middleware which will be verifying the session
let verifySession = (req, res, next) => {
    //grab the refresh token from the request header
    let refreshToken = req.header('x-refresh-token');

    //grab the _id from the request header
    let _id = req.header('_id');

    User.findByIdAndToken(_id, refreshToken).then((user) => {
        if(!user){
            //user couldn't be found
            return Promise.reject({
                'error': 'User not found. Make sure that the refresh token and the user id are correct'
            });
        }

        //if user was found the refresh token exists in the database but we still have to checkif it has expired or not
        req.user_id = user._id;
        req.userObject = user;
        req.refreshToken = refreshToken;

        let isSessionValid = false;

        user.sessions.forEach((session) => {
            if(session.token === refreshToken){
                //check if the session has expired
                if(User.hasRefreshTokenExpired(session.expiresAt) === false){
                    //refresh token has not expired
                    isSessionValid = true;
                }
            }
        });

        if(isSessionValid){
            //call next to continue with processing this web request
            next();
        } else{
            //session is not valid
            return Promise.reject({
                'error': 'Refresh token has expired or the session is invalid'
            })
        }
    }).catch((e) => {
        res.status(401).send(e);
    })
}

/* End Middleware */

// Route Handlers

//GET /lists
// app.get('/', (req, res) => {
//     res.send('Hello');
// })

app.get('/lists', authenticate, (req, res) => {
    //We want to return an array of all the lists in the database that belon to the authenticated user
    List.find({
        _userId: req.user_id
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
});

//POST /lists
// app.post('/lists', (req, res) => {
// })

app.post('/lists', authenticate, (req, res) => {
    // We want to create a new list and return the new list document back to the user which includes the id
    // The list info fields will be passed in via the JSON request body
    let title = req.body.title;

    let newList = new List({
        title,
        _userId: req.user_id
    });
    newList.save().then((listDoc) => {
        //Full list document is returned (incl. id)
        res.send(listDoc);
    })
});

//PATCH /lists
app.patch('/lists/:id', authenticate, (req, res) => {
    // We want to update the list with the new value specified in the JSON body of the request
    List.findOneAndUpdate({ _id: req.params.id, _userId: req.user_id }, {
        $set: req.body
    }).then(() => {
        res.send({ 'message': 'Updated successfully' });
    });
});

//DELETE /lists/:id
app.delete('/lists/:id', authenticate, (req, res) => {
    //We want to delete the specified list
    List.findOneAndRemove({ 
        _id: req.params.id,
        _userId: req.user_id
    }).then((removedListDoc) => {
        res.send(removedListDoc);

        //delete all the tasks that are in the deleted list
        deleteTasksFromList(removedListDoc._id);
    });
});

// GET /lists/:listId/tasks
app.get('/lists/:listId/tasks', authenticate, (req, res) => {
    //We want to return all the tasks that belong to the specified listId
    Task.find({
        _listId: req.params.listId
    }).then((tasks) => {
        res.send(tasks);
    });
});

//GET /lists/:listId/tasks/:taskId
// app.get('/lists/:listId/tasks/:taskId', (req, res) => {
    //We want to get the task for the specified taskId in the given listId
//     Task.findOne({
//         _id: req.params.taskId,
//         _listId: req.params.listId
//     }).then((task) => {
//         res.send(task);
//     });
// });

//POST /lists/:listId/tasks
app.post('/lists/:listId/tasks', authenticate, (req, res) => {
    //We want to create a new task in alist specified by the listId
    
    List.findOne({
        _id: req.params.listId,
        _userId: req.user_id
    }).then((list) => {
        if(list){
            //list object is valid and the currently authenticated user can create new tasks
            return true;
        }
        return false;
    }).then((canCreateTask) => {
        if(canCreateTask){
            let newTask = new Task({
                title: req.body.title,
                _listId: req.params.listId
            });
            newTask.save().then((newTaskDoc) => {
                res.send(newTaskDoc);
            });
        } else{
            res.sendStatus(404);
        }
    })
});

//PATCH /lists/:listId/tasks/:taskId
app.patch('/lists/:listId/tasks/:taskId', authenticate, (req, res) => {
    //We want to update the task specified by taskId in the given listId
    
    List.findOne({
        _id: req.params.listId,
        _userId: req.user_id
    }).then((list) => {
        if(list){
            //list object is valid and the currently authenticated user can create new tasks
            return true;
        }
        return false;
    }).then((canUpdateTasks) => {
        if(canUpdateTasks){
            Task.findOneAndUpdate({ 
                _id: req.params.taskId,
                _listId: req.params.listId
            }, {
                $set: req.body
            }).then(() => {
                // res.sendStatus(200);
                res.send({message: 'Updated Successfully'});
            });      
        } else{
            res.sendStatus(404);
        }
    })
});

//DELETE /lists/:listId/tasks/:taskId
app.delete('/lists/:listId/tasks/:taskId', authenticate, (req, res) => {
    //We want to delete the task with the specified taskId in the given listId
    
    List.findOne({
        _id: req.params.listId,
        _userId: req.user_id
    }).then((list) => {
        if(list){
            //list object is valid and the currently authenticated user can create new tasks
            return true;
        }
        return false;
    }).then((canDeleteTasks) => {
        if(canDeleteTasks){
            Task.findOneAndRemove({
                _id: req.params.taskId,
                _listId: req.params.listId
            }).then((removedTaskDoc) => {
                res.send(removedTaskDoc);
            }); 
        } else{
            res.sendStatus(404);
        }
    });
});


/* User Routes */

//POST /users
app.post('/users', (req, res) => {
    //User sign up
    let body = req.body;
    let newUser = new User(body);

    newUser.save().then(() => {
        return newUser.createSession();
    }).then((refreshToken) => {
        //Session created successfully - refreshToken returned
        //now we generate an access token for the user

        return newUser.generateAccessAuthToken().then((accessToken) => {
            //access auth token generated successfully, now we return an object containing the auth tokens
            return {accessToken, refreshToken};
        });
    }).then((authTokens) => {
        //Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
        res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(newUser);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

//POST /users/login
app.post('/users/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findByCredentials(email, password).then((user) => {
        return user.createSession().then((refreshToken) => {
            //Session created successfully - refreshToken returned
            //now we generate an access auth token for the user

            return user.generateAccessAuthToken().then((accessToken) => {
                //access auth token generated successfully, now we return an object containing the auth tokens
                return {accessToken, refreshToken}
            });
        }).then((authTokens) => {
            //Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
            res
                .header('x-refresh-token', authTokens.refreshToken)
                .header('x-access-token', authTokens.accessToken)
                .send(user);
        })
    }).catch((e) => {
        res.status(400).send(e);
    })
});

//GET /users/me/access-token
app.get('/users/me/access-token', verifySession, (req, res) => {
    //We know that the caller is authenticated and we have the user_id and userObject available to us
    req.userObject.generateAccessAuthToken().then((accessToken) => {
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((e) => {
        res.status(400).send(e);
    })
});

/* Helper Methods */
let deleteTasksFromList = (_listId) => {
    Task.deleteMany({
        _listId
    }).then(() => {
        console.log('Tasks from '+_listId+' were deleted');
    });
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log('Server is listening on Port '+port);
});