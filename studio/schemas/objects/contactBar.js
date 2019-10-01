export default {
  name: 'contactBar',
  type: 'array',
  title: 'Contact Bar',
  of: [
    {
      title: 'Contact Item',
      name: 'contactItem',
      type: 'object',
      fields: [
        {
          title: 'Label',
          name: 'label',
          type: 'string'
        },
        {
          title: 'Href',
          name: 'href',
          type: 'string'
        },
        {
          title: 'Icon',
          name: 'icon',
          type: 'string'
        }
      ]
    }
  ]
}
