function randomNumberFunction(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

let randomNumber = randomNumberFunction(1,20)
let HP = 6
document.getElementById("HP").innerHTML = `HP : ${HP}`
document.getElementById("btn").addEventListener('click',()=>{
    let enterNumber = Number(document.getElementById("enterNumber").value)
    let message = document.getElementById("message")
    if(enterNumber && enterNumber >= 0 && enterNumber < 20){
        if(enterNumber > randomNumber){
            message.innerHTML = "to Big try Again!"
            HP--
            document.getElementById("HP").innerHTML = `HP : ${HP}`
            if(HP == 0){
                document.querySelector("body").style.backgroundColor = "red"
                message.innerHTML = "You Lose"
                message.style.color = "red"
                message.style.fontSize = "3rem"
                document.getElementById("btn").disabled = true
            }
        }else if(enterNumber < randomNumber){
            message.innerHTML = "to small try Again!"
            HP--
            document.getElementById("HP").innerHTML = `HP : ${HP}`
            if(HP == 0){
                document.querySelector("body").style.backgroundColor = "red"
                message.innerHTML = "You Lose"
                message.style.color = "red"
                message.style.fontSize = "3rem"
                document.getElementById("btn").disabled = true
            }
        }else{
            message.style.color = "white"
            message.innerHTML = "you have won the game!"
            document.querySelector("body").style.backgroundColor = "orange"
            document.getElementById("btn").disabled = true
        }
    }
})