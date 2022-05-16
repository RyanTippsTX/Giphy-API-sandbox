const apiKey = '8HMCCWtfBGe0WqkJFZ6nKWT6xJhaXqrD';

const img = document.querySelector('img');
const input = document.getElementById('searchText');
input.value = 'cats';

function renderNewGIF() {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${input.value}`;
  fetch(url, {
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.data.images.original.url);
      img.src = json.data.images.original.url;
    });
}

// initial
renderNewGIF();

// subsequent
document.getElementById('reloadButton').addEventListener('click', renderNewGIF);
