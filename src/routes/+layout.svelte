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
  {/if}

  {#if $page.url.pathname != "/" && assignmentData != null}
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
  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  @import "../styles/_variables.scss";

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
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
    left: 40px;
    top: 40px;
    position: absolute;
  }

  .accordion-container {
    margin-top: 80px;
    margin-bottom: 40px;
    width: 100%;
    max-width: 100vw;

    @media screen and (min-width: $breakpoint-medium) {
      margin-top: 80px;
      margin-bottom: 40px;
      width: 700px;
      max-width: 800px;
    }
  }
</style>
