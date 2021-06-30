
function _load() {

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const date = document.querySelector('#date');
    const num = document.querySelector('#num');
    
    /*
    const nameLabel = document.querySelector('[for="name"]');
    const emailLabel = document.querySelector('[for="email"]');
    const dateLabel = document.querySelector('[for="date"]');
    const numLabel = document.querySelector('[for="num"]');
    */
    
    const inputs = document.querySelectorAll('.col input');
    
    for(const inp of inputs){
        inp.required = true;
    }

   
    email.addEventListener('blur', function (){
        const wrong=document.getElementById("wrong-format-msg");

        if(email.validity.valid===false){
            //console.log("Nem valid")
            wrong.textContent="Wrong email format";
            btn.disabled = "true";
        } else {
            //console.log("Valid")
            wrong.textContent="";
            btn.enabled = "true";
        }
    
    });

    let b_time = new Date(Date.now() + 120 *60000);
    date.min = b_time.toISOString().substr(0, 16);    

    const btn = document.querySelector('input[type="button"]');
    
    date.addEventListener('blur', function (){
        b_time = new Date(Date.now() + 120 *60000);
        date.min = b_time.toISOString().substr(0, 16);
        
        let inpDate = new Date(date.value);
        let currDate = new Date();

        if (inpDate<currDate) { 
           console.log("korai időpont");
           date.style.color = "red";
           btn.disabled = "true";
        }  
        else { 
        //    console.log("ok");
           date.style.color = "black";
           btn.enabled = "true";
        }         
    });
    
    

    btn.addEventListener("click", function () {
        for(const ip of inputs){
            console.log(ip.value);
        }
    });

}

window.addEventListener('load', _load);