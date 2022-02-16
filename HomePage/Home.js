
function allLocationMinAndInternetcheck(){
  var detect = navigator.onLine;

  if(detect == false){
    document.getElementById("onlineCheckMainDiv").style = "display : flex";
  }
  if(detect == true){
    var detect = navigator.onLine;
    document.getElementById("onlineCheckMainDiv").style = "display: none";
  }


  var max = document.getElementsByClassName("discription-and-date-time-div");

  for(var x = 0; x < max.length; x++){
    max[x].style =  "display : none";
  }
}

function minFunction(){
  document.getElementById("min").style = "display:none";

  document.getElementById("max").style = "display:display";

  var min = document.getElementsByClassName("discription-and-date-time-div");

  for(var x = 0; x < min.length; x++){
    min[x].style =  "display : none;";
  }
}

function maxFunction(){
  document.getElementById("max").style = "display: none";

  document.getElementById("min").style = "display:display";

  var max = document.getElementsByClassName("discription-and-date-time-div");

  for(var x = 0; x < max.length; x++){
    max[x].style =  "display : display";
  }
}


// loging page

function showLoging(){
  document.getElementById("login").style = "display: flex;"
}

function closeLoging(){
  document.getElementById("login").style = "display: none;"
}

function logIn(){
  if(document.getElementById("IDuserName").value == ""){
    document.myForm.userName.focus();
    alert("Please Enter User Name.");
    return false;
  }

  else if(document.getElementById("passwordFeeld").value == ""){
    document.myForm.password.focus();
    alert("Please Enter Password.");
    return false;
  }

  else{
    var userName = document.getElementById("IDuserName").value;

    document.getElementById("log-span").style = "display: none";

    document.getElementById("logingDitailsName").style = "display: display;"
    
    document.getElementById("logingDitailsName").innerHTML = userName;

    document.getElementById("logingDitailsUser").style="display:display";
  
    document.getElementById("login").style = "display: none;"

    document.getElementById("exit").style = "display: display;"

    // ***************** in under code is loging details code

  
    document.getElementById("loging-details-display-name").innerHTML = userName;
    
  }
  
}

function logingDitails(){

  document.getElementById("loging-details-main-div").style = "display:block"
}

function closeDetailsTab(){
  document.getElementById("loging-details-main-div").style = "display:none"
}

//Home page contant search

function noneDisplayAll(){
  document.getElementById("001a").style = "display:none";
  document.getElementById("002a").style = "display:none";
  document.getElementById("003a").style = "display:none";
  document.getElementById("004a").style = "display:none";
  document.getElementById("005a").style = "display:none";
  document.getElementById("006a").style = "display:none";
  document.getElementById("007a").style = "display:none";
  document.getElementById("008a").style = "display:none";
  document.getElementById("009a").style = "display:none";
  document.getElementById("0010a").style = "display:none";
  document.getElementById("0011a").style = "display:none";
  document.getElementById("0012a").style = "display:none";
  document.getElementById("0013a").style = "display:none";
  document.getElementById("0014a").style = "display:none";
  document.getElementById("0015a").style = "display:none";
  document.getElementById("0016a").style = "display:none";
  document.getElementById("0017a").style = "display:none";
}

function displayAll(){
  document.getElementById("001a").style = "display:display";
  document.getElementById("002a").style = "display:display";
  document.getElementById("003a").style = "display:display";
  document.getElementById("004a").style = "display:display";
  document.getElementById("005a").style = "display:display";
  document.getElementById("006a").style = "display:display";
  document.getElementById("007a").style = "display:display";
  document.getElementById("008a").style = "display:display";
  document.getElementById("009a").style = "display:display";
  document.getElementById("0010a").style = "display:display";
  document.getElementById("0011a").style = "display:display";
  document.getElementById("0012a").style = "display:display";
  document.getElementById("0013a").style = "display:display";
  document.getElementById("0014a").style = "display:display";
  document.getElementById("0015a").style = "display:display";
  document.getElementById("0016a").style = "display:display";
  document.getElementById("0017a").style = "display:display";
}

function search(){
  var searchValue01 = document.getElementById("serch-input").value;
  console.log(searchValue01);

  searchValue02 = searchValue01.replace(' ','');
  console.log(searchValue02);

  var searchValue = searchValue02.toLowerCase();
  
  console.log(searchValue);

  noneDisplayAll();

  var element = document.getElementsByClassName(searchValue);
  console.log('print element');
  console.log(element);

  if(element.length<1){
    alert("Sorry, Unable to found");
    displayAll();
  }

  else{
    for(var x = 0; x < element.length; x++){
      element[x].style =  "display : display";
    }
    var element = document.getElementById("main-third-div");
    element.scrollIntoView(); 
  }

}

// selecttion - part

function maxFilter(){
  document.getElementById("filter-big").style="display: block";
  document.getElementById("filter-Max-Button").style="display: none";

}

function filterBigClise(){
  document.getElementById("filter-big").style="display: none";
  document.getElementById("filter-Max-Button").style="display: display";
}

// select province

function searchSelect(){

  document.getElementById("selectBox2").value = "notSelect";
  
  var searchValue = document.getElementById("selectBox").value;
  console.log(searchValue);


  noneDisplayAll();

  var element = document.getElementsByClassName(searchValue);


  if(element.length<1){
    alert("Sorry");
    displayAll();
  }

  else{
    for(var x = 0; x < element.length; x++){
      element[x].style =  "display : display";
    }
    var element = document.getElementById("main-third-div");
  }

}


// select district

function searchSelectDis(){

  document.getElementById("selectBox").value = "notSelect";

  var searchValue = document.getElementById("selectBox2").value;


  noneDisplayAll();

  var element = document.getElementsByClassName(searchValue);

  // console.log(element);

  if(element.length<1){
    alert("Sorry");
    displayAll();
  }

  else{
    for(var x = 0; x < element.length; x++){
      element[x].style =  "display : display";
    }
    var element = document.getElementById("main-third-div");
  }

}

function clearechoose(){
  displayAll();
  document.getElementById("selectBox").value = "notSelect";
  document.getElementById("selectBox2").value = "notSelect";
}