import express from "express"
import { StatusCodes } from "http-status-codes"
const Router = express.Router()
Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      message: "API get list board",
      status: StatusCodes.OK
    })
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({
      message: "API create board",
      status: StatusCodes.OK
    })
  })

export const boardRoutes = Router
