const destinationURL = "file:///C:/Users/HP/Desktop/coursework/coursework/Student_1/Buy-products/BuyProducts.html";
// form
const btn = document.getElementById('btn');
const btn2 = document.getElementById('2btn');
 
 btn.addEventListener('click', () => {
   const form = document.getElementById('Addrece-form');
    // this OPENS the form
   if (form.style.display === 'none') {
     btn.innerHTML=("close");
     form.style.display = 'flex';
   } else {
     //  this HIDES the form
     btn.innerHTML=("Open");
     form.style.display = 'none';
 }
});
 btn2.addEventListener('click', () => {
   const form2 = document.getElementById('email-form');
   // this OPENS the form
   if (form2.style.display === 'none') {
    btn2.innerHTML=("close");
     form2.style.display = 'flex';
   } else {
     //  this HIDES the form
     btn2.innerHTML=("Open");
     form2.style.display = 'none';
 }
});

// Address
const Address1 = document.getElementById("Address1");
const Address2 = document.getElementById("Address2");
const Address3 = document.getElementById("Address3");
const TownCity = document.getElementById("Town-city");
const StateRegion = document.getElementById("state-region");
const ZIPCode = document.getElementById("ZIP-code");
const Country = document.getElementById("Country");
const btnsub = document.getElementById("submit-btn");
const output1 = document.getElementById("Biling-Address");

function displayOutput1(){
    output1.innerHTML = (Address1.value+" "+Address2.value+" "+ Address3.value+" "+ TownCity.value+" "+ StateRegion.value);
  }
  displayOutput1()


 // Email
 const email = document.getElementById("email");
 const submit = document.getElementById("submit");
 const output2 = document.getElementById("Email-Address");

 function displayOutput2(){
    output2.innerHTML = (email.value);
 }
 submit.addEventListener("click",displayOutput2);

 // Total amount from cart
  const total = localStorage.getItem("totale")
  document.getElementsByClassName('total-price')[0].innerText = '$' + total;

  // email
  const emailFist = localStorage.getItem("email")
  if (emailFist = undefined){
    email.value = ("Your Email")
  }else{
  email.value = (emailFist);
  }
  displayOutput2();

// Go back to shop after purchase
const endBtn =document.getElementById("final-submit-btn")
    endBtn.addEventListener('click', () => {
    alert("Thank you for your purchase")
    window.location.href = destinationURL;
  })
//Go back to shop after cancel
  const endBtnCan =document.getElementById("final-cancel-btn")
    endBtnCan.addEventListener('click', () => {
    window.location.href = destinationURL;
  })





  


