//alert("hello from data processing!");

const queryString = window.location.search;

if(queryString.length > 0){

    const urlParams = new URLSearchParams(queryString);
    let myData = "";
    let myCart = ""; 
    let myTotal = 0;//will store total 

    /*

    Cart Contents
    Widget: $3.99
    Sprocket: $5.99
    Thingy: $1.99
    Total: $11.97

    */

    myCart += "<h3> Cart Contents<h3/>";
    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      }
    urlParams.forEach(function(value, key){

        if(key == "Cart"){//process cart
            //alert("Cart Item:" + value);
                
            switch(value){
                case "Widget":
                myCart += "Widget: $3.99<br>";
                myTotal += 3.99;
                break;

                case "Sprocket":
                myCart += "Sprocket: $5.99<br>";
                myTotal += 5.99;
                break;

                case "Thingy":
                myCart += "Thingy: $1.99<br>";
                myTotal += 1.99;
                break;
            }

        }else{//process shipping
            key = key.split("_").join(" ");
            if((key == "FirstName") || (key == "LastName") || (key == "city") || (key == "Address")){
                myData += `<p>${key}: ${toTitleCase(value)}</p>`;
            }else{
                myData += `<p>${key}: ${value}</p>`;  
            }
        }
    
        //console.log(key, value);
    });

    myCart += "Total: " + myTotal + '<br>';

    //We want the cart data first, then the shipping
    myData = myCart + myData;

    myData += `<p><a href="index.html">CLEAR<a></p>`    
    document.getElementById("output").innerHTML = myData;
}