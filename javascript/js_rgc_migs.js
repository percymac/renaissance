const animalContainer = document.getElementById('animal-info');
const fetchButton = document.getElementById('fetchButton');

document.addEventListener('onload', function(){
    // get the data from our url/file
    let fileName = './files/golfer_data.json';
    
    // create request object
    const ourRequest = new XMLHttpRequest();
    // open - call type, url/file, async flag
    ourRequest.open('GET', fileName, true);

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

/*
let fileInd = 0;
fetchButton.addEventListener('click', () =>{
    fileInd++;
    let fileName = './files/rgc_migs.json';
    
        // create request object
        const ourRequest = new XMLHttpRequest();
        // open - call type, url/file, async flag
        ourRequest.open('GET', fileName, true);

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

        // when we reach end of our data source deactivate the fetch button
        if (fileInd >= 3) {
            fetchButton.classList.add("hide-me");
        }   
});

function renderHTML(data){
    let htmlString = "";

    for(let i=0; i<data.length; i++) {

        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        let noLikedFoods = data[i].foods.likes.length;
        for (let j=0; j<noLikedFoods; j++) {
            if (noLikedFoods === 1) {
                htmlString += ' ' + data[i].foods.likes[j];
                break;
            } 
            if (noLikedFoods > 2)  {
                if (j < (noLikedFoods-1)) {
                    htmlString += ', ' + data[i].foods.likes[j]; 
                }
                else {
                    htmlString += ' and ' + data[i].foods.likes[j];
                }   
            }
            else {
                if (j < (noLikedFoods-1)) {
                    htmlString += ' ' + data[i].foods.likes[j];
                } else {
                   htmlString += ' and ' + data[i].foods.likes[j];
                }
            }
        }

        htmlString += ' but dislikes '
        let noDislikedFoods = data[i].foods.dislikes.length;
        for (let j=0; j<noDislikedFoods; j++) {
            if (noDislikedFoods === 1) {
                htmlString += ' ' + data[i].foods.dislikes[j];
                break;
            } 
            if (noDislikedFoods > 2)  {
                if (j < (noDislikedFoods-1)) {
                    htmlString += ', ' + data[i].foods.dislikes[j]; 
                }
                else {
                    htmlString += ' and ' + data[i].foods.dislikes[j];
                }   
            }
            else {
                if (j < (noDislikedFoods-1)) {
                    htmlString += ' ' + data[i].foods.dislikes[j];
                } else {
                   htmlString += ' and ' + data[i].foods.dislikes[j];
                }
            }
        }


        htmlString += ".</p>";  
    }
    animalContainer.insertAdjacentHTML('Beforeend', htmlString);
}
*/