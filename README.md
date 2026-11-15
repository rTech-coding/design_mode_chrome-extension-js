# ✏️ Design Mode (Chrome Extension)
Una extensión minimalista para Google Chrome (**Manifest V3**) que activa y desactiva el modo de diseño (`document.designMode = 'on'`) en cualquier página web con un solo clic, permitiéndote editar cualquier texto directamente en el navegador. 🌐✨

## 🚀 Características
* ⚡ **Activación con un clic:** Alterna rápidamente entre `on` y `off` sin necesidad de abrir las herramientas de desarrollador (DevTools).
* 🟢 **Indicador visual:** Muestra una insignia verde con el texto **ON** en el icono de la extensión cuando el modo edición está activo en la pestaña actual.
* 🛡️ **Ligera y segura:** Construida con Manifest V3 utilizando únicamente los permisos estrictamente necesarios (`activeTab` y `scripting`).

## 📁 Estructura del proyecto
```text
DesignMode-Extension/
├── 📄 manifest.json     # Configuración y permisos de la extensión
├── ⚙️ background.js     # Lógica para alternar designMode y gestionar la insignia
└── 📖 README.md         # Documentación del proyecto
```

## 🛠️ Instalación
Como esta extensión no está publicada en la Chrome Web Store, debes cargarla manualmente en modo desarrollador:

1. 📥 Descarga o clona este repositorio en una carpeta local de tu ordenador.
2. 🌐 Abre Google Chrome y ve a `chrome://extensions/`.
3. 🔧 Activa el interruptor **Modo de desarrollador** en la esquina superior derecha.
4. 📂 Haz clic en el botón **Cargar descomprimida** (arriba a la izquierda).
5. ✅ Selecciona la carpeta `DesignMode-Extension` que contiene los archivos.
6. 📌 *(Opcional)* Haz clic en el icono de piezas de puzle 🧩 en la barra superior de Chrome y fija **Design Mode** para tener acceso rápido.

## 💡 Uso
1. 🌍 Navega a cualquier página web estándar *(no funciona en páginas internas del navegador como `chrome://`)*.
2. 🖱️ Haz clic en el icono de la extensión en la barra de herramientas.
3. ✍️ Verás aparecer la etiqueta **ON** sobre el icono. Haz clic en cualquier texto de la página para empezar a escribir, modificar o borrar.
4. 🔄 Vuelve a hacer clic en el icono para desactivar la edición y recuperar la navegación normal.

## Creado por rTech
