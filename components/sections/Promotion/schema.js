const schema = {
  name: 'Promotion',
  type: 'promotion_list',
  settings: [
    {
      type: 'text',
      id: 'heading',
      label: 'Heading',
      default: 'Promotion'
    }
  ],
  blocks: [
    {
      type: 'promotion',
      settings: [
        {
          type: 'text',
          id: 'title',
          label: 'Title',
          default: ''
        },
        {
          type: 'text',
          id: 'content',
          label: 'Content',
          default: ''
        }
      ]
    }
  ]
}

export default schema
