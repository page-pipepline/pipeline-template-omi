import { define, WeElement } from 'omi'

define('pipeline-header-demo', class extends WeElement {
  css = require('./_index.less')

  imgClick() {
    window.location.href = this.props.config.link
  }

  render(props, data) {
    const config = props.config
    const customAttributes = {
      'data-component-id': props['data-component-id'],
      'data-component-name': props['data-component-name']
    }
    return (
      <div class="header-container" {...customAttributes}>
        <div class="title">{config.title}</div>
        <div class="header">
          <img
            class="header__img"
            src={config.src}
            onClick={() => this.imgClick()}
          />
        </div>
      </div>
    )
  }
})
