import sectionComponents from 'components/sections'

const sectionSettingSchema = Object.keys(sectionComponents).reduce((acc, key) => {
  acc.push(sectionComponents[key].schema)
  return acc
}, [])

console.log(sectionSettingSchema)

export default sectionSettingSchema
