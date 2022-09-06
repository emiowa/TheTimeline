let newDiv = document.querySelector(".timeline");
newDiv.addEventListener("load", createTimeline(3));

function createTimeline(number){
    let year = new Date().getFullYear() - number;
    for(let i = 0; i < 5; i++){
        year = year + 1;
        addYears(year);
    }
}

function addYears(yearsToAdd){
    let newP = document.createElement("p");
    newP.setAttribute("class", `${yearsToAdd}`);
    let newText = document.createTextNode(yearsToAdd);
    newP.append(newText);
    newDiv.append(newP);
}