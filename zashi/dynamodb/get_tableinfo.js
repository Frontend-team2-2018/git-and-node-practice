var AWS = require('aws-sdk');
    AWS.config.update({
        region: "ap-northeast-2"
    });
    
console.log("パラメーターをセットするよう");
var docClient = new AWS.DynamoDB.DocumentClient();
var params = {
    TableName: "zashi_practicedb",
    Key: {
        id : "SK5026926"
    }
};

docClient.get(params, function(err, data) {
    console.log("dynamo_data:", data);
    console.log("dynamo_err:", err);
});