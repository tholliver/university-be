// connector
const { Client } = require('pg')
const client = new Client({
  user: 'sgpostgres',
  host: 'SG-PostgreNoSSL-14-pgsql-master.devservers.scalegrid.io',
  database: 'postgres',
  password: 'password',
  port: 5432
})
client.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
})

// const { Client } = require('pg');
// var fs = require('fs');

// const client = new Client({
//   user: 'sgpostgres',
//   host: 'SG-NewPostgreCluster-5-pgsql-master.devservers.scalegrid.io',
//   database: 'postgres',
//   password: 'password',
//   port: 6432,
//   ssl  : {
//     ca : fs.readFileSync('<path to CA cert file>')
//   }
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
