

document.getElementById("submit").addEventListener("click", emailvalidation);


function emailvalidation() {
    let inputVal = document.getElementById("email").value;
    
    if (
      inputVal.length > 0 &&
      inputVal.indexOf("@") != -1 &&
      inputVal.indexOf("@") != 0 &&
      inputVal.lastIndexOf(".") != -1 &&
      inputVal.lastIndexOf(".") != 0 &&
      inputVal.lastIndexOf(".") > inputVal.indexOf("@") + 1 &&
      inputVal.length > inputVal.lastIndexOf(".") + 1 &&
      inputVal.indexOf(" ") == -1
    ) {
      return true;
    } else {
      alert("Email je u neispravnom formatu");
    }
  };


  let myyInput = document.getElementById("email");

/*  if (myyInput && myyInput.value) {
  alert("email je unesen");
} */

