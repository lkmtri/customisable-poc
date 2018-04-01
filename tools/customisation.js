export const getPageSections = (pageName, sectionSettingData) => {
  const pageSections = sectionSettingData.pages[pageName]
  if (!pageSections) return
  return pageSections.map(
    section => ({ ...sectionSettingData.sections[section], key: section })
  )
}
