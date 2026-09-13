# El Separador Inteligente

El **Separador Inteligente** encarna el **Estrato 1** de Traaay (Glacier Cyan `#38BDF8`). Divide tu barra de menús en dos zonas: elementos **permanentes** (siempre visibles) y elementos **secundarios** (plegables).

---

## Mecánica de Plegado y Despliegue

En lugar de forzar el cierre de procesos en segundo plano, Traaay modula dinámicamente el ancho del separador en la barra del sistema:

- **Estado Plegado (Predeterminado)**: Los iconos secundarios permanecen ocultos. Tu barra se mantiene despejada, elegante y con espacio suficiente para los menús de tus aplicaciones.
- **Estado Desplegado**: Con un clic sobre el separador o mediante atajo de teclado, la barra se expande con suavidad para revelar todos los iconos.

```
Estado Desplegado:
[ Manzana ] [ Archivo ] [ Edición ] ... [ Icono 1 ] [ Icono 2 ] ┃ [ Icono 3 ] [ Icono 4 ] [ Reloj ]
                                        ▲ Secundarios           ┃ ▲ Permanentes

Estado Plegado:
[ Manzana ] [ Archivo ] [ Edición ] ............................ ┃ [ Icono 3 ] [ Icono 4 ] [ Reloj ]
                                                                ┃ ▲ Permanentes
```

---

## Organización y Ajustes

Desde el panel de configuración de Traaay:

1. Consulta la lista completa de utilidades activas en tu barra de menús.
2. Alterna el interruptor **Plegar / Desplegar** para ver el resultado en directo.
3. Arrastra los elementos entre el área *Siempre visible* y el área *Plegable* según tus prioridades.

<div class="screenshot-frame">
  <img src="/images/traaay-settings-panel.png" alt="Ajuste de plegado en Traaay" />
  <div class="screenshot-caption">El conmutador superior permite alternar el estado del separador de forma instantánea.</div>
</div>

---

## Comportamiento ante el Notch

Cuando los elementos plegados se despliegan, su longitud acumulada puede sobrepasar el espacio disponible a la derecha de la muesca de la pantalla.

Aquí entra en acción el **Estrato 2**: Traaay detecta la colisión física con el Notch y te avisa al instante. Consulta [Detección inteligente del Notch](./notch).
