const mailjet = require('node-mailjet')
    .connect(process.env.MAILJET_CRED_ONE, process.env.MAILJET_CRED_TWO)

const request = mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
        "Messages": [
            {
                "From": {
                    "Email": process.env.MAILJET_RECIPIENT,
                    "Name": "Cam"
                },
                "To": [
                    {
                        "Email": process.env.MAILJET_RECIPIENT,
                        "Name": "Cam"
                    }
                ],
                "Subject": "Greetings from Mailjet.",
                "TextPart": "My first Mailjet email",
                "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                "CustomID": "AppGettingStartedTest"
            }
        ]
    })
export default request
    .then((result) => {
        console.log('result: success', result.body)
    })
    .catch((err) => {
        console.log('result: error', err.statusCode)
    })
