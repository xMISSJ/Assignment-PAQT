<script lang="ts">
  import Arrow from "./Arrow.svelte";
  import Typography from "./Typography.svelte";

  export let heading: string;
  export let content: string;

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<button class="accordion" on:click={toggle} class:active={isOpen}>
  <Typography variant="h1" type="subtitle2">{heading}</Typography>
  <span class="icon" class:rotate={isOpen}>
    <Arrow width={"12px"} height={"12px"} />
  </span>
</button>
<div class="panel" class:show={isOpen}>
  <Typography variant="p" type="body" whiteSpace="pre-wrap">
    {@html content}
  </Typography>
</div>

<style lang="scss">
  .accordion {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    width: 100%;
    border: none;
    outline: none;
    transition: 0.4s;
    background-color: var(--color-dark-lilac-2);
    cursor: pointer;

    &:hover {
      background-color: var(--color-dark-lilac);
    }
  }

  .icon {
    transition: transform 0.4s;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .panel {
    padding: 8px;
    display: none;
    background-color: var(--color-lilac);
    overflow: hidden;
    margin-bottom: 30px;
  }

  .panel.show {
    display: block;
  }
</style>
