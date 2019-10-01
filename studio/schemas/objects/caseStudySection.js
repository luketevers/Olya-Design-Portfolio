export default {
  title: 'Case Study Section',
  name: 'caseStudySection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'string'
    },
    {
      title: 'Center Align Section',
      name: 'centerAlign',
      type: 'string'
    },
    {
      title: 'Section',
      name: 'section',
      type: 'array',
      to: [
        {
          title: 'Subtitle',
          name: 'subtitle',
          description: 'Optional.',
          type: 'text'
        },
        {
          title: 'Body',
          name: 'body',
          type: 'text'
        },
        {
          title: 'Tiles',
          name: 'tiles',
          type: 'array',
          to: [
            {
              title: 'Image',
              name: 'image',
              type: 'mainImage'
            },
            {
              title: 'Full Width',
              name: 'fullWidth',
              type: 'string'
            },
            {
              title: 'Body',
              name: 'body',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}
