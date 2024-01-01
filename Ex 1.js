function countDown(num){
    let timer = setInterval(function(){
        if(num > 0){
            console.log(num);
            num--;
        }
        else{
            clearInterval(timer);
            console.log(`Done!`);
        }
    }, 1000)
}

function randomGame(){
    let loop = true;
    let counter = 0;

    let timer = setInterval(function(){
        let num = Math.random();
        counter++;

        if(num > 0.75){
            loop = false;
            console.log(counter);
            clearInterval(timer);
        }
    }, 1000);
}