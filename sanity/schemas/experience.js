export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name:'profileCompany',
      title:"link",
      type:"url"
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options:{
        hotspot:true
      }
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
    },
    {
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date'
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of:[{type:"reference", to: {type:"skill"}}]
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of:[{type:"string"}]
    },
  ],

}
