<script lang="ts">
  import Typography from "./../../components/Typography.svelte";
  import Spacer from "../../components/Spacer.svelte";
  import Footer from "../../components/WebDesign/Footer.svelte";
  import Header from "../../components/WebDesign/Header.svelte";
  import Sidebar from "../../components/WebDesign/Sidebar.svelte";
  import Triangle from "../../components/WebDesign/Triangle.svelte";
  import Image from "../../components/Image.svelte";

  const pancakeImages = [
    {
      src: "https://www.theconsciousplantkitchen.com/wp-content/uploads/2023/01/Eggless-Pancakes-2.jpg",
      alt: "Pancakes shot 1",
    },
    {
      src: "https://i0.wp.com/passionateaboutbaking.com/foodpicturesPAB/2022/08/Fluffy-Eggless-Pancakes-5.jpg?w=1000&ssl=1",
      alt: "Pancakes shot 2",
    },
  ];

  // Usually all of this data info should be stored in a more central area with all data (e.g. recipes.json).
  const ingredients: string[] = [
    "300 g all-purpose or plain flour",
    "60 g granulated sugar or sweetener",
    "18 g baking powder",
    "0.25 teaspoon baking soda*",
    "3 g salt",
    "440 ml milk",
    "60 g butter",
    "10 ml pure vanilla extract",
    "1 large egg",
  ];

  const steps: string[] = [
    "Combine together the flour, sugar (or sweetener), baking powder, baking soda and salt in a large-sized bowl. Make a well in the centre and add the milk, slightly cooled melted butter, vanilla and egg.",
    "Use a wire whisk to whisk the wet ingredients together first before slowly folding them into the dry ingredients. Mix together until smooth (there may be a couple of lumps but that's okay). The batter will be thick and creamy in consistency. If you find the batter too thick -- doesn't pour off the ladle or out of the measuring cup smoothly -- fold a couple tablespoons of extra milk into the batter at a time until reaching desired consistency.",
    "Set the batter aside and allow to rest while heating up your pan or griddle.",
    "Heat a nonstick pan or griddle over low-medium heat and wipe over with a little butter to lightly grease pan. Pour ¼ cup of batter onto the pan and spread out gently into a round shape with the back of your ladle or measuring cup.",
    "When the underside is golden and bubbles begin to appear on the surface, flip with a spatula and cook until golden. Repeat with remaining batter.",
    "Serve with honey, maple syrup, fruit, ice cream or frozen yoghurt, or enjoy plain!",
  ];
</script>

<section id="web-design">
  <Header />
  <Spacer multiplier={16} />
  <div id="content">
    <section id="left-content">
      <Typography variant="h1" type="title2">
        {"Fluffy American Pancakes"}
      </Typography>
      <Spacer multiplier={4} />
      <Typography variant="p" type="body">
        {`Look no further, because a steaming stack of the world's best fluffy
        pancakes are right here! Weekends will never be the same again. No
        buttermilk needed! SIMPLE. EASY. QUICK. FLUFFY. The best fluffy pancakes
        recipe you will ever find, full of tips and tricks to help you perfect
        your pancakes.`}
      </Typography>
      <Spacer multiplier={4} />
      <div id="image-container">
        <Image
          src={pancakeImages[0].src}
          alt={pancakeImages[0].alt}
          useBase={false}
        />
      </div>
      <Spacer multiplier={4} />
      <Typography type="p" variant="body">
        {`Every single Sunday begins with pancakes and ends with leftover
        pancakes. These are everything you want in a pancake. They're soft and
        so fluffy… each mouthful melts in your mouth. You'll be reaching for
        more than one stack. Possibly. Probably.`}
      </Typography>
      <Spacer multiplier={4} />
      <div id="image-container">
        <Image
          src={pancakeImages[1].src}
          alt={pancakeImages[1].alt}
          useBase={false}
        />
      </div>
      <Spacer multiplier={8} />

      <Typography variant="h2" type="subtitle2">
        {"Instructions"}
      </Typography>
      <ol id="steps-list">
        {#each steps as step, index}
          <Typography variant="p" type="body"><li>{step}</li></Typography>
          {#if index != steps.length - 1}
            <Spacer multiplier={2} />
          {/if}
        {/each}
      </ol>
    </section>
    <section id="right-content">
      <Sidebar
        title="Ingredients"
        {ingredients}
        sideNote="
            *For fluffier pancakes, you can add baking soda, however, if you're
            sensitive to the taste, leave it out. Usually, for every cup of flour, add ⅛
            of a teaspoon of baking soda. This will turn your plain/all-purpose flour
            into self-raising flour."
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
