import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div style={{display:'flex', padding:'0.5rem'}}>
          <h1>Movies App</h1>
          <h2 style={{marginLeft:'2rem', marginTop:'0.8rem'}}>Favourites</h2>
      </div>
    )
  }
}
