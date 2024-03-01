const ABC = document.querySelector("abcd");
const result= document.getElementById("result1");



ABC.addEventListener("input",function(e){
    const target = e.target;
    const maxLength=target.getAttribute("maxlength");
    const currentlength=target.value.length;
    result.innerHTML='${currentLength}/${maxLength}';

    /*
    result.textContent = textLength + "/" + limit;

    if(textLength>limit)
    {
        ABCD.style.borderColor = "#ff2851";
        result.style.bordercolor="#ff2851";
    }

    else
    {
        ABCD.style.borderColor = "#b2b2b2";
        result.style.bordercolor="#737373";

        
    }
    */
});








