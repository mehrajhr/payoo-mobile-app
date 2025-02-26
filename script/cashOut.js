document.getElementById('cash-out').addEventListener('click', function(event) {
    event.preventDefault();
    const mobileNumber = document.getElementById('agent-number').value;
    const amount = document.getElementById("casOut-amount").value;
    const pin = document.getElementById('cashout-pin').value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(convertedAmount > 0 && pin && mobileNumber.length === 11){
        if(pin === '1234' ){
            if(convertedMainBalance >= convertedAmount){
                const sum = convertedMainBalance - convertedAmount;
                document.getElementById("main-balance").innerText = sum;
                alert("Succesfully Cash Out");
                document.getElementById("casOut-amount").value = '';
                document.getElementById("cashout-pin").value = '';
            }
            else{
                alert("You don't have enough balance");
            }
        }
        else{
            alert('Wrong password');
        }
    }
    else{
        alert("Something is wrong");
    }

})