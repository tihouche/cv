window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

 deplacement = (window.scrollY/(document.body.offsetHeight-window.innerHeight))*100; // Calculez le déplacement ici ...

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour 
                                                             //qu'elle corresponde au déplacement du scroll
															 
console.log(deplacement);															 
															 
});

function myScroll() { // Définition de la fonction de scroll
     progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
          progress=progress*(document.body.offsetHeight-window.innerHeight)/100;
   // Calculez ici la valeur de déplacement à efectuer lors du scroll
    
    window.scroll(0, progress); // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
}
