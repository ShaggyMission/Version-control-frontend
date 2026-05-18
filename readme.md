# Version Control Explorer 🚀
 
Sitio estático desplegado en **GitHub Pages** que consume una API REST sobre control de versiones, desplegada en **Railway**.
 
## 🌐 Demo
 
👉 [Ver sitio en vivo](https://shaggymission.github.io/version-c...)
 
## 🛠️ Tecnologías
 
| Capa | Tecnología |
|------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Hosting | GitHub Pages |
| API | Railway |
 
## 📁 Estructura
 
```
version-control-explorer/
├── index.html   # Página principal
├── styles.css   # Estilos
└── app.js       # Lógica y consumo de la API
```
 
## ⚙️ ¿Cómo funciona?
 
1. El sitio está hosteado gratis en **GitHub Pages**
2. Al cargar la página, `app.js` hace una petición a la **API en Railway**
3. Los tópicos de control de versiones se renderizan dinámicamente en el `#topics` container
## 🚀 Despliegue
 
El sitio se despliega automáticamente con **GitHub Actions** cada vez que se hace push a `main`.
 
```
push a main → build → deploy → GitHub Pages
```
 
## 📡 API
 
La API de tópicos está desplegada en Railway y es consumida directamente desde el frontend.
 
---
 
Made with ❤️ by ShaggyMission