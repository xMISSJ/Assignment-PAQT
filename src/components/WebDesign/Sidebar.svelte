<script lang="ts">
  import CheckBox from "./CheckBox.svelte";
  import Spacer from "../Spacer.svelte";
  import Typography from "../Typography.svelte";

  export let title: string = "Title 1";
  export let ingredients: string[];
  export let sideNote: string = "";
</script>

<div class="side-bar">
  <div class="content">
    <Typography variant="p" type="subtitle2">{title}</Typography>
    <Spacer multiplier={2} />
    {#each ingredients as ingredient, index}
      <div class="checkbox-item">
        <CheckBox id="option-{index}" />
        <label for="option-{index}">
          <Typography variant="p" type="body">{@html ingredient}</Typography>
        </label>
      </div>
    {/each}
    <Spacer multiplier={4} />
    {#if sideNote != ""}
      <Typography variant="p" type="body">{sideNote}</Typography>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../../styles/variables";

  .side-bar,
  .content {
    display: flex;
    flex-direction: column;
  }

  .side-bar {
    width: 100%;
    height: fit-content;
    background-color: white;

    @media screen and (min-width: $breakpoint-large) {
      width: 400px;
    }
  }

  .checkbox-item {
    display: flex;
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
  }
</style>
