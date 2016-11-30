var interval = [500, 60000, 60000, 60000, 90000, 90000, 120000, 150000];
var div = document.getElementById('randomevent');
function hide(){
  div.style.visibility = "hidden";
  septim = septim * 1.2;
  showIn(randomInterval());
}
function randomInterval() {
  return interval[Math.floor(Math.random() * interval.length)];
}
function showIn(delay) {
  setTimeout(function() {
    div.style.visibility = "visible";
  }, delay);
}
showIn(randomInterval());