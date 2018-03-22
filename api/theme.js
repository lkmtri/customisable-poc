import axios from 'axios'

const BASE_URL = 'http://oms.localhost/api'

const GET = (url) => axios.get(url)
  .then(({ data }) => data)
  .catch(({ error, errorCode }) => ({ error, errorCode }))

export const loadPreviewTheme = ({ previewToken }) => GET(`${BASE_URL}/theme-preview?previewToken=${previewToken}`)

export const loadTheme = ({ merchantId }) => GET(`${BASE_URL}/theme?merchantId=${merchantId}`)
