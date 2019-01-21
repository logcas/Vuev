module.exports = {
    dest: './dist',
    base: '/vuev/',
    repo: 'https://github.com/logcas/Vuev',
    locales: {
        '/': {
            title: 'Vuev',
            description: 'Lightweight Vue.js components library',
            lang: 'en-US',
        },
        '/zh/': {
            title: 'Vuev',
            description: '轻量级Vue.js组件库',
            lang: 'zh-CN',
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [{
                        text: 'Index',
                        link: '/'
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/logcas/Vuev'
                    },
                ],
                sidebar: [
                    {
                        title: 'Guide',
                        collapsable: false,
                        children: [
                            '/guide/',
                        ]
                    },
                    {
                        title: 'Basic',
                        collapsable: false,
                        children: [
                            '/basic/icon',
                            '/basic/button'
                        ]
                    },
                    {
                        title: 'Form',
                        collapsable: false,
                        children: [
                            '/form/checkbox',
                            '/form/input',
                        ]
                    }
                ],
            },
            '/zh/': {
                selectText: '语言',
                label: '简体中文',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [{
                        text: '首页',
                        link: '/zh/'
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/logcas/Vuev'
                    },
                ],
                sidebar: [
                    {
                        title: '引导',
                        collapsable: false,
                        children: [
                            '/zh/guide/'
                        ]
                    },
                    {
                        title: '基础',
                        collapsable: false,
                        children: [
                            '/zh/basic/icon',
                            '/zh/basic/button'
                        ]
                    },
                    {
                        title: '表单',
                        collapsable: false,
                        children: [
                            '/zh/form/checkbox',
                            '/zh/form/input',
                        ]
                    }
                ],
            },
        },
        displayAllHeaders: true,
        sidebarDepth: 1,
    }
}