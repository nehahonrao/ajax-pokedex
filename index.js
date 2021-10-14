const mainScreen = document.querySelector('.main-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');
const pokeListItems = document.querySelectorAll('.list-item');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
let res=document.getElementById('res');
let front_img=document.getElementById('front-img');
const name=document.getElementById("name");
const no=document.getElementById("no");
const btn=document.querySelector(".send");
const pok_name=document.querySelector(".right-container__screen");
const id_name=document.querySelector(".id-name");
const left_button=document.querySelector("left_button");
const ev_name=document.querySelector(".eval-name1");
const ev_name1=document.querySelector(".eval-name2");
const ev_name3=document.querySelector(".eval-name3");
const ev_name4=document.querySelector(".eval-name4");
const eval_img1=document.querySelector("#eval-img1");
const eval_img2=document.querySelector("#eval-img2");
const lb1=document.querySelector("#lb1");
const rb1=document.querySelector("#rb1");
const lb2=document.querySelector("#lb2");
const rb2=document.querySelector("#rb2");





btn.addEventListener("click",getData)

function getData() {
    let id=document.getElementById("userdata");
    id=id.value;
    console.log(id)
    // url = 'https://pokeapi.co/api/v2/pokemon/1'

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        front_img.src=data['sprites']['front_default'];
        pok_name.textContent=data['name'];     
        id_name.textContent=data['id'];
        const dataType=data['types'];
        const dataFirstType=dataType[0];
        const dataSecType=dataType[1];
        ev_name.textContent= dataFirstType['type']['name'];
        
        if(dataSecType){
            ev_name1.textContent= dataSecType['type']['name'];
        }else
        {
            ev_name1.classList.add("hide");
            ev_name1.textContent=" ";    
        }
      
        const move=data['moves'];
        lb1.textContent=move[0]['move']['name'];
        rb1.textContent=move[1]['move']['name'];
        lb2.textContent=move[2]['move']['name'];
        rb2.textContent=move[3]['move']['name'];


        fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const evalu1=data['chain']
            console.log(evalu1)
            const species1=evalu1['species']
            console.log(species1)
            const speciesname=species1['name']
            const url1=species1['url']
            console.log(url1)
            console.log(speciesname)
            ev_name3.textContent=speciesname;
            // ev_name4.textContent=data['species']['name'];
            eval_img1.src=url1;
    
            // fetch(`https://pokeapi.co/api/v2/pokemon/${speciesname}`)
            // .then(response => response.json())
            // .then(data => {
            // // console.log(data);
            // const final=data['forms']
            // const fig1=final[0]
            // eval_img1.src=fig1['url']
            // console.log(final);
           
            // })

        
})

})
}

