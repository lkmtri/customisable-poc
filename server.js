import express from 'express'
import next from 'next'
import LRUCache from 'lru-cache'
import config from 'config'

const port = config.port
const dev = process.env.NODE_ENV === 'dev'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

// Initiate the cache
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

const getCacheKey = req => `${req.url}`

const render = (req, res, pagePath, queryParams) => {
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

const renderAndCache = (req, res, pagePath, queryParams) => {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    // console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
    // Let's cache this page
      // console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

app.prepare().then(() => {
  const server = express()

  server.get('/_next/*', (req, res) => handle(req, res))

  server.get('/favicon.ico', (req, res) => handle(req, res))

  server.get('*', (req, res) => {
    const { url, query } = req
    const n = url.indexOf('?')
    const urlWithoutQueryString = url.substring(0, n !== -1 ? n : url.length)
    const path = urlWithoutQueryString.split('/').filter(e => e !== '')
    // redirect to path with localisation
    if (!path[0] || !/^[a-z][a-z]_[A-Z][A-Z]$/.test(path[0])) return res.redirect(`/en_SG${url}`)
    const locale = path[0]
    path.shift()

    // Render from cache
    if (query.preview === undefined && !dev) {
      renderAndCache(req, res, '/', { path, locale, ...query })
    } else {
      // Don't load from cache for preview pages
      // console.log('render without cache:', url)
      render(req, res, '/', { path, locale, ...query })
    }
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${config.fescBaseUrl}:${port}`)
  })
})
