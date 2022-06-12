let number1=Math.ceil(Math.random()*100);
let number2=Math.ceil(Math.random()*100);
document.getElementById("firstNumber").textContent=number1;
document.getElementById("secondNumber").textContent=number2;
document.getElementById("checkButton").onclick=
function()
{
    let userinput=document.getElementById("userInput").value;
    console.log(userinput);
    if(userinput==(number1+number2))
    {
        document.getElementById("gameResult").textContent="Congratulations!You got it right.";
        document.getElementById("gameResult").style.backgroundColor="#028a0f";
    }
    else
    {
        document.getElementById("gameResult").textContent="Please Try Again!";
        document.getElementById("gameResult").style.backgroundColor="#1e217c";
    }
}
document.getElementById("restartButton").onclick=
function()
{
    document.getElementById("gameResult").textContent="";
    number1=Math.ceil(Math.random()*100);
    number2=Math.ceil(Math.random()*100);
    document.getElementById("firstNumber").textContent=number1;
    document.getElementById("secondNumber").textContent=number2;
    document.getElementById("userInput").value="";

    
}
