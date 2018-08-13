var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({region: 'ap-northeast-2'});

var params = {
    Limit: 100
};

dynamodb.listTables(params, function(err, data) {
    if (err) {
        console.log(err, err.stack); 
    } else {
        console.log(data);
        // php.print_r(data);
    }
});