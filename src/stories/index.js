import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { host } from 'storybook-host'

import About from './about'
import AsyncButton from './async-button'
import Card from './card'

storiesOf('About', module)
    .add('', () => (
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

storiesOf('Card', module)
    .addDecorator(host({
        title: 'Card',
        align: 'center',
        backdrop: '#FAFAFA'
    }))
    .add('', () => (
        <Card image="https://placeimg.com/60/60/animals"
              name="Wendy Klein"
              summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              onFollow={action('followed')}
        />
    ))
