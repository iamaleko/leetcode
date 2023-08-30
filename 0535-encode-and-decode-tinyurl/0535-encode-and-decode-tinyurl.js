const toId = new Map();
const fromId = new Map();
let id = 0;

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = (url) => {
  let _id = fromId.get(url);
  if (!_id) {
    _id = ++id;
    toId.set(url, _id);
    fromId.set(_id, url);
  }
  return _id;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = (_id) => {
  return fromId.get(_id);
};