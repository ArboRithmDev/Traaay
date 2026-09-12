# Detección Inteligente del Notch

La gestión de la muesca física en los MacBooks modernos constituye el **Estrato 2** de Traaay (Electric Blue `#3B82F6`).

---

## El Desafío del Notch en macOS

En los MacBook Pro (14" y 16") y MacBook Air (13.6" y 15.3") con Apple Silicon, la cámara se ubica en un recorte negro en la parte superior de la pantalla.

Cuando se acumulan numerosos iconos en la derecha de la barra:
- macOS se niega a renderizar elementos sobre el recorte de la cámara.
- El sistema **oculta en silencio** los iconos que quedan a la izquierda de la zona de estado.
- **Consecuencia**: El usuario desconoce si sus herramientas siguen activas y no puede interactuar con ellas.

---

## La Solución Técnica de Traaay

Traaay consulta la geometría de `NSScreen` y los límites de accesibilidad (`auxiliaryTopLeftArea` y `auxiliaryTopRightArea`) para calcular con precisión milimétrica la colisión de cada elemento con el notch.

```
                ┌───────────────┐
                │     NOTCH     │
┌───────────────┴───────────────┴─────────────────────────────┐
│ Menús App       [⚠️ X] [⚠️ Y]   [Icono A] [Icono B] [Reloj]  │
└─────────────────────────────────────────────────────────────┘
                  ▲ Ocultos        ▲ Visibles
```

---

## Puntos Ámbar y Avisos Contextuales

Cuando Traaay detecta que un icono ha quedado atrapado bajo la muesca:

1. **En la paleta Top Traaay**: Aparece un <span class="badge-notch">punto ámbar</span> en la esquina superior del icono.
2. **En el panel de configuración**: Se muestra un distintivo `[Bajo el notch]` junto a un indicador visual de advertencia.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Avisos bajo el notch en los ajustes de Traaay" />
  <div class="screenshot-caption">En los ajustes de Traaay, cada icono oculto bajo el Notch se señala explícitamente con un punto ámbar.</div>
</div>

---

## Prevención de Clics Fantasma

A diferencia de otras utilidades que intentan hacer clic a ciegas en las coordenadas teóricas:
- Un clic normal sobre un elemento oculto **no desplaza el cursor al espacio vacío bajo el notch**.
- Se envía una **notificación del sistema** alertando de que el icono está cubierto.
- Para interactuar con la aplicación:
  - Pliega elementos secundarios con el [Separador inteligente](./separator) para hacer que el icono vuelva a emerger.
  - O usa `⌘+Clic` desde la paleta para abrir la ventana de la aplicación.

---

## Exclusividad en la Pantalla con Notch

Los avisos e indicadores ámbar se activan **únicamente en la pantalla que cuenta con notch físico**.

Al conectar un monitor externo (Studio Display, pantalla 4K/5K):
- Los iconos disponen de todo el ancho horizontal sin obstáculos.
- Traaay desactiva automáticamente las alertas para ese monitor.
- Más detalles en [Monitores múltiples](./multi-screens).
