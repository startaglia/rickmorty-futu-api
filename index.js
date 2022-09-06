

let root = document.getElementById('root');
let rickAndMortySide = document.getElementById('rickmorty-side');
const rickAndMortyCharacters = ['']




const rickAndMorty = async ()=> {
    let rickAndMortyUrl = "https://rickandmortyapi.com/api/character/" + Math.floor(Math.random() * (826 - 0) + 1);
    console.log(rickAndMortyUrl)
    let data = await fetch(rickAndMortyUrl);
    let dataJson = await data.json();
    console.log(dataJson)

    let rickAndMortyImg = document.createElement('img');
    rickAndMortyImg.setAttribute('src', dataJson.image);
    rickAndMortyImg.classList.add('img-card');
    let rickAndMortyName = document.createElement('h2');
    rickAndMortyName.innerText = dataJson.name; 
    let rickAndMortySpecies = document.createElement('h3');
    rickAndMortySpecies.innerText= dataJson.species;
    let rickAndMortyCard = Dom.createCard('rickmorty-card', [
        rickAndMortyImg,
        rickAndMortyName,
        rickAndMortySpecies
    ])
    let btnRickAndMorty = document.createElement('button');
    btnRickAndMorty.innerText ="Change";
    btnRickAndMorty.setAttribute('id', 'btn-rickmorty')
    rickAndMortyCard.appendChild(btnRickAndMorty)
    rickAndMortySide.appendChild(rickAndMortyCard)
    btnRickAndMorty.onclick = ()=>{
        rickAndMortySide.innerHTML = ""
        rickAndMorty()
    };
}
rickAndMorty()

let futuSide = document.getElementById('futu-side');
const futuCharacters = [
    "Bender",
    "Fry",
    "Leela",
    "Professor-Farnsworth",
    "Amy",
    "Zapp-Brannigan",
    "Lurr",
    "Dr-Zoidberg",
    "Bob-Barker",
    "Hermes",
    "Morgan-Proctor",
    "Mom",
    "Robot-Mob",
    "Giant-Bender",
    "Kif",
]

const futurama = ()=> {
return new Promise((resolve, reject) => {
    let futuramaUrl = "https://futuramaapi.herokuapp.com/api/characters/" + futuCharacters[Math.floor(Math.random()*futuCharacters.length)];
    fetch(futuramaUrl)
    .then((response) => response.json().then((data) => resolve(data)))
    .catch((e) => reject(e));
    })
    .then((ris)=>{
        let futuImg = document.createElement('img');
        futuImg.setAttribute('src', ris[0].image);
        futuImg.classList.add('img-card');
        let futuName = document.createElement('h2');
        futuName.innerText = ris[0].character;
        let futuQuote = document.createElement('h3');
        futuQuote.innerText = ris[0].quote;
        let futuCard = Dom.createCard('futurama-card', [
            futuImg,
            futuName,
            futuQuote
        ])
        let btnFutu = document.createElement('button');
        btnFutu.innerText ="Change"; 
        btnFutu.setAttribute('id', 'btn-futu');
        futuCard.appendChild(btnFutu);
        futuSide.appendChild(futuCard);
        btnFutu.onclick = ()=>{
            futuSide.innerHTML = ""
            futurama()
    };
    });
}
futurama();




