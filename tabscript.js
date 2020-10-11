function openTab(evt, evtName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(evtName).style.display = "block";
  evt.currentTarget.className += " active";
}

function showImages(){
  var SEMimages = document.getElementById("SEMimages");
  var OL = document.getElementById("OL");
  var Col = document.getElementById("Col");
  var SEMguides = document.getElementById("SEMguides");
  var SEMmods = document.getElementById("SEMmods");
  if (SEMimages.style.display === "none") {
    SEMguides.style.display = "none";
    SEMmods.style.display = "none";
    OL.style.display = "none";
    Col.style.display = "none";
    SEMimages.style.display = "table";
  }
  else {
    SEMimages.style.display = "none";
  }
}

function showGuides(){
  var SEMimages = document.getElementById("SEMimages");
  var SEMguides = document.getElementById("SEMguides");
  var OL = document.getElementById("OL");
  var Col = document.getElementById("Col");
  var SEMmods = document.getElementById("SEMmods");
  if (SEMguides.style.display === "none") {
    SEMimages.style.display = "none";
    SEMmods.style.display = "none";
    SEMguides.style.display = "block";
    OL.style.display = "block";
  }
  else {
    SEMguides.style.display = "none";
    OL.style.display = "none";
    Col.style.display = "none";
  }
}

function showMods(){
  var SEMimages = document.getElementById("SEMimages");
  var SEMguides = document.getElementById("SEMguides");
  var SEMmods = document.getElementById("SEMmods");
  var OL = document.getElementById("OL");
  var Col = document.getElementById("Col");
  if (SEMmods.style.display === "none") {
    OL.style.display = "none";
    Col.style.display = "none";
    SEMimages.style.display = "none";
    SEMguides.style.display = "none";
    SEMmods.style.display = "block";
  }
  else {
    SEMmods.style.display = "none";
  }
}

function openDoc(evt, docName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("guides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("guidetab");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(docName).style.display = "block";
  evt.currentTarget.className += " active";
}

function showImagesHydro(){
  var HydroImg = document.getElementById("HydroImg");
  var HydroParts = document.getElementById("HydroParts");
  var HydroWeb = document.getElementById("HydroWeb");
  if (HydroImg.style.display === "none") {
    HydroParts.style.display = "none";
    HydroWeb.style.display = "none";
    HydroImg.style.display = "table";
  }
  else {
    HydroImg.style.display = "none";
  }
}

function showParts(){
  var HydroImg = document.getElementById("HydroImg");
  var HydroParts = document.getElementById("HydroParts");
  var HydroWeb = document.getElementById("HydroWeb");
  if (HydroParts.style.display === "none") {
    HydroImg.style.display = "none";
    HydroWeb.style.display = "none";
    HydroParts.style.display = "block";
  }
  else {
    HydroParts.style.display = "none";
  }
}

function showWeb(){
  var HydroImg = document.getElementById("HydroImg");
  var HydroParts = document.getElementById("HydroParts");
  var HydroWeb = document.getElementById("HydroWeb");
  if (HydroWeb.style.display === "none") {
    HydroImg.style.display = "none";
    HydroParts.style.display = "none";
    HydroWeb.style.display = "block";
  }
  else {
    HydroWeb.style.display = "none";
  }
}
