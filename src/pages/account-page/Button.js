import React from 'react';

function Button() {

  function validateInputs() {
    var x1 = document.getElementById("Charity1").value;
    var x2 = document.getElementById("Charity2").value;
    var x3 = document.getElementById("Charity3").value;
    var x4 = document.getElementById("Charity4").value;
    var x5 = document.getElementById("Charity5").value;
    var total = parseInt(x1) + parseInt(x2) + parseInt(x3) + parseInt(x4) + parseInt(x5);
    if (total != 100) {
      alert("The total percentage must be 100%! Your total is " + total + "%.");
    }
    else{
        alert("Your preferences have been saved!");
    }
  }
  
  return (
    <button onClick={validateInputs}>
      Submit
    </button>
  );
}

export default Button;