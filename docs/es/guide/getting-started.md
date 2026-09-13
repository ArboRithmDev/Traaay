# Primeros Pasos e Instalación

Guía rápida para instalar, conceder permisos de sistema y comenzar a utilizar Traaay en tu Mac.

---

## Requisitos del Sistema

- **Sistema Operativo**: macOS 13.0 (Ventura), macOS 14.0 (Sonoma), o macOS 15.0+ (Sequoia).
- **Arquitectura**: Apple Silicon (M1, M2, M3, M4). Los Mac con Intel aún no cuentan con una versión publicada.
- **Permisos del Sistema**: Permisos de Accesibilidad de macOS (TCC).

---

## Instalación

1. [**Descarga la última versión de Traaay**](https://github.com/ArboRithmDev/Traaay/releases/latest) — el archivo `Traaay_<versión>_aarch64.dmg`.
2. Abre el archivo `.dmg` y arrastra la aplicación **Traaay** a la carpeta **Aplicaciones**.
3. Inicia Traaay desde Spotlight o tu carpeta de Aplicaciones.

> [!TIP]
> Traaay está firmada con un certificado Developer ID y notarizada por Apple. No hace falta ningún rodeo de Gatekeeper: la aplicación se abre con un doble clic normal.

---

## Configuración de Permisos de Accesibilidad (TCC)

Para calcular la geometría de los iconos en la barra de menús, comprobar la oclusión bajo el notch y permitir la activación por clic directo, macOS requiere permisos de accesibilidad.

1. Al abrir la app por primera vez, Traaay solicitará acceso a los **Ajustes del Sistema**.
2. Ve a **Privacidad y seguridad > Accesibilidad**.
3. Activa la casilla junto a **Traaay**.
4. Si Traaay ya estaba abierto, reinícialo para aplicar los permisos de inmediato.

> [!NOTE]
> Traaay no registra pulsaciones de teclado ni accede a datos privados. La API de Accesibilidad (`AXUIElement`) se emplea exclusivamente para inspeccionar las coordenadas de la barra de menús y sintetizar los clics solicitados.

---

## Primer Contacto: Icono de Estado

Tras iniciar, Traaay añade su icono distintivo (tres estratos horizontales en cascada) a la barra de menús:

- **Clic izquierdo**: Abre la paleta flotante **Top Traaay**, la vista compacta de tus utilidades.
- **Clic derecho**: Abre el **panel de configuración**, donde gestionas la visibilidad, los grupos y el separador.
- **Volver a hacer clic en el icono**: Cierra la vista abierta. El clic funciona como un interruptor.

> [!NOTE]
> Traaay no reacciona al paso del cursor: todas sus vistas se abren con un clic explícito.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Panel principal de Traaay" />
  <div class="screenshot-caption">El panel de configuración permite gestionar el estado de plegado y verificar cada icono.</div>
</div>
