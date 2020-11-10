var express = require('express');
fs = require('fs');
var app = express();

app.get('/', function (req, res) {
    const filename = '/datadisk/greeting';
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send(data);
    });
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express listening on Port ${port} ...`);
});
