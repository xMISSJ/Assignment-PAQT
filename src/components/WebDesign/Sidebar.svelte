<script>
  import Image from "../Image.svelte";
  import Typography from "../Typography.svelte";
  export let imagePath = "";
  export let imageAlt = "";
  export let imageUseBase = false;
</script>

<div class="side-bar">
  <div class="image-container">
    <Image src={imagePath} alt={imageAlt} useBase={imageUseBase} />
  </div>
  <div class="content">
    <Typography variant="p" type="subtitle">{"Jenny Sun"}</Typography>
    <Typography variant="p" type="body2"
      >{"Digital Artist".toUpperCase()}</Typography
    >
  </div>
</div>

<style lang="scss">
  .side-bar,
  .content {
    display: flex;
    flex-direction: column;
  }

  .side-bar {
    width: 300px;
    height: 400px;
    background-color: white;
  }

  .image-container {
    display: flex;
    width: 100%;
    height: auto;
  }

  .content {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
