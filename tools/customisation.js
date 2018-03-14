// const sectionSettingData = {
//   sections: {
//     header: {
//       type: 'header',
//       settings: {}
//     },
//     hero: {
//       type: 'hero',
//       settings: {
//         text_size: 'large'
//       }
//     },
//     slideshow: {
//       type: 'slideshow',
//       settings: {}
//     },
//     footer: {
//       type: 'footer',
//       settings: {}
//     }
//   },
//   pages: {
//     index: ['header']
//   }
// }

// export default sectionSettingData

export const getPageSections = (pageName, sectionSettingData) => sectionSettingData.pages[pageName].map(section => ({ ...sectionSettingData.sections[section], key: section }))
