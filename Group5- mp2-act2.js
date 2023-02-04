function average(){
  
    let htmlgrade = parseFloat(document.getElementById("htmlgrade").value);
    let cssgrade =parseFloat( document.getElementById("cssgrade").value);
    let javascriptgrade = parseFloat(document.getElementById("javascriptgrade").value);
    let average = (htmlgrade + cssgrade + javascriptgrade) / 3 ;
    
    //if condition for passed and failed
    if (average > 75){
        //if average is higher of 75 
        let averageOutput = document.getElementById("average");
        //display the average and passed
    averageOutput.innerHTML = "The average score is:" + average + "<br>You Passed!";
    } else{
        //else the average is lower than 75 
        let averageOutput = document.getElementById("average");
        //display the average and failed
    averageOutput.innerHTML = "The average score is:" + average + "<br>You Failed!";
    }

  
}