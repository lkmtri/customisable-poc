import createRoutes from 'next-routes'

const routes = createRoutes()
routes.add('/:page', 'index')

export default routes
export const Router = routes.Router
export const Link = routes.Link
