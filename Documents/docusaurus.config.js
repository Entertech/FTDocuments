/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'MeetFlowtime',
    tagline: 'MeetFlowtime Headset boost brain power in 1 minute.',
    url: 'https://help.meetflowtime.com',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Entertech', // Usually your GitHub org/user name.
    projectName: 'meetflowtime', // Usually your repo name.
    themeConfig: {
        algolia: {
            appId: '6GQW4OO0X8',
            apiKey: "59f85217b5d1388482cb32c4de702958",
            indexName: "MeetFlowtime-international",
        },
        navbar: {
            title: 'Meet Flowtime',
            logo: {
                alt: 'Meet Flowtime',
                src: 'img/logo.svg',
            },
            items: [
                // {
                //   type: 'doc',
                //   docId: 'Docs',
                //   position: 'left',
                //   label: 'Docs',
                // },
                // {to: '/blog', label: 'Blog', position: 'left'},
                // {
                //   href: 'https://github.com/Entertech/tDCS-Documents/tree/master/tDCS',
                //   label: 'GitHub',
                //   position: 'right',
                // },
            ],
        },
        footer: {
            style: 'light',
            links: [
                //   {
                //     items: [
                //       {
                //         label: 'Flowtime tDCS官网',
                //         href: 'https://www.xzytdcs.com',
                //       }
                //     ],
                //   }
                //     {
                //       title: 'Community',
                //       items: [
                //         {
                //           label: 'Stack Overflow',
                //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //         },
                //         {
                //           label: 'Discord',
                //           href: 'https://discordapp.com/invite/docusaurus',
                //         },
                //         {
                //           label: 'Twitter',
                //           href: 'https://twitter.com/docusaurus',
                //         },
                //       ],
                //     },
                //     {
                //       title: 'More',
                //       items: [
                //         {
                //           label: 'Blog',
                //           to: '/blog',
                //         },
                //         {
                //           label: 'GitHub',
                //           href: 'https://github.com/facebook/docusaurus',
                //         },
                //       ],
                //     },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Entertech Inc. All rights reserved.`,
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
