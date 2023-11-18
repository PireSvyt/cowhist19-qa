function random_id(length = 8) {
  // TESTED
  var temp_id = Math.random().toString(16).substr(2, length);
  return temp_id;
}

function validateEmail(email) {
  /*

  Return a validation of an email matched format

  Source : https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

  */
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
}

module.exports = { validateEmail, random_id };
