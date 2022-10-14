/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'FLOWTIME 心流时刻 | 帮助中心',
    tagline: 'FLOWTIME 心流时刻 | 帮助中心',
    url: 'https://docs.myflowtime.cn',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Flowtime', // Usually your GitHub org/user name.
    projectName: 'FLOWTIME 心流时刻', // Usually your repo name.

    themeConfig: {
        algolia: {
            appId: 'OIOJXZBCAQ',
            apiKey: "fb4428d71c2a260eb4722fb128f386cb",
            indexName: "Flowtime",
        },
        navbar: {
            title: 'FLOWTIME 心流时刻 | 帮助中心',
            logo: {
                alt: 'FLOWTIME 心流时刻',
                src: 'img/logo.png',
            },
            items: [
                // {
                //   type: 'doc',
                //   docId: 'Docs',
                //   position: 'left',
                //   label: 'Docs',
                // },
                // {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://www.myflowtime.com/',
                    label: '官网',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            // logo: {
            //     alt: 'meetFlowtime',
            //     // This default includes a positive & negative version, allowing for
            //     // appropriate use depending on your site's style.
            //     src: '/img/logo.svg',
            //     href: 'https://www.meetflowtime.com',
            // },
            links: [
                {
                    title: '产品',
                    items: [
                        {
                            label: 'FLOWTIME 冥想头环',
                            href: 'https://www.myflowtime.cn/product/headband.html',
                        },
                        {
                            label: 'FLOWITME 冥想坐垫',
                            href: 'https://www.myflowtime.cn/product/cushion.html',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} FLOWTIME 心流时刻. All rights reserved.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    //   editUrl:
                    //     'https://github.com/Entertech/tDCS-Documents/tree/master/edit/master/tDCS/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'hourly',
                    priority: 1.0,
                    trailingSlash: false,
                },
            },
        ],
    ],
};
