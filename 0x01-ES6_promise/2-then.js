export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error());
    }
  });
}
