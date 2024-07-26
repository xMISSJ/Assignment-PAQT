<script lang="ts">
  import { base } from "$app/paths";

  export let src: string = "";
  export let alt: string = "";
  export let objectFit: string = "cover";
  export let style: string = "";
</script>

<img
  class="image-component"
  src={base + src}
  {alt}
  style="object-fit: {objectFit}; {style};"
  loading="lazy"
/>

<style lang="scss">
  .image-component {
    width: 100%;
    height: 100%;
    margin: auto;
    object-position: 50%;
    overflow: hidden;
  }
</style>
