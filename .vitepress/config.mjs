import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'en',
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
        logo: './public/cat-ico.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'HomePage', link: '/' },
            { text: '编程', link: '/Programming' },
            { text: 'English', link: '/English' },
            {text:'旅行', link: '/Travel' },
            {text:'古诗词', link: '/Poetry/侠客行' },
        ],

        sidebar: {
            '/Programming': [
                {
                    text: 'Introduction',
                    items: [
                        {text: 'Why Programming?', link: '/Programming/'},
                    ]
                }
            ],
            '/English': [
                {
                    text: 'Plan',
                    items: [
                        {text: 'why?', link: '/English/'},
                    ]
                }
            ],
            '/Travel': [
                {text: 'my Travels', link: '/Travel/'},
            ],
            '/Poetry': [
                {
                    text: '一世洒脱',
                    items: [
                        {text: '侠客行', link: '/Poetry/侠客行'},
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/guothion/vitepress-doc' }
        ],
        search: {
            provider: 'local'
        },
        footer: {
            message: '谁能书阁下，白首太玄经'
        },
    }
})
