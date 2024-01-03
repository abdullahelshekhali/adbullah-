function sendMail(params){
    var temparams = {
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,
    };

    emailjs.send('service_6ri6qsf','template_p6srpdw',temparams)
    .then(function(res){
        alert("Message has been sent");
        console.log("success", res.status);
    })
}


