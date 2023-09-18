let cardsArray = [
   
    {
        'name': 'Reyna',
        'img': '/pics/VALORANT_Reyna_Dark.jpg',
    },
    {
        'name': 'Astra',
        'img': '/pics/astra.png',
    },
    {
        'name': 'Omen',
        'img': '/pics/VALORANT_Omen_Dark.jpg',
    },
    {
        'name': 'jett',
        'img': '/pics/VALORANT_Jett_Dark.jpg',
    },
    {
        'name': 'Sage',
        'img': 'pics/VALORANT_Sage_dark.jpg',
    },
    {
        'name': 'Killjoy',
        'img': 'pics/KillJoy_Wallpapers_blue1.jpg',
    },
    {
        'name': 'Cypher',
        'img': 'pics/VALORANT_Cypher_Dark.jpg',
    },
    {
        'name': 'Brimm',
        'img': 'pics/VALORANT_Brimm_Dark.jpg',

    },
    {
        'name': 'Sove',
        'img': 'pics/VALORANT_Sova_Dark.jpg',
    },
    {
        'name': 'chamber',
        'img': 'pics/chamber.jpg',

    }
];
const parentDiv = document.querySelector('#card-section');
const gamecard = cardsArray.concat(cardsArray)
console.log("parent div")
console.log(parentDiv)


//stylinng the match card
const cardmatches=()=>{

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((Element ) => {
        Element.classList.add('card_match');
    })
}

const resetGame =()=>{
    clickcount = 0;
    firstcard = "";
    secondcard = "";
    let kadho = document.querySelectorAll('.card_selected');
    kadho.forEach((Element) => {
        Element.classList.remove('card_selected');
    })
}

//card selection on selected make it yellow border
let clickcount = 0;
let firstcard="";
let secondcard="";

// parentDiv.addEventListener('click',(event)=>{
    
//     let currcard =  event.target;
//     //if already selected 
//     if (currcard.classList.contains('card_selected')) {
//         clickcount--;
//         currcard.classList.remove("card_selected");
//         return;
//     }

//     if(currcard.id!="card-section" && clickcount<2){
//         clickcount++;

//         if(clickcount==1){
//             firstcard=currcard.parentNode.dataset.name;
//             currcard.parentNode.classList.add('card_selected');
//         }
//         else{
//             secondcard = currcard.parentNode.dataset.name;
//             currcard.parentNode.classList.add('card_selected');
//         }

//         if(firstcard != "" && secondcard != "") {
//             if(firstcard == secondcard)
//             { 
//                 setTimeout(() => {
//                     cardmatches(); Resetcard();
//                 }, 250);
//             }
//             else
//             {
//                 setTimeout(() => {
//                     Resetcard();
//                 }, 250);
//             }
//         }

//     }

// })
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if (curCard.id === "card-section") { return false }

    clickcount++;

    if (clickcount < 3) {

        if (clickcount === 1) {
            firstcard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        } else {
            secondcard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if (firstcard !== "" && secondcard !== "") {
            if (firstcard === secondcard) {
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    cardmatches()
                    resetGame()
                }, 1000)

            } else {
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }

})

parentDiv.addEventListener('mouseover', (event) => {
    let currcard = event.target;
    if (currcard.id != "card-section") {
        currcard.classList.add('card_howwer');
    }
})

parentDiv.addEventListener('mouseout', (event) => {
    let currcard = event.target;
    currcard.classList.remove("card_howwer");

})


//to suffle by every refresh using random() function 
let shuffledChild = Array.from(gamecard).sort(() => 0.5 - Math.random());

for (let i = 0; i < shuffledChild.length;i++){

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;
    back_div.style.backgroundSize = "100% 100%";

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}