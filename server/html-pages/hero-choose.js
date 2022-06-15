// const buttonOne = document.createElement('button');
// buttonOne.setAttribute('id' , 'Hero-choice-one');
// buttonOne.innerText = 'Choice One';
// document.body.appendChild(buttonOne);

//Hero Buttons HTML
//#region

const classesResponse = await fetch('https://www.dnd5eapi.co/api/classes');
const classesData = await classesResponse.json();
console.log(classesData.results);

const heroButtonsDiv = document.createElement('div');
heroButtonsDiv.setAttribute('id', 'hero-buttons-div');
document.body.appendChild(heroButtonsDiv);

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
  // console.log('startingEquipment: ', heroClass);
  const startingEquipmentResponse = await fetch(`https://www.dnd5eapi.co/api/classes/${heroClass}`);
  const startingEquipmentData = await startingEquipmentResponse.json();
  // console.log(startingEquipmentData.starting_equipment_options[0].from[0].equipment.name);
  let checker = document.getElementById('starting-equipment-div');
  console.log(checker);


  const startingEquipmentDiv = document.createElement('div');
  startingEquipmentDiv.setAttribute('id', 'starting-equipment-div');
  startingEquipmentDiv.innerText = `Choose your starting equipment, ${heroClass}`;
  document.body.appendChild(startingEquipmentDiv);
  console.log(checker);

  const startingEquipmentButtons = () => {
    startingEquipmentData.starting_equipment_options.forEach(el => {
        const equipmentButton = document.createElement('button');
        equipmentButton.setAttribute('id', 'class-equipment');
        const equipmentInnerText = el.from[0].equipment.name;
        equipmentButton.innerText  = `${equipmentInnerText}`;
        startingEquipmentDiv.appendChild(equipmentButton);
    });
  };
  if(!checker){
    startingEquipmentButtons();
  }else{
    document.getElementById('starting-equipment-div').remove();
    checker = false;
  }

};

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
