function checkInput(ob) {
    var invalidChars = /[^0-9]/gi;
    if(invalidChars.test(ob.value)) {
      ob.value = ob.value.replace(invalidChars,"");
    }
  }
