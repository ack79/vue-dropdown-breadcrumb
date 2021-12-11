<template>
  <div class="breadcrumb">
    <ul class="links">
      <li
        class="link-item"
        v-for="(link, index) in links"
        :key="`link-${index}`"
      >
        <a
          :class="{ 'dropdown-item': link.isDropdown }"
          class="url"
          v-if="link.link"
          :href="link.link"
        >
          {{ link.label }}
          <span
            v-if="link.isDropdown"
            class="material-icons"
          >
            expand_more
          </span>
        </a>
        <p
          class="url"
          v-else
        >{{ link.label }}</p>
        <span
          v-if="index !== links.length - 1"
          class="material-icons"
        >
          chevron_right
        </span>
        <HoverDropdown
          class="sublinks"
          v-if="link.isDropdown"
          :dropdownList="link.list"
        ></HoverDropdown>
      </li>
    </ul>
  </div>
</template>
<script>
import HoverDropdown from "./HoverDropdown.vue";
export default {
  name: "VueDropdownBreadcrumb",
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
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.breadcrumb {
  .links {
    list-style-type: none;
    display: flex;
    align-items: center;
    .link-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 7px 3px;
      position: relative;
      &:last-child {
        cursor: default;
        .url {
          color: #2f3e46;
        }
      }
      &:hover {
        .sublinks {
          display: block;
        }
      }
      .url {
        font-size: 14px;
        line-height: 15px;
        color: #84a98c;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .material-icons {
        font-size: 14px;
        color: #84a98c;
        margin-left: 5px;
      }
      .dropdown-item {
        border: 1px solid #84a98c;
        border-radius: 10px;
        padding: 5px 10px;
        display: flex;
        align-items: center;
      }
      .sublinks {
        display: none;
        position: absolute;
        top: 45px;
        left: 70%;
      }
    }
  }
}
</style>
