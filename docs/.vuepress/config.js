module.exports = {
    title: 'Vue3 NEWS', 
    description: 'Xanda的博客',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        sidebar: [
            {
              title: 'Group 1',
              collapsable: false,
              children: [
                '/'
              ]
            },
            {
              title: 'Group 2',
              children: [ /* ... */ ]
            }
        ],
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },          
          {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'Japanese', link: '/language/japanese' }
            ]
          },
          { text: 'External', link: 'https://google.com' },

        ],
        // algolia: {
        //     apiKey: '<API_KEY>',
        //     indexName: '<INDEX_NAME>'
        // }
    }
}