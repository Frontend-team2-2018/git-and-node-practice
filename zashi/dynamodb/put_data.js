var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({region: 'ap-northeast-2'});

var params = {
    TableName: 'zashi_practicedb',
    Item: {
        'id':       {"S": "SK5026926"},
        'name':     {"S": "篙直矢"}
    }
};

dynamodb.putItem(params, function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});
