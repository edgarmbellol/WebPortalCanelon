# 🎨 Guía de Personalización

## 🏢 Información de la Empresa

### Logo
- **Ubicación actual:** `logoPortal.png` (raíz del proyecto)
- **Para cambiar:** Reemplaza el archivo manteniendo el mismo nombre, o actualiza las referencias en:
  - `src/components/Navbar.jsx` (línea 20)
  - `src/components/Footer.jsx` (línea 18)
  - `index.html` (línea 5)

### Nombre de la Empresa
- **Ubicación:** Múltiples componentes
- **Buscar y reemplazar:** "Portal Development" por tu nombre de empresa

---

## 🎭 Animación Principal

### Cambiar la animación Lottie
1. Descarga una nueva animación de:
   - https://lottiefiles.com/
   - https://iconscout.com/lottie-animations

2. Reemplaza `developer animation.json` con tu archivo
3. O actualiza la ruta en: `src/components/Hero.jsx` (línea 3)

---

## 🎨 Colores y Estilos

### Paleta de Colores Principal
**Archivo:** `src/index.css`

```css
:root {
  --primary: #6366f1;        /* Morado/Azul principal */
  --primary-dark: #4f46e5;   /* Variante oscura */
  --secondary: #ec4899;      /* Rosa/Magenta */
  --dark: #0f172a;          /* Azul muy oscuro */
  --dark-light: #1e293b;    /* Azul oscuro */
  --gray: #64748b;          /* Gris para textos */
  --light: #f1f5f9;         /* Gris claro */
  --white: #ffffff;         /* Blanco */
}
```

### Gradientes
```css
--gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

### Ejemplos de Paletas de Colores

#### Opción 1: Azul Corporativo
```css
--primary: #2563eb;
--primary-dark: #1e40af;
--secondary: #0ea5e9;
```

#### Opción 2: Verde Tecnológico
```css
--primary: #10b981;
--primary-dark: #059669;
--secondary: #14b8a6;
```

#### Opción 3: Naranja Enérgico
```css
--primary: #f97316;
--primary-dark: #ea580c;
--secondary: #fb923c;
```

---

## 📝 Contenido de Texto

### 1. Sección Hero (Principal)

**Archivo:** `src/components/Hero.jsx`

```jsx
// Líneas 43-53
<h1 className="hero-title">
  Transformamos Ideas en
  <span className="gradient-text"> Soluciones Digitales</span>
</h1>
<p className="hero-slogan">
  Tu enlace con la innovación
</p>
<p className="hero-description">
  [Tu descripción aquí]
</p>
```

**Nota:** El slogan principal de la empresa está destacado entre el título y la descripción.

**Estadísticas:**
```jsx
// Líneas 48-62
<h3>200+</h3>  {/* Cambia el número */}
<p>Proyectos Completados</p>  {/* Cambia el texto */}
```

### 2. Sección Nosotros

**Archivo:** `src/components/About.jsx`

```jsx
// Líneas 34-47
<h3>Impulsamos la transformación digital de tu empresa</h3>
<p>
  En <strong>Portal Development</strong>, somos...
</p>
```

### 3. Servicios

**Archivo:** `src/components/Services.jsx`

**Agregar un nuevo servicio:**
```jsx
// Línea 9 - agregar al array services
{
  icon: <FaTuIcono />,
  title: 'Nombre del Servicio',
  description: 'Descripción del servicio...',
  features: ['Característica 1', 'Característica 2', 'Característica 3']
}
```

### 4. Tecnologías

**Archivo:** `src/components/Technologies.jsx`

**Agregar nueva tecnología:**
```jsx
// Líneas 16-20
{ 
  icon: <SiNombreTech />, 
  name: 'Nombre', 
  color: '#HEXCOLOR' 
}
```

**Nota:** Importa el ícono desde:
- `react-icons/fa` (Font Awesome)
- `react-icons/si` (Simple Icons)

### 5. Portfolio

**Archivo:** `src/components/Portfolio.jsx`

**Modificar proyectos:**
```jsx
// Línea 10 - array projects
{
  id: 1,
  title: 'Nombre del Proyecto',
  description: 'Descripción corta',
  category: 'web', // 'web', 'mobile', o 'software'
  image: 'URL_DE_LA_IMAGEN',
  tags: ['React', 'Node.js', 'MongoDB'],
  link: 'https://proyecto.com',
  github: 'https://github.com/usuario/repo'
}
```

**Fuentes de imágenes gratuitas:**
- https://unsplash.com/
- https://pexels.com/
- https://pixabay.com/

### 6. Contacto

**Archivo:** `src/components/Contact.jsx`

**Información de contacto:**
```jsx
// Líneas 42-90
<p>contacto@tuempresa.com</p>
<p>+34 123 456 789</p>
<p>Tu ciudad, País</p>
```

**Redes sociales:**
```jsx
// Líneas 95-103
<a href="https://linkedin.com/company/tuempresa">
  <FaLinkedin />
</a>
```

---

## 📱 Redes Sociales

### Footer
**Archivo:** `src/components/Footer.jsx`

```jsx
// Línea 45
<li><a href="mailto:tu@email.com">tu@email.com</a></li>
```

---

## 🖼️ Imágenes del Portfolio

### Opción 1: Usar Unsplash (automático)
Las URLs de Unsplash ya están configuradas y funcionan automáticamente.

### Opción 2: Usar tus propias imágenes

1. **Crear carpeta de imágenes:**
   - Crea `public/images/` en tu proyecto
   - Agrega tus imágenes ahí

2. **Actualizar rutas:**
   ```jsx
   // En Portfolio.jsx
   image: '/images/proyecto1.jpg'
   ```

3. **Al hacer build:**
   - Las imágenes se copiarán automáticamente a `dist/`

---

## 🔧 Configuraciones Avanzadas

### Cambiar fuentes tipográficas

**Archivo:** `index.html`

```html
<!-- Líneas 9-11 - Reemplaza con tu fuente de Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap" rel="stylesheet">
```

**Actualizar en CSS:** `src/index.css`
```css
body {
  font-family: 'TuFuente', sans-serif;
}
```

### Cambiar título y descripción SEO

**Archivo:** `index.html`

```html
<!-- Línea 7 -->
<meta name="description" content="Tu descripción para SEO" />

<!-- Línea 8 -->
<title>Tu Empresa - Slogan</title>
```

### Agregar Google Analytics

**Archivo:** `index.html` (antes de `</head>`)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

---

## 📧 Configurar Formulario de Contacto

El formulario actualmente solo muestra un alert. Para que funcione realmente:

### Opción 1: Usar FormSubmit (Gratis, sin backend)

**Archivo:** `src/components/Contact.jsx`

```jsx
// Cambiar línea 64
<form 
  className="contact-form" 
  action="https://formsubmit.co/tu@email.com" 
  method="POST"
>
```

### Opción 2: Usar EmailJS (Recomendado)

1. Registrarse en https://emailjs.com/
2. Instalar: `npm install @emailjs/browser`
3. Configurar en `Contact.jsx`:

```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.sendForm(
    'tu_service_id',
    'tu_template_id',
    e.target,
    'tu_public_key'
  ).then(() => {
    alert('¡Mensaje enviado!');
  });
};
```

---

## 🎯 Checklist de Personalización

- [ ] Cambiar nombre de empresa en todos los componentes
- [ ] Reemplazar logo (`logoPortal.png`)
- [ ] Actualizar animación Lottie
- [ ] Modificar colores en `src/index.css`
- [ ] Actualizar textos de Hero
- [ ] Personalizar servicios
- [ ] Agregar tecnologías que usas
- [ ] Modificar proyectos del portfolio
- [ ] Actualizar información de contacto
- [ ] Configurar redes sociales
- [ ] Cambiar título y meta tags SEO
- [ ] Configurar formulario de contacto
- [ ] (Opcional) Agregar Google Analytics

---

## 💡 Tips

- **Guarda copias:** Antes de hacer cambios grandes, copia los archivos originales
- **Prueba local:** Usa `npm run dev` para ver cambios en tiempo real
- **Usa Ctrl+F:** Para buscar y reemplazar texto en todos los archivos
- **Colores coherentes:** Usa herramientas como https://coolors.co/ para paletas armónicas
- **Optimiza imágenes:** Usa https://tinypng.com/ antes de subirlas

---

¿Necesitas ayuda con algo específico? Revisa el README.md o DEPLOYMENT.md

