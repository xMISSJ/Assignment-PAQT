<script lang="ts">
  import Typography from "./../../components/Typography.svelte";
  import Spacer from "../../components/Spacer.svelte";
  import Footer from "../../components/WebDesign/Footer.svelte";
  import Header from "../../components/WebDesign/Header.svelte";
  import Sidebar from "../../components/WebDesign/Sidebar.svelte";
  import Triangle from "../../components/WebDesign/Triangle.svelte";
  import Image from "../../components/Image.svelte";
  import { getRecipeByRecipeName } from "$lib/utils";

  let recipeData = getRecipeByRecipeName("pancakes");
</script>

<section id="web-design">
  <Header />
  <Spacer multiplier={16} />
  <div id="content">
    <section id="left-content">
      <Typography variant="h1" type="title2">
        {recipeData.recipe_title}
      </Typography>
      <Spacer multiplier={4} />
      <Typography variant="p" type="body">
        {recipeData.recipe_description_1}
      </Typography>
      <Spacer multiplier={4} />
      <div id="image-container">
        <Image
          src={recipeData.main_image.src}
          alt={recipeData.main_image.alt}
          useBase={false}
        />
      </div>
      <Spacer multiplier={4} />
      <Typography type="p" variant="body">
        {recipeData.recipe_description_2}
      </Typography>
      <Spacer multiplier={4} />
      <div id="image-container">
        <Image
          src={recipeData.extra_image.src}
          alt={recipeData.extra_image.alt}
          useBase={false}
        />
      </div>
      <Spacer multiplier={8} />

      <Typography variant="h2" type="subtitle2">
        {"Instructions"}
      </Typography>
      <ol id="steps-list">
        {#each recipeData.steps as step, index}
          <Typography variant="p" type="body"><li>{step}</li></Typography>
          {#if index != recipeData.steps.length - 1}
            <Spacer multiplier={2} />
          {/if}
        {/each}
      </ol>
    </section>
    <section id="right-content">
      <Sidebar
        title="Ingredients"
        ingredients={recipeData.ingredients}
        sideNote={recipeData.side_note}
      />
    </section>
  </div>
  <Spacer multiplier={16} />
  <div id="triangle-container">
    <Triangle />
  </div>
  <footer id="footer">
    <Footer />
  </footer>
</section>

<style lang="scss">
  @import "../../styles/variables";

  #web-design,
  #left-content,
  #right-content {
    display: flex;
    flex-direction: column;
  }

  #web-design {
    align-items: center;
    width: 100%;
    height: calc(100% + 100px);
    background-color: var(--color-bg);
    position: relative;
    z-index: 1;
    margin-bottom: 100px; // For footer. Usually you put this in main because footer would be consistent over the website.
  }

  #content {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px;

    @media screen and (min-width: $breakpoint-large) {
      flex-direction: row;
      padding: 0 200px;
    }
  }

  #left-content {
    max-width: 100%;
    margin-right: 0;
    background-color: white;
    padding: 50px;
    box-sizing: border-box;
    flex: 5;
    margin-bottom: 40px;

    @media screen and (min-width: $breakpoint-large) {
      margin-right: 60px;
      max-width: 43vw;
    }
  }

  .image-container {
    width: 100%;
    height: auto;
  }

  #right-content {
    align-items: flex-end;
    flex: 2;
  }

  #steps-list {
    max-width: 100%;

    @media screen and (min-width: $breakpoint-large) {
      max-width: 40vw;
    }
  }

  ol {
    padding-left: 0;
    margin-left: 0;
    list-style-position: inside;

    @media screen and (min-width: $breakpoint-large) {
      padding-left: inherit;
      margin-left: inherit;
      list-style-position: outside;
    }
  }

  #triangle-container {
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: -1;
  }

  #footer {
    position: fixed;
    bottom: 0;
  }
</style>
