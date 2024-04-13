// Fungsi untuk mengirim pesan WhatsApp
function sendMessage() {
    const name = document.getElementById ("name").value;
    const email = document.getElementById("email").value;
    const Message = document.getElementById("Message").value;
 

    const url = "https://api.whatsapp.com/send?phone=6281228900185&text=%0Aassalamualaikum.%0A%0Anama%20saya%20 " + name + " %0Aemail%20*" + email + "*%0A%0A" + Message + ""

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
// $(document).ready(function () {
//     $('#btnCardFrontend').click(function () {
//         // Memeriksa apakah ada input yang kosong
//          swal('', 'Maaf Untuk Project Front end masih dalam tahap pembuatan, untuk contoh bisa di lihat web portofolio ini ', 'warning'); // Menampilkan peringatan menggunakan sweetalert
//         return false; // Menghentikan pengiriman form jika ada input yang kosong
       
//     });
// });
$(document).ready(function () {
    $('#btnFotografi').click(function () {
        // Memeriksa apakah ada input yang kosong
         swal('', 'Untuk saat ini link hasil foto belum saya cantum kan ', 'warning'); // Menampilkan peringatan menggunakan sweetalert
        return false; // Menghentikan pengiriman form jika ada input yang kosong
       
    });
});
$(document).ready(function () {
    $('#btnCardVideo').click(function () {
        // Memeriksa apakah ada input yang kosong
         swal('', 'Untuk saat ini link hasil video belum saya cantumkan, kalau tidak keberatan bisa di lihat di akun tik tok saya di bagian footer ada beberapa sempel hasil karya video saya', 'warning'); // Menampilkan peringatan menggunakan sweetalert
        return false; // Menghentikan pengiriman form jika ada input yang kosong
       
    });
});





