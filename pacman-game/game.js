window.addEventListener("load", function(){

    const startBtn = document.getElementById("start");
    const soundBtn = document.getElementById("sound");
    const score = document.getElementById("score");
    const level = document.getElementById("level");
    let scoreCt = 0;
    let foodCt = 0;
    let levelCt = 1;
    
    startBtn.addEventListener("click", function(){
        
        const pacman = document.getElementById("pacman");
        const pacImg = document.getElementById("pacImg");
        //let food = document.getElementById("food");
        const step = 25;
        const timeDiv = document.getElementById("time");
        let startTime = new Date();
        let interval = window.setInterval(timer, 500);
        //window.clearInterva(interval);
        const uWon = document.getElementById("uWon");
        const gameOver = document.getElementById("gameOver");

        
        pacman.style.left = "0px";
        pacman.style.top = "0px";
        pacImg.style.imageOrientation = "none";
        startBtn.textContent = "RESTART";
     
        function randomPos(factor){
            return (factor * 200 - (Math.floor(Math.random() * 8 + 1) * step)) + 5;
        }

        // board: 600px * 600px / 3*3* 200px * 200px
        // pacman: 25px * 25px, food: 15px * 15px 
        const f=3;
        for (let i = 1; i < f*f+1; i++) {
            
            let leftFactor = i % 3?i % 3:3;
            let posLeft = randomPos(leftFactor);
            let topFactor = (i / 3)<=1?1:((i / 3)<=2?2:3);
            let posTop = randomPos(topFactor);

            if (i<2) {
                if(posLeft<30) posLeft += step;        
                if(posTop<30) posLeft += step;
            }

            let newFood = document.createElement("DIV");
            newFood.setAttribute("class", "food");
            
            newFood.style.left = posLeft + "px";
            newFood.style.top = posTop + "px";

            document.getElementById("board").appendChild(newFood);

            console.log(newFood.style.left + ", " + newFood.style.top);

            foodCt = i;
            // console.log(foodCt);
        }
        
        
        function movePac(e){

            switch (e.key){
                case "ArrowRight": 
                    if (parseInt(pacman.style.left) < 574){
                        pacman.style.left = parseInt(pacman.style.left) + step + "px"; //right
                        pacImg.style.transform = "scaleX(1)";
                    }
                break;
                case "ArrowDown": 
                    if (parseInt(pacman.style.top) < 574){
                        pacman.style.top = parseInt(pacman.style.top) + step + "px"; //down
                        pacImg.style.transform = "rotate(.25turn)";
                    }
                break;
                case "ArrowLeft": 
                    if (parseInt(pacman.style.left) > 0){
                        pacman.style.left = parseInt(pacman.style.left) - step + "px"; //left
                        pacImg.style.transform = "scaleX(-1)";
                    }
                break;
                case "ArrowUp": 
                    if (parseInt(pacman.style.top) > 0){
                        pacman.style.top = parseInt(pacman.style.top) - step + "px"; //up
                        pacImg.style.transform = "rotate(.75turn)";
                    }
                break;
            }


            let foods = document.querySelectorAll(".food");
            
            for (let i = 0, len = foods.length; i < len; i++){
                if (((parseInt(pacman.style.left) + 5) == parseInt(foods[i].style.left)) && ((parseInt(pacman.style.top) + 5) == parseInt(foods[i].style.top))){
                    foods[i].style.visibility = "hidden";
                    scoreCt +=1;
                    score.textContent = scoreCt;

                    if(scoreCt === foodCt){
                        uWon.style.visibility = "visible";
                    }
                }
            }
            timer();
        }


        function timer() {
            endTime = new Date();
            let timeDiff = endTime - startTime; //in ms
            // strip the ms
            timeDiff /= 1000;
                
            // get seconds 
            let seconds = Math.round(timeDiff);
            // console.log(seconds + " seconds");

            timeDiv.innerText = "0:" + (30 - seconds);
            if (seconds > 29){
                window.clearInterval(interval);
                console.log("vége");
                gameOver.style.visibility = "visible";
            }
        }


        window.addEventListener("keydown", movePac);

    });
    

    sound = document.createElement("audio");
    sound.src = "./sound/PacManThemeRemix.mp3";
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.volume = 0.05;
    sound.style.display = "none";
    document.body.appendChild(this.sound);
    let soundStatus = false;

    soundBtn.addEventListener("click", function(){
        if (soundStatus === false){
            soundBtn.textContent = "SOUND OFF"
            soundStatus = true;
            sound.play();
        } else {
            soundBtn.textContent = "SOUND ON"
            soundStatus = false;
            sound.pause();
        }
    });
    
});


initGame();

function initGame() {
    // Your game can start here, but define separate functions, don't write everything in here :)
}
