<template>
  <div>
    <ul>
      <li v-for="(link, index) in links" :key="`link-${index}`">
        <a :href="link.link">{{ link.label }}</a>
        <span class="material-icons"> chevron_right </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "BreadCrumb",
  props: {
    links: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>
