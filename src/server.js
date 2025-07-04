/* eslint-disable no-console */
import express from "express"
import exitHook from "async-exit-hook"
import { CONNECT_DB, GET_DB, CLOSE_DB } from "~/config/mongodb"
import { env } from "~/config/environment"
const START_SERVER = () => {
  const app = express()
  app.get("/", async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.end("<h1>Hello World!</h1><hr>")
  })
  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`3. Hi ${env.AUTHOR} ,Server running at http://${env.APP_HOST}:${port}/`)
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
