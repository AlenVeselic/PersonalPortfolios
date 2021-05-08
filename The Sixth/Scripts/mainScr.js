const matches = document.querySelectorAll("div[class] div[id]")
let i = 0
for(match of matches){
    match.style["animationDelay"] = i.toString() + "s"
    i = i+1
}

function toggleDisplay(){
    let elBackstory = document.getElementsByClassName("backStory")[0] 
    elBackstory.classList.toggle("show")
    elBackstory.style["animationDelay"] = "0s"

}

