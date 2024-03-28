// Fungsi untuk mengirim pesan WhatsApp
    function sendWhatsAppMessage() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("pesan").value;

        // Ganti nomor WhatsApp dengan nomor Anda
        var phoneNumber = "6281234567890";

        // Format pesan yang akan dikirim melalui WhatsApp
        var whatsappMessage = "Nama: " + name + "%0A" + "Email: " + email + "%0A" + "Pesan: " + message;

        // Redirect ke aplikasi WhatsApp dengan pesan yang sudah diformat
        window.location.href = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + whatsappMessage;
    }

    // Event listener untuk tombol Kirim
    document.getElementById("sendMessageBtn").addEventListener("click", function () {
        sendWhatsAppMessage();
    });