import { define, WeElement } from 'omi'

define('pipeline-gap-demo', class extends WeElement {
  css = require('./_index.less')

  render(props, data) {
    const config = props.config
    const customAttributes = {
      'data-component-id': props['data-component-id'],
      'data-component-name': props['data-component-name']
    }
    const styleObject = {
      height: props.config.height,
      color: props.config.textColor,
      backgroundColor: props.config.backgroundColor
    }

    return (
      <div class="gap-container" {...customAttributes} style={styleObject}>
        <p>{config.text}</p>
      </div>
    )
  }
})
