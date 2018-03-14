const sectionSettingData = {
  sections: {
    header: {
      type: 'header',
      settings: {}
    },
    hero: {
      type: 'hero',
      settings: {
        text_size: 'large'
      }
    },
    slideshow: {
      type: 'slideshow',
      settings: {}
    },
    footer: {
      type: 'footer',
      settings: {}
    },
    productList: {
      type: 'product_list',
      settings: {}
    }
  },
  pages: {
    index: ['header', 'productList', 'footer']
  }
}

export default sectionSettingData
