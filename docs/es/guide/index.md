# Introducción y Visión

**Traaay** es una utilidad para macOS diseñada para resolver la saturación visual de la barra de menús, problema agravado por la aparición del **Notch** (muesca de pantalla) en los MacBooks modernos.

---

## La Situación: Saturación Invisible

En macOS, multitud de aplicaciones instalan iconos de estado: sincronización en la nube, utilidades de audio, VPNs, calendarios, mensajería, etc.

Esto provoca dos dificultades críticas:
1. **Sobrecarga Visual**: Una barra abarrotada perjudica la concentración y resta espacio a los menús de la aplicación en uso.
2. **La Trampa del Notch**: macOS oculta de forma silenciosa los iconos que quedan situados bajo la muesca física de la pantalla. No hay modo nativo de saber qué herramientas siguen activas ni cómo interactuar con ellas.

---

## El Enfoque Traaay: Arquitectura de 3 Estratos

Traaay estructura su respuesta en 3 pilares complementarios:

```
┌────────────────────────────────────────────────────────┐
│  ESTRATO 1 (Glacier Cyan #38BDF8)                      │
│  Visibilidad y Delimitación: El Separador Plegable     │
├────────────────────────────────────────────────────────┤
│  ESTRATO 2 (Electric Blue #3B82F6)                     │
│  Control y Consciencia: Detección del Notch y Puntos   │
├────────────────────────────────────────────────────────┤
│  ESTRATO 3 (Soft Mint #34D399)                         │
│  Acceso sin Fricciones: Paleta Flotante y Clic Directo │
└────────────────────────────────────────────────────────┘
```

1. **Estrato 1 — Claridad y Separación**: Un separador inteligente que oculta las herramientas secundarias. Solo mantienes a la vista lo indispensable, pudiendo desplegar el resto con un solo gesto.
2. **Estrato 2 — Consciencia del Notch**: Traaay monitoriza en tiempo real las coordenadas de cada elemento frente al área del notch. Los iconos ocultos reciben un <span class="badge-notch">punto ámbar</span> de advertencia.
3. **Estrato 3 — Acceso sin Fricciones**: La paleta flotante **Top Traaay** reúne todos los iconos y permite activarlos al instante con clic izquierdo, clic derecho o `⌘+Clic`, aunque estén ocultos físicamente bajo la muesca.

---

<div class="screenshot-frame">
  <img src="/images/traaay-top-strip.png" alt="Barra Top Traaay con detección de muesca" />
  <div class="screenshot-caption">La paleta compacta Top Traaay identifica de inmediato las herramientas ocultas bajo el Notch con puntos ámbar.</div>
</div>

## Siguientes Pasos

- [Primeros pasos e Instalación](./getting-started): Descubre cómo instalar Traaay y configurar los permisos del sistema.
- [El Separador inteligente](./separator): Configuración del plegado de iconos.
- [Detección inteligente del Notch](./notch): Cómo detecta Traaay la oclusión y evita clics fantasma.
