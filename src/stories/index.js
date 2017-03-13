import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { host } from 'storybook-host'

import About from './About'
import AsyncButton from './AsyncButton'
import Card from './Card'
import Checkout from './Checkout'

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
        <Card image="https://placeimg.com/100/100/animals"
              name="Wendy Klein"
              summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              onFollow={action('followed')}
        />
    ))

storiesOf('Checkout', module)
    .addDecorator(host({
        title: 'Checkout dialog',
        align: 'center',
        backdrop: '#FAFAFA'
    }))
    .add('', () => (
        <Checkout />
    ))
