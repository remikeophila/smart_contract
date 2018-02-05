var jwt = require('jsonwebtoken');
 
var fs = require('fs');
var cert = fs.readFileSync('private.key'); 
var pub = fs.readFileSync('public.key'); 

var token = jwt.sign({ 
    iss: "c18bb62f-78f9-4dd6-816c-e993a2d2127f",
    sub: "1c7f124f-6fd9-4444-84c7-b31a39520594", 
    aud: "account-d.docusign.com",  
    scope: "signature",  
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) }, cert, { algorithm: 'RS256'});

console.log(jwt.verify(token, pub));


console.log(token);

