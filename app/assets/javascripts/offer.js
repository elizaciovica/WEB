let checkInDate = null;
let checkOutDate = null;
let period = null;
let price = parseFloat(document.getElementById("offer-price").value);

function handler1(e){
  checkInDate = e.target.value;

  if(checkOutDate != null){
    if(checkInDate < checkOutDate){
      date2 = new Date(checkOutDate);
      date1 = new Date(checkInDate);

      let Difference_In_Time = date2.getTime() - date1.getTime();

      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      period = Difference_In_Days;
      document.getElementById("total-price").style.display = "inline";
      document.getElementById("trip-price").innerHTML = price * period;
      document.getElementById("nights").innerHTML = period;
    }
    else
      alert("Select a valid period! Price cannot be calculed with an invalid period!");
  }
}

function handler2(e){
  checkOutDate = e.target.value;

  if(checkInDate != null){
    if(checkInDate < checkOutDate){
      date2 = new Date(checkOutDate);
      date1 = new Date(checkInDate);

      let Difference_In_Time = date2.getTime() - date1.getTime();

      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      period = Difference_In_Days;
      document.getElementById("total-price").style.display = "inline";
      document.getElementById("trip-price").innerHTML = price * period;
      document.getElementById("nights").innerHTML = period;
    }
    else
      alert("Select a valid period! Price cannot be calculed with an invalid period!");
  }
}

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
      var checkIn = myForm.checkIn.value
      var checkOut = myForm.checkOut.value

      if(checkOut <= checkIn) {
          showError('Please enter a valid period.')
          return false
      } else {
          removeError('Please enter a valid period.')
      }

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
