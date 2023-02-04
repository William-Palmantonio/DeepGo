

//get elements from DOM
const  menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const counters = document.querySelectorAll(".counter");


menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
});

//Select all counters
counters.forEach(counter => { 
    //set counters values to zero
    counters.innerText = 0;
    /*set count varible to
    track the count */
    let count = 0;

    //update count function
    function updateCount() {

        //get counter target number to count to

        const target = parserInt(counter.dataset.count);

        //as long as the count is below the target number

        if(count < target) {

            //increment the count by 10

            count += 10;

            counter.innerText = count + "+";
            setTimeout(updateCount, 10); /*CountSpeed*/
            //And when the target is reached
        } else {

            counter.innerText = target + "+";
        }
    }


    //run the function initialy
    updateCount();
})



