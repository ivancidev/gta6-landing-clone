# 🎮 GTA VI Landing Page Clone

Una réplica de la landing page oficial de Grand Theft Auto VI (GTA VI) desarrollada con Astro y React.

[![GTA VI Landing Page Clone](https://i.postimg.cc/XNK32rgs/Captura-de-pantalla-2025-05-13-164819.png)](https://postimg.cc/CdKW5LX8)

Este proyecto es una recreación de la página de presentación del próximo juego de Rockstar Games, utilizando tecnologías modernas como Astro, React, GSAP para animaciones y Lenis para el efecto de scroll suave.

## ✨ Características

- 🚀 Desarrollado con Astro para un rendimiento óptimo
- ⚛️ Componentes interactivos con React
- 🎭 Animaciones avanzadas con GSAP
- 📱 Diseño responsivo para cualquier dispositivo
- 🖼️ Réplica fiel de la estética y experiencia de usuario de Rockstar Games

## 🚀 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```text
/
├── public/                  # Archivos estáticos
│   ├── favicon.svg
│   └── fonts/               # Fuentes personalizadas
│       └── Pricedown Bl.otf # Fuente similar a la de GTA
├── src/
│   ├── assets/              # Imágenes y recursos internos
│   │   ├── fondo-menu.png
│   │   ├── fondo-original.png
│   │   ├── hero-gt6-sin-fondo.png
│   │   ├── rockstar-logo.svg
│   │   ├── trailer-logo.svg
│   │   └── vi.webp
│   ├── components/          # Componentes de la aplicación
│   │   ├── Hero.astro       # Componente principal de la landing
│   │   ├── Menu.astro       # Estructura del menú desplegable
│   │   ├── HeroAnimation.tsx # Animaciones del héroe con GSAP
│   │   └── MenuAnimation.tsx # Animaciones del menú con GSAP
│   ├── layouts/
│   │   └── Layout.astro     # Plantilla principal de la página
│   ├── pages/
│   │   └── index.astro      # Página principal
│   └── styles/              # Estilos CSS
│       ├── global.css       # Estilos globales
│       ├── hero.css         # Estilos del componente Hero
│       └── menu.css         # Estilos del menú desplegable
├── package.json             # Dependencias y scripts
└── README.md                # Documentación del proyecto
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando        | Acción                                            |
| :------------- | :------------------------------------------------ |
| `pnpm install` | Instala dependencias                              |
| `pnpm dev`     | Inicia servidor de desarrollo en `localhost:4321` |
| `pnpm build`   | Construye el sitio para producción en `./dist/`   |
| `pnpm preview` | Previsualiza la build antes de desplegar          |

## 💻 Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework web de alto rendimiento
- [React](https://reactjs.org/) - Biblioteca para interfaces de usuario
- [GSAP](https://greensock.com/gsap/) - Animaciones profesionales
- [Lenis](https://github.com/studio-freight/lenis) - Scroll suave
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado

## 📱 Capturas de Pantalla

[![Captura-de-pantalla-2025-05-13-164845.png](https://i.postimg.cc/PJSRgnJ5/Captura-de-pantalla-2025-05-13-164845.png)](https://postimg.cc/p5nCj7Kw)

[![Captura-de-pantalla-2025-05-13-164855.png](https://i.postimg.cc/CM7XBk7p/Captura-de-pantalla-2025-05-13-164855.png)](https://postimg.cc/c6KXPKPF)

## 🚀 Instalación y Uso

1. Clona este repositorio

   ```sh
   git clone https://github.com/ivancidev/gta6-landing-clone.git
   cd gta6-landing-clone
   ```

2. Instala las dependencias

   ```sh
   pnpm install
   ```

3. Inicia el servidor de desarrollo

   ```sh
   pnpm dev
   ```

4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador
