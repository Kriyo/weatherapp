import axios from 'axios'

const URL = "http://api.openweathermap.org/data/2.5/weather"
const API_KEY = "372b995eea19013cca0149e75b0b98d4"

axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    }
  })

  return data
}