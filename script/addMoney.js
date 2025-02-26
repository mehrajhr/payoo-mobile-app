document.getElementById("add-money").addEventListener('click',function (event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const pin = document.getElementById("pin").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const mobileNumber = document.getElementById('mobile-number').value;
    title.innerText = 'Add Money';
    if(convertedAmount && pin && mobileNumber.length === 11){
        if(pin === '1234'){
            const sum = convertedAmount + convertedMainBalance;
            document.getElementById("main-balance").innerText = sum;
            document.getElementById("amount").value = '';
            document.getElementById("pin").value = '';
            alert("Succesfully added balance");
        }
        else{
            alert("Enter valid pin");
        }
    }
    else{
        alert("Something is rong");
    }
})