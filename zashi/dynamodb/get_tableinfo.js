var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({region: 'ap-northeast-2'});

var params = {
    Limit: 100
};

var params = {TableName:'zashi_practice'};
dynamodb.describeTable(params, function(err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
        // php.var_dump(data);
    }
});