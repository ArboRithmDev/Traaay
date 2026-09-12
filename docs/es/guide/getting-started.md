# Primeros Pasos e Instalación

Guía rápida para instalar, conceder permisos de sistema y comenzar a utilizar Traaay en tu Mac.

---

## Requisitos del Sistema

- **Sistema Operativo**: macOS 13.0 (Ventura), macOS 14.0 (Sonoma), o macOS 15.0+ (Sequoia).
- **Arquitectura**: Apple Silicon (M1, M2, M3, M4) o Intel x86_64.
- **Permisos del Sistema**: Permisos de Accesibilidad de macOS (TCC).

---

## Instalación

1. Descarga el paquete **Traaay.dmg** más reciente.
2. Abre el archivo `.dmg` y arrastra la aplicación **Traaay** a la carpeta **Aplicaciones**.
3. Inicia Traaay desde Spotlight o tu carpeta de Aplicaciones.

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

- **Clic izquierdo**: Despliega el panel principal de control y gestión de elementos.
- **Clic derecho**: Muestra el menú contextual rápido (Preferencias, Salir).
- **Pasar el cursor por el borde superior**: Muestra la paleta flotante Top Traaay si está habilitada.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Panel principal de Traaay" />
  <div class="screenshot-caption">El panel de configuración permite gestionar el estado de plegado y verificar cada icono.</div>
</div>
