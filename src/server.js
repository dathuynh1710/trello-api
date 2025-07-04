/* eslint-disable no-console */
import express from "express"
import exitHook from "async-exit-hook"
import { CONNECT_DB, GET_DB, CLOSE_DB } from "~/config/mongodb"
import { env } from "~/config/environment"
import { APIs_V1 } from "~/routes/v1"
const START_SERVER = () => {
  const app = express()
  app.use("/v1", APIs_V1)
  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`3. Hi ${env.AUTHOR} , Back-end is running at Host ${env.APP_HOST} and Port ${env.APP_PORT}`)
  })
  exitHook(() => {
    console.log("4. Server is shutting down...")
    CLOSE_DB()
    console.log("5. Disconnected MongoDB connection...")
  })
}

// IIFE
;(async () => {
  try {
    console.log("1. Connecting to MongoDB...")
    await CONNECT_DB()
    console.log("2. Connected to MongoDB")
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

// CONNECT_DB()
//   .then(() => {
//     console.log('Connected to MongoDB')
//   })
//   .then(() => {
//     START_SERVER()
//   })
//   .catch((err) => {
//     console.error(err)
//     process.exit(0)
//   })
