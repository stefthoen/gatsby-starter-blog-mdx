import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NowPage = props => (
  <Layout location={props.location}>
    <SEO title="Now" />
    <h1>What I am doing now</h1>
    <p>
      (This is <a href="https://nownownow.com/about">a now page</a>, and if you
      have your own site,{' '}
      <a href="https://nownownow.com/about">you should make one</a> too)
    </p>
    <ul>
      <li>
        Living in the Morvan, France, in{' '}
        <a href="http://peuapeu.nl">an old farmhouse</a>
      </li>
      <li>
        Working freelance as a full-stack web-developer at{' '}
        <a href="https://stef.co">Stef.co</a>
      </li>
      <li>
        Training for my{' '}
        <a href="http://s491898378.siteweb-initial.fr/">2nd ultra trail race</a>{' '}
        (± 56km) in July 2020
      </li>
      <li>
        Climbing at the military high school in Autun with{' '}
        <a href="http://www.aspenautun.fr/">ASPeN</a>
      </li>
      <li>
        Fixing up our campervan and preparing a new spot near our{' '}
        <a href="https://www.airbnb.com/rooms/32543480?s=67&shared_item_type=1&virality_entry_point=1&sharer_id=283157806">
          yurt
        </a>{' '}
        so we can rent it out on AirBnB
      </li>
      <li>
        Working on my personal website{' '}
        <a href="https://stefthoen.com">stefthoen.com</a> where I plan to do
        some blogging
      </li>
    </ul>
    <p>
      Updated <em>January 3th, 2020</em> from <em>Cussy-en-Morvan, France</em>
    </p>
  </Layout>
)

export default NowPage
