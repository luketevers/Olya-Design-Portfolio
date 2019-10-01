import icon from 'react-icons/lib/md/short-text'

export default {
  type: 'document',
  name: 'bio',
  icon,
  title: 'Bio',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      description: 'Short Bio About You'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'bioPortableText'
    },
    {
      name: 'button',
      title: 'Button',
      type: 'basicButton'
    },
    {
      name: 'socialMediaBar',
      title: 'Social Media',
      type: 'iconBar'
    },
    {
      name: 'contactBar',
      title: 'Contact Bar',
      type: 'iconBar'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
