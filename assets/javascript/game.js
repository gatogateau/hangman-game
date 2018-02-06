

//set up an array with words for Hangman
var dictWords =["place","concerned","door","grip","wacky","ugly","fit","person","travel","collect","boast","wrench","mute","apply","chicken","stone","drain","scrub","trains","double"];
console.log (dictWords.length);



// computer generates random word.  
// gameWord needs to be in the game.
function compWord() {
    var x =Math.floor((Math.random()*dictWords.length));
    document.getElementById("gameWord").innerHTML= dictWords[x];
    console.log (x);
    
    console.log (dictWords[x]);
    return dictWords[x];
    // document.getElementById("playHang").innerHTML = dictWords[x];
};



 //computer entry
            // function compChoice() {
                // var x = Math.floor((Math.random() * computer.length));
                // document.getElementById("pcChoice").innerHTML = computer[x];
                // return computer[x];
            // }

// check player guess against computer random choice
// define compWord

/*var playerLetter;
function playHangman () {
    for (i=0; i<dictWords.length; i++);
        if playerLetter == (compWord.charAt(i));
            console.log (NiceJob")
            return "Nice Job";
        } else {
            console.log ("Fail");
            return "FAIL"
        }
*/