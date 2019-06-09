const express = require('express'); //creates a variable that requires express

const app = express();  //Initialize a variable called app with express

const PORT = process.env.PORT || 5000; // this checks an environment variable to acces its suggestion for which port before defaulting to 5000

app.listen(PORT, () => console.log('Server started on port ${PORT}')); // The server needs to listen on a port

