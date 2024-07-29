<script lang="ts">
  import Image from "../Image.svelte";

  export let src: string = "/images/socials/carrd.png";
  export let alt: string = "alt text";
  export let size: string = "24px";
  export let url: string = "https://strawb3rriicake.carrd.co/";

  function openLink(url: string) {
    window.open(url, "_blank");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="social-icon"
  on:click={() => openLink(url)}
  style="width: {size}; height: {size};"
>
  <Image {src} {alt} />
</div>

<style lang="scss">
  .social-icon {
    cursor: pointer;
  }
</style>
