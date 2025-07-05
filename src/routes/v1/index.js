import express from "express"
import { StatusCodes } from "http-status-codes"
const Router = express.Router()
import { boardRoutes } from "~/routes/v1/boardRoutes"
// Check APIs status
Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({
    message: "Server is running",
    status: StatusCodes.OK
  })
})
// Board APIs
Router.use("/boards", boardRoutes)
export const APIs_V1 = Router
