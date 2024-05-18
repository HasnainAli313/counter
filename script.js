   // Getting elements
   const incrementBtn = document.getElementById("incrementBtn");
   const decrementBtn = document.getElementById("decrementBtn");
   const resetBtn = document.getElementById("resetBtn");
   const countDisplay = document.getElementById("count");

   let counter= 0;
   // increment function
   incrementBtn.onclick= function(){
      counter++;
       countDisplay.innerHTML = counter;
   }

   // Decrement function
   decrementBtn.onclick= function(){
       counter--;
       countDisplay.innerHTML = counter;
   }

//    Reset function
   resetBtn.onclick= function(){
    counter = 0;
    countDisplay.innerHTML = counter;
   }