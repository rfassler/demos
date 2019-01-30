const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => 
    res.send('Hello Worldsdfsdfsdfsddddddfsdfdsf!')
);

app.get('/data', (req, res) => {
        console.log(`Base Url: ${req.baseUrl}`); 
        
        var data = {
          name: "Reuven",  
          age: 41
        };
        console.log(JSON.stringify(data));
        res.status(504).json(data);
    }
);

app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});

app.get('/user/:id/:phone', function(req, res) {
  res.send('user ' + req.params.id + " Phone: " + req.params.phone);
});

app.get(['/gre+t', '/hel{2,4}o'], function(req, res) {
  res.send("IP= " + req.ip + " Path=" + req.path + " QS=" + JSON.stringify(req.query))
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))