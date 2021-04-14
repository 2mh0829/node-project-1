const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});

// app.get('경로', function(요청, 응답){});
app.get('/pet', function(req, res){
    res.send('응답합니다.');
});

// npm install -g nodemon
// nodemon : 서버 자동 재시작 모듈
// nodemon 서버명

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});