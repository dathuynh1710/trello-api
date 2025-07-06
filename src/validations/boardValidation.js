import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict()
  })
  try {
    // abortEarly: false để trả về tất cả các lỗi
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // Validation thành công thì cho request đi tiếp sang controller
    next()
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }
}
export const boardValidation = {
  createNew
}
