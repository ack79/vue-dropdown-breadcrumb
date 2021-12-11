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
          <span v-if="link.isDropdown" class="material-icons">
            expand_more
          </span>
        </a>
        <p class="url" v-else>{{ link.label }}</p>
        <span v-if="index !== links.length - 1" class="material-icons">
          chevron_right
        </span>
        <ul class="sublinks" v-if="link.isDropdown">
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
  data() {
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
      align-items: center;
      cursor: pointer;
      padding: 7px 3px;

      &:last-child {
        cursor: default;
        .url {
          color: #2f3e46;
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
        list-style-type: none;
        display: none;
        .sublink-item {
        }
      }
      .sublinks:hover {
        color: red;
      }
    }
  }
}
</style>
