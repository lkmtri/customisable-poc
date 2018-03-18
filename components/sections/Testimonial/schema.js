const schema = {
  name: 'Testimonial',
  type: 'testimonial',
  settings: [
    {
      type: 'text',
      id: 'heading',
      label: 'Heading',
      default: 'Testimonials'
    }
  ],
  blocks: [
    {
      type: 'quote',
      settings: [
        {
          type: 'text',
          id: 'author',
          default: 'Customer\'s name',
          label: 'Customer\'s name'
        },
        {
          type: 'textarea',
          id: 'content',
          default: 'Great product!',
          label: 'Testimonial'
        }
      ]
    }
  ],
  presets: {
    name: 'Testimonial',
    category: 'Customer',
    blocks: [
      { type: 'quote' },
      { type: 'quote' },
      { type: 'quote' }
    ]
  }
}

export default schema
