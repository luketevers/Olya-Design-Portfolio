export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'Olya-Design-Portfolio-studio',
                  apiId: 'a8db69c2-456a-40b2-88e3-9387b8303914'
                },
                {
                  buildHookId: '5d6d4ef886740026282b9965',
                  title: 'Events Website',
                  name: 'Olya-Design-Portfolio',
                  apiId: 'd0d24806-226b-4146-8a06-57a2d6fb74cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luketevers/Olya-Design-Portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Olya-Design-Portfolio.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
