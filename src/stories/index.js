import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { host } from 'storybook-host'

import About from './about'
import AsyncButton from './async-button'

storiesOf('About', module).add('', () => (
    <About />
))

storiesOf('Async Button', module)
    .addDecorator(host({
        title: 'Button that shows the state of an asynchronous request',
        align: 'center'
    }))
    .add('', () => (
        <AsyncButton onClick={action('clicked')} onSave={action('saved')} />
    ))
