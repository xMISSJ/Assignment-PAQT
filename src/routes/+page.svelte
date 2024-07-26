<script lang="ts">
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import Button from "../components/Button.svelte";

  let pages = [
    { text: "Form Picker", path: "form-picker" },
    { text: "Web Design", path: "web-design" },
    { text: "Case", path: "case" },
  ];
</script>

<svelte:head>
  <title>PAQT Assignment</title>
  <meta name="description" content="Home screen with selectable assignments." />
</svelte:head>

<section id="home">
  <div id="assignment-selection">
    {#each pages as page}
      <Button width={120} onClick={() => goto(base + page.path)}>
        {page.text}
      </Button>
    {/each}
  </div>
</section>

<style>
  #home {
    width: 100vw;
    height: 100vh;
  }

  #assignment-selection {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
</style>
