


    function countDown(number){
        let logNums = setInterval(function(){
           if(number > 0){
             number--;
             console.log(number);
           }
           else{
                if(number < 0 );
                console.log("DONE!");
                clearInterval(logNums);
            
            }
           } ,1000);
        }
