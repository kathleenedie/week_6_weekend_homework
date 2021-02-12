document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const form = document.querySelector('#input-form');
    form.addEventListener('submit', handleFormSubmit);    

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAll);

  })

  const handleFormSubmit = function(event){
    event.preventDefault();
    console.log(event.target.year.value);
    const newListItem = document.createElement('li');
    newListItem.textContent = `${event.target.artist.value} ${event.target.album.value} ${event.target.year.value}`;
    
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
  
    document.getElementById('input-form').reset();

  }

  const handleDeleteAll = function(event){
    event.preventDefault();
  
    const list = document.getElementById('music-list').remove();
    
  }