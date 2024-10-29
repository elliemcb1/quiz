var questions = [
    
    "Q0: What  year was disney created ?", 
    "Q1: What  was mickey mouse duck friend called?",  
    "Q2: what was bambies rabbit pal called?",
    "Q3 who was snow whites enemy ",
    "Q4  what was the name of simbas dad",
    "Q5 how mant toy story films are there",
    " Q6 what colour is Mcqueens car",
    " Q7 what was the name of old man in up",
    "Q8 what dose Hakuna Matata mean",
    "Q9 who was Goofys son",
    "Q10 what was the name in high school musical",
  

];

function setQuestions() {
 
    for (var i = 0; i < questions.length; i++) {
        document.getElementById("q" + i).innerHTML = questions[i];
    }
}


function checkAnswers() {

    var ansQ0 = document.getElementById("aq0").value; 
    var ansQ1 = document.getElementById("aq1").value; 
    var ansQ2 = document.getElementById("aq2").value; 
    var ansQ3 = document.getElementById("aq3").value; 
    var ansQ4 = document.getElementById("aq4").value;
    var ansQ5 = document.getElementById("aq5").value;
    var ansQ6 = document.getElementById("aq6").value;
    var ansQ7 = document.getElementById("aq7").value;
    var ansQ8 = document.getElementById("aq8").value;
    var ansQ9 = document.getElementById("aq9").value;
    
    var counter = 0; 

    
    if (ansQ0.toLowerCase() === "1923") {
        counter++; 
        document.getElementById("q0").style.backgroundColor = "green"; 
        document.getElementById("q0").innerHTML = "Correct, 1923"; 
    } else {
        document.getElementById("q0").style.backgroundColor = "red"; 
        document.getElementById("q0").innerHTML = "Incorrect,1923"; 
    }

    if (ansQ1.toLowerCase() === "donald") {
        counter++; 
        document.getElementById("q1").style.backgroundColor = "green"; 
        document.getElementById("q1").innerHTML = "Correct, donald"; 
    } else {
        document.getElementById("q1").style.backgroundColor = "red"; 
        document.getElementById("q1").innerHTML = "Incorrect,donald"; 
    }

    if (ansQ2.toLowerCase() === "thumper") {
        counter++; 
        
        document.getElementById("q2").style.backgroundColor = "green"; 
        document.getElementById("q2").innerHTML = "Correct, thunper"; 
    } else {
        document.getElementById("q2").style.backgroundColor = "red"; 
        document.getElementById("q2").innerHTML = "Incorrect, thumper"; 
    }
    if (ansQ3.toLowerCase() === "evil queen") {
        counter++; 
        
        document.getElementById("q3").style.backgroundColor = "green"; 
        document.getElementById("q3").innerHTML = "Correct, evil queen"; 
    } else {
        document.getElementById("q3").style.backgroundColor = "red"; 
        document.getElementById("q3").innerHTML = "Incorrect, evil queen "; 
    }
    if (ansQ4.toLowerCase() === "mufasa") {
        counter++; 
        
        document.getElementById("q4").style.backgroundColor = "green"; 
        document.getElementById("q4").innerHTML = "Correct,mufasa"; 
    } else {
        document.getElementById("q4").style.backgroundColor = "red"; 
        document.getElementById("q4").innerHTML = "Incorrect, mufasa "; 
    }

    if (ansQ5.toLowerCase() === "4") {
        counter++; 
        
        document.getElementById("q5").style.backgroundColor = "green"; 
        document.getElementById("q5").innerHTML = "Correct, 4"; 
    } else {
        document.getElementById("q5").style.backgroundColor = "red"; 
        document.getElementById("q5").innerHTML = "Incorrect, 4 "; 
    }

    if (ansQ6.toLowerCase() === "red") {
        counter++; 
        
        document.getElementById("q6").style.backgroundColor = "green"; 
        document.getElementById("q6").innerHTML = "Correct, red"; 
    } else {
        document.getElementById("q6").style.backgroundColor = "red"; 
        document.getElementById("q6").innerHTML = "Incorrect, RED "; 
    }
    if (ansQ7.toLowerCase() === "carl") {
        counter++; 
        
        document.getElementById("q7").style.backgroundColor = "green"; 
        document.getElementById("q7").innerHTML = "Correct,carl"; 
    } else {
        document.getElementById("q7").style.backgroundColor = "red"; 
        document.getElementById("q7").innerHTML = "Incorrect, carl "; 
    }

    if (ansQ8.toLowerCase() === "no worries") {
        counter++; 
        
        document.getElementById("q8").style.backgroundColor = "green"; 
        document.getElementById("q8").innerHTML = "Correct,  no worries"; 
    } else {
        document.getElementById("q8").style.backgroundColor = "red"; 
        document.getElementById("q8").innerHTML = "Incorrect,  no worries"; 
    }

    if (ansQ9.toLowerCase() === "max") {
        counter++; 
        
        document.getElementById("q9").style.backgroundColor = "green"; 
        document.getElementById("q9").innerHTML = "Correct, max"; 
    } else {
        document.getElementById("q9").style.backgroundColor = "red"; 
        document.getElementById("q9").innerHTML = "Incorrect, max "; 
    }

    



    document.getElementById("score").innerHTML = "Score: " + counter; 

    if (counter > 6) {
        document.getElementById("congratulationsImage").style.display = "block"; // Show the image
    } else {
        document.getElementById("congratulationsImage").style.display = "none"; // Hide the image
    }
   
}
