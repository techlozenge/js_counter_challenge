(function(){

      //code inside here will only run once the entire page is loaded
      window.onload = function() {

        //  when increment increase by 1
        //  when decrement increase by 1
        //  the counter should not go below zero
        //  when the counter is 0 then halt decrement
        // when the counter is == 10 it should be red

        // querySelector with CSS style selectors vs getElementbyID("ID")
        let increment_button = document.querySelector("#increment");
        let decrement_button = document.querySelector("#decrement");
        let counter = document.querySelector("#counter");

        // evt contains info about the click event e.g. screen position
        increment_button.addEventListener("click", function(evt){
          counter.innerHTML = parseInt(counter.innerHTML) + 1;
          if (counter.innerHTML >= 10) {
              counter.style.color = "red";
          }
        })

        // evt contains info about the click event e.g. screen position
        decrement_button.addEventListener("click", function(evt){
          if (counter.innerHTML != 0) {
              counter.innerHTML = parseInt(counter.innerHTML) - 1;
          }
          if (counter.innerHTML < 10) {
            counter.style.color = "black";
          }
        })
    }
})()
