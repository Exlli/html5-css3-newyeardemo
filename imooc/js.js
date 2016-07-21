window.onload = function(){
  var music = document.getElementById("music");
  var audio = document.getElementsByTagName("audio")[0];
  var page1 = document.getElementById("page1");
      page2 = document.getElementById("page2");
      page3 = document.getElementById("page3");

  //当音乐停止时，停止转动
  audio.addEventListener("ended",function(event){
    music.setAttribute("class","");
  },false);

  //点击时，音乐停止
  // music.onclick = function(){
  //   if(audio.paused)
  //   {
  //     audio.play();
  //     //this.setAttribute("class","play");
  //     this.style.animationPlayState = "running";
  //   }
  //   else
  //   {
  //     audio.pause();
  //     //this.setAttribute("class","");
  //     this.style.animationPlayState = "paused";
  //   }
      
  // }

  music.addEventListener("touchstart",function(event){
    if(audio.paused)
    {
      audio.play();
      this.setAttribute("class","play");
      //this.style.animationPlayState = "running";
    }
    else
    {
      audio.pause();
      this.setAttribute("class","");
      //this.style.animationPlayState = "paused";
    }
  },false);


  page1.addEventListener("touchstart",function(event){
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "block";
    page3.style.top = "100%";

    setTimeout(function(){
      page2.setAttribute("class","page2 fadeOut");
      page3.setAttribute("class","page3 fadeIn");
    }, 5500);
  },false);
};