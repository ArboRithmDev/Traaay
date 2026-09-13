# Gestos de Interacción

Para garantizar un flujo de trabajo fluido y natural, Traaay proporciona una matriz de interacción predecible tanto en la paleta flotante como en los menús.

> [!NOTE]
> Traaay no registra ningún atajo de teclado global. Todas las acciones descritas aquí son gestos de ratón, combinados en su caso con la tecla ⌘.

---

## Matriz de Interacción en Top Traaay

| Gesto | Elemento Visible | Elemento bajo el Notch (⚠️) |
| :--- | :--- | :--- |
| **Clic izquierdo simple** | Teletransporta el cursor y despliega el menú nativo | **Bloqueado**: Sin salto de cursor + aviso informativo |
| **Clic derecho** | Teletransporta el cursor y activa el menú secundario | **Bloqueado**: Notificación de elemento cubierto |
| **⌘ + Clic izquierdo** | Trae la ventana de la aplicación al primer plano | **Permitido**: Activa la app sin mover el cursor |

---

## Detalle de las Acciones

### 1. Clic Izquierdo: Teletransporte y Despliegue Nativo
Al hacer clic en un icono en la paleta Top Traaay, la aplicación calcula la coordenada absoluta del elemento y despacha el evento del ratón. El menú original de la aplicación se abre al instante bajo su icono.

<div class="screenshot-frame">
  <img src="/images/traaay-native-menu.png" alt="Despliegue nativo de un menú mediante Traaay" />
  <div class="screenshot-caption">Despliegue nativo instantáneo con el teletransporte de cursor de Traaay.</div>
</div>

### 2. Clic Derecho: Menú Secundario
Muchas utilidades de barra de menús ofrecen acciones diferenciadas según el botón utilizado (ej.: clic izquierdo para estado rápido y clic derecho para Preferencias / Salir). El clic derecho en Traaay reproduce con fidelidad dicho comportamiento.

### 3. ⌘ + Clic: Apertura Directa de la Aplicación
Si prefieres abrir la ventana principal del programa en lugar de su menú de estado, mantén pulsada la tecla **⌘ (Comando)** al pulsar.

Esta función opera **incluso si el icono está tapado bajo la muesca**, ya que se comunica con macOS a través de `NSRunningApplication`, sin depender de la visualización de la barra de menús.

---

## Protección contra Desorientación del Cursor

En utilidades anteriores o no optimizadas, pulsar sobre un icono oculto teletransportaba el puntero al centro del Notch negro, provocando clics erráticos y desconcierto.

Con Traaay:
- **Si el icono está tapado**: el cursor no se desplaza.
- Una notificación te informa de que el elemento se encuentra tras el notch físico.
- Para acceder a él, pliega iconos con el separador o utiliza el gesto `⌘+Clic`.
