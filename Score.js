var score=prompt("what is your score");
score=parseInt(score);

if(score>=101){
    console.log("Your are not enter a percentile range ")
}
else if (score==80 || score>80){
    alert("Grade A+")
    if (score==85 || score>85){
        alert("REWARD $100")
    }
    else{
        alert("reward $20")
    }
}
else if(score==70 || score>70){
    alert("Grade A");
}
else if (score==60 || score>60){
    alert("Grade B")
}
else if (score==50 || score>50){
    alert("Grade C")
}
else {
    alert("failed");
}