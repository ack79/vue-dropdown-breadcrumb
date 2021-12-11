<template>
  <div class="breadcrumb">
    <ul class="links">
      <li
        class="link-item"
        v-for="(link, index) in links"
        :key="`link-${index}`"
      >
        <a
          v-if="!link.isDropdown"
          :href="link.link"
        >{{ link.label }}</a>
        <p v-else>{{ link.label }}</p>
        <span class="material-icons"> chevron_right </span>
        <ul
          class="sublinks"
          v-if="link.isDropdown"
        >
          <li
            class="sublink-item"
            v-for="(sublink, index) in link.list"
            :key="`sublink-${index}`"
          >
            <a :href="sublink.link">{{ sublink.label }}</a>
          </li>
        </ul>
      </li>
    </ul>
    <HoverDropdown></HoverDropdown>
  </div>
</template>
<script>
import HoverDropdown from "./HoverDropdown.vue";
export default {
  name: "BreadCrumb",
  data () {
    return {
      isDropdown: true,
    };
  },
  props: {
    links: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  components: {
    HoverDropdown,
  },
};
</script>
<style lang="scss" scoped>
.breadcrumb {
  .links {
    list-style-type: none;
    display: flex;
    align-items: center;
    .link-item {
      display: flex;

      .sublinks {
        list-style-type: none;
      }
      .sublinks:hover {
        color: red;
      }
    }
  }
}
</style>
