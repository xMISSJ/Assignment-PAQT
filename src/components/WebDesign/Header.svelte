<script>
  import Typography from "../Typography.svelte";
</script>

<div class="header"><Typography><slot /></Typography></div>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100px;
    background-color: white;
  }
</style>
