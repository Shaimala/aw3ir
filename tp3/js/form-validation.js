$( document ).ready(
    function() {

    console.log( "DOM ready!" );
    
    $("#submit").click(function (event) {
       event.preventDefault();

       var adresse = $("#adresse").val();
       var date = checkbirthdate($("#date").val());
       if (($("#nom").val() && $("#prenom").val() && $("#date").val() && date && $("#adresse").val() && $("#mail").val()) != "") {

           $("#myModal").modal("show");
           $(".modal-title").text("Bienvenue " + $("#prenom").val());

           $(".modal-body").html(`Vous êtes nés le ${date} et vous habitez à l'adresse suivante :
           <br> <a class="link"  href="http://maps.google.com/maps?" > <br><img style="width:300px;" src="https://maps.googleapis.com/maps/api/staticmap?markers=${adresse}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> <br> ${adresse} </a>`);
        

       } else {

           $("#myModal").modal("show")
           $(".modal-body").html('Les champs que vous avez saisies sont invalides.');
           

       }
   });
   

});

function validateEmail(mail) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
}

function checkbirthdate(date){
    var m = new Date();
var dateString =
    m.getUTCFullYear() +
    ("0" + (m.getUTCMonth()+1)).slice(-2)+
    ("0" + m.getUTCDate()).slice(-2);
    date = date.replace("-","").replace("-","").trim();
    console.log(dateString + " " + date)
    if(dateString<date){
        return "";
    }else{ 
        return $("#date").val();
    }
 
}
