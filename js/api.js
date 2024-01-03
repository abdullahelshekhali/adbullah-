

fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b237e9555d97410fb63da99fe7306f32")
.then((response) => response.json())
.then((currency) => {
    let myForm = document.querySelector("#myForm");
    let eurPrice = document.querySelector(".eur span");
    let sarPrice = document.querySelector(".sar span");
    let sypPrice = document.querySelector(".syp span");
    let tryPrice = document.querySelector(".try span");
    let btcPrice = document.querySelector(".btc span");
    let ethPrice = document.querySelector(".eth span");
    let dogePrice = document.querySelector(".doge span");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        let amount = document.querySelector(".amount").value;
        eurPrice.innerHTML =(amount * currency.rates["EUR"]) ;
        ethPrice.innerHTML =(amount * currency.rates["ETH"]);
        sarPrice.innerHTML =(amount * currency.rates["SAR"]);
        sypPrice.innerHTML =(amount * currency.rates["SYP"]);
        tryPrice.innerHTML =(amount * currency.rates["TRY"]);
        btcPrice.innerHTML =(amount * currency.rates["BTC"]);
        dogePrice.innerHTML =(amount * currency.rates["DOGE"]);

    });
});