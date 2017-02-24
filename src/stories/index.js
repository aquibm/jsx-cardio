import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import About from './about'
import AsyncButton from './async-button'

storiesOf('About', module).add('', () => (
    <About />
))

storiesOf('Async Button', module).add('', () => (
    <AsyncButton onClick={action('clicked')} onSave={action('saved')} />
))
