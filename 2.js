let output = document.getElementById("output");
function setCookies() {
  document.cookie = "cartItem=watch";
  document.cookie = "price=10000";
}
function updateCookies() {
  // Updating cookies
  document.cookie = "cartItem=bag"; 
  document.cookie = "price=5000";
}
function getCookies() {
  //Spliting the cookie string
  const allCookies = document.cookie.split("; "); 
  output.innerHTML = "The cookie data are : <br>";

  for (const cookie of allCookies) { 
    const [key, value] = cookie.split("="); 
    if (key == "cartItem" || key == "price") {
       output.innerHTML += `${key} : ${decodeURIComponent(value)} <br>`;
    }
  }
}