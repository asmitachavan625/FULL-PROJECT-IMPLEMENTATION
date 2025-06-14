const signinBtn = document.getElementById("signinBtn");
const modal = document.getElementById("authModal");
const closeBtn = document.querySelector(".closeBtn");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");

let users = [];

signinBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; }

showLogin.onclick = () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
};

showRegister.onclick = () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
};

registerForm.onsubmit = e => {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  users.push({ username, password });
  alert("Registered successfully!");
  registerForm.reset();
};

loginForm.onsubmit = e => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    alert("Login successful!");
    modal.style.display = "none";
  } else {
    alert("Invalid credentials.");
  }
};
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  // Grab form values
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if(name && email && message) {
    // Here you would normally send data to a server
    // For demo, just show a success message:
    document.getElementById('formResponse').textContent = 
      `Thank you, ${name}! Your message has been sent.`;

    this.reset();
  } else {
    document.getElementById('formResponse').textContent = 
      'Please fill out all fields.';
    document.getElementById('formResponse').style.color = 'red';
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you, " + name + "! Your message has been sent.");
  document.getElementById("contactForm").reset();
});


