export const state = () => ({
  newlistfirst: true,
  newArticlelist: [],
  taglistfirst: true,
  taglistcon: [],
  userinfo: {}
});
// 创建一个对象存储一系列
export const mutations = {
  updatenewlistcon(state, newArticlelist) {
    state.newArticlelist = newArticlelist;
  },
  newlistfirst(state, newlistfirst) {
    state.newlistfirst = newlistfirst;
  },
  updatetaglistcon(state, taglistcon) {
    state.taglistcon = taglistcon;
  },
  taglistfirst(state, taglistfirst) {
    state.taglistfirst = taglistfirst;
  },
  updateuserinfo(state, userinfo) {
    state.userinfo = userinfo;
  }
};
