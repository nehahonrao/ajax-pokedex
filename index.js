const mainScreen = document.querySelector('.main-screen');
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
const eval_img1=document.getElementById("eval-img1");
const eval_img2=document.querySelector("#eval-img2");
const lb1=document.querySelector("#lb1");
const rb1=document.querySelector("#rb1");
const lb2=document.querySelector("#lb2");
const rb2=document.querySelector("#rb2");
const e1=document.getElementById("e1");
let ev_n1=document.getElementById("ev-name1");


btn.addEventListener("click",getData)

function getData() {
    let id=document.getElementById("userdata");
    id=id.value;
    console.log(id)

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
            ev_name1.textContent=" ";
            ev_n1.style.visibility="hidden";
            
        }
      
        const move=data['moves'];
        lb1.textContent=move[0]['move']['name'];
        rb1.textContent=move[1]['move']['name'];
        lb2.textContent=move[2]['move']['name'];
        rb2.textContent=move[3]['move']['name'];

        const species1=data['species']
        console.log(species1)
        const url1=species1['url']
        console.log(url1)
       
    // Fetching URL & Name

        fetch(url1)
        .then(response => response.json())
       .then(data => {
           console.log(data)
           const dis_ev=data['evolves_from_species']
           const ev1=dis_ev['name']
        console.log(data['evolves_from_species'])
        // let ev1=""
        // if(data['evolves_from_species']){
        //   ev1= data['evolves_from_species']['name']
          console.log(ev1)
          
        // fetch(`https://pokeapi.co/api/v2/pokemon/${ev1}`)
        // .then(response => response.json())
        // .then(data => {
        //  console.log(data)
        //  const poke_nav=data['sprites']['front_default']
        //  console.log(poke_nav)
        

    //    Fetching Image with Name

        fetch(`https://pokeapi.co/api/v2/pokemon/${ev1}`)
       .then(response => response.json())
       .then(data => {
        console.log(data)
        const poke_nav=data['sprites']['front_default']
        console.log(poke_nav)
        eval_img1.src=poke_nav
        // if(dis_ev==''){
        //     eval_img1.src=""
        //     console.log("hello")
            
        //    }else{
        //     eval_img1.src=poke_nav
        //    }
         

      

    //    Display evolution Name

        const nav1=data['name']
        console.log(nav1)
        ev_name3.textContent=nav1;
       })
    })           
})

}

