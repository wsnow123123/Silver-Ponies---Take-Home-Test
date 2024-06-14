document.addEventListener('DOMContentLoaded', function() {
    var clearCartButton = document.getElementById('clear-cart-button');

    clearCartButton.addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/cart/clear.js', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Handle success, such as refreshing the cart page
                    location.reload();
                } else {
                    // Handle error
                    console.error('Error clearing cart:', xhr.responseText);
                }
            }
        };
        xhr.send();
    });
});