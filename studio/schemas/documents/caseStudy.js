import icon from 'react-icons/lib/md/work'

export default {
  name: 'caseStudy',
  type: 'document',
  title: 'Case Study',
  icon,
  fields: [
    {
      name: 'image',
      type: 'mainImage',
      title: 'Event image'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Event name'
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Sub Title',
      description: 'Describe the case study.'
    },
    {
      name: 'subSection',
      title: 'Sub Tiles',
      type: 'array',
      of: [{type: 'titleText'}]
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      description: 'Add keywords that describes the case study.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subtitle'
    }
  }
}
