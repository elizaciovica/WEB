document.addEventListener("DOMContentLoaded", function() {
    var myForm = document.forms.contactForm
    var submitButton = myForm.querySelector('button')
  
    var error = document.querySelector('#errorAlert')
    function showError(message) {
        removeError(message)
        error.innerText += message
    }
  
    function removeError(message) {
        error.innerText = error.innerText.replace(message, '')
    }
  
    function isValidForm() {
        var firstName = myForm.firstName.value
        var lastName = myForm.lastName.value
        var phone = myForm.phone.value
        var email = myForm.email.value
        var message = myForm.message.value
  
        if(firstName.length < 3) {
            showError('Please enter a valid first name.')
            return false
        } else {
            removeError('Please enter a valid first name.')
        }
  
        if(lastName.length < 3) {
            showError('Please enter a valid last name.')
            return false
        } else {
            removeError('Please enter a valid last name.')
        }
  
        if(phone.length < 6) {
            showError('Please enter a valid phone number.')
            return false
        } else {
            removeError('Please enter a valid phone number.')
        }
  
        if(email.includes('@') && email.includes('.')) {
            removeError('Please enter a valid email.')
        } else {
            showError('Please enter a valid email.')
            return false
        }
  
        if(message.length < 25) {
            showError('Please enter a longer message.')
            return false
        } else {
            removeError('Please enter a longer message.')
        }
  
        return true
    }
  
    // add an event listener `submit` to the form and call the function
    function onSubmit(event) {
        event.preventDefault();
    }
  
    myForm.addEventListener('submit', onSubmit, false)
  
    // show the element with id `successMessage` by removing the `hidden` class if the form is valid
    submitButton.addEventListener('click', function(event) {
        var isValid = isValidForm()
  
        if(isValid) {
            var successElement = document.querySelector('#successMessage')
            successElement.classList.remove('hidden')
        }
    })
  
  });