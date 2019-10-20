import icon from 'react-icons/lib/md/work'

export default {
  name: 'caseStudy',
  type: 'document',
  title: 'Case Study',
  icon,
  fields: [
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'mainImage'
    },
    {
      title: 'Case Study Title',
      name: 'caseStudyTitle',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Sub Title',
      description: 'Optional.',
      type: 'text'
    },
    {
      title: 'Description',
      name: 'description',
      description: 'Optional. Short description of case study.',
      type: 'text'
    },
    {
      title: 'Challenge Image',
      name: 'challengeImage',
      description: 'Challenge image if not used will make box background; if used will make slanted background',
      type: 'mainImage'
    },
    {
      title: 'Challenge Items',
      name: 'challengeItems',
      type: 'array',
      of: [
        {
          type: 'titleText'
        }
      ]
    },
    {
      title: 'How Might We...',
      name: 'howMightWe',
      type: 'object',
      fields: [
        {title: 'Image', name: 'image', type: 'image'},
        {title: 'Body', name: 'body', type: 'text'}
      ]
    },
    {
      title: 'Steps',
      name: 'steps',
      type: 'array',
      of: [{type: 'caseStudySection'}]
    },
    {
      title: 'Mobile Gallery',
      name: 'mobileGallery',
      type: 'object',
      fields: [
        {
          title: 'Gif Image',
          name: 'gifImage',
          type: 'image'
        },
        {
          title: 'Link',
          name: 'link',
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
            }
          ]
        }
      ]
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      description: 'Add keywords that describes the case study.',
      of: [
        {
          type: 'string'
        }
      ],
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
