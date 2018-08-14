

document.getElementById( "start" ).addEventListener( "click",
    function clearTitle(){
        document.getElementById( "startscreen" ).style.display = "none";
        document.getElementById( "selectclass" ).style.display = "flex";
    }


);
document.getElementById( "rick" ).addEventListener( "mouseenter" ,
    function displayInfo(){
        document.getElementById( "rick" ).style.border = "3px solid red";
        document.getElementById( "classdescription" ).innerHTML = rickDescription;
    } );

document.getElementById( "rick" ).addEventListener( "mouseleave",
    function removeInfo(){
        document.getElementById( "rick" ).style.border = "none";
    } );

document.getElementById( "melanie" ).addEventListener( "mouseenter" ,
    function displayInfo(){
        document.getElementById( "melanie" ).style.border = "3px solid red";
        document.getElementById( "classdescription" ).innerHTML = melanieDescription;
    } );

document.getElementById( "melanie" ).addEventListener( "mouseleave",
    function removeInfo(){
        document.getElementById( "melanie" ).style.border = "none";
    } );

document.getElementById( "felony" ).addEventListener( "mouseenter" ,
    function displayInfo(){
        document.getElementById( "felony" ).style.border = "3px solid red";
        document.getElementById( "classdescription" ).innerHTML = felonyDescription;
    } );

document.getElementById( "felony" ).addEventListener( "mouseleave",
    function removeInfo(){
        document.getElementById( "felony" ).style.border = "none";
    } );

document.getElementById( "eric" ).addEventListener( "mouseenter" ,
    function displayInfo(){
        document.getElementById( "eric" ).style.border = "3px solid red";
        document.getElementById( "classdescription" ).innerHTML = ericDescription;
    } );

document.getElementById( "eric" ).addEventListener( "mouseleave",
    function removeInfo(){
        document.getElementById( "eric" ).style.border = "none";
    } );

var rickDescription =
`
<h1> RICK </h1>
  <h2> The Warrior </h2>
    <h3> <span id="positives">+Damage +Health +Defense </span> <span id="negatives">-Speed</span> </h3>

<div id="classtext">
  Rick is the youngest member of the Stickman family. Despite his youth, Rick is an
  excellent swordsman and has never lost a single duel. However, he's prone to making
  mistakes and often gets beat up pretty badly. No matter how badly he gets beaten, he
  always comes back for more.
  <br>
  <br>
  Rick wields a sword and shield combo which allows him to block damage and stun enemies.
  He is slower than most of his opponents, so he will tend to take a bit more damage than his
  siblings, but makes up for it in survivability.
</div>
<div id= "potentialskills">
POSSIBLE STARTING SKILLS
</div>
<div id="skillpreviewpane">
<div id="grid1">
<img src ="assets/mightyshield.jpg">
   Mighty Shield - Start game with a more powerful shield
</div>
<div id="grid2">
<img src ="assets/bloodrage.jpg">
   Blood Rage - Physical combat boost
 </div>
<div id="grid3">
<img src ="assets/arrowproof.jpg">
   Arrowproof - Ranged damage resist
 </div>
 <div id="grid4">
<img src ="assets/gourmand.jpg">
   Gourmond  - Additional health recovery from food
</div>
</div>
`;

var melanieDescription =
`<h1> Melanie </h1>
  <h2> The Witch </h2>
    <h3> <span id="positives">+Damage +Magic </span> <span id="negatives">-Defense -Health</span> </h3>

<div id="classtext">
  Melanie is the magic acolyte of the Stickman clan. She has dedicated her entire life to learning her craft
  and can be a force to be reckoned with. What she lacks in physical strength, she makes up for in defense-piercing
  magical power.
  <br>
  <br>
  Melanie uses an enchanted staff and an Object of Power. She has the least health and defenses compared to her siblings,
  but with careful strategization she can win any fight she's in.
</div>
<div id= "potentialskills">
POSSIBLE STARTING SKILLS
</div>
<div id="skillpreviewpane">
<div id="grid1">
<img src ="assets/fireball.jpg">
   Fire storm - Magical damage
</div>
<div id="grid2">
<img src ="assets/mesmereyes.jpg">
   Mesmer Eyes - Stuns enemy
 </div>
<div id="grid3">
<img src ="assets/fairytears.jpg">
   Bottled Fairy Tears - Bonus starting mana
 </div>
 <div id="grid4">
<img src ="assets/magiterian.jpg">
   Magitarian - Can convert food into mana restoration
</div>
</div>
`;

var felonyDescription =
`<h1> Felony </h1>
  <h2> The Thief </h2>
    <h3> <span id="positives">+Speed +Bonus Actions </span> <span id="negatives">-Defense -Health -Damage</span> </h3>

<div id="classtext">
  If you need a crime broken, Felony Stickman is your gal. Using her nimble reflexes, Felony makes quick work of any job
  or enemy in her way. With the right training, she can attack enemies multiple times in one hit. She'll need all the chances
  she can get to attack, since she lacks the damage of her siblings.
  <br>
  <br>
  Felony dual-wields daggers and users her extra actions and speed to deal many attacks. She has lower than average physical damage,
  but can compensate for it with proper training and items.
</div>
<div id= "potentialskills">
POSSIBLE STARTING SKILLS
</div>
<div id="skillpreviewpane">
<div id="grid1">
<img src ="assets/legendarydaggers.jpg">
   Legendary Daggers - Start out with magical daggers
</div>
<div id="grid2">
<img src ="assets/mouthdagger.jpg">
   Secret Mouth Dagger - Multiattack
 </div>
<div id="grid3">
<img src ="assets/stickyfingers.jpg">
   Sticky Fingers - Extra gold per kill
 </div>
 <div id="grid4">
<img src ="assets/foodfight.jpg">
   Food Fight Legend - can convert food into ranged damage
</div>
</div>
`;

var ericDescription =
`<h1> Eric </h1>
  <h2> The Cleric </h2>
    <h3> <span id="positives">+Health +Defense +Healing </span> <span id="negatives">-Speed -Damage</span> </h3>

<div id="classtext">
  Eric the Cleric never expected to be a fighter
  <br>
  <br>
  Felony dual-wields daggers and users her extra actions and speed to deal many attacks. She has lower than average physical damage,
  but can compensate for it with proper training and items.
</div>
<div id= "potentialskills">
POSSIBLE STARTING SKILLS
</div>
<div id="skillpreviewpane">
<div id="grid1">
<img src ="assets/legendarydaggers.jpg">
   Legendary Daggers - Start out with magical daggers
</div>
<div id="grid2">
<img src ="assets/onehand.jpg">
   One-handed Prayer - Can attack and pray in one action
 </div>
<div id="grid3">
<img src ="assets/stickyfingers.jpg">
   Sticky Fingers - Extra gold per kill
 </div>
 <div id="grid4">
<img src ="assets/foodfight.jpg">
   Food Fight Legend - can convert food into ranged damage
</div>
</div>
`;
