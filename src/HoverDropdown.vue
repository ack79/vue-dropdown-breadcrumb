<template>
  <section class="hover-dropdown-list">
    <div class="hover-dropdown-list-content">
      <ul class="dropdown-list">
        <li
          v-for="(dropList, index) in dropdownList"
          :key="`sublink-${index}`"
        >
          <a :href="dropdownList.link"> <span class="dropdown-name">{{ dropList.label }}</span></a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "HoverDropdown",
  props: {
    dropdownList: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.hover-dropdown-list {
  .hover-dropdown-list-content {
    overflow: hidden;
    padding: 0px 15px;
    //background-color: white;
    width: 200px;
    //position: absolute;
    //top: 6%;
    //left: 43%;
    margin-left: -210px;
    border-radius: 10px;
    text-align: left;
    max-height: 600px;
    overflow-y: auto;
    border-radius: 20px;
    @media (max-width: 640px) {
      position: fixed;
      padding: 30px 10px;
      top: initial;
      bottom: 0;
      left: 0;
      width: 100%;
      margin-left: initial;
      border-radius: 0;
    }
    .dropdown-list {
      padding: 0;
      box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.1);
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 15px;
        height: 35px;
        background: #fcf7f7;

        &:nth-child(2n) {
          background: #ffff;
        }
        span {
          display: inline-block;
          font-size: 14px;
        }
        .dropdown-name {
          font-weight: 500;
          font-size: 16px;
          line-height: 16px;
          color: #2f3e46;
        }
        .dropdown {
          font-weight: 700;
          font-size: 12px;
          line-height: 14px;
        }
      }
    }
  }
  .hover-dropdown-list-content::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #fcf7f7;
    top: 0;
    left: 5px;
    box-sizing: border-box;
    transform-origin: 0 0;
    transform: rotate(135deg);
  }
}
</style>
