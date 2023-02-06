function randomAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(res =>res.json())
    .then(res=> {
        adviceId = JSON.stringify(res.slip.id)
        adviceContent = JSON.stringify(res.slip.advice)

        document.getElementById("adviceId").innerHTML = "ADVICE #" + adviceId;
        document.getElementById("adviceContent").innerHTML = adviceContent
    })
}

randomAdvice()

