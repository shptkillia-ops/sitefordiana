// Переход на второй экран
document.getElementById("yesBtn").onclick = () => {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
};

// Кнопка "Нет"
const noBtn = document.getElementById("noBtn");

if (window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
        const rect = noBtn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        if (Math.sqrt(dx * dx + dy * dy) < 120) {
            noBtn.style.position = "absolute";
            noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
            noBtn.style.top = Math.random() * (window.innerHeight - 60) + "px";
        }
    });
} else {
    noBtn.onclick = (e) => {
        e.preventDefault();
    };
}

// Кнопка "Подтвердить"
document.getElementById("sendBtn").onclick = () => {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!date || !time) {
        alert("Выбери дату и время ❤️");
        return;
    }

  
		const BOT_TOKEN = "8685729652:AAGbncY0a7Jp0ya-g-vB3bTxH6ZzBCo3tmg";
const CHAT_ID = "8685729652";

fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `❤️ Новая заявка!\n📅 Дата: ${date}\n🕒 Время: ${time}`
    })
});

    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "block";
};