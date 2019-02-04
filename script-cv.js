window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

deplacement = (window.scrollY/(document.body.offsetHeight-window.innerHeight))*100; // Calculez le déplacement ici ...

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour 
                                                             //qu'elle corresponde au déplacement du scroll
															 
console.log(deplacement);															 
															 
});
