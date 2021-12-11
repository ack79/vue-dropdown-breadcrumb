<template>
  <div id="app">

    <!-- <div style="width:70%;height:0;padding-bottom:53%;position:relative;"><iframe
        src="https://giphy.com/embed/Gfc3MUuDABaSc"
        width="70%"
        height="70%"
        style="position:absolute"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe></div>
    <p><a href="https://giphy.com/gifs/hp-patronus-spells-Gfc3MUuDABaSc">via GIPHY</a></p> -->
    <iframe
      src="https://giphy.com/embed/Gfc3MUuDABaSc"
      width="480"
      height="255"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
    <p><a href="https://giphy.com/gifs/hp-patronus-spells-Gfc3MUuDABaSc">via GIPHY</a></p>
    <vue-dropdown-breadcrumb :links="dummyBreadcrumbUrls" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dummyBreadcrumbUrls: [
        {
          label: "Ana Sayfa",
          link: "https://dementor.com",
          isDropdown: false,
          list: null,
        },
        {
          label: "Telefon ve Aksesuarlar",
          link: "https://dementor.com/telefon-aksesuarlar",
          isDropdown: false,
          list: null,
        },
        {
          label: "Cep Telefonları",
          isDropdown: true,
          link: "https://dementor.com/telefon-aksesuarlar",
          list: [
            {
              label: "Android Telefonlar",
              link: "https://dementor.com/android-telefonlar",
            },
            {
              label: "İphone İOS Telefonlar",
              link: "https://dementor.com/iphone-telefonlar",
            },
            {
              label: "Diğer Telefonlar",
              link: "https://dementor.com/diger-telefonlar",
            },
          ],
        },
        {
          label: "Android Telefonlar",
          isDropdown: false,
          list: null,
        },
      ],
    };
  },
}
</script>

<style lang="scss">
body {
  height: 100vh;
  background: linear-gradient(180deg, #0e1f45 7.5%, transparent),
    linear-gradient(180deg, #0e1f46, #000f30);
  background-repeat: no-repeat;

  a {
    text-decoration: none;
  }
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
