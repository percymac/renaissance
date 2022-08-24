const golferImageContainer = document.querySelector('.golfer-img');
const golferStoryContainer = document.querySelector('.golfer-details-story');

const golferList = document.querySelector('.golfer-list ul');
const golferImage = document.querySelector('.golfer-img-1 img');
const golferName = document.querySelector('.golfer-details-1 #name');
const golferProfession = document.querySelector('.golfer-details-1 #profession');
const golferCellphone = document.querySelector('.golfer-details-1 #cellphone');
const golferEmail = document.querySelector('.golfer-details-1 #email');
const golferHome = document.querySelector('.golfer-details-1 #home');
const golferStory = document.querySelector('.golfer-story');

let golferData;

function renderHTMLData (index) {
    golferImage.src = "./images/" + golferData[index].photo;
    golferName.innerText = golferData[index].fname + ' ' + golferData[index].lname;
    golferProfession.innerText = golferData[index].profession;
    golferCellphone.innerText = golferData[index].cellphone;
    golferEmail.innerText = golferData[index].email;
    golferHome.innerText = golferData[index].home;
    golferStory.innerText = golferData[index].mystory;
}

function searchForGolfer(subjectFullname) {
    const arrNameSurname = subjectFullname.split(' ');
    const subjectFirstName = arrNameSurname[0];
    const subjectSurname = arrNameSurname[1];

    for (let j=0; j<golferData.length; j++)  {
        if ( subjectFirstName.toLowerCase() === golferData[j].fname.toLowerCase() && 
             subjectSurname.toLowerCase() === golferData[j].lname.toLowerCase()) {
            /*
            console.log('\nMatched: ', subjectFullname);
            console.log('Index  : ', j);
            */
            return j;
        }
    }   
    alert(`This golfer is NOT in the list of MIGS : ${subjectFullname}`);   
    return -1;  /* if no match if found */
}

// determine the golfer selected ...
golferList.addEventListener('click', (e) => { 
    /*console.log('   e.target: ', e.target.innerText); */
    const subjectName = e.target.innerText;
    const numberOfSubjects = golferList.childElementCount;

    // search for the index of this golfer from the list of available golfers
    golferIndex = searchForGolfer(subjectName);
    if (golferIndex < 0) {
        return;
    }
    // display golfer details on the MIGS page
    renderHTMLData(golferIndex);
    golferImageContainer.classList.remove('hide-me');
    golferStoryContainer.classList.remove('hide-me');

});

// load the list of MIGS from the provided data file
async function getMemberGolferData(file) {
    let golferFileContent = await (fetch(file));
    let golferDataString = await golferFileContent.text();
    golferData = JSON.parse(golferDataString);

    for (let i=0; i<golferData.length; i++) {
        /*console.log(golferData[i].fname);*/
        const li = document.createElement('li');
        const spanGolferName = document.createElement('span');
        spanGolferName.textContent = golferData[i].fname + ' ' + golferData[i].lname;
        spanGolferName.classList.add('name');

        // append the golfer name span element to the list item, <li>
        li.appendChild(spanGolferName);

        // append the new <li> item above to the <ul> golfer list
        golferList.appendChild(li);
    }

    // add a dummy entry to test for not found 
    for (let k=0; k < 1; k++) {
        const li = document.createElement('li');
        const spanGolferName = document.createElement('span');
        spanGolferName.textContent = 'My man Gucci Mane';
        spanGolferName.classList.add('name');

        // append the golfer name span element to the list item, <li>
        li.appendChild(spanGolferName);

        // append the new <li> item above to the <ul> golfer list
        golferList.appendChild(li);
    }
}

// read member data from json file 
const member_golfer_data_file = './files/golfer_data.json';
getMemberGolferData(member_golfer_data_file);

// do not show the image and golfer data blocks 
golferImageContainer.classList.add('hide-me');
golferStoryContainer.classList.add('hide-me');
