var loaderSet;

function myLoader() {
  loaderSet = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main-container").style.display = "block";
}
