const API_KEY = '2da4957d65a04a6db4318ccf05b6fb7f'
const LANGUAGE = 'en'
const URL_KEYPHRASE =
  'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases'
const URL_SENTIMENT =
  'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment'

const HEADERS = {
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': API_KEY,
}
const FETCH_OPTION = {
  method: 'POST',
  headers: HEADERS,
}

export const getTextAnalytics = async documents => {
  const keyPhrasesResponse = await getKeyPhrases(documents)
  const sentimentResponse = await getSentiment(documents)

  // Merge keyPhrasesResponse and sentimentResponse
  // Ignore any errors for now....

  const ids = Object.keys(keyPhrasesResponse)
  const returnObj = ids.reduce((prev, id) => {
    prev[id] = { ...keyPhrasesResponse[id], score: sentimentResponse[id].score }
    return prev
  }, {})
  return returnObj
}

export const getKeyPhrases = async documents => {
  const response = await fetch(URL_KEYPHRASE, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(documents),
  })

  const responseObj = await response.json()
  {
    const { documents, errors } = responseObj
    const documentsObj = documents.reduce((prev, cur) => {
      prev[cur.id] = cur
      return prev
    }, {})
    return documentsObj
  }
}

export const getSentiment = async documents => {
  const response = await fetch(URL_SENTIMENT, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(documents),
  })

  const responseObj = await response.json()
  {
    const { documents, errors } = responseObj
    const documentsObj = documents.reduce((prev, cur) => {
      prev[cur.id] = cur
      return prev
    }, {})
    return documentsObj
  }
}
