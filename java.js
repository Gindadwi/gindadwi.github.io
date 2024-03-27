function sendWhatsAppMessage() {
            var name = document.getElementById('name').value;
            var message = document.getElementById('message').value;
            var phoneNumber = '6281228900185'; // Ganti dengan nomor WhatsApp Anda

            var whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent('Nama: ' + name + '\n\nPesan: ' + message);
            window.open(whatsappURL, '_blank');
        }