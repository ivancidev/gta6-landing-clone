# 🎮 GTA VI Landing Page Clone

Una réplica de la landing page oficial de Grand Theft Auto VI (GTA VI) desarrollada con Astro y React.

[![GTA VI Landing Page Clone](https://i.postimg.cc/Znxd4NbR/Captura-de-pantalla-2025-05-13-122132.png)](https://postimg.cc/GT92jHsw)

Este proyecto es una recreación fiel de la página de presentación del próximo juego de Rockstar Games, utilizando tecnologías modernas como Astro, React, GSAP para animaciones y Lenis para el efecto de scroll suave.

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
│   ├── fondo-menu.png       # Fondo del menú desplegable
│   ├── fondo-original.png   # Imagen de fondo principal
│   ├── hero-gt6-sin-fondo.png # Personajes principales sin fondo
│   ├── rockstar-logo.svg    # Logo de Rockstar Games
│   ├── vi.webp              # Logo del VI animado
│   └── fonts/               # Fuentes personalizadas
│       └── Pricedown Bl.otf # Fuente similar a la de GTA
├── src/
│   ├── assets/              # Recursos internos
│   ├── components/          # Componentes de la aplicación
│   │   ├── Hero.astro       # Componente principal de la landing
│   │   ├── HeroAnimation.tsx # Animaciones del héroe con GSAP
│   │   └── MenuAnimation.tsx # Animaciones del menú con GSAP
│   ├── layouts/
│   │   └── Layout.astro     # Plantilla principal de la página
│   ├── pages/
│   │   └── index.astro      # Página principal
│   └── styles/              # Estilos globales
│       └── global.css       # Estilos CSS globales
└── package.json             # Dependencias y scripts
```

Esta estructura facilita la organización del código y la separación de responsabilidades entre componentes.

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


