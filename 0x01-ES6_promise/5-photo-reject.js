export default function uploadPhoto(fileName) {
  // return a promise rejecting with an error
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
