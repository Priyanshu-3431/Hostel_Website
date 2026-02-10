// function register(){
//   let name = document.getElementById("regName").value;
//   let email = document.getElementById("regEmail").value;
//   let password = document.getElementById("regPassword").value;

//   if(name=="" || email=="" || password==""){
//     alert("All fields required");
//     return;
//   }

//   localStorage.setItem("email", email);
//   localStorage.setItem("password", password);

//   alert("Registration Successful");
//   window.location.href = "login.html";
// }

// function login(){
//   let email = document.getElementById("loginEmail").value;
//   let password = document.getElementById("loginPassword").value;

//   let storedEmail = localStorage.getItem("email");
//   let storedPassword = localStorage.getItem("password");

//   if(email === storedEmail && password === storedPassword){
//     alert("Login Successful");
//     window.location.href = "index.html";
//   }
// if(email === storedEmail && password === storedPassword){
//   alert("Login Successful");
//   window.location.href = "dashboard.html";
// }

//     alert("Invalid Email or Password");
//   }
function getUsers(){
  return JSON.parse(localStorage.getItem("users")) || [];
}

function register(){
  let name = regName.value;
  let email = regEmail.value;
  let password = regPassword.value;

  if(!name || !email || !password){
    alert("All fields required");
    return;
  }

  let users = getUsers();
  if(users.find(u=>u.email===email)){
    alert("Email already registered");
    return;
  }

  users.push({name,email,password});
  localStorage.setItem("users",JSON.stringify(users));
  alert("Registration successful");
  location.href="login.html";
}

function login(){
  let email = loginEmail.value;
  let password = loginPassword.value;

  let user = getUsers().find(
    u=>u.email===email && u.password===password
  );

  if(!user){
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("currentUser",JSON.stringify(user));
  location.href="dashboard.html";
}

function logout(){
  localStorage.removeItem("currentUser");
  location.href="login.html";
}


