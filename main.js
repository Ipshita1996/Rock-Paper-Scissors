let cscore=0
let pscore=0
function randomselect(arr){
    var rand = arr[Math.floor(Math.random() * arr.length)];
    return rand
}

function computerPlay(playerSelection){
    //"You Lose! Paper beats Rock"
    let sel=playerSelection.toLowerCase()
    let arr=['rock','paper','scissors']
    let computerSelection=randomselect(arr)

    if(computerSelection===playerSelection){
        return ['It\'s a tie!','-1']
    }
    else{
        if(computerSelection==='rock'){
            if(sel==='paper'){
                return ['You Win! Paper beats Rock','1']
            }
            else if(sel==='scissors'){
                return ['You Lose! Rock beats Scissors','0']
            }
        }
        else if(computerSelection==='paper'){
            if(sel==='rock'){
                return ['You Lose! Paper beats Rock','0']
            }
            else if(sel==='scissors'){
                return ['You Win! Scissors beats Paper','1']
            }
        }
        else if(computerSelection==='scissors'){
            if(sel==='rock'){
                return ['You Win! Rock beats Scissors','1']
            }
            else if(sel==='paper'){
                return ['You Lose! Scissors beats Paper','0']
            }
        }
    }

}
function compare(pscore,cscore){
    if(pscore>cscore){
        console.log('You win!')
    }
    else if(cscore>pscore){
        console.log('You lose!')
    }
    else{
        console.log('It\'s a tie!')
    }
}

function game(){
   
    let selection=prompt('Rock, Paper or Scissors? Pick one!')
    results=computerPlay(selection)
    if(results[1]==='-1'){
        console.log(results[0])
        cscore+=1
        pscore+=1
    }
    else if(results[1]==='0'){
        console.log(results[0])
        cscore+=1
    }
    else if(results[1]==='1'){
        console.log(results[0])
        pscore+=1
    }
}

   

var i=5
while(i>0){
    game()
    i--
}
console.log(cscore)
console.log(pscore)
compare(pscore,cscore)


