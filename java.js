
    function sendMessage() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const Message = document.getElementById("Message").value;

        const url = "https://api.whatsapp.com/send?phone=6281228900185&text=%0Aassalamualaikum.%0A%0Anama%20saya%20* " +name+ " *%0Aemail%20*"+email+"*%0A%0A*"+Message+"*"
        window.open(url);
    }






    