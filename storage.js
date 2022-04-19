'use strict';

async function quickstart(
  projectId = 'extro-1612581033896', // Your Google Cloud Platform project ID
  keyFilename = 'src/elements/gcl.json' //Full path of the JSON file
) {
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage({keyFilename,projectId});
  const bucket = storage.bucket('deepturn_assets')




// const storage = require('@google-cloud/storage');
// const projectId = 'extro-1612581033896';
// const gcs = storage({
//     projectId: projectId
// });

// let bucketName = 'deepturn_assets';
// let bucket = gcs.bucket(bucketName);
// bucket.getFiles({}, (err, files,apires) => {console.log(err,files,apires)});




// /**
//  * TODO(developer): Uncomment the following lines before running the sample.
//  */
// // The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';

// // Imports the Google Cloud client library
// const {Storage} = require('@google-cloud/storage');

// // Creates a client
// const storage = new Storage();

// async function listFiles() {
//   // Lists files in the bucket
//   const [files] = await storage.bucket(bucketName).getFiles();

//   console.log('Files:');
//   files.forEach(file => {
//     console.log(file.name);
//   });
// }

// listFiles().catch(console.error);