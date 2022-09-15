/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: '心流-帮助中心',
    tagline: '心流-帮助中心',
    url: 'https://docs.myflowtime.cn',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Flowtime', // Usually your GitHub org/user name.
    projectName: 'meetflowtime', // Usually your repo name.

    themeConfig: {
        algolia: {
            appId: 'OIOJXZBCAQ',
            apiKey: "fb4428d71c2a260eb4722fb128f386cb",
            indexName: "Flowtime",
        },
        navbar: {
            title: '心流-帮助中心',
            logo: {
                alt: 'Flowtime',
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
                    href: 'https://www.meetflowtime.com/blogs/meditation-guide',
                    label: 'Blog',
                    position: 'right',
                },
                {
                    href: 'https://www.meetflowtime.com/',
                    label: 'Products',
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
                    title: 'Products',
                    items: [
                        {
                            label: 'Flowtime Headband',
                            href: 'https://www.meetflowtime.com/products/flowtime-smart-cushionstackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Flowtime Cushion',
                            href: 'https://www.meetflowtime.com/products/flowtime-biosensing-meditation-headband',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'https://www.meetflowtime.com/blogs/meditation-guide',
                        },
                        {
                            label: 'The app',
                            href: 'https://www.meetflowtime.com/pages/the-app',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Flowtime. All rights reserved.`,
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
