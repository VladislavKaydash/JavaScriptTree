function display() {
var myIncome=5;

 for (var i=0; i<myIncome; i++) { 
  var stroka="_";
  var myRandom=0;
  
  if (i%2!==0) {
  myRandom=Math.floor((2*i+1)*Math.random())+1;
  }
	
  for (var j=1; j<=(2*i+1); j++) {
  stroka=stroka+((myRandom==j)?"o":"*");
  }
  
  for (var space=1; space<myIncome-i; space++) {
  stroka=" "+stroka;
  }

  console.log(stroka+"_");
 }
}
display();
