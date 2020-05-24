const modelClass = document.querySelector('.model');
const result = document.getElementById('result');

function calculateTip() {
  let billAmount = document.getElementById("billamount").value;
  let serviceRating = document.getElementById("serviceRating").value;
  let amountOfPeople = document.getElementById("peopleAmount").value;
  try {
    if (billAmount == "") throw "Insert in the bill amount please !!!";
    if (isNaN(billAmount)) throw "Insert any number for bill amount";
    billAmount = Number(billAmount);
    if (billAmount <= 0) throw "Insert a number greater then Zero";

    if (serviceRating == 0) throw "Rate the service";
    serviceRating = Number(serviceRating);

    if (amountOfPeople == "") throw "Insert no. of people fields";
    if (isNaN(amountOfPeople)) throw "Please insert any number for the amount of people";
    amountOfPeople = Number(amountOfPeople);
    if (amountOfPeople <= 0) throw "Insert a number greater then zero for the number of people!!!";
    if (Math.floor(amountOfPeople) !== amountOfPeople) throw "Insert an integer number for the amount of people!!!";
    const total = ((billAmount * serviceRating) / amountOfPeople).toFixed(2);

    (amountOfPeople === 1) ? document.getElementById("eachPerson").style.display = "none" : document.getElementById("eachPerson").style.display = "block";

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

  }
  catch (errorMessage) {
    modelClass.style.display = 'block';
    result.innerHTML = `
    <h2>Information</h2>
    <hr>
    <p>${errorMessage}</p>
  `;
    setTimeout(function () { modelClass.style.display = 'none'; }, 2000);
  }
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("eachPerson").style.display = "none";

document.getElementById("calculate").addEventListener('click', function () {
  calculateTip()
});
