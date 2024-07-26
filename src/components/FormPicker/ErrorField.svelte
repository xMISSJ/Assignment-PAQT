<script lang="ts">
  import Typography from "../Typography.svelte";

  export let show: boolean = false;
</script>

<div class="error-field {show ? 'visible' : 'hidden'}">
  <Typography variant="p" type="body" color="var(--color-error)"
    ><slot /></Typography
  >
</div>

<style lang="scss">
  .error-field.visible {
    display: flex;
  }

  .error-field.hidden {
    display: none;
  }
</style>
