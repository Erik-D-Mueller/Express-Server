const express = require('express'); //creates a variable that requires express
const path = require('path');


// This grabs the js Members file which a JSON object in it
const members = require('./Members');

const app = express();  //Initialize a variable called "app" with express, so that we can use the dot properties of it.


app.get('/api/members', (req, res) => {

res.json(members);  // this returns a json file-object in response to the request

});

//   This is how we set a "static" folder to serve a static website.  
//  "use" is the keyword to include middleware.
// We can build entire static websites in the folder with only html files and many connected CSS and JS files.
// All we have to do is "put the files in the static folder" from here on, if we were making a static website, although that is not usually what express is used for.


// My code is a bit different from his, I need these 3 lines to make express happy, he only needs one line


//get all users
app.get('/', (req, res) => { // We use "app" to create a route, then we use the type of request it will handle, in this case a "get" request.
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



const PORT = process.env.PORT || 5000; // this checks an environment variable called "PORT" to accept the port number suggestion for which port, before defaulting to 5000

app.listen(PORT, () => console.log('Server started on port ${PORT}')); // The server needs to listen on a port




+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

The code above listens on port 5000 and returns a json in response to a get request, its a json api, it also hosts a static folder.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++