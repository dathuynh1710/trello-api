const $ibApiV3Sdk = require('@getbrevo/brevo')
import { env } from '~/config/environment'

let apiInstance = new $ibApiV3Sdk.TransactionalEmailsApi()
let apiKey = apiInstance.authentications['apiKey']
apiKey.apiKey = env.BREVO_API_KEY

const sendEmail = async (toEmail, customSubject, customHtmlContent) => {
  // Khởi tạo một cái sendSmtpEmail với những thông tin cần thiết
  let sendSmtpEmail = new $ibApiV3Sdk.SendSmtpEmail()
  // Tài khoản gửi mail
  sendSmtpEmail.sender = {
    email: env.ADMIN_EMAIL_ADDRESS,
    name: env.ADMI_EMAIL_NAME
  }
  // Tài khoản nhận mail
  sendSmtpEmail.to = [
    {
      email: toEmail
    }
  ]
  // Tiêu đề email
  sendSmtpEmail.subject = customSubject
  // Nội dung email
  sendSmtpEmail.htmlContent = customHtmlContent
  // Gửi mail
  return apiInstance.sendTransacEmail(sendSmtpEmail)
}

export const BrevoProvider = {
  sendEmail
}
