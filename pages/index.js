import React, { Component } from 'react'
import Header from '@components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import CardList from '@components/ProjectCard/CardList'

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <CardList />
        <Footer />
      </div>
    )
  }
}

export default Index
