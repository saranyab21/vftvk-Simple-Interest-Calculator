function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear();
    var result_years = parseInt(years)+year;
    if (principal <= 0) {
        alert("ENTER POSITIVE NUMBER")
    } else {
        document.getElementById("principal").focus()
        document.getElementById("result").innerHTML="If you deposit <p>"+principal+"</p>,\<br\>at an interest rate of <p> "+rate+"</p>%\<br\>You will receive an amount of <p> "+interest+"</p>,\<br\>in the year <p>"+result_years+"</p>\<br\>"
    }
    
}

function updateRate(rate) 
{
    document.getElementById("rate_val").innerText=rate;
}

        
