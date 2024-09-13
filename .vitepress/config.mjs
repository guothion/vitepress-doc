import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  cleanUrls:true, //开启纯净链接
  base: "/vitepress-doc/",
  title: "guothion 个人文档",
  description: "guothion的个人文档库",
  appearance:true, 
  ignoreDeadLinks: false,
  head: [
    ['link', { rel: 'icon', href: './public/favicon.ico' }]
  ],
  themeConfig: {
    logo: './public/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '快速上手', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guothion/vitepress-doc' }
    ],
    search: { 
      provider: 'local'
    }, 
    footer: {
      message: 'person example page'
    },
    // sidebar: [
    //   {
    //     //分组标题
    //     text: '指南',
    //     items: [
    //       { text: '前言', link: '/' },
    //       { text: '快速上手', link: '/' },
    //       { text: '配置', link: '/' },
    //       { text: '页面', link: '/' },
    //       { text: 'Frontmatter', link: '/' },
    //       { text: 'Markdown', link: '/' },
    //       { text: '静态部署', link: '/' },
    //     ],
    //   },
    // ],
  }
})
