import { render } from 'omi'
import './assets/index.css'

import mycomponents from './config/components'

import './components/pipeline-header-demo'
import './components/pipeline-gap-demo'
import './components/pipeline-info-demo'
import './components/pipeline-weather-demo'

const pipelineComponents =
  typeof window !== 'undefined'
    ? window.INIT_DATA || mycomponents
    : mycomponents

const components = {
  'pipeline-gap-demo': oneComponent => {
    return (
      <pipeline-gap-demo
        data-component-id={oneComponent.id}
        data-component-name={oneComponent.name}
        config={oneComponent.data}
      />
    )
  },
  'pipeline-info-demo': oneComponent => {
    return (
      <pipeline-info-demo
        data-component-id={oneComponent.id}
        data-component-name={oneComponent.name}
        config={oneComponent.data}
      />
    )
  },
  'pipeline-header-demo': oneComponent => {
    return (
      <pipeline-header-demo
        data-component-id={oneComponent.id}
        data-component-name={oneComponent.name}
        config={oneComponent.data}
      />
    )
  },
  'pipeline-weather-demo': oneComponent => {
    return (
      <pipeline-weather-demo
        data-component-id={oneComponent.id}
        data-component-name={oneComponent.name}
        config={oneComponent.data}
      />
    )
  }
}

render(
  <div class="app">
    {pipelineComponents.map(oneComponent => {
      return components[oneComponent.name](oneComponent)
    })}
  </div>,
  '#root'
)
