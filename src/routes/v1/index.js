import express from 'express'
import { StatusCodes } from 'http-status-codes'
const Router = express.Router()
import { boardRoute } from '~/routes/v1/boardRoute'
import { columnRoute } from '~/routes/v1/columnRoute'
import { cardRoute } from '~/routes/v1/cardRoute'
// Check APIs status
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'Server is running',
    status: StatusCodes.OK
  })
})
// Board APIs
Router.use('/boards', boardRoute)
// Column APIs
Router.use('/columns', columnRoute)
// Card APIs
Router.use('/cards', cardRoute)
export const APIs_V1 = Router
