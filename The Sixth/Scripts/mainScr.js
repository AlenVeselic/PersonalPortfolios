const matches = document.querySelectorAll(".fade")
let i = 0
for(match of matches){
    match.style["opacity"] = "0%"
    match.style["animation"] = "fadeIn 1s forwards"
    match.style["animationDelay"] = i.toString() + "s"
    i = i+1
    if(i == 9){
        break
    }
}

function toggleDisplayBlock(){
    let elBackstory = document.getElementsByClassName("backStory")
    for(paragraph of elBackstory){
    paragraph.classList.toggle("showBlock")
    paragraph.style["animationDelay"] = "0s"
    }

    let header = document.getElementsByClassName('no-border')[0]
    elButton = header.getElementsByClassName('stripButton')[0]
    if(elButton.innerText == "My backstory +"){
        elButton.innerText = "My backstory -"
    }else{
        elButton.innerText = "My backstory +"
    }

}

function toggleDisplayFlex(){
    let elMenu = document.getElementsByClassName('quickMenu')[0]
    elMenu.classList.toggle('showFlex')
    elMenu.style["animationDelay"] = "0s"
}

function toggleDisplayForm(){
    let elForm = document.getElementsByName('contact')[0]
    elForm.classList.toggle('showFlex')
    elForm.style["animationDelay"] = "0s"
    let elTitle = document.getElementById('contactTitle')
    if(elTitle.innerText == "Contact +"){
        elTitle.innerText = "Contact -"
    }else{
        elTitle.innerText = "Contact +"
    }
    
}

function toggleButton(){
    var buttonElement = document.getElementsByClassName("toggleMenuButton")[0]
    /*if(buttonElement.innerText == ">"){
        buttonElement.innerText = "<"
        buttonElement.classList.add("menuOpen")
    }else{
        buttonElement.innerText = ">"
        buttonElement.classList.remove("menuOpen")
    }*/
    if(buttonElement.classList.contains("menuOpen")){
        buttonElement.style.transform= "scaleX(1)"
        buttonElement.classList.toggle("menuOpen")
    }else{
        buttonElement.style.transform= "scaleX(-1)"
        buttonElement.classList.toggle("menuOpen")
    }

    

    
}


let lastKnownScrollPosition = 0;
let sectionPixelRanges = []
for(let matchStart = 9; matchStart < matches.length; matchStart++){
sectionPixelRanges.push(matches[matchStart].offsetTop - 300)
}
function compareNumbers(a, b){
    return a - b;
}

sectionPixelRanges.sort(compareNumbers)
console.log(sectionPixelRanges)
/*
let sectionPixelRanges = [
    600, matches[9].offsetTop - 200, 1300, 1500, 1800, 1900
]
*/
let sectionEnumerator = 9

document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    /*fixedScrollDisplayEl = document.getElementsByClassName("scrollSee")[0]

    fixedScrollDisplayEl.innerHTML = lastKnownScrollPosition
    fixedScrollDisplayEl.innerHTML += "<br>"
    fixedScrollDisplayEl.innerHTML += matches[9].offsetTop*/
    console.log(sectionPixelRanges)
    
    if(Math.round(lastKnownScrollPosition) >= sectionPixelRanges[0]){
        sectionPixelRanges.shift()
        matches[sectionEnumerator].style["animation"] = "fadeIn 1s forwards"
        matches[sectionEnumerator].style["animationDelay"] = "1s"
        sectionEnumerator++;
    }

    if(Math.round(lastKnownScrollPosition) >= sectionPixelRanges[sectionPixelRanges.length - 1] ){
        let timeDelay = 1
        let sectionEnumerator = 0;
         while(sectionEnumerator < 25){
             sectionPixelRanges.shift()
             matches[sectionEnumerator].style["animation"] = "fadeIn 1s forwards"
             matches[sectionEnumerator].style["animationDelay"] = timeDelay.toString() + "s"

             sectionEnumerator++;
             timeDelay = timeDelay + 0.1;
         }
     }
    

        

        

    

    /*if(Math.round(scrollY) >= 200){
    matches[7].style["opacity"] = "0%"
    matches[7].style["animation"] = "fadeIn 1s forwards"
    matches[7].style["animationDelay"] = "1s"
    }
    
    if(Math.round(scrollY) >= 1400){
    matches[8].style["opacity"] = "0%"
    matches[8].style["animation"] = "fadeIn 1s forwards"
    matches[8].style["animationDelay"] = "1s"
    }

    if(Math.round(scrollY) >= 2000){
    matches[9].style["opacity"] = "0%"
    matches[9].style["animation"] = "fadeIn 1s forwards"
    matches[9].style["animationDelay"] = "1s"
    }

    if(Math.round(scrollY) >= 2200){
        matches[10].style["opacity"] = "0%"
    matches[10].style["animation"] = "fadeIn 1s forwards"
    matches[10].style["animationDelay"] = "1s"
    }
    */
   
    /*if(Math.round(scrollY) == 500){
        let bod = document.querySelector('body')
        let comput = window.getComputedStyle(bod)
        if(comput.getPropertyValue('color') == 'rgb(255, 255, 0)'){
            
            document.body.style["animation"] = "colorChange 15s backwards"
            document.body.style["animationDirection"] = "reverse"
        }else if(comput.getPropertyValue('color') == 'rgb(255, 255, 255)'){
            document.body.style["animation"] = "colorChange 15s forwards"
        }
        
    }
    */

    });

    
