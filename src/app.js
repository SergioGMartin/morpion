$(()=>{
   initGride();
});


//JQUERY
//Seleccion de elemento
//const btnStartJQuery = $("#timerStart");
//const cellsJQuery = $(".case");

//Ajout de class
//btnStartJQuery.addClass("btn-warning");

//Ajout d'un évènement
//btnStartJQuery.bind("click", myFunc);
//btnStartJQuery.on("click", myFunc);
//btnStartJQuery.click(myFunc);
// const callback = (e) => {
//     const jqueryEtarget = $(e.target);
// }

//Enlever un évènement
//btnStartJQuery.off("click", myFunc);

//Modifier le text
//btnStartJQuery.text("Hello");
//btnStartJQuery.html("<i>Hello</i>");

//Detecter la fin de chargement du document
// $(()=>{
//     console.log("pagina cargada");
// });

//Parcourir des éléments
// const cells = $(".case");
// cells.each((index,htmlElement) => {
//     const jqueryElement = $(htmlElement);
//     jqueryElement.on("click", myFunc);
// })

//Convertir un élément html natif en élément jquery
// const htmlElement = document.querySelector(".case");
// const jqueryElement = $(htmlElement);

//Recuperer/Creer un atribute HTML
//jqueryElement.attr("id");
//jqueryElement.attr("id","nouvelle valeur");
//


//Creer un élément
//const container = $("<div></div>");
//

//Insertion
//$("body").append($('<div>').attr("id","foo").on("click",null));
//$("body").before


  //JavaScript Litereal Object Notation
  // const student = {
  //    firstname: "Juan",
  //    name: "Perez"
  // }

//const xhr = new XMLHttpRequest();
//Formuler une request
 // Spécifier Métode et URL
  //xhr.open("GET","https://api.jsonbin.io/b/60d32b9b5ed58625fd177079");
     // Métodes
     //    GET: Retrieve, Read
     //    POST: Create
     //    PUT: Update
     //    DELETE: Delete 
   
//  Spécifier Entêtes
  //xhr.setRequestHeader("X-Master-Key","$2b$10$z0QMf2on0AjH6WDOuGuwA.ScQWMAk1M7gAuVH.AxefamHgTmmphjW");

//  Spécifier Body et Envoyer la Requete
//  xhr.send();




 

//Analyser la response
// const xhr = new XMLHttpRequest();
// xhr.open("GET","https://api.jsonbin.io/b/60d32b9b5ed58625fd177079");
// xhr.setRequestHeader("secret-key","$2b$10$DrQLcmDPnd4qPExl/dCx8ea5xJ0b/IQDMinWHnIihmW7NNi9IPbOy");
// xhr.onload = () => {
//    console.log("J'ai la response");
//    let data = JSON.parse(xhr.response);
//    console.log(data);
//    spinner.remove();
//    main.append(`<div>
//    <h5>Score Player: ${data["scorePlayer"]}<br>Score CPU: ${data["scoreCPU"]}</h5>
//   </div>`);
// };

// xhr.send();
//console.log("Après send");