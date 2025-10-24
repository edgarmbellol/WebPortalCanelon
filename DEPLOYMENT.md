# 📦 Guía de Despliegue en Hosting Compartido

Esta guía detalla paso a paso cómo subir tu sitio web React a un hosting compartido.

## 📋 Índice

1. [Preparación](#preparación)
2. [Generar Build de Producción](#generar-build-de-producción)
3. [Conectar al Hosting via FTP](#conectar-al-hosting-via-ftp)
4. [Subir Archivos](#subir-archivos)
5. [Configuración del Servidor](#configuración-del-servidor)
6. [Verificación](#verificación)
7. [Problemas Comunes](#problemas-comunes)

---

## 1️⃣ Preparación

### Requisitos:
- ✅ Hosting compartido contratado (cPanel, Plesk, etc.)
- ✅ Dominio apuntando al hosting
- ✅ Cliente FTP instalado (recomendado: FileZilla)
- ✅ Node.js instalado en tu computadora

### Datos necesarios del hosting:
- 🔑 Host/Servidor FTP (ej: ftp.tudominio.com)
- 👤 Usuario FTP
- 🔒 Contraseña FTP
- 📂 Puerto (generalmente 21)

---

## 2️⃣ Generar Build de Producción

### Paso 1: Abrir terminal en la carpeta del proyecto

```bash
cd "C:\Users\DELL\Desktop\Pagina web"
```

### Paso 2: Instalar dependencias (si no lo has hecho)

```bash
npm install
```

### Paso 3: Generar build de producción

```bash
npm run build
```

✅ Esto creará una carpeta llamada `dist/` con todos los archivos optimizados.

### Paso 4: Verificar contenido de dist/

La carpeta `dist/` debe contener:
```
dist/
├── index.html
├── logoPortal.png
├── developer animation.json
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── [otros archivos]
```

---

## 3️⃣ Conectar al Hosting via FTP

### Opción A: Usando FileZilla (Recomendado)

1. **Descargar FileZilla:**
   - Visita: https://filezilla-project.org/
   - Descarga FileZilla Client

2. **Configurar conexión:**
   - Abre FileZilla
   - Ve a: `Archivo > Gestor de sitios > Nuevo sitio`
   
3. **Ingresar datos:**
   ```
   Protocolo: FTP
   Servidor: ftp.tudominio.com (o tu IP del hosting)
   Puerto: 21
   Tipo de acceso: Normal
   Usuario: tu_usuario_ftp
   Contraseña: tu_contraseña_ftp
   ```

4. **Conectar:**
   - Clic en "Conectar"
   - Si aparece un certificado, acepta

### Opción B: Usando administrador de archivos del hosting

1. Inicia sesión en tu panel de control (cPanel/Plesk)
2. Busca "Administrador de archivos" o "File Manager"
3. Navega a `public_html` o `www`

---

## 4️⃣ Subir Archivos

### Importante: ⚠️ Ubicación correcta

Debes subir los archivos al directorio raíz de tu dominio:
- `public_html/` (más común)
- `www/`
- `htdocs/`
- O la carpeta específica de tu dominio

### Pasos para subir:

1. **En FileZilla:**
   - Panel izquierdo: Navega a la carpeta `dist/` de tu proyecto local
   - Panel derecho: Navega a `public_html/` de tu hosting

2. **Seleccionar TODO el contenido de dist/:**
   - ⚠️ **NO subas la carpeta "dist", sino su CONTENIDO**
   - Selecciona todos los archivos dentro de `dist/`
   - Arrástralos al panel derecho (servidor)

3. **Espera a que termine la transferencia:**
   - Observa la barra de progreso en la parte inferior
   - Asegúrate de que todos los archivos se suban correctamente

### Estructura final en el servidor:

```
public_html/
├── index.html                      ← Archivo principal
├── logoPortal.png                  ← Tu logo
├── developer animation.json        ← Animación Lottie
├── .htaccess                       ← Configuración (siguiente paso)
└── assets/                         ← Archivos JS/CSS optimizados
    ├── index-abc123.js
    ├── index-abc123.css
    └── ...
```

---

## 5️⃣ Configuración del Servidor

### Crear archivo .htaccess

**¿Por qué es necesario?**
React es una SPA (Single Page Application) y necesita que todas las rutas redirijan a `index.html`.

### Método 1: Usando FileZilla

1. En tu proyecto local, encontrarás el archivo `.htaccess`
2. Súbelo a la raíz de `public_html/`

### Método 2: Crear manualmente en el hosting

1. En el administrador de archivos del hosting
2. Clic en "Nuevo archivo"
3. Nombrar: `.htaccess`
4. Editar y pegar el siguiente contenido:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/html
</IfModule>
```

5. Guardar

### Verificar permisos:
- `.htaccess` debe tener permisos `644`
- `index.html` debe tener permisos `644`
- Carpeta `assets/` debe tener permisos `755`

---

## 6️⃣ Verificación

### Checklist de verificación:

- [ ] Abre tu dominio en el navegador: `https://tudominio.com`
- [ ] Verifica que el sitio cargue correctamente
- [ ] Prueba el scroll y navegación entre secciones
- [ ] Verifica que la animación Lottie funcione
- [ ] Prueba el formulario de contacto
- [ ] Abre el sitio en móvil para verificar responsive
- [ ] Verifica en diferentes navegadores (Chrome, Firefox, Safari)

### Herramientas de prueba:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Analiza el rendimiento de tu sitio

2. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - Verifica la compatibilidad móvil

3. **GTmetrix**
   - https://gtmetrix.com/
   - Mide velocidad y rendimiento

---

## 7️⃣ Problemas Comunes

### ❌ Problema: Página muestra "404 Not Found"

**Solución:**
- Verifica que el archivo `.htaccess` esté en la raíz
- Asegúrate de que el módulo `mod_rewrite` esté activo en tu hosting
- Contacta al soporte del hosting para activarlo

### ❌ Problema: Página en blanco

**Solución:**
- Abre la consola del navegador (F12)
- Busca errores en rojo
- Verifica que todos los archivos de `assets/` se hayan subido
- Revisa que las rutas en `index.html` sean correctas

### ❌ Problema: Imágenes no cargan

**Solución:**
- Verifica que `logoPortal.png` esté en la raíz
- Verifica que `developer animation.json` esté en la raíz
- Comprueba los permisos de los archivos (deben ser 644)

### ❌ Problema: Estilos no se aplican

**Solución:**
- Limpia caché del navegador (Ctrl + Shift + R)
- Verifica que la carpeta `assets/` se haya subido completa
- Inspecciona el elemento (F12) y verifica que el CSS se esté cargando

### ❌ Problema: La animación Lottie no funciona

**Solución:**
- Verifica que `developer animation.json` esté en la raíz
- Comprueba en la consola del navegador si hay errores
- Verifica que el archivo no esté corrupto

---

## 🔄 Actualizar el Sitio

Cuando hagas cambios:

1. **Genera nuevo build:**
   ```bash
   npm run build
   ```

2. **Sube solo los archivos modificados:**
   - Si cambiaste código: Sube la carpeta `assets/` completa
   - Si cambiaste imágenes: Sube solo las imágenes nuevas
   - Si cambiaste `index.html`: Súbelo de nuevo

3. **Limpia caché:**
   - En tu navegador: Ctrl + Shift + R
   - Puede que tengas que limpiar caché del hosting si tiene CDN

---

## 📞 Soporte del Hosting

Si tienes problemas técnicos con el servidor, contacta a tu proveedor de hosting:

### Información que debes proporcionar:
- Descripción del problema
- URL de tu sitio
- Capturas de pantalla de errores
- Contenido de la consola del navegador (F12)

### Preguntas comunes al soporte:
- ¿Está habilitado mod_rewrite?
- ¿Puedo usar archivos .htaccess?
- ¿Cuál es la ubicación correcta para mi dominio?
- ¿Hay algún firewall bloqueando archivos .json?

---

## ✅ Checklist Final

- [ ] Build generado correctamente
- [ ] Todos los archivos de `dist/` subidos al hosting
- [ ] Archivo `.htaccess` en la raíz
- [ ] Permisos de archivos correctos
- [ ] Sitio accesible desde el navegador
- [ ] Responsive funcionando
- [ ] Animaciones funcionando
- [ ] Formulario de contacto funcionando
- [ ] SEO configurado (título, meta tags)
- [ ] Sitio probado en diferentes navegadores

---

## 🎉 ¡Listo!

Tu sitio web ahora está en línea y accesible para todo el mundo.

**Próximos pasos recomendados:**
1. Configurar certificado SSL (HTTPS)
2. Configurar Google Analytics
3. Registrar en Google Search Console
4. Crear sitemap.xml
5. Optimizar SEO

---

**¿Necesitas ayuda?** Revisa el README.md o contacta al equipo de desarrollo.

