


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
    document.getElementById("btn2").addEventListener("click", insert_value);
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
        "First Name" : fname,
        "Last Name":lname,
        "Phone": phone,
        "Email": email,
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
                body: JSON.stringify(info)
            })
            // .then(res => res.status)
            // .then(d=> d.json())
            .then(d=> {
                console.log(d);
                });


                // success: function() {
                    $('#contactForm :input').attr('disabled', 'disabled');
                    $('#contactForm').fadeTo( "slow", 1, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn()
                        $('.modal').modal('hide');
                        $('#success').modal('show');
                    })
                // }
                // error: function() {
                //     $('#contactForm').fadeTo( "slow", 1, function() {
                //         $('#error').fadeIn()
                //         $('.modal').modal('hide');
                //         $('#error').modal('show');
                //     })
                // }

                var link = document.createElement("a");
                // If you don't know the name or want to use
                // the webserver default set name = ''
                link.setAttribute('download', name = "pdf");
                link.href = "./PDF.pdf";
                // document.body.appendChild(link);
                link.click();
                link.remove();
                
    }


    }
