const sectionSettingData = {
  sections: {
    header: {
      type: 'header',
      settings: {}
    },
    footer: {
      type: 'footer',
      settings: {}
    },
    productList: {
      type: 'product_list',
      settings: {},
      blocks: {
        testimonial: {
          id: 'testimonial',
          name: 'Testimonial',
          type: 'quote',
          settings: {
            content: 'asdf',
            author: 'asdfasdfa'
          }
        },
        testimonial_1: {
          type: 'quote',
          name: 'Testimonial',
          id: 'testimonial_1',
          settings: {
            content: 'asdf',
            author: 'asdfasdfa'
          }
        }
      },
      blocksOrder: ['testimonial', 'testimonial_1']
    },
    bannerImage: {
      type: 'banner_image',
      settings: {}
    }
  },
  pages: {
    index: ['bannerImage', 'productList']
  }
}

export default sectionSettingData
