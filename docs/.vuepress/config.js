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
      "/js-api/": ["", "ch01", "ch02", "ch03"],

      "/operations/": ["", "install", "bootstrap"],

      // fallback
      "/": [""]
    }
  },
  // Assumes GitHub. Can also be a full GitLab url.
  repo: "zeuschain/docs",
  // Customising the header label
  // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
  repoLabel: "Contribute!",

  // Optional options for generating "Edit this page" link

  // if your docs are in a different repo from your main project:
  docsRepo: "zeuschain/docs",
  // if your docs are not at the root of the repo:
  docsDir: "docs",
  // if your docs are in a specific branch (defaults to 'master'):
  docsBranch: "master",
  // defaults to false, set to true to enable
  editLinks: true,
  // custom text for edit link. Defaults to "Edit this page"
  editLinkText: "Help us improve this page!"
};
