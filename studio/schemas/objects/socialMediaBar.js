export default {
  name: 'socialMediaBar',
  type: 'array',
  title: 'Social Media Bar',
  of: [
    {
      title: 'Social Media Item',
      name: 'socialMediaItem',
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
