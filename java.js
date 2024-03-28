
// direct wa
    function sendMessage() {
        var phonenumber = "+6281228900185"
        var name = document.querySelector("name").value;
        var email = document.querySelector("email").value;
        var Message = document.querySelector("Message").value;

       var url = "https://wa.link.me/" + phonenumber + "?text="
       +"Name: "  +name+ "%0a"
       +"Email: " +email+ "%0a"
       +"Message: " +Message+ "%0a%0a"

       window.open(url, '_blank').focus();
    }






    