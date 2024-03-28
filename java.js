function sendMessage() {
    var phonenumber = "6281228900185";
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("Message").value;

    var url = "https://api.whatsapp.com/send?phone=" + phonenumber + "&text=Assalamualaikum.%0A%0ANama:%20" + encodeURIComponent(name) + "%0AEmail:%20" + encodeURIComponent(email) + "%0A%0A" + encodeURIComponent(message);

    window.open(url, '_blank');
}
