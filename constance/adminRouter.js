export const adminRouter = [
         //{ path: '/main', component: Main },
         {
           path: "/admin",
           name: "导航一",
           iconCls: "el-icon-message", //图标样式class
           children: [
             { path: "/table", name: "Table" },
             { path: "/wangeditor", name: "富文本编辑器" },
             { path: "/mavoneditor", name: "列表" }
           ]
         },
         {
           path: "/",
           name: "导航二",
           iconCls: "el-icon-tickets",
           children: [
             { path: "/page4", name: "页面4" },
             { path: "/page5", name: "页面5" }
           ]
         },
         {
           path: "/",
           name: "",
           iconCls: "el-icon-s-data",
           leaf: true, //只有一个节点
           children: [{ path: "/page6", name: "导航三" }]
         },
         {
           path: "/",
           name: "Charts",
           iconCls: "el-icon-user",
           // children: [{ path: "/echarts", component: echarts, name: "echarts" }]
           children: [{ path: "/echarts", name: "echarts" }]
         }
       ];
