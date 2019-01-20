import { define, WeElement } from 'omi'

// 使用高德地图查询接口
const weatherAPI = 'https://restapi.amap.com/v3/weather/weatherInfo'
const weatherKey = '923d9762b87a6c7317a741b0bfe6e2d8'

define('pipeline-weather-demo', class extends WeElement {
  css = require('./_index.less')

  data = {
    weatherInfo: {},
    weather: {}
  }

  install() {
    const self = this
    this.queryWeatherInfo().then(weatherInfo => {
      self.data.weatherInfo = weatherInfo
      self.data.weather = self.weather()
      self.update()
    })
  }

  queryWeatherInfo() {
    return fetch(
      `${weatherAPI}?key=${weatherKey}&city=${this.props.config.city}`
    )
      .then(res => res.json())
      .catch(e => console.log('查询天气接口报错:', e)) // eslint-disable-line no-console
  }

  weather() {
    if (
      this.data.weatherInfo &&
      this.data.weatherInfo.lives &&
      this.data.weatherInfo.lives.length > 0
    ) {
      return this.data.weatherInfo.lives[0]
    }
    return {}
  }

  render(props, data) {
    const config = props.config
    const customAttributes = {
      'data-component-id': props['data-component-id'],
      'data-component-name': props['data-component-name']
    }
    return (
      <div class="weather-container" {...customAttributes}>
        <div class="weather-container__title">查询天气(动态接口示例)</div>
        <div class="weather__title">{config.city}</div>
        <ul class="weather__info">
          <li>
            <label class="weather-info__label">温度</label>
            <span class="weather-info__value">
              {data.weather.temperature}℃ / {data.weather.humidity}℉
            </span>
          </li>
          <li>
            <label class="weather-info__label">气象</label>
            <span class="weather-info__value">{data.weather.weather}</span>
          </li>
          <li>
            <label class="weather-info__label">风向</label>
            <span class="weather-info__value">
              {data.weather.winddirection}
            </span>
          </li>
        </ul>
      </div>
    )
  }
})
