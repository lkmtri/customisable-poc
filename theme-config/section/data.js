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
      settings: {}
      // blocks: [
      //   {
      //     id: 'testimonial',
      //     name: 'Testimonial',
      //     type: 'quote',
      //     settings: {
      //       content: 'asdf',
      //       author: 'asdfasdfa'
      //     }
      //   },
      //   {
      //     type: 'quote',
      //     name: 'Testimonial',
      //     id: 'testimonial_1',
      //     settings: {
      //       content: 'asdf',
      //       author: 'asdfasdfa'
      //     }
      //   }
      // ]
    }
  },
  pages: {
    index: ['header', 'productList', 'footer']
  }
}

export default sectionSettingData
