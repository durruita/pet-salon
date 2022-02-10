let salon={
    name:"Pet Stop",
    address:{
        street:"777 Main St.",
        ZIPcode:"92055",
        number:"Suite Z"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}

// create the constructor
function Pet(name,age,gender,breed,service,owner,contact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner;
    this.contact=contact;
}




let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBreed = document.getElementById("txtBreed");
let petService = document.getElementById("selService");
let petOwner = document.getElementById("txtOwner");
let petContact = document.getElementById("txtContact");

function register(){
    console.log("register");
    //create a obj
    let thePet = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwner.value,petContact.value)
    //push the obj into the array
    salon.pets.push(thePet);
    //display the array
    console.log(salon.pets);
    alert("You have registered your pet!");
    showPetsCards();
}

function showPetsCards(){
    //clear the field
    document.getElementById("petList").innerHTML="";
    //travel the array
    for(let i=0;i<salon.pets.length;i++){
    //create the card;

    //append the tmp into the html
    document.getElementById("petList").innerHTML +=
    createCard(salon.pets[i]);
  }   
}
function createCard(pet){
    return`
        <div class="pet-card">
            <h3>${pet.name}</h3>
            <label> Age: ${pet.age}</label>
            <label> Gender: ${pet.gender}</label>
            <label> Breed: ${pet.breed}</label>
            <label> Service: ${pet.service}</label>
        </div> 
    `;
    
}
function init(){
    //create 3 pets using the constructor
let pet1 = new Pet("bolt", 7, "male","Dane");
let pet2 = new Pet("buddy", 3, "male","Golden Retriver");
let pet3 = new Pet("mealtloaf", 10, "male","Pointer")
salon.pets.push(pet1,pet2); //push element into array
showPetsCards();
}
window.onload=init;