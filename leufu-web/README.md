# Leufu Web — Landing page

## Estructura
```
leufu-web/
├── index.html      → contenido y textos de la página
├── css/styles.css  → colores, tipografías y animaciones (el río está en "Río animado")
└── js/main.js      → número de WhatsApp, enlaces y animaciones al hacer scroll
```

## Cómo abrirlo en Visual Studio Code
1. Descomprime el .zip.
2. En VS Code: Archivo → Abrir carpeta… → elige `leufu-web`.
3. Para verla en vivo, instala la extensión **Live Server**, haz clic derecho en `index.html` → "Open with Live Server". Cada vez que guardes, el navegador se actualiza solo.

## Lo primero que debes cambiar
- `js/main.js`: reemplaza `549XXXXXXXXXX` por tu número de WhatsApp.
- `index.html`: busca `instagram.com` en el pie de página y pon tu cuenta.

## Colores
Están todos al inicio de `css/styles.css`, dentro de `:root`. Cambiando `--accent` cambias el turquesa de toda la página.

## Publicar en Vercel
Sube la carpeta a un repositorio de GitHub e impórtalo en Vercel. No necesita configuración: es un sitio estático.
