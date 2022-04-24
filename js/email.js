
 const enviar  =  document.querySelector('#enviar');
 const formulario  = document.querySelector('#formulario');

 enviar.addEventListener('click',function(e){
     e.preventDefault();
     sendEmail();
 })


 function sendEmail(params) {
    let tempParams = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        celular: document.getElementById("celular").value,
        asunto: document.getElementById("asunto").value,
        mensaje: document.getElementById("mensaje").value,
    };

    emailjs.send('service_ur9bk0c','template_exil4w9',tempParams)
     .then(function(res){
        swal("¡El mensaje se envio correctamente!", "Recuerda que protegemos tus datos", "success");
        formulario.reset();
     })
    
}


