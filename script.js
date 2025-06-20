function greet() {
  let box = document.getElementsByClassName("jstutor");
  for(let i=0;i<4;i++){
    if (i%2==0){
        box[i].style.backgroundColor="green";
    }
    else{
        box[i].style.backgroundColor="yellow";

    }
  }
}
