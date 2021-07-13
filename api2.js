let apiKey = 'HSE3pBqCAWnOSuP0CYEoa5mPSWWHasKN'

let baseUrl = 'https://api.giphy.com/v1/gifs/search';
const section = document.getElementById('displayGifs');

let queryParameter = 'cats'
function displayResults() {
    let Url = `${baseUrl}?q=${queryParameter}&api_key=${apiKey}`
    console.log(Url)
    fetch(Url,{
        method: "GET"
    }) 
    .then(response => response.json())
    .then(json => display(json))
}

displayResults()

function display(jsonData) {
    console.log(jsonData.data);

    jsonData.data.forEach(gif => {
        console.log(gif);

        let title = document.createElement('p');
        title.innerText = gif.title;

        let rating = document.createElement('p')
        rating.innerText = gif.rating;
        
        let image = document.createElement('img')
        image.src = gif.images.original.url;
        // image.style = 'height: 50px; width: 50px'
        image.className = 'gif'
        
        section.appendChild(title)
        section.appendChild(rating)
        section.appendChild(image)

    })

    
}