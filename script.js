    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var result = document.getElementById("result").value;
    var year = new Date().getFullYear()+parseInt(years);
    document.addEventListener("DOMContentLoaded", funtion() {
        document.querySelector("#rate").onchange = function()
        {
             var rateval = document.getElementById("rate").value;
             document.getElementById("rate_val").innerText=rateval;
        }
    });
    document.addEventListener("DOMContentLoaded", funtion() {
        document.querySelector("#result").onclick = function(){
            document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
        }
    });
    

        
