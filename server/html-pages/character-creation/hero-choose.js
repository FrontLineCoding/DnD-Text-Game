// const buttonOne = document.createElement('button');
// buttonOne.setAttribute('id' , 'Hero-choice-one');
// buttonOne.innerText = 'Choice One';
// document.body.appendChild(buttonOne);
let inventory = [];

//Get starting API call
const classesResponse = await fetch('https://www.dnd5eapi.co/api/classes');
const classesData = await classesResponse.json();
// console.log(classesData);



//HTML regions
const heroButtonsDiv = document.createElement('div');
heroButtonsDiv.setAttribute('id', 'hero-buttons-div');
document.body.appendChild(heroButtonsDiv);







//Create Hero Buttons
//#region

const makeClassButtons = () => {
  classesData.results.forEach((element) => {
    const classButton = document.createElement('button');
    classButton.setAttribute('id', 'hero-class-button');
    classButton.innerText = element.name;
    heroButtonsDiv.appendChild(classButton);
  });
};
makeClassButtons();
//#endregion

//Choose Starting Equipment
//#region
const chooseStartingEquipment = async (heroClass) => {
  // let runButtons = document.getElementById('main-starting-equipment-div');
  let runButtons = document.getElementById('main-starting-equipment-div');
  if(runButtons){
    document.getElementById('main-starting-equipment-div').remove();
  }
  const startingEquipmentResponse = await fetch(`https://www.dnd5eapi.co/api/classes/${heroClass}`);
  const startingEquipmentData = await startingEquipmentResponse.json();
  // console.log(startingEquipmentData);
//starting equipment parent container
const mainStartingEquipmentDiv = document.createElement('div');
mainStartingEquipmentDiv.setAttribute('id', 'main-starting-equipment-div');
// mainStartingEquipmentDiv.innerText = `Here is your starting equipment, ${heroClass}`;
document.body.appendChild(mainStartingEquipmentDiv);

//stock starting equipment container
const startingEquipmentDiv = document.createElement('div');
startingEquipmentDiv.setAttribute('id', 'starting-equipment-div');
startingEquipmentDiv.innerText = `Here is your starting equipment, ${heroClass}`;
mainStartingEquipmentDiv.appendChild(startingEquipmentDiv);


  const stockStartingWeapons = () => {
    startingEquipmentData.starting_equipment.forEach(el => {
      // console.log(el);
        const equipmentButton = document.createElement('p');
        equipmentButton.setAttribute('id', 'class-equipment');
        equipmentButton.setAttribute('class', 'stock-starting equipment')
        const equipmentInnerText = el.equipment.name;
        equipmentButton.innerText  = `${equipmentInnerText}`;
        startingEquipmentDiv.appendChild(equipmentButton);
        inventory.push(el.equipment.name);
    });
  };
  const optionalEquipments = () => {

    //options starting equipment
    const optionalEquipmentDiv = document.createElement('div');
    optionalEquipmentDiv.setAttribute('id', 'optional-starting-equipment-div');
    optionalEquipmentDiv.innerText = `Choose one starting equipment, ${heroClass}`;
    mainStartingEquipmentDiv.appendChild(optionalEquipmentDiv);

    startingEquipmentData.starting_equipment_options.forEach(el => {
        const equipmentButton = document.createElement('button');
        equipmentButton.setAttribute('id', 'class-equipment');
        equipmentButton.setAttribute('class', 'optional-starting equipment')
        const equipmentInnerText = el.from[0].equipment.name;
        equipmentButton.innerText  = `${equipmentInnerText}`;
        optionalEquipmentDiv.appendChild(equipmentButton);
    });
    const addOptionalEquipment= (equipmentPiece) => {
      console.log(equipmentPiece.innerText);
      // res.sendFile(__dirname + '/html-pages/combat/combat.html');
      window.location.href = "combat"; // <<<<<-------------------
    }
    optionalEquipmentDiv.addEventListener('click', (e) => {
      let startingEquipmentChosen = e.target;
      addOptionalEquipment(e.target);
    })
  };


  stockStartingWeapons();
  optionalEquipments();
  }












//#endregion






//Event Listeners
//#region
heroButtonsDiv.addEventListener('click', (e)=> {
  let classChosen = e.target;
  // console.log(e.target);
  // console.log('HeroButton: ', classChosen.innerText);
  chooseStartingEquipment(classChosen.innerText.toLowerCase());

});

//#endregion


module.exports = {
  inventory
};
