function validation() {

  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;

  document.getElementById("error").innerHTML = "";

  var listItemError = [];

  for (let item of document.querySelectorAll('.inputAW')) {


    if (item.value.length < 5) {
      listItemError.push(item.name);
      console.log(listItemError)
    }

    // if((adresse.value.length) < 5){



    //   document.getElementById("error").innerHTML += `La saisie de l'adresse est obligatoire <br/>`;
    //   document.getElementById("error").classList.add("display");
    //   document.getElementById("resultat").classList.remove("display")

    // }
    // if((date.value.length) < 5){



    //   document.getElementById("error").innerHTML += `La saisie de la de Date est obligatoire <br/>`;
    //   document.getElementById("error").classList.add("display");
    //   document.getElementById("resultat").classList.remove("display")

    // }
    // if((nom.value.length) < 5){



    //   document.getElementById("error").innerHTML += `La saisie du Nom est obligatoire <br/>`;
    //   document.getElementById("error").classList.add("display");
    //   document.getElementById("resultat").classList.remove("display")

    // }
    // if((prenom.value.length) < 5){



    //   document.getElementById("error").innerHTML += `La saisie Prénom est obligatoire <br/>`;
    //   document.getElementById("error").classList.add("display");
    //   document.getElementById("resultat").classList.remove("display")

    // }

    if (item.name == 'mail' && validateEmail(item.value) == false) {
      document.getElementById("error").innerHTML += `La saisie du Mail est dans le mauvais format<br/>`;
      document.getElementById("error").classList.add("display");
      document.getElementById("resultat").classList.remove("display")
    }

  }

  if (listItemError.length > 0) {
    document.getElementById("error").innerHTML += `Ces champs doivent avoir au moins 5 caractères`;
    document.getElementById("error").innerHTML += `<ul>`;

    for (let itemError of listItemError) {
      document.getElementById("error").innerHTML += `<li>${itemError}</li>`;

    }
    document.getElementById("error").innerHTML += `</ul>`;

  }


  if (document.getElementById("error").innerHTML == "") {
    var nom = document.querySelector("#nom").value;
    document.getElementById("resultat").innerHTML = `Bienvenue à ${prenom} ${nom}`;
    document.getElementById("error").classList.remove("display")
    document.getElementById("resultat").classList.add("display")
  }

}
function validateEmail(mail) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
}
