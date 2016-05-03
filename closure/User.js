// simple module pattern show how closure work
function User() {
  var username;
  var password;
  
  function doLogin(name, psw) {
    username = name;
    password = psw;
    // do something...
  }
  
  var publicAPI = {
    login: doLogin
  }
  
  return publicAPI;
}

var user = User();
user.login("Vincent", "1234");
