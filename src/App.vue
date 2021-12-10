<template>
  <div id="app">
    <BreadCrumb :links="dummyBreadcrumbUrls" />
  </div>
</template>

<script>
import BreadCrumb from "./components/BreadCrumb.vue";
export default {
  name: "App",
  data() {
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
  components: {
    BreadCrumb,
  },
};
</script>

<style lang="scss"></style>
