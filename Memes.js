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

    let pageUrl = "https://www.reddit.com/r/memes/.json?after=";
    let after = `${data[after]}`;
function showMoreContent(){
    // let showMore = document.createElement('input');
    // showMore.className = 'show-more-btn';
    // showMore.setAttribute('type', 'submit')
    // console.log(showMore);
    const showMore = document.querySelector('show-more-btn'); 
        showMore.addEventListener('click', (event) => {
        event.preventDefault()
        e.window.assign(pageUrl + after)
        console.log('clicked');
    })
    

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
            showMoreContent(data.after)
        })
    })
     .catch(error => console.log(error));