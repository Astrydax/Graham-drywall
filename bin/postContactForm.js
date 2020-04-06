import toUrlEncoded from './toUrlEncoded';

const url = 'http://localhost:3000';

function postContactForm(data, successCallback, failCallback) {
  fetch(`${url}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: toUrlEncoded(data),
  })
  .then(successCallback)
  .catch(failCallback);
}

export default postContactForm;
