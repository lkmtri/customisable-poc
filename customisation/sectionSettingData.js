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
    }
  },
  pages: {
    index: ['hero', 'slideshow']
  }
}

export default sectionSettingData
