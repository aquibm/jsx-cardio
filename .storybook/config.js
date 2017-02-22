import { configure } from '@kadira/storybook'
import { setOptions } from '@kadira/storybook-addon-options'

setOptions({
    name: 'JSX Cardio',
    url: 'https://github.com/aquibm/jsx-cardio'
})

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
