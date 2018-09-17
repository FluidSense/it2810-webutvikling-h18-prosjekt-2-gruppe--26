import React, {Component} from 'react'
import Showcasebox from '../parts/Showcasebox.jsx'
import Showcasetext from '../parts/Showcasetext.jsx'
import MediaPickSidebar from '../components/mediaPicker/MediaPickSidebar'

class Gallery extends Component {
  render(){
    return (
      <React.Fragment>
        <div className="boxWrapper">
          <div className="wrapper2"><MediaPickSidebar /></div>
          <Showcasebox />
          <Showcasetext text="Swiggity Swooty Here come dat Booty" name="Horsie" />
        </div>

      </React.Fragment>
    )
  }
}

export default Gallery;
