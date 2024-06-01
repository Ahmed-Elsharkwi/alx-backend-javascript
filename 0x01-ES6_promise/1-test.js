import getFullResponseFromAPI from './1-promise';

getFullResponseFromAPI(false).then((response) => {
    console.log(response); // Outputs: { status: 200, body: 'Success' }
}).catch((error) => {
    console.log(error.message); // Outputs: 'The fake API is not working currently'
});

