import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Welcome from './Welcome'
import AsyncButton from './async-button'

storiesOf('Welcome', module).add('', () => (
    <Welcome />
))

storiesOf('Async Button', module).add('', () => (
    <AsyncButton onClick={action('clicked')} onSave={action('saved')} />
))
