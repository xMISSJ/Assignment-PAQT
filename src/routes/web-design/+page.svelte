<script lang="ts">
  import Spacer from "../../components/Spacer.svelte";
  import Typography from "../../components/Typography.svelte";
  import Footer from "../../components/WebDesign/Footer.svelte";
  import Header from "../../components/WebDesign/Header.svelte";
  import Sidebar from "../../components/WebDesign/Sidebar.svelte";
  import Triangle from "../../components/WebDesign/Triangle.svelte";
</script>

<section id="web-design">
  <Header>{"Chibi Art".toUpperCase()}</Header>
  <Spacer multiplier={8} />
  <div id="content">
    <section id="text-content">
      <Typography type="p" variant="body">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </section>
    <section id="sidebar">
      <Sidebar
        imagePath="https://strawb3rriicake.carrd.co/assets/images/gallery02/5c3f30b8.png?v=1e5e1c5a"
        imageAlt="Profile picture of me"
      />
    </section>
  </div>
  <div id="triangle-container">
    <Triangle />
  </div>
  <footer id="footer">
    <Footer />
  </footer>
</section>

<style lang="scss">
  #web-design {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg);
    position: relative;
    z-index: 1;
  }

  #content {
    display: flex;
    margin: 0 50px;
  }

  #text-content {
    display: flex;
    flex: 5;
    margin-right: 60px;
  }

  #sidebar {
    display: flex;
    justify-content: center;
    flex: 3;
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
