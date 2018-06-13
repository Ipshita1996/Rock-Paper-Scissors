let cscore=0
let pscore=0
let selection=null
let count=0
let modal = document.getElementById('myModal');

function randomselect(arr){
    var rand = arr[Math.floor(Math.random() * arr.length)];
    return rand
}

function rock(){
    selection='rock'
    game()
    count+=1
    if(count===5){
        compare(pscore,cscore)
        modal.style.display = "block";
    }
}

function paper(){
    selection='paper'
    game()
    count+=1
    if(count===5){
        compare(pscore,cscore)
        modal.style.display = "block";
    }
}
function scissors(){
    selection='scissors'
    game()
    count+=1
    if(count===5){
        compare(pscore,cscore)
        modal.style.display = "block";
    }
}

function computerPlay(playerSelection){
    sel=selection
    let arr=['rock','paper','scissors']
    let computerSelection=randomselect(arr)

    if(computerSelection===playerSelection){
        return ['T','-1']
    }
    else{
        if(computerSelection==='rock'){
            if(sel==='paper'){
                return ['W','1']
            }
            else if(sel==='scissors'){
                return ['L','0']
            }
        }
        else if(computerSelection==='paper'){
            if(sel==='rock'){
                return ['L','0']
            }
            else if(sel==='scissors'){
                return ['W','1']
            }
        }
        else if(computerSelection==='scissors'){
            if(sel==='rock'){
                return ['W','1']
            }
            else if(sel==='paper'){
                return ['L','0']
            }
        }
    }

}
function compare(pscore,cscore){
    if(pscore>cscore){
        document.getElementById('mytext').innerHTML='You win!'
    }
    else if(cscore>pscore){
        document.getElementById('mytext').innerHTML='You lose!'
    }
    else{
        document.getElementById('mytext').innerHTML='It\'s a tie!'
    }
}

function refresh(){
    window.location.reload();
}

function game(){
    console.log(selection)
    results=computerPlay(selection)
    if(results[1]==='-1'){
        cscore+=1
        pscore+=1
        if(count==0){
            //round1
            document.getElementById('R1Y').innerHTML='T'
            document.getElementById('R1C').innerHTML='T'
        }
        else if(count==1){
            //round 2
            document.getElementById('R2Y').innerHTML='T'
            document.getElementById('R2C').innerHTML='T'
        }
        else if(count==2){
            //round3
            document.getElementById('R3Y').innerHTML='T'
            document.getElementById('R3C').innerHTML='T'
        }
        else if(count==3){
            //round4
            document.getElementById('R4Y').innerHTML='T'
            document.getElementById('R4C').innerHTML='T'
        }
        else if(count==4){
            //round5
            document.getElementById('R5Y').innerHTML='T'
            document.getElementById('R5C').innerHTML='T'
        }
        
    }
    else if(results[1]==='0'){
        cscore+=1
        if(count==0){
            //round1
            document.getElementById('R1Y').innerHTML='L'
            document.getElementById('R1C').innerHTML='W'
        }
        else if(count==1){
            //round 2
            document.getElementById('R2Y').innerHTML='L'
            document.getElementById('R2C').innerHTML='W'
        }
        else if(count==2){
            //round3
            document.getElementById('R3Y').innerHTML='L'
            document.getElementById('R3C').innerHTML='W'
        }
        else if(count==3){
            //round4
            document.getElementById('R4Y').innerHTML='L'
            document.getElementById('R4C').innerHTML='W'
        }
        else if(count==4){
            //round5
            document.getElementById('R5Y').innerHTML='L'
            document.getElementById('R5C').innerHTML='W'
        }
    }
    else if(results[1]==='1'){
        pscore+=1
        if(count==0){
            //round1
            document.getElementById('R1Y').innerHTML='W'
            document.getElementById('R1C').innerHTML='L'
        }
        else if(count==1){
            //round 2
            document.getElementById('R2Y').innerHTML='W'
            document.getElementById('R2C').innerHTML='L'
        }
        else if(count==2){
            //round3
            document.getElementById('R3Y').innerHTML='W'
            document.getElementById('R3C').innerHTML='L'
        }
        else if(count==3){
            //round4
            document.getElementById('R4Y').innerHTML='W'
            document.getElementById('R4C').innerHTML='L'
        }
        else if(count==4){
            //round5
            document.getElementById('R5Y').innerHTML='W'
            document.getElementById('R5C').innerHTML='L'
        }
    }
}


