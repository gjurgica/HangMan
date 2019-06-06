let inputs = {
    gameDiv: document.querySelector(".game"),
    chouseBox: document.querySelector(".choise-box"),
    chouseDiv: document.querySelector(".choise"),
    hiddenDiv: document.querySelector(".hidden-word"),
    againBtn: document.querySelector(".again-btn"),
    lettersBox: document.querySelector(".letters-box"),
    animationBox: document.querySelector("#svg-element"),
    allLetters: document.getElementsByClassName("letter")
}
let selectedWord = [];
let underscoreArr = [];
let play = true;
let wrongLetter = 0;
let countChar = 0;
let movies = ["The Godfather"," The Shawshank Redemption","Schindler's List","Raging Bull","Casablanca","Citizen Kane",
"Gone with the Wind","The Wizard of Oz","One Flew Over the Cuckoo's Nest","Lawrence of Arabia"];
let characters = ["Atticus Finch","Buzz Lightyear","Captain America","Captain Jack Sparrow","Dirty Harry Callahan","Edward Scissorhands",
"Forrest Gump","Freddy Krueger","Han Solo","Michael Corleone"];
let books = ["Don Quixote","The Divine Comedy","The Adventures of Huckleberry Finn","Alice's Adventures in Wonderland","To the Lighthouse","Gulliver's Travels",
" One Thousand and One Nights","David Copperfield","The Sun Also Rises","Death on the Nile"];
let authors = ["Agatha Christie","William Shakespeare","Edgar Allan Poe","J. R. R. Tolkien","Mark Twain","Dante Alighieri",
"Ernest Hemingway","Oscar Wilde","Jules Verne","Johann Wolfgang von Goethe"];
inputs.gameDiv.style.display = "none";

let servis = {
    changeView: function(){
        inputs.chouseDiv.style.display = "none";
        inputs.gameDiv.style.display = "block";
    },
    makeUnderScore: function(){
        for(letter of selectedWord){
            if(letter === " "){
                underscoreArr.push( "\u00A0\u00A0");
            }if(letter === "'"){
                underscoreArr.push( "'");
            }
            if(letter !== " " && letter !== "'"){
                underscoreArr.push( "_\u00A0");
                countChar++;
            }
        }  
        for(let i=0;i<underscoreArr.length;i++){
            inputs.hiddenDiv.innerHTML += `${underscoreArr[i]}`
        }                                                                    
    },
    removingSelectedWord: function(word,arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i] === word){
                arr.splice(arr[i],1);
            }
        }
    },
    enableAllBtn: function(){
        for(letter of inputs.allLetters){
            letter.disabled = false;
            letter.style.backgroundColor = "#e4ea8c"; 
        }
    },
    disabledAllBtn: function(){
        for(letter of inputs.allLetters){
            letter.disabled = true; 
        }
    } 
    
}

inputs.chouseBox.addEventListener("click",function(e){
    if(e.target.value === "Movies"){
        servis.changeView();
        selectedWord = movies[Math.floor(Math.random()*movies.length)].toLocaleUpperCase();
        servis.makeUnderScore();
        servis.removingSelectedWord(selectedWord,movies);
      
    }
    else if(e.target.value === "Characters"){
        servis.changeView();
        selectedWord = characters[Math.floor(Math.random()*characters.length)].toUpperCase();
        servis.makeUnderScore();
        servis.removingSelectedWord(selectedWord,characters);
    }
    else if(e.target.value === "Books"){
        servis.changeView();
        selectedWord = books[Math.floor(Math.random()*books.length)].toUpperCase();
        servis.makeUnderScore();
        servis.removingSelectedWord(selectedWord,books);
    }
    else if(e.target.value === "Autors"){
        servis.changeView();
        selectedWord = authors[Math.floor(Math.random()*authors.length)].toUpperCase();
        servis.makeUnderScore();
        servis.removingSelectedWord(selectedWord,authors);
    }
    else{
        return;
    }
});
inputs.againBtn.addEventListener("click",function(){
        inputs.chouseDiv.style.display = "block";
        inputs.gameDiv.style.display = "none";
        inputs.hiddenDiv.innerHTML = "";
        inputs.animationBox.innerHTML = "";
        underscoreArr = [];
        wrongLetter = 0;
        countChar = 0;
        servis.enableAllBtn();
});
inputs.lettersBox.addEventListener("click",function(e){
    console.log(selectedWord)
    if(e.target.value !== undefined){
        if(selectedWord.includes(e.target.value)){
            for(let i=0;i<selectedWord.length;i++){
                if(selectedWord[i] === e.target.value){
                    underscoreArr[i] = e.target.value;
                    inputs.hiddenDiv.innerHTML = underscoreArr.join(" ");
                    document.getElementById(e.target.value).disabled = true;
                    document.getElementById(e.target.value).style.backgroundColor = "#3f6c45";
                    countChar --;
                }
            }
            console.log(countChar)
            if(countChar === 0){
                inputs.hiddenDiv.innerHTML = `<h1>You Win</h1>`
                servis.disabledAllBtn();
            }
        }else{
                wrongLetter ++;
                document.getElementById(e.target.value).disabled = true;
                document.getElementById(e.target.value).style.backgroundColor = "#3f6c45";
                if(wrongLetter === 1){
                    inputs.animationBox.innerHTML += `
                    <line x1="50" y1="47" x2="50" y2="500" style="stroke:black;stroke-width:5; fill:none"/>   
            `
                }
                else if(wrongLetter === 2){
                    inputs.animationBox.innerHTML += `
                    <line  x1="150" y1="50" x2="50" y2="50" style="stroke:black; stroke-width:5; fill:none"/>   
            `
                }
                else if(wrongLetter === 3){
                    inputs.animationBox.innerHTML += `
                    <line x1="150" y1="47" x2="150" y2="100" style="stroke:black;stroke-width:5; fill:none"/>   
            `
                }
                else if(wrongLetter === 4){
                    inputs.animationBox.innerHTML += `
                    <circle cx="150" cy="100" r="20"
                                    stroke="black" stroke-width="4" fill="white" />   
            `
                }
                else if(wrongLetter === 5){
                    inputs.animationBox.innerHTML += `
                    <line x1="150" y1="120" x2="150" y2="200" style="stroke:black;stroke-width:5; fill:none"/>   
            ` 
                }
                else if(wrongLetter === 6){
                    inputs.animationBox.innerHTML += `
                    <line x1="150" y1="120" x2="200" y2="150" style="stroke:black;stroke-width:5; fill:none"/>   
            `  
                }
                else if(wrongLetter === 7){
                    inputs.animationBox.innerHTML += `
                    <line x1="150" y1="120" x2="100" y2="150" style="stroke:black;stroke-width:5; fill:none"/>   
            `  
                }
                else if(wrongLetter === 8){
                    inputs.animationBox.innerHTML += `
                    <line x1="150" y1="200" x2="200" y2="250" style="stroke:black;stroke-width:5; fill:none"/>   
            `  
                }
                else if(wrongLetter === 9){
                    inputs.animationBox.innerHTML += `
                    <line x1="150" y1="200" x2="100" y2="250" style="stroke:black;stroke-width:5; fill:none"/>   
            `
                    inputs.hiddenDiv.innerHTML = `
                    <h1>You Lose</h1>   
            ` 
                }
            
        }
    
    }
})