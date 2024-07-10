const url = 'https://ronreiter-meme-generator.p.rapidapi.com/meme?font_size=50&top=Top%20Text&font=Impact&bottom=Bottom%20Text&meme=Condescending-Wonka';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'bfed652808msha0c0c74ee41f06ap1b77e0jsn406bfbd25757',
        'x-rapidapi-host': 'ronreiter-meme-generator.p.rapidapi.com'
    }
};

async function fetchMeme() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        // You can do something with the result here, e.g., display the meme image
        // document.getElementById('memeImage').src = result;
    } catch (error) {
        console.error(error);
    }
}

// Call the function to fetch the meme
fetchMeme();