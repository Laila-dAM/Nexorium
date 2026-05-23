import { Router } from 'express'

const router = Router()

router.get('/', (request, response) => {
  return response.json({
    message: 'Nexorium API'
  })
})

export { router }