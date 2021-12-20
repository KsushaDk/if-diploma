const urlWithParams = (urlStr, queryParamsObj) => {
  const url = new URL(urlStr)

  Object.entries(queryParamsObj).forEach(
    ([key, value]) => url.searchParams.set(`${key}`, `${value}`),
    // eslint-disable-next-line function-paren-newline
  )

  return url
}

export const httpGet = (url, queryParams = '') =>
  fetch(urlWithParams(url, queryParams))
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err))
