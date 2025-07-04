import { MongoClient, ServerApiVersion } from "mongodb"
import { env } from "~/config/environment"

// Khởi tạo đối tượng ban đầu là null
let trelloDatabaseInstance = null

// Khởi tạo đối tượng MongoClient để connect tới MongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

// Kết nối tới Database
export const CONNECT_DB = async () => {
  // Gọi kết nối tới MongoDB Atlas với URI đã khai báo trong thân của mongoClientInstance
  await mongoClientInstance.connect()
  // Kết nối thành công thì lấy ra Database theo tên và gán ngược nó lại vào biến trelloDatabaseInstance ở trên
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

// Function GET_DB (không async) có nhiệm vụ export ra cái Trello Database Instance sau khi đã connect thành công tới MongoDB để chúng ta sử dụng ở nhiều nơi khác nhau trong code
// Đảm bảo chỉ luôn gọi GET_DB này sau khi đã kết nối thành công tới MongoDB
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error("Must connect to database first!")
  return trelloDatabaseInstance
}

// Closes the connection to the database
export const CLOSE_DB = async () => {
  console.log("Dong o day")
  await mongoClientInstance.close()
}
