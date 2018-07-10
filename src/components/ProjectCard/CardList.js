import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

class CardList extends Component {
  render () {
    return (
      <div className='card-list'>

        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

        <style jsx>{`
          .card-list {
            border: 1px solid black;
            background: white;
            height: 500px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;

          }
        `}</style>
      </div>
    )
  }
}

export default CardList
