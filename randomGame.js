//function randomGame(randomNum){
    //let randomNum =Math.random(num);
   // let counter = randomNum();
   // let tries = setInterval(function(){
   // if(num > .75){
        //console.log()
    //}
//},1000);
//}






//function randomGame(){
    //let num = Math.random();
    //let counter = 0;
    //let numOfTimes = setInterval(function(){
        //counter++;
        //if(num > .75){
            //clearInterval(numOfTimes);
           // console.log(counter);
       // }
    //},1000);
//}


function randomGame(){
    let times = 0;
    let num;
    let numOfTimes = setInterval(function(){
        num = Math.random();
        times++
        if(num > .75){
            console.log(times);
            clearInterval(numOfTimes);
        }
        else{
            if(num < .75);
            console.log("errrr try again");
        }
    },1000);
}


function randomGame(){
    let times= 0;
    let numOfTimes = setInterval(function(){
        let num = Math.random();
        times++
        rolls(num , numOfTimes);
    },1000);

    function rolls(num , numOfTimes){
        if(num < .75){
            console.log (times);
            clearInterval(numOfTimes);
        }
        else{
            console.log("failed try again");
        }
    }
}



