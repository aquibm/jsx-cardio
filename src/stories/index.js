import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Button from './Button'
import Welcome from './Welcome'
import AsyncButton from './async-button'

storiesOf('Welcome', module).add('', () => (
    <Welcome />
))

storiesOf('Button', module).add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
)).add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
))

storiesOf('Async Button', module).add('', () => (
    <AsyncButton onClick={action('clicked')} onSave={action('saved')} />
))
