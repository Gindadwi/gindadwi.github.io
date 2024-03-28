// Fungsi untuk mengirim pesan WhatsApp
    // function sendMessage() {
    //     const name = document.getElementById("name").value;
    //     const email = document.getElementById("email").value;
    //     const Message = document.getElementById("Message").value;

    //     const url = "https://api.whatsapp.com/send?phone=6281228900185&text=%0Aassalamualaikum.%0A%0Anama%20saya%20* " +name+ " *%0Aemail%20*"+email+"*%0A%0A*"+Message+"*"
    //     window.open(url);
    // }


function sendMessage() {
    const phoneNumber = "6281228900185"; // Nomor WhatsApp penerima
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("Message").value;

    // Format pesan sesuai dengan aturan WhatsApp
    const formattedMessage = encodeURIComponent(
        `Assalamualaikum.%0a 
        "Nama saya " +name+ 
        "AEmail" +email+
        +message+`
    );

    // Buat URL dengan nomor telepon dan pesan yang diformat
    const url = `https://wa.me/${phoneNumber}?text="nama:"${name} "message" ${message}`;

    // Buka URL untuk membuka aplikasi WhatsApp pada perangkat seluler
    window.open(url, "_blank");
}


    