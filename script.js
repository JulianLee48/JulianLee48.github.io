// Use ID to target search form 
const form = document.getElementById('search-form');

// Use ID to target search input
const searchInput = document.getElementById('search');

// Listen for submit event
form.addEventListener('submit', (e) => {

    // Prevent default form submit
    e.preventDefault();

    // Get search term
    const searchTerm = searchInput.value;

    // AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.google.com/search?q=${searchTerm}`);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Success - redirect to Google results
            window.location.href = `https://www.google.com/search?q=${searchTerm}`;
        }
    }

});