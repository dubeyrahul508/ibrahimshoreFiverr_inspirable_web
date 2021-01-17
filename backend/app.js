const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
var FormData = require('form-data');
var fs = require('fs');
var request = require('request');
const reader = require('FileReader');
var qs = require('qs');

var access_token = "1000.8d533b114d767ffb6b00128b13f60b52.fe3f6eb2abe49ed240b660b6dbec6311";

const getAccess_token = () => {
    var data = qs.stringify({
    'refresh_token': '1000.567fb0fce4931c7a63dfe8dcaa6b0d28.d99ccee91ff502a5495af8c80ac995d0',
    'client_id': '1000.P1K9Q4JMFO0VKEPRDX03I1CVSTG8UZ',
    'client_secret': '4dd8d53e8a4fbf441c4d919a7b610941a0fcc93762',
    'grant_type': 'refresh_token' 
    });
    var config = {
    method: 'post',
    url: 'https://accounts.zoho.eu/oauth/v2/token',
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Cookie': 'd4bcc0a499=b68879031235cd68accefd96263120ab; iamcsr=c2c0d38a-8aed-4574-b4c9-433738d08380; _zcsr_tmp=c2c0d38a-8aed-4574-b4c9-433738d08380; stk=11eb313d97ecc60aa4f0b24ef06d95e0; JSESSIONID=CE91E2A9D7293DF6DBD5C0E30C3C335E'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data.access_token));
    access_token = JSON.stringify(response.data.access_token)
    })
    .catch(function (error) {
    console.log(error);
    });

}

app.use(cors());
app.use(bodyParser.json());
app.post('/', (req, res) => {
    var data = JSON.stringify({
        contactId: req.body.contactId,
        subject: req.body.subject,
        departmentId: req.body.departmentId,
        email: req.body.email,
        description: req.body.description 
    });

    var config = {
    method: 'post',
    url: 'https://desk.zoho.eu/api/v1/tickets?orgId=20073540860',
    headers: { 
        'Authorization': 'Bearer 1000.289471a87b086b6672c4cfc34064441d.a3e99501f8957337ef5e7195d1233bbd', 
        'Content-Type': 'application/json', 
        'Cookie': '4a1e652dc2=0b1a41a6f8bdf5bace124495c295acad; crmcsr=76625785-3407-476f-86b6-ba1c5fa6b3a7; _zcsr_tmp=76625785-3407-476f-86b6-ba1c5fa6b3a7; stk=11eb313d97ecc60aa4f0b24ef06d95e0; JSESSIONID=D6E580153FECF260014DCC4B1104970A'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
})


 app.post('/attachment', (req,res) => {
    var options = { method: 'POST',
    url: 'https://desk.zoho.eu/api/v1/tickets/48240000000122527/attachments',
    qs: { orgId: '20073540860', isPublic: 'true' },
    headers: 
    { 'postman-token': '713d9056-0f8b-a347-e161-2474302b73a5',
        'cache-control': 'no-cache',
        authorization: 'Bearer 1000.289471a87b086b6672c4cfc34064441d.a3e99501f8957337ef5e7195d1233bbd',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    formData: 
    { file: 
        { value: req.body.file.buffer,
            options: { filename: req.body.file.name, contentType: req.body.file.mimetype } } } };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    });
 })
app.listen(4000);