console.log('hello')

$(document).ready(function() {
  $('.Submit').click(function (event){
    console.log('Clicked button')

  var Fname = $('.Fname').val()
    var Lname = $('.Lname').val()
    var Email = $('.Email').val()
    var Phone = $('.Phone').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(Fname.length >= 5) {
      statusElm.append('<div>First Name is valid</div>')}
      else{
        event.preventDefault()
        statusElm.append('<div>First Name is invalid. Please try again.</div>')
      }
      if(Lname.length >= 5) {
        statusElm.append('<div>Last Name is valid</div>')}
         else{
          event.preventDefault()
          statusElm.append('<div>Last Name is invalid. Please try again.</div>')
      }
      if(Email.length >= 5 && Email.includes('@') && Email.includes('.')) {
        statusElm.append('<div>Email is valid</div>')}
        else{
          event.preventDefault()
          statusElm.append('<div>Email is invalid. Please try again.</div>')
    }
    if(Phone.length >= 3 && Phone.includes('-')) {
      statusElm.append('<div>Phone is valid</div>')}
      else{
        event.preventDefault()
        statusElm.append('<div>Phone is invalid. Please try again. Hint-add dashes.</div>')
      }
  })
})
