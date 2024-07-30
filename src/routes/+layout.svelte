<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import BackButton from "../components/BackButton.svelte";
  import Accordion from "../components/Accordion.svelte";
  import Spacer from "../components/Spacer.svelte";
  import { getAssignmentByRoute } from "$lib/utils";

  const ROUTES = ["/form-picker", "/web-design", "/case"];

  let assignmentData: Assignment | null;

  $: {
    assignmentData = ROUTES.includes($page.url.pathname)
      ? getAssignmentByRoute($page.url.pathname)
      : null;
  }
</script>

<div class="app">
  {#if $page.url.pathname != "/"}
    <div class="back-button">
      <BackButton />
    </div>

    {#if assignmentData != null}
      <div class="accordion-container">
        <Accordion
          heading={assignmentData.title}
          content={assignmentData.description}
        />
        <Spacer multiplier={2} />
        <Accordion
          heading={assignmentData.answer_title}
          content={assignmentData.answer_description}
        />
      </div>
    {/if}
  {/if}
  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;
  }

  .back-button {
    margin: 20px;
  }

  .accordion-container {
    width: 600px;
    max-width: 800px;
    margin: 40px;
  }
</style>
