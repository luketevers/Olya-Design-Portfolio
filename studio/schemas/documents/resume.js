import icon from 'react-icons/lib/md/format-list-bulleted'

export default {
  name: 'resumes',
  title: 'Resumes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'resumeItem',
      title: 'Resume Item',
      type: 'resumeItem'
    }
  ],
  preview: {
    select: {
      title: 'resumeItem.company'
    }
  }
}
