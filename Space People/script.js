console.log('working');

// add a cool background picture
document.body.style.backgroundImage = "url('pics/space-background.jpg')";

function getSpacePeople() {
    console.log('...getting space people...');

    // get the data
    fetch('http://api.open-notify.org/astros.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        displayNumAstros(data);
        createAstros(data);
    });
}

function displayNumAstros(data) {
    // use the api to get the number of the astros in space
    const numAstros = `<h2>There are ${data.number} people in space right now!</h2>`;

    document.body.innerHTML += numAstros;
}

function createAstros(data) {
    // log the api data
    console.log(data);

    let astroNames = [];
    let astros = [];
    
    // add the astros in the api to an array for easy access
    for(let i = 0; i < data.number; i++) {
        console.log(i);
        astros += `
        <div>
        <p>${data.people[i].name}</p>
        <p>${data.people[i].name}</p>
        <p>${data.people[i].name}</p>
        </div>`;

        astroNames[i] = data.people[i].name;
    }
    // now time to add the astros to the screen with their information
    addAstros(astros, astroNames);
}

function addAstros(astros, astroNames) {
    // make sure that we got the data that we need
    console.log(astroNames);
    
    // add the information to the body
    document.body.innerHTML += `<div id="astro-info"></div`
    for(let i = 0; i < astroNames.length; i++) {
        if(astroNames[i] == 'Andrew Morgan') {
            document.getElementById('astro-info').innerHTML +=`<div id='andrew-morgan'><img src='pics/andrew-morgan.jpg'></img></div>`;
            let andrewInfo = document.createElement('h2');
            andrewInfo.innerHTML = "Andrew Morgan";
            document.getElementById('andrew-morgan').appendChild(andrewInfo);
            
        } else if(astroNames[i] == 'Oleg Skripochka') {
            document.getElementById('astro-info').innerHTML +=`<div id="oleg-skripochka"><img src='pics/oleg-skripochka.jpg'></img></div>`;
            let olegInfo = document.createElement('h2');
            olegInfo.innerHTML = "Oleg Skripochka";
            document.getElementById('oleg-skripochka').appendChild(olegInfo);

        } else if(astroNames[i] == 'Jessica Meir') {
            document.getElementById('astro-info').innerHTML +=`<div id="jessica-meir"   ><img src='pics/jessica-meir.jpg'></img></div>`;
            let jessicaInfo = document.createElement('h2');
            jessicaInfo.innerHTML = "Jessica Meir";
            document.getElementById('jessica-meir').appendChild(jessicaInfo);
        }
        else {
            document.body.innerHTML +=`<p>img not found</p>`;
        }
    }
}