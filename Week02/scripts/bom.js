const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#chapterList');

button.addEventListener('click', () => {
        if (input.value.trim() === '') {
            alert('Veuillez entrer un chapitre valide.');
            return;
        }
        // Créer l'élément <li>
        const li = document.createElement('li');
        li.textContent = input.value; 

        // Créer le bouton "❌"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        // Ajouter un événement pour supprimer l'élément
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        // Ajouter le bouton à l'élément <li>
        li.appendChild(deleteButton);

        // Ajouter l'élément <li> à la liste
        list.appendChild(li);

        // Réinitialiser l'input
        input.value = '';
        input.focus();
    });