

const express = require('express'); //creates a variable that requires express
const path = require('path');


const app = express();  //Initialize a variable called "app" with express, so that we can use the dot properties of it.


// He hardcoded a json object here just for the example, usually it would be in a seperate file
const members = [

{
id: 1 ,
name: john,
email: asdfasdf,
status: good
},
{
    id: 2,
    name: rihard,
    email: gadfggsd,
    status: ok
    }
];

app.get('/api/members', (req, res) => { 

    res.json(mebers);  // this sends json in response to the request




});



//   This is how we set a "static" folder to serve a static website.  
//  "use" is the keyword to include middleware.
// We can build entire static websites in the folder with only html files and many connected CSS and JS files.
// All we have to do is "put the files in the static folder" from here on, if we were making a static website, although that is not usually what express is used for.
app.use(express.static(path.join(___dirname, 'public')));  

const PORT = process.env.PORT || 5000; // this checks an environment variable called "PORT" to accept the port number suggestion for which port, before defaulting to 5000

app.listen(PORT, () => console.log('Server started on port ${PORT}')); // The server needs to listen on a port

