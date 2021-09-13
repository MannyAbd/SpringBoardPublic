function countDown(time){
  let num = setInterval(function(){
        time--;
        console.log(time)
         if (time <= 0){
        clearInterval(num)
    }
    }, 1000)
   
}
countDown(5)

function randomGame() {
    let newNum
    let time = 0
    let ranNum = setInterval(function(){
        newNum = Math.random()*1
        time++
      if(newNum >= .75) {
      clearInterval(ranNum)
      console.log("It took "+ time +" times till its greater than .75 and the number is: " + newNum  )
      }
    }, 1000) 
}
randomGame()