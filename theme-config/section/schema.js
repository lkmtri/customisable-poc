export default [
  {
    name: 'Header',
    type: 'header',
    settings: [
      {
        type: 'text',
        id: 'logo',
        label: 'Logo',
        default: 'LOGO'
      }
    ],
    blocks: [],
    presets: {}
  },
  {
    name: 'Footer',
    type: 'footer',
    settings: [
      {
        type: 'text',
        id: 'background_color',
        label: 'Background color',
        default: 'white'
      }
    ],
    presets: {}
  },
  {
    name: 'Banner Image',
    type: 'banner_image',
    settings: [
      {
        type: 'text',
        id: 'image',
        label: 'Upload an image'
      }
    ],
    presets: {}
  },
  {
    name: 'Product List',
    category: 'Product',
    type: 'product_list',
    settings: [
      {
        type: 'radio',
        id: 'product_list_mode',
        label: 'Choose list or grid view',
        default: 'grid',
        options: [
          { value: 'grid', label: 'Show products in grid view' },
          { value: 'list', label: 'Show products in list view' }
        ]
      }
    ],
    blocks: [
      {
        type: 'quote',
        name: 'Testimonial',
        settings: [
          {
            type: 'textarea',
            id: 'content',
            label: 'Content',
            default: 'Great quality. Easy to use. Nice UI. Definitely made my life easier.'
          },
          {
            type: 'text',
            id: 'author',
            label: 'Customer name',
            default: 'John Albert'
          }
        ]
      }
    ],
    presets: {
      name: 'Testimonials',
      blocks: {
        quote_1: { type: 'quote' },
        quote_2: { type: 'quote' },
        quote_3: { type: 'quote' }
      },
      blocksOrder: ['quote_1', 'quote_2', 'quote_3']
    }
  },
  {
    name: 'Testimonials',
    category: 'Customer',
    type: 'testimonial',
    settings: [
      {
        type: 'text',
        id: 'title',
        label: 'Heading',
        default: 'Testimonials'
      }
    ],
    blocks: [
      {
        type: 'quote',
        name: 'Testimonial',
        settings: [
          {
            type: 'textarea',
            id: 'content',
            label: 'Content',
            default: 'Great quality. Easy to use. Nice UI. Definitely made my life easier.'
          },
          {
            type: 'text',
            id: 'author',
            label: 'Customer name',
            default: 'John Albert'
          }
        ]
      }
    ],
    presets: [
      {
        name: 'Testimonials',
        blocks: [
          { type: 'quote' },
          { type: 'quote' },
          { type: 'quote' }
        ]
      }
    ]
  }
]
