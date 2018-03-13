import * as sectionComponents from 'components/sections'

const sectionSettingSchema = sectionComponents.reduce((acc, section) => acc.push(section.schema), [])

export default sectionSettingSchema
