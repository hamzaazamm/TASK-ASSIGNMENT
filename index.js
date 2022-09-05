Question 1 Find out if number is  prime number or not


var number=parseInt(prompt("enter the positive number"));
let prime=true;
if(number==1){
    alert("neither a prime nor a composite");
}
else if(number>=2){
    for(let i=2;number>i;i++){
        if(number%i==0){
            prime=false;
            break;
}
}
if(prime==true){
    alert("its is a prime number");
}
else{
    alert("its is not a prime number");
}
}
else{
    alert("its is not a prime number");
}







Question 2 Check an alphabet is a vowel or not


var alphabets=prompt("enter any alphabets ");
if(alphabets=='a' || alphabets=='e'|| alphabets=='i' || alphabets=='o' || alphabets=='u' || alphabets=='A' || alphabets=='E'|| alphabets=='I' || alphabets=='O' || alphabets=='U') {
    alert("its is a vowel alphabet ")
}
else{
    alert("its is not a vowel alphabet ")
}





Question 3 Check number is positive or negative


var number=parseInt(prompt("enter any number"));
if(number>0){
    alert("its is positive");
}
else if(number==0){
    alert("it is zero");
}
else{
    alert("it is a negative number");
}



Question 4 Check if number is  even or odd using parseint



var number=parseInt(prompt("check number is even or odd"));
if(number%2==0){
    alert("it is even");
}
else{alert("it is odd")}


Question 5 Generate triangle 



var n = 7;
let string = "";
for(let i = 1; i < n; i++) {

    for(let j = i; j < n; j++) {
        string += " "; 
    }
  for(let k = 1; k < i; k++) { 
    string += "*";
  }
  for(let l = 0; l < i; l++) { 
    string += "*";
  }
    string += "\n";
}
console.log(string);


