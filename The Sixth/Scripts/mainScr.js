const matches = document.querySelectorAll(".fade")
let i = 0
for(match of matches){
    match.style["opacity"] = "0%"
    match.style["animation"] = "fadeIn 1s forwards"
    match.style["animationDelay"] = i.toString() + "s"
    i = i+1
    if(i == 7){
        break
    }
}

function toggleDisplay(){
    let elBackstory = document.getElementsByClassName("backStory")[0] 
    elBackstory.classList.toggle("show")
    elBackstory.style["animationDelay"] = "0s"

}

let lastKnownScrollPosition = 0;
let sectionPixelRanges = [
    200, 1400, 2000, 2100
]
let sectionEnumerator = 7

document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    
    document.getElementsByClassName("scrollSee")[0].innerHTML = lastKnownScrollPosition

    
    if(Math.round(scrollY) >= sectionPixelRanges[sectionPixelRanges.length - 1]){
        let timeDelay = i
         while(sectionEnumerator != 11){
             sectionPixelRanges.shift()
             matches[sectionEnumerator].style["animation"] = "fadeIn 1s forwards"
             matches[sectionEnumerator].style["animationDelay"] = timeDelay.toString() + "s"
             sectionEnumerator++;
             timeDelay++;
         }
     }
    

        if(Math.round(scrollY) >= sectionPixelRanges[0]){
            sectionPixelRanges.shift()
            matches[sectionEnumerator].style["animation"] = "fadeIn 1s forwards"
            matches[sectionEnumerator].style["animationDelay"] = "1s"
            sectionEnumerator++;
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
    });

