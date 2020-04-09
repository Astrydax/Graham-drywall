function postContactForm(data, successCallback, failCallback) {
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  .then(successCallback)
  .catch(failCallback);
}

export default postContactForm;
