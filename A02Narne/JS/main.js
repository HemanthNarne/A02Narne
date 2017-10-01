$(document).ready(function(){
    
        $("#submitbutton").click(function(){
            if($("#name").val() == "")
            {
                alert("Name or TaxID should not be Empty!!!")
            }
           
            if($("#Salary").val() == "")
            {
                alert("Salary should not be Empty!!!")
            }
            if($("#taxrate").val() == "")
            {
                alert("Tax rate should not be Empty!!!")
            }
           
            var sal=$("#Salary").val();
            var tax=$("#taxrate").val();
            var t;
            t=calc(sal,tax);
            
                    document.getElementById("totaltax").innerHTML +=t;
                    alert("Total tax value:"+t)
           
        })
    })

    function calc(sal,tax)
    {
        return (sal*tax)/100;
    }
    
    