console.log('hello')

$(document).ready(function() {
  $('.Submit').click(function (event){
    console.log('Clicked button')

  var FirstName = $('.First Name').val()
    var LastName = $('.Last Name').val()
    var Email = $('.Email').val()
    var Phone = $('.Phone').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(FirstName.length <= 10) {
      statusElm.append('<div>Name is valid</div>')}
      else{
        event.preventDefault()
        statusElm.append('<div>Name is invalid. Please try again.</div>')
      }
      if(LastName.length <= 10) {
        statusElm.append('<div>Name is valid</div>')} else{
          event.preventDefault()
          statusElm.append('<div>Name is invalid. Please try again.</div>')
      }
      if(Email.length > 5 && Email.includes('@') && email.includes('.')) {
        statusElm.append('<div>Email is valid</div>')} else{
          event.preventDefault()
          statusElm.append('<div>Email is invalid. Please try again.</div>')
    }
    if(Phone.length <= 10) {
      statusElm.append('<div>phone is valid</div>')} else{
        event.preventDefault()
        statusElm.append('<div>Phone is invalid. Please try again.</div>')
      }
  })
})
