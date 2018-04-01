const chokidar = require('chokidar')
const schemaSource = './components/sections/**/schema.json'
const axios = require('axios')
const fs = require('fs')
const debounce = require('debounce')

const themeMeta = JSON.parse(fs.readFileSync('./theme/meta.json', 'utf8'))

const sendUpdateToBackend = debounce(({ themeMeta, themeSettingSchema, sectionSettingSchema }) => {
  axios.post('http://oms.localhost/api/theme-schema', {
    themeMeta,
    themeSettingSchema,
    sectionSettingSchema
  })
}, 1000)

const onChange = function (path) {
  const glob = require('glob')
  glob(schemaSource, function (e, files) {
    if (e) {
      console.log(e)
      return
    }
    try {
      const sectionSettingSchema = []
      files.map(file => {
        sectionSettingSchema.push(JSON.parse(fs.readFileSync(file, 'utf8')))
      })
      const themeSettingSchema = JSON.parse(fs.readFileSync('./theme/themeSettingSchema.json', 'utf8'))
      sendUpdateToBackend({ themeMeta, themeSettingSchema, sectionSettingSchema })
    } catch (err) {
      console.log(err)
    }
  })
}

// watch for changes in sections' schema
chokidar.watch(schemaSource)
  .on('change', onChange)
  .on('add', onChange)
  .on('unlink', onChange)

// watch for changes on themeSettingSchema
chokidar.watch('./theme/themeSettingSchema.json')
  .on('change', onChange)
