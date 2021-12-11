<template>
  <div id="app">
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
a {
  text-decoration: none;
}
</style>
