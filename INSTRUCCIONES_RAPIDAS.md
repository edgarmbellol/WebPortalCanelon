# 🚀 Instrucciones Rápidas - Portal Development

## ⚡ Inicio Rápido

### 1. Instalar y probar en desarrollo:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre tu navegador en: **http://localhost:5173**

---

## 📦 Subir a Hosting Compartido (3 pasos)

### Paso 1: Generar archivos de producción
```bash
npm run build
```

### Paso 2: Subir por FTP
1. Conecta a tu hosting por FTP (FileZilla)
2. Ve a la carpeta `public_html/`
3. Sube **TODO el contenido** de la carpeta `dist/` (no la carpeta, sino su contenido)

### Paso 3: Configurar .htaccess
- Sube el archivo `.htaccess` a la raíz de `public_html/`
- Listo! ✅

---

## 🎨 Personalización Rápida

### Cambiar información de contacto:
📁 `src/components/Contact.jsx`
- Email
- Teléfono
- Dirección

### Cambiar colores:
📁 `src/index.css`
```css
:root {
  --primary: #6366f1;    /* Color principal */
  --secondary: #ec4899;  /* Color secundario */
}
```

### Cambiar proyectos del portfolio:
📁 `src/components/Portfolio.jsx`
- Edita el array `projects`

### Cambiar servicios:
📁 `src/components/Services.jsx`
- Edita el array `services`

---

## 📞 ¿Problemas?

### ❌ Página en blanco
- Limpia caché: `Ctrl + Shift + R`
- Verifica que subiste la carpeta `assets/`

### ❌ Error 404
- Sube el archivo `.htaccess`
- Contacta a tu hosting para activar `mod_rewrite`

### ❌ Las imágenes no cargan
- Verifica que subiste `logoPortal.png` y `developer animation.json` a la raíz

---

## 📚 Documentación Completa

- **README.md** - Información general del proyecto
- **DEPLOYMENT.md** - Guía detallada de despliegue

---

**¡Éxito con tu nuevo sitio web! 🎉**

