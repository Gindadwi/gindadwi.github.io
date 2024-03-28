// Fungsi untuk mengirim pesan WhatsApp
    // function sendMessage() {
    //     const name = document.getElementById("name").value;
    //     const email = document.getElementById("email").value;
    //     const Message = document.getElementById("Message").value;

    //     const url = "https://api.whatsapp.com/send?phone=6281228900185&text=%0Aassalamualaikum.%0A%0Anama%20saya%20* " +name+ " *%0Aemail%20*"+email+"*%0A%0A*"+Message+"*"
    //     window.open(url);
    // }


function sendMessage() {
    const phoneNumber = "62895326598832"; // Nomor WhatsApp penerima
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("Message").value;

    // Format pesan sesuai dengan aturan WhatsApp
    const formattedMessage = encodeURIComponent(
        `https://api.whatsapp.com/send?phone=+6281228900185&text=Assalamualaikum%0A%0ANama%20saya%20*+name+*%0AEmail%20%3A%20*+email+*%0A%0A*+message+*`
    );

    // Buat URL dengan nomor telepon dan pesan yang diformat
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${formattedMessage}`;

    // Buka URL untuk membuka aplikasi WhatsApp pada perangkat seluler
    window.open(url, "_blank");
}


    