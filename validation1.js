function validate12()
{
    var xyz=/^[A-Za-z]+$/;
    var email="abc@gmail.com";
    var y1=document.getElementById("validationCustom02").value;
    var y2=document.getElementById("validationCustom03").value;
    var y3=document.getElementById("validationCustom04").value;
    var y4=document.getElementById("validationCustom05").value;
    var y5=document.getElementById("validationCustom06").value;
    var y6=document.getElementById("validationCustom07").value;

    var y7=document.getElementById("validationCustom08").value;
    var y8=document.getElementById("validationCustom09").value;
    var y9=document.getElementById("validationCustom10").value;
    var y10=document.getElementById("validationCustom11").value;
    var y11=document.getElementById("validationCustom12").value;
    var y12=document.getElementById("validationCustom13").value;
    var y100=document.getElementById("validationCustom1000").value;


    if(y1==""||y2==""||y3==""||y4==""||y5==""||y6==""||y8==""||y9==""||y11==""||y12=="")
    {
        alert("All fields are mandatory");
        return false;
    }
    else if(y9<10 || y9>10)
    {
        alert("Number should be of 10 digits! Please enter valid number");
        return false;
    }
    else if(y11<12||y11>12||isNaN(y11))
    {
        alert("Aadhar Number should be of 12 digits! Please enter valid aadhar number");
        return false;
    }
    else if(y12<10||y12>10||isNaN(y12))
    {
        alert("Pan Number should be of 12 digits! Please enter valid Pan number");
        return false;
    }
    else if(y9<10||y9>10||isNaN(y9))
    {
        alert("Number should be of 10 digits! Please enter valid number");
        return false;
    }
    else if(y10<10||y10>10||isNaN(y10))
    {
        alert("Number should be of 10 digits! Please enter valid number");
        return false;
    }
    else if(y8<6||y8>6||isNaN(y8))
    {
        alert("Pin code should be of 10 digits! Please enter valid pin code");
        return false;
    }
    else if(y5.match(xyz))
    {
        alert("Only characters are allowed! Fill the form carefully");
        return false;
    }
    else if(y6.match(xyz))
    {
        alert("Only characters are allowed! Fill the form carefully");
        return false;
    }
    else if(y1.match(xyz))
    {
        alert("Only characters are allowed! Fill the form carefully");
        return false;
    }
    else if(y3.match(xyz))
    {
        alert("Only characters are allowed! Fill the form carefully");
        return false;
    }
    else if(y100.match(xyz))
    {
        alert("Only characters are allowed! Fill the form carefully");
        return false;
    }
    else
    {
        return true;
    }
}