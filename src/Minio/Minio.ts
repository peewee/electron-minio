const Minio = require('minio')

var s3Client = new Minio.Client({
  endPoint:  's3.amazonaws.com',
  accessKey: '0R0C0RJNR1RS05FZTR02',
  secretKey: 'Yoi9XJF1oo+MzDwckB4OS9TYIlPpDLB3zTkg23OB'
})

console.log('Hullo Minio.js')

function cube(x) {
  return x * x * x
}

function getBuckets() { // called by app.js
  return new Promise(done => {
    s3Client.listBuckets(
      function(err, list) {
        if (err) return console.log(err)
        return done (list)
      }
    )
  })
}

/*
function getBuckets() { // called by app.js
  return new Promise(resolve => {
    s3Client.listBuckets(
      function(err, buckets) {
        if (err) return console.log(err)
        return resolve (buckets)
      }
    )
  })
}
*/


export { cube, getBuckets }

/*
async function getBuckets() {
  await s3Client.listBuckets(
    function(err, buckets) {
      if (err) return console.log(err)
      return Promise.resolve (buckets);
    }
  )
}
*/