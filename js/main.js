


    // 

    // fetch(script_url, { 
    //     method: 'POST',
    //     mode: 'no-cors',
    //     cache: 'no-cache',
    //     headers: {
    //         'Content-Type' : 'application/json'
    //     },
    //     redirect: 'follow',
    //     body:JSON.stringify(info)
    // })
    // .then(res => res.json())
    // .then(res => {
    //     console.log(res);  
    // })

    // var url = script_url +"?callback=ctrlq&fname=" +fname+"&email="+  email + "&lname=" +lname+"&phone=" + phone;
    // var request = jQuery.ajax({ 
    //     crossDomain: true,
    //     url: url,
    //     method: "GET",
    //     dataType:'jsonp'
    // });

    window.onload=function(){
    const url = "https://script.google.com/macros/s/AKfycbyC2HdYr6qcvDvMEkccFsMSmKlXsowHsu6YuEVslP5WPmS6-2Ls/exec";

    document.getElementById("btn").addEventListener("click", insert_value);
    function get_value(){
    fetch(url)
            .then(d=> d.json())
            .then(d=> {
                document.getElementById("app").textContent= d[0].status;
                });
    }

    function insert_value(){
    var fname =document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    
    var info ={
        First : fname,
        Last :lname,
        Phone: phone,
        Email: email,
    };

    console.log(info);

        fetch(url, { 
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type' : 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify({First : fname,
                    Last :lname,
                    Phone: phone,
                    Email: email})
            })
            // .then(res => res.status)
            // .then(d=> d.json())
            .then(d=> {
                document.getElementById("app").textContent= d[0].status;
                });

      
        
    }


    }
