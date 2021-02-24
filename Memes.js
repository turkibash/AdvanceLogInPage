function createImgElement(imgSrc) {
    let imgElement = document.createElement('img');
    imgElement.className = 'memes-images';
    imgElement.setAttribute('src', imgSrc)
    console.log(imgElement);
    let container = document.getElementById("memes-container");
    container.appendChild(imgElement);
}

fetch('https://www.reddit.com/r/memes/.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let memes = data.data.children;
        memes.map((meme) => {
            console.log(meme);
            createImgElement(meme.data.url)
        })
    })
     .catch(error => console.log(error));







