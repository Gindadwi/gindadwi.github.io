// Fungsi untuk mengirim pesan WhatsApp
function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const Message = document.getElementById("Message").value;
 

    const url = "https://api.whatsapp.com/send?phone=6281228900185&text=%0Aassalamualaikum.%0A%0Anama%20saya%20* " + name + " *%0Aemail%20*" + email + "*%0A%0A*" + Message + "*"

    window.open(url, "_blank");
}


$(document).ready(function () {
    $('#sendMessageBtn').click(function () {
        // Memeriksa apakah ada input yang kosong
        if ($('#name').val().trim() === '' || $('#email').val().trim() === '' || $('#Message').val().trim() === '') {
            swal('', 'Mohon lengkapi semua form', 'warning'); // Menampilkan peringatan menggunakan sweetalert
            return false; // Menghentikan pengiriman form jika ada input yang kosong
        }
    });
});
$(document).ready(function () {
    $('#DownloadCV').click(function () {
        // Memeriksa apakah ada input yang kosong
         swal('', 'Maaf Link CV Belum Saya cantumkan', 'warning'); // Menampilkan peringatan menggunakan sweetalert
        return false; // Menghentikan pengiriman form jika ada input yang kosong
       
    });
});





