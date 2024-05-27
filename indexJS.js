/* function validateEmailAddress(emailAddress) {
  let atSymbol = emailAddress.indexOf("@");
  let dotSymbol = emailAddress.lastIndexOf(".");
  let spaceSymbol = emailAddress.indexOf(" ");

  if (
    atSymbol != -1 &&
    atSymbol != 0 &&
    dotSymbol != -1 &&
    dotSymbol != 0 &&
    dotSymbol > atSymbol + 1 &&
    emailAddress.length > dotSymbol + 1 &&
    spaceSymbol == -1
  ) {
    let value1 = document.getElementById("email").value;
    document.value1 = alert("Email address is valid.");
    return true;
  } else {
    document.value1 = alert("Error !!! Email address is not valid.");
    return false;
  }
}
*/

var myInput = document.getElementById("lozinka");
if (myInput && myInput.value) {
  alert("My input has a value!");
}

let login = document
  .getElementById("email")
  .addEventListener("click", function emailvalidation(emailAddress) {
    let atSymbol = emailAddress.indexOf("@");
    let dotSymbol = emailAddress.lastIndexOf(".");
    let spaceSymbol = emailAddress.indexOf(" ");
    let input = document.getElementById("email").value;

    if (
      input.length > 0 &&
      atSymbol != -1 &&
      atSymbol != 0 &&
      dotSymbol != -1 &&
      dotSymbol != 0 &&
      dotSymbol > atSymbol + 1 &&
      emailAddress.length > dotSymbol + 1 &&
      spaceSymbol == -1
    ) {
      alert("Email je u ispravnom formatu");
      return true;
    } else {
      alert("Email je u neispravnom formatu");
    }
  });

let myyInput = document.getElementById("email");
if (myyInput && myyInput.value) {
  alert("email je unesen");
}
