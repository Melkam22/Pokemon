
 let learntSkills=[];
//1, pokemon creation
class Pokemon{
    constructor(name, health, magic){
    this.name=name;
    this.health=health;
    this.magic=magic;
    //this.skills=[];
}
//2, learnt attack skills
/* learnAttackSkill(AttackSkill) {
    this.skills = AttackSkill;
    console.log("====", AttackSkill.nameOfAttack);
            skills.push("Pikachu", AttackSkill.nameOfAttack);
            console.log(skills);
        } */
    } 
//3, attack skill creation
class AttackSkill {
    constructor(nameOfAttack, amountOfDamage, requiredMagic) {
        this.nameOfAttack=nameOfAttack;
        this.amountOfDamage=amountOfDamage;
        this.requiredMagic=requiredMagic;
}
}
//1,pokemon creation
let Pikachu = new Pokemon("Pikachu", 100, 100);
let BadGuy = new Pokemon("BadGuy", 100, 100);

//2, learnt attack skills
//Pikachu.learnAttackSkill(doubleKick);
//Pikachu.learnAttackSkill(upperCut);
 

//3, attack skill creation
let doubleKick = new AttackSkill ("doubleKick", 40, 30);
let upperCut = new AttackSkill ("upperCut", 30, 20);
learntSkills.push(doubleKick, upperCut);
console.log(learntSkills);

for(let a=0; a<learntSkills.length; a++){
}
let randomAttack = Math.floor(Math.random()*learntSkills.length);
    console.log(randomAttack);//we ll get 0 or 1 


/* if(randomAttack==1){
    console.log("the operation was successful", "Pikachu", this.health + 40, this.magic-30,
    "BadGuy", this.health-40, this.magic-30);
} */

if(randomAttack==0){
    console.log("the operation was successful", "Pikachu doubleKick1 &", "health :", 100 + 40, "magic:", 100-30,
    "BadGuy", "health:", 80-40, "magic :", 100+30);
} else if(randomAttack==1){
    console.log("the operation was successful", "Pikachu upperCut1 & ", "health :", 100 + 30, "magic:", 100 -20,
    "BadGuy", "health:", 100-30, "magic :", 100+20);
} else {
    console.log("you can not launch this operation");
}

if(randomAttack==0){
    console.log("the operation was successful", "BadGuy doubleKick1 & ", "health:", 40 + 40, "magic:", 130-30,
    "Pikachu", "health:", 140-40, "Pikachu :", "magic:", 130-30);
} else if(randomAttack==1){
    console.log("the operation was successful", "BadGuy upperCut1 &", "health:", 50 + 30, "magic:", 70-20,
    "Pikachu:", "health:", 140-30, "magic:", 70+20);
}  else if("health" <=20){
    console.log("you can not launch this operation");
}; 

if(randomAttack==0){
    console.log("the operation was successful", "Pikachu doubleKick2 &", "health :", 100 + 40, "magic:", 70-30,
    "BadGuy", "health:", 60-40, "magic:", 70+30);
} else if(randomAttack==1){
    console.log("the operation was successful", "Pikachu upperCut2 &", "health :", 130+30, "magic:", 80-20,
    "BadGuy", "health:", 70-30, "magic :", 80+20);
} else if("health" <=20){
    console.log("you can not launch this operation");
}

if(randomAttack==0){
    console.log("the operation was successful", "BadGuy doubleKick2 &", "health :", 20 + 40, "magic:", 100-30,
    "Pikachu", "health:", 140-40, "magic:", 40+30);
} else if(randomAttack==1){
    console.log("the operation was successful", "BadGuy upperCut2 &", "health :", 40+30, "magic:", 100-20,
    "Pikachu", "health:", 160-30, "magic :", 60+20);
} else  {
    console.log("you can not launch this operation!");
} 

if(randomAttack==0){
    console.log("the operation was successful", "Pikachu doubleKick3 &", "health :", 100 + 40, "magic:", 70-30,
    "BadGuy", "health:", 60-40, "magic:", 70+30 , "The End! the BadGuy is dead!");
} else if(randomAttack==1){
    console.log("the operation was successful", "Pikachu upperCut2 &", "health :", 130+30, "magic:", 80-20,
    "BadGuy", "health:", 70-30, "magic :", 80+20, "Stay put, the make a final round!");
}  




//Each skill should do a certain amount of damage, and consume a certain amount of magic from the Pokemon that used the skill.
/* let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed); */

//The first argument to `attack` should be the index (or key) of the attack
/* pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu); */

// should log out the following to the console:

// pikachu launched skill 'lightning' successfully!
// bulbasaur got 40 damage
//-------------------
// bulbasaur launched skill 'poison seed' successfully!
// pikachu got 20 damage
//-------------------
// pikachu status
// health: 100
// magic: 50
//-------------------
// bulbasaur status
// health: 55
// magic: 85
//-------------------
// pikachu launched skill 'lightning' successfully!
// bulbasaur got 40 damage
//-------------------
// not enough magic, cannot launch attack!
//-------------------
// pikachu got 20 magic back
//-------------------
// pikachu launched skill 'lightning' successfully!
// bulbasaur got 40 damage
//-------------------
// bulbasaur is killed!
//-------------------
// bulbasaur is already dead!
// That's just one example. You can call different series of attacks to get different results!