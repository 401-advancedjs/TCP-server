'use strict';

const PORT = 3001;
const CLIENT_NAME = 'localhost';
const {readFile, upperCase, writeFile} = require('./read-write.js');

const net = require('net');
const socket = new net.Socket();

socket.connect(PORT, CLIENT_NAME, () => {
  console.log('socket.connect');
});


socket.on( 'close', () => {
  console.log('connection closed')});

let file = process.argv.slice(2).shift();

async function readWriteFile(file){
  const read = await readFile(file);
  const upperCaseValue = upperCase(read);
  const write = await writeFile(file, upperCaseValue);
  console.log(write);
  socket.write(write);
}
readWriteFile(file).catch(error => console.error(error));

