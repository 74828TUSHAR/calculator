str = "";
function get_value(curTag) {
  // console.log(curTag.innerText);
  str = str + curTag.innerText;
  //   console.log(str);
  document.querySelector(".txt").value = str;
}
function set_value() {
  if (str != "") {
    ans = eval(str);
    console.log(ans);
    document.querySelector(".txt").value = ans;
    str = ans;
  }
}
function remove_value() {
  document.querySelector(".txt").value = 0;
  str = "";
}
