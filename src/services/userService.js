import { userModel } from '~/models/userModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import bcryptjs from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { pickUser } from '~/utils/formatters'
import { WEBSITE_DOMAIN } from '~/utils/constants'
import { BrevoProvider } from '~/providers/BrevoProvider'
const createNew = async (reqBody) => {
  try {
    // Kiểm tra xem email đã tồn tại trong hệ thống chưa?
    const existUser = await userModel.findOneByEmail(reqBody.email)
    if (existUser) {
      throw new ApiError(StatusCodes.CONFLICT, 'Email already exists!')
    }
    // Tạo data để lưu vào DB
    const nameFromEmail = reqBody.email.split('@')[0]
    const newUser = {
      email: reqBody.email,
      password: bcryptjs.hashSync(reqBody.password, 8),
      username: nameFromEmail,
      displayName: nameFromEmail,

      verifyToken: uuidv4()
    }

    const createdUser = await userModel.createNew(newUser)
    const getNewUser = await userModel.findOneById(createdUser.insertedId)

    // Gửi email cho người dùng xác thực tài khoản
    const verificationLink = `${WEBSITE_DOMAIN}/account/verication?email=${getNewUser.email}&token=${getNewUser.verifyToken}`
    const customSubject = 'Verify your account'
    const htmlContent = `
      <h3>Here is your verification link: </h3>
      <h3>${verificationLink}</h3>
      <h3>Thanks</h3>
      `

    // Gọi tới Provider gửi email
    // await BrevoProvider.sendEmail(getNewUser.email, customSubject, htmlContent)
    // return trả về dữ liệu phía Controller
    console.log(verificationLink)
    return pickUser(getNewUser)
  } catch (error) {
    throw error
  }
}

export const userService = {
  createNew
}
