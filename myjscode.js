$(function () {
  $("#myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {

  var ok = true;

  var name = $("#name").val();
  if(name.length<5)
  {
    alert("Name should be at least 5 characters");
    ok = false;
  }

  var pass = $("#password").val();
  var pass2 = $("#confirm_password").val();
  if(pass.length<8)
  {
    alert("Password should be at least 8 characters");
    ok = false;
  }
  if(pass2!=pass)
  {
    alert("Passwords do not match");
    ok = false;
  }

  if(ok===true)
  {
    alert("Form is being submitted");
  }
  else if(ok===false)
  {
    alert("Form not submitted");
    e.preventDefault();
  }
}