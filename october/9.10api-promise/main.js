const mainEl = document.querySelector("main");

function insertp(p) {
    mainEl.insertAdjacentHTML(
        "afterbegin",
        `
        <p>${p[0]}</p>
        <p>${p[1]}</p>
        <p>${p[2]}</p>

        `
    );
}

fetch("https://dog-api.kinduff.com/api/facts?number=5")
    .then((response) => response.json())
    .then((data) => insertp(data.facts));









const imgDiv = document.getElementsByClassName("image-container")[0];

function insertImage(src) {
    imgDiv.insertAdjacentHTML(
    "afterbegin",
    `
        <img src="${src[1]}" alt="Dog Image">    
        <img src="${src[2]}" alt="Dog Image">    
    `
    );
}

fetch("https://imdb.iamidiotareyoutoo.com/justwatch?q=gameof")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.description[0].photo_url);
    insertImage(data.description[0].photo_url);
  });

  fetch("https://imdb.iamidiotareyoutoo.com/justwatch?q=gameof")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.description[0].photo_url);
    insertImage(data.description[0].photo_url);
  });





  const img = document.createElement('img');

  fetch('https://api.waifu.pics/sfw/neko')
  .then(response => response.json())
  .then(data => {
      img.src = data.url; 
      document.getElementById('image-container1').appendChild(img);
  })
  .catch(error => console.error('שגיאה:', error));
