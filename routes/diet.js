var data = require('./data.js');

exports.test = function(req, res) {
    var value = req.query.value;
//var reuslt= data.getDataFromDatabase(value);
    res.write('dadak test by dhy : ' + value);
    res.end();
console.log('test',value);
};
