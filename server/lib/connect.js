 const http = require('http');
 const cluster = require('cluster');
 const os = require('os');
 const config = require('../config/index')[process.env.NODE_ENV || 'development'];
//  const app = require('../server/app')(config);
 const db = require('./db');


 console.log('called connect')