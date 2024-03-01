/* form validation for profile.html page */

function validated()
{

var x= document.getElementById("validationCustom01").value;
var y= document.getElementById("validationCustom02").value;


if(x==""|| y=="")
{
    alert("All fields are mandatory");
    return false;
}

else if (y.length<5)
{
    alert("Maximum length of password is 5 digit");
}

else{
    return true;
}


}

/* form validation for profile.html page */




/* form validation for signin.html page */

function validated1()
{

var a1=document.getElementById("exampleInputEmail1").value;

var a2=document.getElementById("exampleInputPassword1").value;

var a3=document.getElementById("exampleInputPassword2").value;





    if(a1=="" || a2=="" || a3=="")
    {
        alert("All fields are mandatory");
        return false;
    }

    else if(exampleInputPassword1.length<5)
    {
        alert("Your password is very weak.Create a strong password");
        return false;

    }

    else if(exampleInputPassword1!= exampleInputPassword2)
    {
        alert("Please enter same password");
        return false;
    }

    else{
        return true;
    }

}

/* form validation for signin.html page */


/* form validation for Createaccount.html page */






/* form validation for Createaccount.html page */


/* form validation for service.html page */


function validated3()
{
    
    var b2 = document.getElementById("validationCustom02").value;
    var b3 = document.getElementById("validationCustom03").value;

    var b4 = document.getElementById("validationCustom04").value;
    var b5 = document.getElementById("validationCustom05").value;
    var b6 = document.getElementById("validationCustom06").value;
    
    
    
    
    var b11=document.getElementById("ChooseDepartment");





    if(b2==""|| b3==""|| b4==""|| b5==""|| b6=="" ||  b8=="")
    {
        alert("All fields are mandatory");
        return false;
    }
    else{
        return true;
    }
}



/* form validation for service.html page */












/* form validation for contactus.html page */


function validated5()
{
    var d1 = document.getElementById("exampleInputEmail1").value;
    var d2 = document.getElementById("exampleInputPassword1").value;
    var d3 = document.getElementById("exampleInputPhonenumber2").value;
    var d4 = document.getElementById("floatingTextarea3").value;

    if(d1=="" || d2=="" || d3=="" || d4=="")
    {
        alert("All fields are mandatory");
        return false;
    }
    else if(d2.length<5)
    {
        alert("Maximum length of password is 5 digit");
        return false;
    }
    else if(d3<10 || d3>10)
    {
        alert("Number should be of 10 digits! Please enter valid number");
        return false;
    }
    else if(isNaN(d3))
    {
        alert("Only numbers are aloowed! Please enter valid number");
        return false;
    }
    else{
        return true;
    }

}


/* form validation for contactus.html page */



























