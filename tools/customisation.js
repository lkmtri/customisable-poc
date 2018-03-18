export const getPageSections = (pageName, sectionSettingData) =>
  sectionSettingData.pages[pageName].map(
    section => ({ ...sectionSettingData.sections[section], key: section })
  )
