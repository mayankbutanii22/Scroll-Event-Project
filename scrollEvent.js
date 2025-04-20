window.addEventListener("scroll",function(){
    console.log("Scrolling");
});

window.addEventListener("wheel",function(event){
      if(event. deltaY < 0){
        console.log("Scrolling Up ...");
      }else if(event.deltaY>0){
        console.log("Scrolling Down ...");
      }
});

window.addEventListener("scroll",function(){
       if(window.pageYOffset  > 400){
        console.log("Over 400px ...");
       }else{
        console.log("Under 400px ...");
       }
});

window.addEventListener("scroll",function(){
    if(window.pageYOffset > 400){
        this.document.body.style.background="black";
        this.document.body.style.color="white";
    }else{
        this.document.body.style.background="white";
        this.document.body.style.color="black";
    }
})