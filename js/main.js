var hidden_list = ["hidden_list", "hidden_list2"];
var example = document.getElementById("first");
var cross = ["cross", "cross2"];
var hidden_list_ones;
var cross_ones;
function checkIndex(index) {
  hidden_list_ones = document.getElementById(hidden_list[index]);
  cross_ones = document.getElementById(cross[index]);
  openMenu();
  console.log(hidden_list_ones);
}
function openMenu() {
  if (hidden_list_ones.className == "hidden_list") {
    hidden_list_ones.className = "hidden_list_dn";
    cross_ones.className = "cross_-90";
  } else {
    hidden_list_ones.className = "hidden_list";
    cross_ones.className = "cross_90";
  }
}
