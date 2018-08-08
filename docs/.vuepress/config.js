module.exports = {
  title: "主神链文档",
  description:
    "所有主神联盟链中的公司, 会共同开发区块链底层功能, 每个公司专注在自己擅长或感兴趣的领域, 并开放接口及SDK给主神联盟链中的所有成员共同使用。",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  themeConfig: {
    displayAllHeaders: false,
    sidebarDepth: 3,
    nav: [
      { text: "入门文件", link: "/general/" },
      { text: "JS API 参考", link: "/js-api/" }
    ],
    sidebar: {
      "/general/": ["", "use-cases", "teams"],
      "/js-api/": ["", "ch01", "ch02", "ch03", "ch04"],

      "/operations/": ["", "install", "bootstrap"],

      // fallback
      "/": [""]
    }
  }
};
