# Preguntas frecuentes

Las situaciones que aparecen con más frecuencia, y qué hacer en cada una.

---

## El permiso de Accesibilidad no se aplica

Es el caso más habitual: has marcado Traaay en los Ajustes del Sistema, pero la aplicación sigue comportándose como si no tuviera derecho a inspeccionar la barra de menús.

macOS solo vuelve a evaluar ese permiso al iniciarse el proceso. Por orden:

1. **Cierra Traaay por completo** y vuelve a abrirlo. En la mayoría de los casos basta con eso.
2. Si nada cambia, usa el botón **Restablecer el permiso** del panel de configuración. Traaay borra su entrada de accesibilidad y reabre los Ajustes del Sistema para que lo concedas de nuevo limpiamente.
3. Desmarca y vuelve a marcar **Traaay** en **Privacidad y seguridad > Accesibilidad**, y reinicia la aplicación.

> [!NOTE]
> Una entrada fantasma tras una reinstalación es frecuente: macOS a veces conserva el permiso antiguo asociado a una copia de la aplicación que ya no existe. El restablecimiento resuelve exactamente ese caso.

---

## ¿Traaay se inicia solo con mi Mac?

Solo si se lo pides. El inicio automático es una opción del panel de configuración, desactivada mientras no la actives.

---

## ¿Qué pasa con mis iconos si cierro Traaay?

Vuelven todos. Al cerrarse, Traaay **despliega siempre el separador** antes de detenerse: tu barra de menús recupera su estado completo, sin ningún icono atrapado tras un pliegue.

---

## ¿Dónde se guardan mis preferencias?

En un único archivo, fuera de la aplicación:

```
~/.config/traaay/preferences.json
```

Contiene tus grupos, la visibilidad de cada icono, la posición del separador y el idioma elegido. Sobrevive a las actualizaciones y reinstalaciones. Borrarlo devuelve Traaay a su estado inicial.

---

## ¿Cómo desinstalo Traaay del todo?

1. Cierra Traaay (clic derecho en el icono, luego Salir). Tus iconos vuelven a la barra de menús.
2. Arrastra **Traaay.app** desde Aplicaciones a la Papelera.
3. Para no dejar nada atrás, elimina la carpeta de preferencias:
   ```
   rm -rf ~/.config/traaay
   ```
4. Opcional: retira la entrada **Traaay** de **Privacidad y seguridad > Accesibilidad**.

---

## No veo ningún punto ámbar, ¿es un fallo?

No, es el comportamiento previsto en dos casos:

- Estás trabajando en un **monitor externo**, que no tiene notch: allí nada queda oculto, así que no hay nada que avisar.
- En la pantalla integrada, **ningún icono llega a la zona del notch**. No hay nada que señalar.

Consulta [Monitores múltiples](./multi-screens) para el detalle.

---

## ¿Traaay lee lo que escribo?

No. El permiso de Accesibilidad le sirve para dos cosas y nada más: medir dónde se sitúan los iconos de la barra de menús y reproducir el clic que acabas de pedir. No se registra ninguna pulsación de teclado ni se lee el contenido de ninguna aplicación.

---

## Mi Mac es Intel, ¿puedo instalar Traaay?

Hoy no. Las versiones publicadas están dirigidas a **Apple Silicon** (`aarch64`). Por ahora no se distribuye ninguna versión para Intel.

---

## Véase también

- [Primeros pasos e Instalación](./getting-started)
- [Actualizaciones](./updates)
