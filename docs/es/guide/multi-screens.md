# Monitores Múltiples

Traaay se adapta automáticamente a tu configuración de pantallas: MacBook independiente, doble pantalla con monitor externo o modo escritorio con tapa cerrada (*clamshell*).

---

## Dinámica con Varias Pantallas

Al trabajar con un MacBook conectado a uno o varios monitores externos:
1. **La pantalla integrada del MacBook** dispone de un notch físico que puede ocultar elementos.
2. **El monitor externo** (ej.: Apple Studio Display o pantalla externa convencional) posee una barra de menús recta y continua, sin obstáculos físicos.

---

## Detección por Monitor

Traaay sigue en todo momento tu configuración de pantallas: conectar, desconectar o reorganizar un monitor se tiene en cuenta de inmediato, sin reiniciar la aplicación.

Para la pantalla en la que estás interactuando, Traaay determina si un notch recorta la barra de menús:
- En una pantalla que lo tiene, mide qué iconos quedan detrás.
- En un monitor externo la barra de menús es continua: **ningún icono queda oculto**.

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

Al cerrar la tapa del MacBook para utilizar únicamente un monitor externo, la pantalla integrada deja de estar activa y Traaay trabaja solo sobre el monitor externo. Como este no tiene notch, no aparece ningún punto ámbar mientras la tapa siga cerrada.
