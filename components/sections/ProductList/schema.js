const schema = {
  name: 'Product List',
  type: 'product_list',
  settings: [
    {
      type: 'radio',
      id: 'align_logo',
      label: 'Logo alignment',
      default: 'left',
      options: [
        { value: 'left', label: 'Left' },
        { value: 'centered', label: 'Centered' }
      ]
    },
    {
      type: 'image_picker',
      id: 'logo',
      label: 'Logo image'
    }
  ]
}

export default schema
