import express from "express"
import { StatusCodes } from "http-status-codes"
const Router = express.Router()
import { boardRoute } from "~/routes/v1/boardRoute"
// Check APIs status
Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({
    message: "Server is running",
    status: StatusCodes.OK
  })
})
// Board APIs
Router.use("/boards", boardRoute)
export const APIs_V1 = Router
