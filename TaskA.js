// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// Set up a handler for the request
xhr.onload = function() {
    if (xhr.status === 200) {
        // If the request was successful, handle the response
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        // If the request failed, handle the error
        console.error('Request failed. Status: ' + xhr.status);
    }
};

// Handle errors
xhr.onerror = function() {
    console.error('Request failed.');
};

// Send the request
xhr.send();
