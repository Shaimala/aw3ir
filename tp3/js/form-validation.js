document.addEventListener("DOMContentLoaded", function (event) {

    console.log("DOM ready !")

    event.preventDefault();
    document.getElementById("submit").onclick = function (event) {
        event.preventDefault();
        console.log("oui")

        var myModal = new bootstrap.Modal(document.getElementById('myModal'), focus)
        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;
        var mail = document.getElementById("mail").value;
        var adresse = document.getElementById("adresse").value;
        var date = checkbirthdate(document.getElementById("date").value);
        const img = `<img style ='width:300px;'src = 'https://maps.googleapis.com/maps/api/staticmap?markers=${adresse}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg'/>`;
        console.log("non");
        if ((nom && prenom && date && adresse && mail) != "") {
            console.log("if true")
            myModal.show();
            document.getElementById("modal-title").innerHTML = "Bienvenue " + prenom;

            document.getElementById("modal-body").innerHTML = `Vous êtes nés le ${date} et vous habitez à l 'adresse suivante : <br> <a class='link' href='http://maps.google.com/maps?'> <br> ${img} <br> ${adresse} </a>`;
            document.getElementById("btn-close").onclick = function closeModal() {
                console.log("closing")
                myModal.hide();
            }}
         else {
            console.log("if false")
            myModal.show();
            document.getElementById("modal-body").innerHTML = "Les champs que vous avez saisies sont invalides.";
            document.getElementById("btn-close").onclick = function closeModal() {
                console.log("closing")
                myModal.hide();
            }
        }
    };


    function validateEmail(mail) {
        const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail).toLowerCase());
    }

    function checkbirthdate(date) {
        var m = new Date();
        var dateString =
            m.getUTCFullYear() +
            ("0" + (m.getUTCMonth() + 1)).slice(-2) +
            ("0" + m.getUTCDate()).slice(-2);
        date = date.replace("-", "").replace("-", "").trim();
        console.log(dateString + " " + date)
        if (dateString < date) {
            return "";
        } else {
            return document.getElementById("date").value;
        }
    }

    
})
