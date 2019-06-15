export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d05321d57222229d734df4f',
                  title: 'Sanity Studio',
                  name: 'almale-studio',
                  apiId: '29521bfa-1c38-4d0e-8f41-fafbfd907ff7'
                },
                {
                  buildHookId: '5d05321d30ff217a44660ce5',
                  title: 'Landing pages Website',
                  name: 'almale',
                  apiId: '55064c95-7209-4229-9698-140b1bdaa191'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/narayetamas/almale',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://almale.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
