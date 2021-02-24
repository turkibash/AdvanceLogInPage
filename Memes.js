function createTitleElement(imgTitle) {
    let titleElement = document.createElement('h1');
    titleElement.className = 'memes-title';
    titleElement.innerText = imgTitle;
    console.log(titleElement);
    let container = document.getElementById("container");
    container.appendChild(titleElement);
}

function createImgElement(imgSrc) {
    let imgElement = document.createElement('img');
    imgElement.className = 'memes-images';
    imgElement.setAttribute('src', imgSrc)
    console.log(imgElement);
    let container = document.getElementById("container");
    container.appendChild(imgElement);
}


fetch('https://www.reddit.com/r/memes/.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let memes = data.data.children;
        memes.map((meme) => {
            // console.log(meme);
            createTitleElement(meme.data.title)
            createImgElement(meme.data.url_overridden_by_dest)
        })
    })
     .catch(error => console.log(error));







