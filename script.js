document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popUp").classList.add("active");
});

document.querySelector(".popUp .close-btn").addEventListener("click",function(){
    document.querySelector(".popUp").classList.remove("active");
});

function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;

  const formData = {
      name: name,
      city: city,
      email: email,
      zipCode: zipCode,
      status: status
  };

  return formData;
}

function isNumber(input) {
  return !isNaN(input);
}


function checkboxIsChecked() {
  return document.getElementById('status').checked;
}

function validateFormData(formData) {
  return (
      formData &&
      formData.name.trim() !== "" &&
      formData.city.trim() !== "" &&
      formData.email.trim() !== "" &&
      isNumber(formData.zipCode) &&
      checkboxIsChecked()
  );
}


function submit() {


  const warningDiv = document.getElementById('warning');

  if (!validateFormData(handleGetFormData())) {
      warningDiv.innerHTML = 'Periksa form anda sekali lagi';
  } else {
      warningDiv.innerHTML = '';
  }
}
  document.getElementById("submit-form").addEventListener("click",(event)=>{
  event.preventDefault();
  submit();
  });