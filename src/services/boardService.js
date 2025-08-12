/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep } from 'lodash'
const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    // Goi toi tang model de xu ly luu ban ghi newBoard vao trong DB
    const createdBoard = await boardModel.createNew(newBoard)
    // console.log(createdBoard)

    // Lấy bản ghi board sau khi gọi
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)

    return getNewBoard
  } catch (error) {
    throw error
  }
}

const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId)
    if (!board) throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!')

    //B1: Deep Clone board ra một cái mới để xử lý, không ảnh hưởng đến board ban đầu
    const resBoard = cloneDeep(board)
    //B2: Đưa card về đúng column của nó
    resBoard.columns.forEach((column) => {
      // Cách 1: convert ObjectId về string bằng hàm toString của JS
      // column.cards = resBoard.cards.filter((card) => card.columnId.toString() === column._id.toString())
      // Cách 2: .equals này là vì chúng ta hiểu ObjectId trong MongoDB có support .equals
      column.cards = resBoard.cards.filter((card) => card.columnId.equals(column._id))
    })
    // B3: Xoa array card khoi board
    delete resBoard.cards
    return resBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew,
  getDetails
}
