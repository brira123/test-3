// write your JS code here
let a=0;
function add()
{
  let txtNumber = document.querySelector("#txtNumber");
  let newNumber = parseInt(txtNumber.value) + 1;
  txtNumber.value = newNumber;
  a+= 5.99;
  document.querySelector(".result").innerHTML=a.toFixed(2);
  
  
  console.log(a);
}

function subtract()
{
  let txtNumber = document.querySelector("#txtNumber");
  let newNumber = parseInt(txtNumber.value) - 1;
  if (parseInt(txtNumber.value) - 1 < 0) {
    document.querySelector("#txtNumber") = 0;
  }
  txtNumber.value = newNumber;
  a-= 5.99;
  document.querySelector(".result").innerHTML=a.toFixed(2);

}


