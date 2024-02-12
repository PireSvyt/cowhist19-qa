function random_id(length = 8) {
    // TESTED
    var temp_id = Math.random().toString(16).substr(2, length)
    return temp_id
}
function random_string(length = 24) {
    let result = ''
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
        counter += 1
    }
    return result
}

function validateEmail(email) {
    /*

  Return a validation of an email matched format

  Source : https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

  */
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

module.exports = { validateEmail, random_id, random_string }
