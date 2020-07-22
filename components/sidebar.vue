<template>
  <div class="lift-col-md4 index-side">
    <div class="newsSide">
      <h2>{{title}}</h2>
      <ul>
        <li v-for="item in hotNewsList" :key="item.id">
          <a :href="'/details/'+item.id">
            <span>
              <img :src="item.cover_img_url" />
            </span>
            <p class="txt">{{item.title}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotNewsList",
  props: {
    hotNewsList: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {};
  },
  methods: {
    articlesDetailsFn: function(id) {
      this.$router.push({ path: `/details/${id}` });
    }
  }
};
</script>
<style lang="scss" scoped>
.newsSide {
  background-color: #fafafa;
  padding: 0 20px;
  h2 {
    color: #000;
    font-size: 18px;
    font-weight: 700;
    padding: 20px 0 0;
  }
  ul {
    font-size: 0;
    li {
      padding: 20px 0;
      border-top: 1px solid #ebebeb;

      // font-size: 0;
      a{
        display: block;
        font-size: 14px;
      color: #555;
      line-height: 24px;
      display: flex;
      }
      &:first-child {
        border-top: 0;
      }
      span {
        width: 27%;
        display: inline-block;
        img {
          display: inline-block;
          width: 90%;
        }
      }
      p.txt {
        width: 73%;
        line-height: 20px;

      }
    }
  }
}
</style>
