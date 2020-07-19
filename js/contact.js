$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                fname: {
                    required: true,
                    minlength: 2
                },
                lname: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 10,
                    tel:true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                fname: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                lname: {
                    required: "don't forget to mention your last name!",
                    minlength: "your last name must consist of at least 2 characters"
                },
                phone: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 10 characters"
                },
                email: {
                    required: "no email, no pdf!"
                }
            },
            submitHandler: function() {
                // $(form).ajaxSubmit({
                //     type:"POST",
                //     data: $(form).serialize(),
                //     url:"contact_process.php",
                //     success: function() {
                //         $('#contactForm :input').attr('disabled', 'disabled');
                //         $('#contactForm').fadeTo( "slow", 1, function() {
                //             $(this).find(':input').attr('disabled', 'disabled');
                //             $(this).find('label').css('cursor','default');
                //             $('#success').fadeIn()
                //             $('.modal').modal('hide');
		        //         	$('#success').modal('show');
                //         })
                //     },
                //     error: function() {
                //         $('#contactForm').fadeTo( "slow", 1, function() {
                //             $('#error').fadeIn()
                //             $('.modal').modal('hide');
		        //         	$('#error').modal('show');
                //         })
                //     }
                // })

                const url = "https://script.google.com/macros/s/AKfycbyC2HdYr6qcvDvMEkccFsMSmKlXsowHsu6YuEVslP5WPmS6-2Ls/exec";

                // document.getElementById("btn").addEventListener("click", insert_value);
                // function get_value(){
                // fetch(url)
                //         .then(d=> d.json())
                //         .then(d=> {
                //             document.getElementById("app").textContent= d[0].status;
                //             });
                // }
            
                // function insert_value(){
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
            
                  
                    
                }
            }
        })
    })
        
 })(jQuery)
})