import React, {Component} from 'react'
import Showcasebox from '../parts/Showcasebox.jsx'
import Showcasetext from '../parts/Showcasetext.jsx'


class Gallery extends Component {
  render(){
    return (
      <div className="boxWrapper">
        <Showcasebox  />
        <Showcasetext name="Horsie" />
      </div>
    )
  }
}

export default Gallery;
