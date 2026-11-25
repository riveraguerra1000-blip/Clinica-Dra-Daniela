# Clínica Dra. Daniela Rodriguez — Dermatóloga

Sitio web estático para la clínica de dermatología de la Dra. Daniela Rodriguez.
Para hombres y mujeres. Salud • Belleza • Bienestar.

## Qué incluye
- Hero premium, sección Dra. Daniela, servicios, menú de Bótox con precios promedio
- Formulario de citas que abre WhatsApp al +52 55 4363 8085
- Botón flotante de WhatsApp
- Sin backend, sin base de datos. Solo HTML + CSS + JS.

## Estructura
```
clinica-dra-daniela/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── img/
│       ├── logo.jpg
│       └── dra-daniela.jpg
└── README.md
```

## Probar en local
1. Descarga / clona el repo
2. Abre `index.html` con doble clic, o sirve con:
   `python -m http.server 8000` y abre http://localhost:8000

## Cambiar el número de WhatsApp
Busca `525543638085` en `index.html` y `js/main.js` y reemplázalo por el nuevo número con código de país, sin + ni espacios.

## Deployment con GitHub Pages
1. Crea repo en GitHub: clinica-dra-daniela
2. Sube todo el contenido de esta carpeta (Add file > Upload files)
3. Settings > Pages > Source: Deploy from a branch > Branch: main / (root) > Save
4. Tu link será: https://TU-USUARIO.github.io/clinica-dra-daniela/
