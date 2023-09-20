      function displayAlert() {
            // Get the values from the form fields
            var emailOrNumber = document.getElementById('email-or-number').value;
            var password = document.getElementById('password').value;

            // Display the alert
            alert('Email/Phone: ' + emailOrNumber + '\nPassword: ' + password);
        }
