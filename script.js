let adviceNumber = document.querySelector("#adviceNumber")
let adviceText = document.querySelector("#adviceText")
let guessButton = document.querySelector("#dice")

// guessButton.addEventListener("click",getAdvice)

// async function getAdvice(){    
//     let response = await fetch('https://api.adviceslip.com/advice')
//     let data = await response.json()
//     adviceNumber.innerHTML = `Advice # ${data.slip.id}`
//     adviceText.innerHTML = ` '${data.slip.advice}' `
// }


function counter(){
    fetch('https://api.adviceslip.com/advice')
    .then(res =>{
        return res.json()
    }).then( data => {
        adviceNumber.innerHTML = `Advice # ${data.slip.id}`
        adviceText.innerHTML = ` '${data.slip.advice}' `
    }).catch( err => {
        adviceNumber.innerHTML = "---"
        adviceText.innerHTML = "error"
        
    })
}
guessButton.addEventListener('click',counter)