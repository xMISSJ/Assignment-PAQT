<script lang="ts">
  import Spacer from "../Spacer.svelte";
  import Typography from "../Typography.svelte";
  import IconButton from "./IconButton.svelte";

  let basePath = `/images/socials`;

  let socialList: SocialItem[] = [
    {
      src: basePath + "/github.png",
      alt: "Github",
      url: "https://github.com/xMISSJ",
    },
    {
      src: basePath + "/linkedin.png",
      alt: "Linkedin",
      url: "https://www.linkedin.com/in/jennysun1996/",
    },
  ];
</script>

<div class="footer">
  <div class="social-container">
    {#each socialList as socialItem, index}
      <div
        id="social-icon"
        style="margin-right:{index == socialList.length - 1 ? '0' : '10px'};"
      >
        <IconButton
          src={socialItem.src}
          alt={socialItem.alt}
          url={socialItem.url}
        />
      </div>
    {/each}
  </div>
  <Spacer multiplier={2} />
  <Typography type="p" variant="body">
    {"© 2024 Jenny Sun"}
  </Typography>
</div>

<style lang="scss">
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100px;
    background-color: var(--color-dark-lilac-2);
  }

  .social-container {
    display: flex;
  }
</style>
