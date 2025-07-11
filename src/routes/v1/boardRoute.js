import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardValidation } from '~/validations/boardValidation'
import { boardController } from '~/controllers/boardController'
const Router = express.Router()
Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      message: 'API get list board',
      status: StatusCodes.OK
    })
  })
  .post(boardValidation.createNew, boardController.createNew)

Router.route('/:id').get(boardController.getDetails).put()
export const boardRoute = Router
