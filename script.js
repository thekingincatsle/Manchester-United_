"use strict";
/*Close and open the information large window*/
let btn_sir = document.querySelector(".button-sir");
let btn_catona = document.querySelector('.button-catona');
let overlay = document.querySelector(".overlay");
let times = document.querySelector('.toast__times');
let info = document.querySelector(".info-zoom");
const openModal = function () {
  info.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
/*create data structure*/
let legendList = [
  ['ferguson','sir alex ferguson',
  {
    fullname: "Sir Alex Ferguson",
    name: "ferguson",
    birth: "31/12/1941",
    general: "la nguoi gioi nhat",
    national: "scotland",
    general: 'Sir Alexander Chapman Ferguson CBE former football manager and player, widely known for managing Manchester United from 1986 to 2013. He is considered by many to be one of the greatest managers of all time and he has won more trophies than any other manager in the history of football. As a player, he is best known for his stint with Rangers.',
    appearance: 1000,
    goal: 1000,
    title: {
        premierLeague: 13,
        FaCup: 5,
        FootballCup: 4,
        FaCharity: 10,
        ChampionLeague: 2,
        EuropeanCup: 1,
        EuropeanSuper: 1,
        Intercontinent: 1,
        FifaClub: 1,
  
    }
  }],
  ['catona','eric cantona',{
    fullname: "Eric Catona",
    name: "catona",
    birth: "31/12/1941",
    general: "“Le Roi”.“Le Dieu”. Or good old – but never, ever, plain old – Eric. Whatever you want to call Monsieur Cantona, the Frenchman’s four-and-a-half seasons at Old Trafford are the stuff of legend.",
    national: "france",
    appearance: 182,
    goal: 82,
    title: {
        premierLeague: 4,
        FaCup: 2,
        FaCharity: 4,
  }
  }],
  ['giggs','Ryan Giggs',
  {
    fullname: "ryan giggs",
    name: "giggs",
    birth: "29/11/1973",
    national: "wales",
    general: 'Ryan Giggs closed one chapter of his football career - the epic, decades-spanning story of him as a player - on the same day he started a new one, as Manchester United’s new assistant manager.',
    appearance: 963,
    goal: 168,
    title: {
        premierLeague: 13,
        FaCup: 4,
        FootballCup: 4,
        FaCharity: 9,
        ChampionLeague: 2,
        EuropeanCup: 1,
        EuropeanSuper: 1,
        Intercontinent: 1,
        FifaClub: 1,
  
    }
  }],['charlton','bobby charlton',
  {
    fullname: "Bobby Charlton",
    name: "charlton",
    birth: "11/10/1937",
    national: "england",
    general: 'Nobody embodies the values of Manchester United better than Sir Bobby Charlton. Having survived the trauma of the Munich Air Disaster when aged just 20, he played as if every game was for his fallen colleagues, recovering from his injuries to reach the pinnacle for both club and country. In a 17-year playing career with the Reds, he played 758 games and scored 249 goals - both of which were longstanding records until, respectively, Ryan Giggs in 2008 and Wayne Rooney in 2017 surpassed his feats.',
    appearance: 758,
    goal: 249,
    title: {
        premierLeague: 13,
        FaCup: 4,
        FootballCup: 4,
        FaCharity: 9,
        ChampionLeague: 2,
        EuropeanCup: 1,
        EuropeanSuper: 1,
        Intercontinent: 1,
        FifaClub: 1,
  
    }
  }],['scholes','paul scholes',
  {
    fullname: "Paul Sholes",
    name: "scholes",
    birth: "24/10/1985",
    national: "england",
    general: `You must have a rare and special football talent to impress the great Sir Bobby Charlton.

    The United legend summed up Paul Scholes perfectly: "He’s always so in control and pinpoint accurate with his passing – a beautiful player to watch."`,
    appearance: 718,
    goal: 155,
    title: {
        premierLeague: 11,
        FaCup: 3,
        FootballCup: 2,
        FaCharity: 5,
        ChampionLeague: 2,
        Intercontinent: 1,
        FifaClub: 1,
  
    }
  }],['rooney','wayne rooney',
  {
    fullname: "wayne rooney",
    name: "rooney",
    birth: "16/11/1974",
    national: "england",
    general: `Wayne Rooney is Manchester United's all-time leading scorer and the only player to have scored 250 goals for the Reds.`,
    appearance: 559,
    goal: 253,
    title: {
        premierLeague: 5,
        FaCup: 1,
        FootballCup: 3,
        FaCharity: 4,
        ChampionLeague: 1,
        Intercontinent: 1,
        FifaClub: 1,
        EuropaLeague: 1,
  
    }
  }],['ole','Ole Gunnar Solskjaer',
  {
    fullname: "Ole Gunnar Solskjaer",
    name: "ole",
    birth: "26/02/1973",
    national: "norway",
    general: `Ole Gunnar Solskjaer reluctantly called time on his United playing career on 28 August 2007 – 11 years and three days after it began with a goalscoring debut.`,
    appearance: 366,
    goal: 126,
    title: {
        premierLeague: 5,
        FaCup: 1,
        FootballCup: 3,
        FaCharity: 4,
        ChampionLeague: 1,
        Intercontinent: 1,
        FifaClub: 1,
        
  
    }
  }],['ronaldo','Cristiano Ronaldo',
  {
    fullname: "Cristiano Ronaldo",
    name: "ronaldo",
    birth: "26/02/1973",
    national: "portugal",
    general: `Cristiano Ronaldo exhausted all superlatives during his six years with United, while he matured from an inexperienced, young winger in 2003 into officially the best footballer on the planet in 2009.`,
    appearance: 292,
    goal: 118,
    title: {
        premierLeague: 3,
        FaCup: 1,
        FootballCup: 2,
        FaCharity: 1,
        ChampionLeague: 1,
        FifaClub: 1,
        
  
    }
  }],['ruud','Ruud van Nistelrooy',
  {
    fullname: "Ruud van Nistelrooy",
    name: "ruud",
    birth: "01/07/1976",
    national: "netherland",
    general: `Arguably one of world football’s biggest names, David Beckham is a global phenomenon but a part of him will be forever Red.
    
    `,
    appearance: 394,
    goal: 85,
    title: {
        premierLeague: 1,
        FaCup: 1,
        FootballCup: 2,
        FaCharity: 1,
        
        
  
    }
  }],['beckham','David Beckham',
  {
    fullname: "David Beckham",
    name: "beckham",
    birth: "02/05/1975",
    national: "england",
    general: 'Sir Alexander Chapman Ferguson CBE former football manager and player, widely known for managing Manchester United from 1986 to 2013. He is considered by many to be one of the greatest managers of all time and he has won more trophies than any other manager in the history of football. As a player, he is best known for his stint with Rangers.',
    appearance: 1200,
    goal: 1000,
    title: {
        premierLeague: 6,
        FaCup: 2,
        FaCharity: 2,
        ChampionLeague: 1,
        Intercontinent: 1,
        
  
    }
  }]
];
/*=====================
sub-buton(click to show the large window
=======================================*/
let btnSet = document.querySelector('.sub-button');
for(let [legend,fullName,info] of legendList){
  let btn=document.createElement("DIV");
  btn.classList.add('btn');
  let img = document.createElement("IMG");
  img.setAttribute('src',`pic/btnImage/${legend}.jpg`);
  img.classList.add('btn-image');
  let name = document.createElement("DIV");
  name.classList.add('btn-name');
  name.textContent = `${fullName}`;
  btn.appendChild(img);
  btn.appendChild(name);
  btn.addEventListener("click", function () {
    openModal();
    upload_info(info);
  });
  btnSet.appendChild(btn);
}
const closeModal = function () {
  info.classList.add("hidden");
  overlay.classList.add("hidden");
  deletingtitle();
};

times.addEventListener('click',closeModal);
overlay.addEventListener("click", closeModal);

/*Convert tab between general and title*/
let general = document.querySelector(".general");
let title = document.querySelector(".title");
let iGeneral = document.querySelector(".info-general");
let iTitle = document.querySelector(".info-title");
general.addEventListener("click", function () {
  iTitle.classList.add("hidden");
  title.classList.remove("info-items--background");
  general.classList.add("info-items--background");
  iGeneral.classList.remove("hidden");
});
title.addEventListener("click", function () {
  iGeneral.classList.add("hidden");
  general.classList.remove("info-items--background");
  title.classList.add("info-items--background");
  iTitle.classList.remove("hidden");
});

/*function that make the legend infomation automatically*/
let upload_info = function ({
  fullname,
  name,
  birth,
  national,
  general,
  appearance,
  goal,
  title,
}) {
  /*image*/
  let image = document.querySelector(".image");
  image.setAttribute("src", `pic/LegendName/${name}.png`);
  /*name*/
  let LegendName = document.querySelector(".legend-name");
  LegendName.textContent = `${fullname}`;
  /*birth*/
  let legendBirth = document.querySelector(".legend-birth");
  legendBirth.textContent = `Birth: ${birth}`;
  /*nation*/
  let nation = document.querySelector(".nation-image");
  nation.setAttribute("src", `pic/Nationality/${national}.png`);
  document.querySelector('.nation-name').textContent = `${national}`
  /*general text*/
  document.querySelector('.general-text').textContent=
  `${general}`;
  document.querySelector('.appearance').textContent = `${appearance}`;
  document.querySelector('.goal').textContent = `${goal}`;
  /*title*/
  let infoTitle = document.querySelector('.info-title');
  for(let cup of Object.keys(title)){
    let wrap = document.createElement("P");
    wrap.classList.add('wrap');
    infoTitle.appendChild(wrap);     
      
      for(let i = 0; i< title[cup];i++){
        let temp = document.createElement("IMG");
        temp.classList.add('legendCup');
        temp.setAttribute('src',`pic/Cup/${cup}.png`);
        wrap.appendChild(temp);
      }
      
  }

}
/*DELETING ALL THE INFOMATION AUTOMATICALLY;*/
function  deletingtitle(){
 
  let dat = document.querySelectorAll('.wrap');
  for(let p of dat) p.classList.add('hidden');
}

