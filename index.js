var readlineSync = require('readline-sync');

var score = 0 ;

console.log( "Hello Friends!" );
console.log("Lets Play A Game : How Much Do You Know Me ? \n");

console.log("About The Game : You will be asked some questions related to myself and lets find out , how much do you know me? \n");

console.log("Rules : For each correct answer , you will get one point and for incorrect answer you will get minus one point \n")

console.log("Lets Start The Game! \n");

console.log("-------------------------------------------\n");

function play( question , answer ){
  // Input
  var userans = readlineSync.question( question );

  //Function Logic
  
  if ( userans === answer ){
    score = score +1 ;
    console.log("you were right!   Score:" ,score );
  }else{
    score = score - 1 ;
    console.log("you were wrong!   Score:",score);
  }
  console.log();
}

play("Where do i work ? " , "Mirraw" );
play("Where do i stay?", "Mumbai") ;
play("Where did i complete my graduation from ?","TSEC");
play("In which year did i graduated?", "2018") ;


console.log("Your Final Score Is "+ score ) ;
console.log("Game Over! Thanks For Playing! ");
