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

heroButtonsDiv.addEventListener('click', (e)=> {
    let classChosen = e.target;
    // console.log(e.target);

});

//#endregion
