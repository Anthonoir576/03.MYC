// Formulaire 

let validation = document.getElementById('valid-formulaire');

validation.addEventListener('input', function(event) {

    event.preventDefault();
    event.stopPropagation();
    validation.window.confirm('confirmer l\'envoi du message ?');
    

});
// confirmation de validation a revoir 
// si il confirme ca donne true, sinon false


