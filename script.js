let selectedOrder = "";

function order(item){
  selectedOrder += item + ", ";
  document.getElementById("orderSummary").textContent =
    "Your order: " + selectedOrder;
  document.getElementById("orderInput").value = selectedOrder;
  alert("Added: " + item + "\nYour order: " + selectedOrder);
}

function book(){
  const name = document.getElementById("nameInput").value.trim();
  const phone = document.getElementById("phoneInput").value.trim();
  const date = document.getElementById("dateInput").value;
  const time = document.getElementById("timeInput").value;
  const orderText = document.getElementById("orderInput").value.trim() || selectedOrder;

  if(!name || !phone){
    alert("Please enter your name and phone number before booking.");
    return;
  }

  const message =
    "Hello The Bubble Hub Melkbos 👋%0A%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Date: " + date + "%0A" +
    "Time: " + time + "%0A" +
    "Order: " + orderText + "%0A%0A" +
    "I want to book a visit.";

  // South Africa country code 27, leading 0 dropped
  window.open(
    "https://wa.me/27734449407?text=" + message,
    "_blank"
  );
}

// floating bubble animation
const bubbleBox = document.querySelector(".bubbles");
if(bubbleBox){
  for(let i=0;i<25;i++){
    let bubble = document.createElement("span");
    bubble.style.left = Math.random()*100+"%";
    bubble.style.animationDuration = (3+Math.random()*5)+"s";
    bubble.style.animationDelay = (Math.random()*5)+"s";
    bubbleBox.appendChild(bubble);
  }
}
