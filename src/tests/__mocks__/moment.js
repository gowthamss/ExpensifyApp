// Mocking moment
const moment = require.requrieActual('moment')

export default (timestamp = 0) => {
    return moment(timestamp)
}