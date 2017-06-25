const API_KEY = '2da4957d65a04a6db4318ccf05b6fb7f'
const LANGUAGE = 'en'
const URL =
  'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases'
const HEADERS = {
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': API_KEY,
}
const FETCH_OPTION = {
  method: 'POST',
  headers: HEADERS,
}

export const getTextAnalytics = async documents => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(documents),
  })

  const responseObj = await response.json()
  return responseObj
}
