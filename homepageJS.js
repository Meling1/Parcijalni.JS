function isVeci(prvi, drugi) {
    if (!isNumber(prvi)) {
      return getreturnObject(true, `Prvi broj '${prvi}' nije broj`);
    }
    if (!isNumber(drugi))
      getreturnObject(true, `Drugi broj '${drugi}' nije broj`);
  
    if (prvi === drugi) return getreturnObject(false, `Oba su broja jednaka`); //"Oba su broja jednaka";
    if (prvi > drugi) {
      return getreturnObject(false, `Prvi broj je veći od drugog`);
    } else {
      return getreturnObject(false, `Drugi broj je veći od drugog`);
    }
  }
  
  function getreturnObject(greska, poruka) {
    return { isGreska: greska, mesage: poruka };
  }


  function isNumber(val) {
    // negative or positive
    return /^[-]?\d+$/.test(val);
  }
  
  var date = new Date().getFullYear();

document.getElementById("copyRight").innerHTML = "&copy; " + date;