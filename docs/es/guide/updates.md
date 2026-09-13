# Actualizaciones

Traaay sabe actualizarse por su cuenta, sin obligarte a volver a descargar nada a mano. Esta página explica dónde está el mando, qué hace y qué hacer cuando falla.

---

## Dónde está el mando

1. **Haz clic derecho** en el icono de Traaay de la barra de menús para abrir el panel de configuración.
2. Ve a la sección **Actualizaciones**.
3. El panel muestra la versión instalada, el canal activo y el botón **Buscar actualización**.

> [!IMPORTANT]
> La búsqueda es **manual**. Traaay no comprueba nada en segundo plano ni te interrumpe por su cuenta: no ocurre nada hasta que pulsas el botón.

---

## Los dos canales

| Canal | Para quién | Requiere cuenta |
| :--- | :--- | :--- |
| **Estable (público)** | Todo el mundo. Es el canal por defecto. | No |
| **Interno (privado)** | Solo desarrollo — versiones sin terminar. | Sí, mediante la CLI `gh` autenticada |

El canal interno aparece en la lista pero permanece inactivo si la CLI de GitHub no está instalada: el panel indica entonces **«CLI gh requerida»**. Es un estado previsto, no un error — el canal estable basta para un uso normal.

---

## Qué ocurre durante una actualización

Una vez aceptada la nueva versión, Traaay encadena cuatro pasos, visibles con claridad en el panel:

1. **Descarga** del paquete de la nueva versión.
2. **Verificación de la firma** (minisign). Es el paso que demuestra que el paquete procede de nosotros.
3. **Instalación** de la nueva versión en lugar de la anterior.
4. **Reinicio** de Traaay, que vuelve ya actualizado.

> [!NOTE]
> Si la firma no coincide, la instalación **se detiene** y la aplicación ya instalada queda intacta. Una actualización que no puede verificarse nunca se aplica.

---

## Si la actualización falla

- **«Traaay está actualizado»** aunque exista una versión más reciente: lo más probable es que estés en el canal estable y esa versión aún no haya pasado a público. Es normal.
- **Fallo en la descarga**: comprueba tu conexión y vuelve a lanzar la búsqueda. Un intento interrumpido no deja ningún rastro.
- **Fallo repetido**: [descarga directamente el `.dmg` más reciente](https://github.com/ArboRithmDev/Traaay/releases/latest) y reinstala encima. Tus preferencias se conservan — viven fuera de la aplicación, en `~/.config/traaay/preferences.json`.

---

## Véase también

- [Primeros pasos e Instalación](./getting-started) — primera instalación y permisos del sistema.
- [Preguntas frecuentes](./faq) — desinstalación, permisos, datos conservados.
