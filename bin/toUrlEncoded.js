const toUrlEncoded = obj => {
  // takes an object, and translates key value pairs into url encoded string
  return Object
    .keys(obj)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
    .join('&');
};

export default toUrlEncoded;