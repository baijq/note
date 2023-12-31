import { HeadTags } from "vuepress/config";

export default <HeadTags>[
  ["link", { rel: "icon", href: "/notebook.ico" }], //站点图标, 默认为 public/favicon.ico
  [
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,user-scalable=no",
    },
  ],
];
