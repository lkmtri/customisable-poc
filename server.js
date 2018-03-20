import express from 'express'
import next from 'next'
import routes from './routes'

const app = next({ dev: process.env.NODE_ENV !== 'production' })

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  express().use(handler).listen(3001)
})
