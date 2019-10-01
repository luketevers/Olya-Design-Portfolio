export default {
  name: 'resumeItem',
  title: 'Resume Item',
  type: 'object',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'string'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'string'
    }
  ]
}
