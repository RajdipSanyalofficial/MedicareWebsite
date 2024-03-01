







//counter design


document.addEventListener("DOMContentLoaded", () => {
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current=start,
        range=end-start,
        increment = end>start?1:-1,
        step=Math.abs(Math.floor(duration/range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current==end){
                clearInterval(timer);
            }
        }, step);
    }

    counter("count1",0,1295,3020);
    counter("count2",150,2000, 4015);
    counter("count3",0,1596,3000);
    counter("count4",0,2799,1900);

});

//counter design