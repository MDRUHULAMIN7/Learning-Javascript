// ### Q14. URL Query String Parser

// Write a function that parses a URL query string into a JavaScript object.

function parseQueryString(url) {
  const queryString = url.includes('?') ? url.split('?')[1] : url;
  const result = {};

  if (!queryString) return result;

  const pairs = queryString.split('&');

  pairs.forEach(pair => {
    const [key, value] = pair.split('=');
    
    if (key) {
      const decodedKey = decodeURIComponent(key);
      const decodedValue = value ? decodeURIComponent(value) : '';

      if (decodedKey.endsWith('[]')) {
        const arrayKey = decodedKey.slice(0, -2);
        if (!result[arrayKey]) {
          result[arrayKey] = [];
        }
        result[arrayKey].push(decodedValue);
      }
      else if (decodedKey.includes('[') && decodedKey.includes(']')) {
        const match = decodedKey.match(/^([^\[]+)\[([^\]]+)\]$/);
        if (match) {
          const parentKey = match[1];
          const childKey = match[2];
          if (!result[parentKey]) {
            result[parentKey] = {};
          }
          result[parentKey][childKey] = decodedValue;
        }
      }
      else if (result.hasOwnProperty(decodedKey)) {
        if (!Array.isArray(result[decodedKey])) {
          result[decodedKey] = [result[decodedKey]];
        }
        result[decodedKey].push(decodedValue);
      }
      else {
        result[decodedKey] = decodedValue;
      }
    }
  });

  return result;
}

console.log(parseQueryString('https://example.com?name=John&age=25&hobbies[]=reading&hobbies[]=coding&address[city]=NYC'));

export default parseQueryString;

// explanation : https://app.notion.com/p/Write-a-function-that-parses-a-URL-query-string-into-a-JavaScript-object-377fa15e85ee80e4b7ecc916db43a971