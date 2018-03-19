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
    },
    bannerImage: {
      type: 'banner_image',
      settings: {}
    },
    bannerImage_1: {
      type: 'banner_image',
      settings: {}
    },
    testimonial: {
      type: 'testimonial',
      settings: {
        heading: 'Testimonials'
      },
      blocks: {
        testimonial: {
          id: 'testimonial',
          name: 'Testimonial',
          type: 'quote',
          settings: {
            content: 'Codecademy has nailed down the testimonials section of their website, which they call "Codecademy Stories." They\'ve even included a few customer quotes (along with pictures, names, and locations) right on their homepage above a link to the testimonial page.\nWe love the approachable format and the fact that they chose to feature customers that users can really relate to. When you click into any story, you can read the whole case study in a Q&A format.',
            author: 'John Tan'
          }
        },
        testimonial_1: {
          type: 'quote',
          name: 'Testimonial',
          id: 'testimonial_1',
          settings: {
            content: 'Codecademy has nailed down the testimonials section of their website, which they call "Codecademy Stories." They\'ve even included a few customer quotes (along with pictures, names, and locations) right on their homepage above a link to the testimonial page.\nWe love the approachable format and the fact that they chose to feature customers that users can really relate to. When you click into any story, you can read the whole case study in a Q&A format.',
            author: 'John Tan'
          }
        },
        testimonial_2: {
          id: 'testimonial_2',
          name: 'Testimonial',
          type: 'quote',
          settings: {
            content: 'Codecademy has nailed down the testimonials section of their website, which they call "Codecademy Stories." They\'ve even included a few customer quotes (along with pictures, names, and locations) right on their homepage above a link to the testimonial page.\nWe love the approachable format and the fact that they chose to feature customers that users can really relate to. When you click into any story, you can read the whole case study in a Q&A format.',
            author: 'John Tan'
          }
        }
      },
      blocksOrder: ['testimonial', 'testimonial_1', 'testimonial_2']
    },
    promotion: {
      type: 'promotion_list',
      settings: {
        heading: 'Promotions'
      },
      blocks: {
        promotion: {
          id: 'promotion',
          name: 'Promotion',
          type: 'promotion',
          settings: {
            title: 'Promotion 1',
            content: '50% discount on selected items'
          }
        },
        promotion1: {
          id: 'promotion1',
          name: 'Promotion',
          type: 'promotion',
          settings: {
            title: 'Promotion 1',
            content: '50% discount on selected items'
          }
        },
        promotion2: {
          id: 'promotion2',
          name: 'Promotion',
          type: 'promotion',
          settings: {
            title: 'Promotion 1',
            content: '50% discount on selected items'
          }
        },
        promotion3: {
          id: 'promotion3',
          name: 'Promotion',
          type: 'promotion',
          settings: {
            title: 'Promotion 1',
            content: '50% discount on selected items'
          }
        },
        promotion4: {
          id: 'promotion4',
          name: 'Promotion',
          type: 'promotion',
          settings: {
            title: 'Promotion 1',
            content: '50% discount on selected items'
          }
        }
      },
      blocksOrder: ['promotion', 'promotion1', 'promotion2', 'promotion3', 'promotion4']
    }
  },
  pages: {
    index: ['bannerImage', 'productList', 'testimonial'],
    promotion: ['promotion', 'bannerImage_1']
  }
}

export default sectionSettingData
