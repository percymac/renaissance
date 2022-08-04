const golfer_data = [
    {
        "fname": "Chippa1",
        "lname": "Mamboshe",
        "profession": "Programmer1",
        "cellphone": "0821111111",
        "email": "chippam1@rgc.com",
        "photo": "chippa1.jpg"
    },
    {
        "fname": "Chippa2",
        "lname": "Mamboshe",
        "profession": "Programmer2",
        "cellphone": "0822222222",
        "email": "chippam2@rgc.com",
        "photo": "13th-Hole-Augusta-National.jpg"        
    },
    {
        "fname": "Chippa3",
        "lname": "Mamboshe",
        "profession": "Programmer3",
        "cellphone": "0823333333",
        "email": "chippam3@rgc.com",
        "photo": "chippa1.jpg"
    },
    {
        "fname": "Chippa4",
        "lname": "Mamboshe",
        "profession": "Programmer4",
        "cellphone": "0824444444",
        "email": "chippam4@rgc.com",
        "photo": "chippa1.jpg"
    },
    {
        "fname": "Chippa5",
        "lname": "Mamboshe",
        "profession": "Programmer5",
        "cellphone": "0825555555",
        "email": "chippa5@rgc.com",
        "photo": "chippa1.jpg"
    },
    {
        "fname": "Chippa6",
        "lname": "Mamboshe",
        "profession": "Programmer6",
        "cellphone": "0826666666",
        "email": "chippam@rgc.com",
        "photo": "chippa1.jpg"        
    },
    {
        "fname": "Chippa7",
        "lname": "Mamboshe",
        "profession": "Programmer7",
        "cellphone": "0827777777",
        "email": "chippam7@rgc.com",
        "photo": "chippa1.jpg"
    },
    {
        "fname": "Chippa8",
        "lname": "Mamboshe",
        "cellphone": "0828888888",
        "profession": "Programmer8",
        "email": "chippam8@rgc.com",
        "photo": "chippa1.jpg"
    },
    {
        "fname": "Chippa9",
        "lname": "Mamboshe",
        "profession": "Programmer9",
        "cellphone": "0829999999",
        "email": "chippam9@rgc.com",
        "photo": "chippa1.jpg"
    },
    {
        "fname": "Chippa10",
        "lname": "Mamboshe",
        "cellphone": "0821011010",
        "profession": "Programmer10",
        "email": "chippam10@rgc.com",
        "photo": "chippa1.jpg"        
    },
    {
        "fname": "Chippa11",
        "lname": "Mamboshe",
        "profession": "Programmer11",
        "cellphone": "0820110011",
        "email": "chippam@rgc.com",
        "photo": "chippa1.jpg"
    },
    {
        "fname": "Chippa12",
        "lname": "Mamboshe",
        "profession": "Programmer12",
        "cellphone": "0820120012",
        "email": "chippam12@rgc.com",
        "photo": "chippa1.jpg"
    }
]



const topName = document.querySelector('.top-golfer-details #name');
const topProfession = document.querySelector('.top-golfer-details #profession');
const topCellphone = document.querySelector('.top-golfer-details #cellphone');
const topEmail = document.querySelector('.top-golfer-details #email');
const topGolferImage = document.querySelector('.top-golfer-info .golfer-img img');

const botName = document.querySelector('.bottom-golfer-details #name');
const botProfession = document.querySelector('.bottom-golfer-details #profession');
const botCellphone = document.querySelector('.bottom-golfer-details #cellphone');
const botEmail = document.querySelector('.bottom-golfer-details #email');
const botGolferImage = document.querySelector('.bottom-golfer-info .golfer-img img');

const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');

function renderHTMLData (topIndex) {

    topGolferImage.src = './images/' + golfer_data[topIndex].photo;
    topName.innerText = golfer_data[topIndex].fname + ' ' + golfer_data[0].lname;
    topProfession.innerText = golfer_data[topIndex].profession;
    topCellphone.innerText = golfer_data[topIndex].cellphone;
    topEmail.innerText = golfer_data[topIndex].email;

    botGolferImage.src = './images/' + golfer_data[topIndex+1].photo;
    botName.innerText = golfer_data[topIndex+1].fname + ' ' + golfer_data[topIndex+1].lname;
    botProfession.innerText = golfer_data[topIndex+1].profession;
    botCellphone.innerText = golfer_data[topIndex+1].cellphone;
    botEmail.innerText = golfer_data[topIndex+1].email;
}

// populate the first two golfer details
let currIndex = 0
const golferDetailsPerPage = 2;
const maxNumGolfers = golfer_data.length;
renderHTMLData(currIndex);              // show the first two golfers' data
prevButton.classList.add('hide-me'); // make prev button invisible

nextButton.addEventListener('click', () =>{
    currIndex += golferDetailsPerPage;
    renderHTMLData(currIndex);       // show the next two golfers
    if (currIndex + 1 >= (maxNumGolfers-1)) {
        nextButton.classList.add('hide-me');
    }
    prevButton.classList.remove('hide-me');
});

prevButton.addEventListener('click', () =>{
    currIndex -= golferDetailsPerPage;
    renderHTMLData(currIndex);       // show the previous two golfer
    if (currIndex - 1 <= 0) {
        prevButton.classList.add('hide-me');
    }
    nextButton.classList.remove('hide-me');
});



/*
document.addEventListener('DOMContentLoaded', function() {
    // get the data from our url/file
    let fileName = './files/golfer_data.json';
    
    // create request object
    const ourRequest = new XMLHttpRequest();
    // open - call type, url/file, async flag
    ourRequest.open('GET', './files/golfer_data.json', {mode: 'no-cors'}, true);

    ourRequest.onload = function(){
        if (this.status == 200) {
            const ourData = JSON.parse(this.responseText);
            console.log(ourData)
            
            // renderHTML(ourData);
        }
        if (this.status == 404) {
            document.getElementById('animal-info').innerHTML = this.responseText;
        }
    }

    // sends request
    ourRequest.send();

});
*/