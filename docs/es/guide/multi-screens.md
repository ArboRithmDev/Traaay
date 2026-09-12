# Monitores Múltiples

Traaay se adapta automáticamente a tu configuración de pantallas: MacBook independiente, doble pantalla con monitor externo o modo escritorio con tapa cerrada (*clamshell*).

---

## Dinámica con Varias Pantallas

Al trabajar con un MacBook conectado a uno o varios monitores externos:
1. **La pantalla integrada del MacBook** dispone de un notch físico que puede ocultar elementos.
2. **El monitor externo** (ej.: Apple Studio Display o pantalla externa convencional) posee una barra de menús recta y continua, sin obstáculos físicos.

---

## Detección Inteligente por Monitor

Traaay escucha los cambios de visualización del sistema en tiempo real (`NSApplicationDidChangeScreenParametersNotification`).

Para cada pantalla activa, Traaay verifica las propiedades físicas mediante `NSScreen`:
- Comprueba `safeAreaInsets.top` y las zonas de seguridad del notch.
- Si la pantalla activa es un monitor externo sin notch, **ningún icono se considera oculto**.

### Comportamiento en la Interfaz:
- **En la pantalla integrada con Notch**: Los puntos ámbar y alertas se activan si los iconos sobrepasan el margen.
- **En monitores externos sin Notch**: Los puntos ámbar se **desactivan por completo**. Disfrutas de una experiencia limpia y sin advertencias innecesarias.

```
MacBook Pro (Pantalla integrada con Notch):
[ Menús App ]     [⚠️ Notch]     [Iconos visibles]
                   ▲ Puntos ámbar activos

Studio Display 27" (Monitor externo sin Notch):
[ Menús App ]                  [Todos los iconos visibles]
                               ▲ Cero puntos ámbar
```

---

## Modo Clamshell (Tapa Cerrada)

Al cerrar la tapa del MacBook para utilizar únicamente un monitor externo, Traaay detecta el apagado de la pantalla interna y ajusta de inmediato todos los cálculos a las dimensiones del monitor activo.
