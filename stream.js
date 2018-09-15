var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  console.log(__dirname);
  myWriteStream.write(chunk);
  //console.log(chunk);
});
