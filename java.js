// Fungsi untuk mengirim pesan WhatsApp
    // function sendMessage() {
    //     const name = document.getElementById("name").value;
    //     const email = document.getElementById("email").value;
    //     const Message = document.getElementById("Message").value;

    //     const url = "https://api.whatsapp.com/send?phone=6281228900185&text=%0Aassalamualaikum.%0A%0Anama%20saya%20* " +name+ " *%0Aemail%20*"+email+"*%0A%0A*"+Message+"*"
    //     window.open(url);
    // }


    function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("Message").value;

    const phoneNumber = "6281228900185"; // Nomor WhatsApp penerima
    const text = `Assalamualaikum.%0A%0ANama saya *${name}*%0AEmail *${email}*%0A%0A*${message}*`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url);
}


    