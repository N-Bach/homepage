import React, { Component } from 'react'

class ProjectCard extends Component {
  render () {
    return (
      <div className='card-container'>

        <div className='title'>
          <h2>Kane Bird</h2>
        </div>
        <div className='description'>
          lasdkjfsdalkjas;dlfksjdaflkj
        </div>
        <div className='tags'>
          Tags: android, AI, fintech, voice command
        </div>
        <style jsx>{`
          .card-container {
            background: white;
            width: 310px;
            height: 420px;
            border-radius: 10px;
            box-shadow: 5px 5px 13px 0 rgba(168,179,188, 0.4);
            transition: 0.2s;
            margin: 12px;
          }

          .card-container:hover {
            box-shadow: 6px 9px 20px 0 rgba(166, 184, 199, 0.7);
          }
        `}</style>
      </div>
    )
  }
}

export default ProjectCard
