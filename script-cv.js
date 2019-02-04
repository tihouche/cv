window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

var deplacement;

deplacement = (window.scrollY/(document.body.offsetHeight-window.innerHeight))*100; // Calculez le déplacement ici ...

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour 
                                                             //qu'elle corresponde au déplacement du scroll
});

//window.scrollY // Valeur du scroll en pixel
//document.body.offsetHeight // Hauteur totale de la page en pixel
//window.innerHeight // Hauteur de l'écran en pixel

console.log(deplacement); // Affiche le contenu de la variable maVariable dans la console du navigateur
