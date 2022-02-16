function onloadFunction(){
  document.getElementById("news1").style = "background-color:rgba(247, 247, 247, 0.685)";

  document.getElementById("news2A").style = "display:none";
  document.getElementById("news3A").style = "display:none";
}


function showNews(x){
  document.getElementById("news1A").style = "display:none";
  document.getElementById("news2A").style = "display:none";
  document.getElementById("news3A").style = "display:none";
  

  if(x == 1){
    // not high light
    document.getElementById("news2").style = "background-color:rgba(77, 77, 77, 0.418)";
    
    document.getElementById("news3").style = "background-color:rgba(77, 77, 77, 0.418)";


    // high light
    // document.getElementById("news1").style = "display:block";
    document.getElementById("news1").style = "display:block; background-color:rgba(247, 247, 247, 0.685)";

    document.getElementById("news1A").style = "display:block";

  }

  else if(x == 2){
    // not high light
    document.getElementById("news1").style = "background-color:rgba(77, 77, 77, 0.418)";
    
    document.getElementById("news3").style = "background-color:rgba(77, 77, 77, 0.418)";


    // high light
    // document.getElementById("news1").style = "display:block";
    document.getElementById("news2").style = "display:block; background-color:rgba(247, 247, 247, 0.685)";

    document.getElementById("news2A").style = "display:block";

  }

  else if(x == 3){
    // not high light
    document.getElementById("news1").style = "background-color:rgba(77, 77, 77, 0.418)";
    
    document.getElementById("news2").style = "background-color:rgba(77, 77, 77, 0.418)";


    // high light
    // document.getElementById("news1").style = "display:block";
    document.getElementById("news3").style = "display:block; background-color:rgba(247, 247, 247, 0.685)";

    document.getElementById("news3A").style = "display:block";
  }
}