// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.
"use strict";
function verse1(){
    let output = "";
    // your code here
    let line1 = "Somebody once told me the world is gonna roll me<br>";
    let line2 = "I ain't the sharpest tool in the shed<br>";
    let line3 = "She was looking kind of dumb with her finger and her thumb<br>";
    let line4 = "In the shape of an \"L\" on her forehead<br>";
    output = `<p>${line1} ${line2} ${line3} ${line4}</p>`;
    return output;
}

function verse2(){
    let output = '';
    // your code here
    let line1 = "Well the years start coming and they don't stop coming<br>";
    let line2 = "Fed to the rules and I hit the ground running<br>";
    let line3 = "Didn't make sense not to live for fun<br>";
    let line4 = "Your brain gets smart but your head gets dumb<br>";
    let line5 = "So much to do, so much to see<br>";
    let line6 = "So what's wrong with taking the back streets?<br>";
    let line7 = "You'll never know if you don't go<br>";
    let line8 = "You'll never shine if you don't glow<br>";
    output = `<p>${line1} ${line2} ${line3} ${line4} ${line5} ${line6} ${line7} ${line8}</p>`;
    return output;
}

function verse3(){
    let output = '';
    // your code here
    let line1 = "It's a cool place and they say it gets colder<br>";
    let line2 = "You're bundled up now, wait till you get older<br>";
    let line3 = "But the meteor men beg to differ<br>";
    let line4 = "Judging by the hole in the satellite picture<br>";
    let line5 = "The ice we skate is getting pretty thin<br>";
    let line6 = "The water's getting warm so you might as well swim<br>";
    let line7 = "My world's on fire, how about yours?<br>";
    let line8 = "That's the way I like it and I never get bored<br>";
    output = `<p>${line1} ${line2} ${line3} ${line4} ${line5} ${line6} ${line7} ${line8}</p>`;
    return output;
}

function verse4(){
    let output = '';
    // your code here
    let line1 = "Somebody once asked could I spare some change for gas?<br>";
    let line2 = "I need to get myself away from this place<br>";
    let line3 = "I said yep what a concept<br>";
    let line4 = "I could use a little fuel myself<br>";
    let line5 = "And we could all use a little change<br>";
    output = `<p>${line1} ${line2} ${line3} ${line4} ${line5}</p>`;
    return output;
}

function chorus1(){
    let output = '';
    // your code here
    let line1 = "Hey now, you're an all-star, get your game on, go play<br>";
    let line2 = "Hey now, you're a rock star, get the show on, get paid<br>";
    let line3 = "And all that glitters is gold<br>";
    let line4 = "Only shooting stars break the mold<br>";
    output = `<p>${line1} ${line2} ${line3} ${line4}</p>`;
    return output;
}

function verse5(){
    let output = '';
    let line1 = "And all that glitters is gold<br>";
    let line2 = "Only shooting stars break the mold<br>";
    output = `<p>${line1} ${line2}</p>`;
    return output;
}



function main(){
    let finalOutput = ''; // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags
    finalOutput = verse1() + verse2() + chorus1() + verse3() + chorus1() + chorus1() + verse4() + verse2() + chorus1() + verse5();
    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}