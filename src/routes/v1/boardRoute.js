import express from 'express'
import { StatusCodes } from 'http-status-codes'
const Router = express.Router()
import { boardValidation } from '~/validations/boardValidation'
Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      message: 'API get list board',
      status: StatusCodes.OK
    })
  })
  .post(boardValidation.createNew)

export const boardRoute = Router
