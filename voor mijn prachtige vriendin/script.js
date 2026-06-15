const reasons = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  text: `Reden ${i + 1}: Omdat jij Jill bent en mijn leven mooier maakt ❤️`,
  detail: `Jij bent reden ${i + 1} waarom alles beter voelt. Jij bent liefde, rust en geluk in één persoon.`
}));

const grid = document.getElementById("grid");

// INDEX PAGINA
if (grid) {
  reasons.forEach(r => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${r.text}</h3>`;

    div.addEventListener("click", () => {
      localStorage.setItem("reason", JSON.stringify(r));

      document.body.style.transition = "opacity .4s ease";
      document.body.style.opacity = "0.2";

      setTimeout(() => {
        window.location.href = "reason.html";
      }, 400);
    });

    grid.appendChild(div);
  });

  // ❤️ Hartjes animatie
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

// DETAIL PAGINA
const title = document.getElementById("title");

if (title) {
  const data = JSON.parse(localStorage.getItem("reason"));

  if (data) {
    document.getElementById("title").innerText = data.text;
    document.getElementById("text").innerText = data.detail;
  }
}

function goBack() {
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 300);
}

// PWA SERVICE WORKER
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      console.log("✅ Service Worker geregistreerd");
    } catch (err) {
      console.error("❌ Service Worker fout:", err);
    }
  });
}