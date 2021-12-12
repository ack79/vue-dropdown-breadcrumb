### Notes
[Üç Büyücü Turnuvası](https://github.com/topics/ucbuyucuturnuvasi)

This library was developed as part of the `Üç Büyücü Turnuvası` hackathon.Our destination is to learn how to  open source licences,use the github pages,write test for ui component and npm package the vue component and publish it.The library, besides being simple, entertained us a lot during development and taught us a lot.
Thank You.

# Trello Board and Roadmap
[Trello Board](https://trello.com/invite/b/aCemQkvR/28f2c73cf4cd7d5c77d8a23564fc81ed/vue-dropdown-breadcrumb)

# vue-dropdown-breadcrumb
A breadcrumb library with dropdown option
<p align="left">
  <a href="http://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
</p>

### About

A simple breadcrumb library.In addition to working as a breadcrumb, it also enables sub-categories to be listed as dropdown.
We just need to change the `isDropdown` parameter of the general categories whose subcategories we want to show and pass the link list.In this way, users can easily switch between categories.Css can be easily edited by you.

### Usage Example

```html
<template>
  <vue-dropdown-breadcrumb :links="links" />
</template>
<script>
import vueDropdownBreadcrumb from 'vue-dropdown-breadcrumb'
export default {
  name: 'app',
  data () {
    return {
      links: [
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
```
### Props
| prop | type | required | default | description |
|---|---|---|---|---|
| label | String | yes | | String to be displayed as label in `a` tag|
| link | String | yes | | The link to be written as `href` inside the `a` tag|
| isDropdown | Boolean | no | false | It must be `true` if the breadcrumb item is to be opened as a dropdown and other links will be shown. |
| list | Array | `yes` if isDropdown is `true` | [ ] | Link list for dropdown links|
### Development
``` bash
# install dependencies
npm install
# serve with hot reload
npm run watch
# run the tests
npm run test
# build demo page
npm run build:example
# build library
npm run build:library
# build everything and run tests
npm run build
```
### Contribute
As we mentioned above, we have a Trello board.You can contribute according to the issues there. You can add your ideas to the board. Have fun!
### License
[MIT](http://opensource.org/licenses/MIT)