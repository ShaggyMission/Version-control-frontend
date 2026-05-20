const API_URL = "https://version-control-backend-qa.vercel.app/";

fetch(`${API_URL}/api/topics`)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("topics");

        data.forEach(topic => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${topic.title}</h3>
                <p>${topic.description}</p>
                <a href="${topic.link}" target="_blank">
                    Más información
                </a>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error al consumir la API:", error);
    });