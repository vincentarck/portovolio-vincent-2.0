export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options:{
        hotspot:true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of:[{type:'reference', to:{type:"skill"}}]
    },
    {
      name: 'linkToBuild',
      title: 'Link To Build',
      type: 'url',
    },
    {
      name: 'repoLink',
      title: 'Link To Repo',
      type: 'url',
    },
    {
      name:"privateWork",
      title:"isPrivateWork",
      type:"boolean"
    }
  ],
}
