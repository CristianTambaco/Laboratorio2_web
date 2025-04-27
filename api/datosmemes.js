


const obtenerMemes = async () => {

    const memesContainers = document.getElementById('list-memes');
    const memeTemplate = document.getElementById('meme'); 


    const request = await fetch("https://api.imgflip.com/get_memes"); 
    const respuesta = await request.json();
    console.log(respuesta)


    respuesta.data.memes.slice(0, 8).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img');
        img.src = meme.url; 
        memesContainers.appendChild(newMemeCard);
    });
    memeTemplate.remove();
};





const obtenerGif = async () => {
    const request = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=eating-spongebob-squarepants-patrick_cat&limit=2");
    const respuesta = await request.json();
    console.log(respuesta.data[0].images.original.url);
    // Pintar en la UI
    const gifElement = document.getElementById("gif");
    gifElement.src = respuesta.data[0].images.original.url;
};





obtenerGif();
obtenerMemes();