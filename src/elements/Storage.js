// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html

// Creates a client using Application Default Credentials
const storage = new Storage();

// Creates a client from a Google service account key
// const storage = new Storage({keyFilename: 'key.json'});

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';

async function createBucket() {
  // Creates the new bucket
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}

createBucket().catch(console.error);




















// /**
//  * TODO(developer): Uncomment the following lines before running the sample.
//  */
// // The ID of your GCS bucket
// // const bucketName = 'your-unique-bucket-name';

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






