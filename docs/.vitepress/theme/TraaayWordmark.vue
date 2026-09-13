<script setup lang="ts">
/**
 * Wordmark Traaay.
 *
 * Le SVG est inliné plutôt que chargé via <img> pour une raison précise :
 * « Tr » et « y » sont peints en `currentColor`, et `currentColor` ne suit la
 * couleur du texte environnant que si le SVG fait partie du document. Dans un
 * <img>, il retomberait sur le noir et disparaîtrait en thème sombre.
 *
 * Le fichier public reste la source unique : il est lu à la compilation, il
 * n'y a pas de copie des tracés ici.
 */
import wordmark from '../../public/traaay-wordmark.svg?raw'

/**
 * `height` reste facultatif : sans valeur, aucune variable n'est posée en style
 * inline et la hauteur vient de la classe d'emplacement. Un style inline
 * gagnerait sur la feuille et figerait le wordmark à une seule taille.
 */
const props = defineProps<{ height?: string }>()
</script>

<template>
  <span
    class="traaay-wordmark"
    :style="props.height ? { '--wordmark-height': props.height } : undefined"
    v-html="wordmark"
  />
</template>

<style>
.traaay-wordmark {
  display: inline-flex;
  align-items: center;
  line-height: 0;
}

.traaay-wordmark svg {
  display: block;
  width: auto;
  height: var(--wordmark-height, 1em);
}
</style>
