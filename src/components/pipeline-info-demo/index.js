import { define, WeElement } from 'omi'

define('pipeline-info-demo', class extends WeElement {
  css = require('./_index.less')

  install() {
    setTimeout(() => {
      this.data.test = 100
    }, 1000)
  }

  render(props, data) {
    const config = props.config
    const customAttributes = {
      'data-component-id': props['data-component-id'],
      'data-component-name': props['data-component-name']
    }
    return (
      <div class="info-container" {...customAttributes}>
        {this.data.test}
        <div class="title">{config.title}</div>
        {config.infoList.map((info, index) => {
          return (
            <div className="info" key={index}>
              <div className="one-info">{info.info}</div>
            </div>
          )
        })}
      </div>
    )
  }
})
