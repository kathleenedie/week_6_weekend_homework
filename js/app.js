document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const form = document.querySelector('#input-form');
    form.addEventListener('submit', handleFormSubmit);    

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAll);

  })

const handleFormSubmit = function(event){
    event.preventDefault();

    console.log(event.target.genre.value);

    const newListItem = createListItem(event.target);
    const musicList = document.querySelector('#music-list');
    musicList.appendChild(newListItem);

    event.target.reset();
}

const createListItem = function (form) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('#music-list-entry');

    const artist = document.createElement('h4');
    artist.textContent = form.artist.value;
    newListItem.appendChild(artist);

    const album = document.createElement('p');
    album.textContent = form.album.value;
    newListItem.appendChild(album);

    const year = document.createElement('p');
    year.textContent = form.year.value;
    newListItem.appendChild(year);
    
    const genre = document.createElement('h5');
    genre.textContent = form.genre.value;
        // for(i = 0; i < genre.length; i++) {
        //     if (genre[i].checked)
    newListItem.appendChild(genre);

    return newListItem;
}

const handleDeleteAll = function(event){
    event.preventDefault();

    const list = document.getElementById('music-list').remove();
}