import axios from 'axios'
import config from 'config'

const BASE_URL = config.omsBaseUrl

const GET = (url) => axios.get(url)
  .then(({ data }) => data)
  .catch(({ error, errorCode }) => ({ error, errorCode }))

export const loadPreviewTheme = ({ previewToken }) => GET(`${BASE_URL}/theme-preview?previewToken=${previewToken}`)

export const loadTheme = ({ merchantId }) => GET(`${BASE_URL}/theme?merchantId=${merchantId}`)
