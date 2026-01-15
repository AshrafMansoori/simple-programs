 let score =JSON.parse(localStorage.getItem('score'))||
    {wins:0,
        losses:0,
        ties:0,
    };
      
update();


    let com='';
   function cov()
   {
      
    
    const c=Math.random();
    if(c>=0 && c<1/3){
        return'rock';
        }
        else if(c>=1/3 && c<2/3){
            return'paper';
        }
        else if(c>=2/3 && c<1){
            return'scissor';
        }

   }
   let result='';
  
   function res(a )
   { 
    com= cov();
    if(a==='rock'){
     if(com === 'rock'){
           result='Tie.'
        }
        else if(com === 'paper'){
           result='you lose!'
        }
        else if(com === 'scissor'){
            result='you win!'
        }} 

        else if(a==='paper'){
                if(com === 'rock'){
                    result='you win!'
                }
                else if(com === 'paper'){
                    result='Tie.'
                }
                else if(com === 'scissor'){
                     result='you lose!'
                }}
 
         else if(a==='scissor'){
                if(com === 'rock'){
                    result='you lose!'
                }
                else if(com === 'paper'){
                    result='you win!'
                }
                else if(com === 'scissor'){
                    result='Tie.'
                }
            }
        if(result==='Tie.'){
            score.ties+=1;

        }
       else if(result==='you lose!'){
            score.losses+=1;

        }
        else if(result==='you win!'){
            score.wins+=1;

        }
        localStorage.setItem('score',JSON.stringify(score));
      show();
      tell(a)
 update();
   
   }
   function update(){
  document.querySelector(".p1").innerHTML=` wins:-${score.wins} losses:-${score.losses} ties:-${score.ties}` 
     }  
   function show(){
    document.querySelector('.p3').innerHTML=result;
   }


     function tell(b){
        const images = {
    rock: "images/rock-emoji.png",
    paper: "images/paper-emoji.png",
    scissor: "images/scissors-emoji.png"
  };
     
     
      document.querySelector('.p2').innerHTML=`you choose <img src="${images[b]}" height="50"  style=" vertical-align:middle; "alt="">computer choose  <img src="${images[com]}" height="50" style=" vertical-align:middle; " alt="">`
      
     }

  

     let atplay=false;
        let interval;
    function autogame(){
        
        if(!atplay){
        interval=setInterval(
            function(){
                let pm= cov();
                res(pm);
            },500
        );
        atplay=true;
    }
    else{
        clearInterval(interval);
        atplay=false

    }
    }