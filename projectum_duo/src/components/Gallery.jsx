import React, {Component} from 'react';
import Showcasebox from '../parts/Showcasebox.jsx';
import Showcasetext from '../parts/Showcasetext.jsx';
import {imgUrls, textUrls, soundUrls} from '../constants.js';
import {GetJSON, GetRaw, APIResultInState} from '../api/core.js';


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceCache: this.initResourceCache(),
      tabCache: {},
    }
  }

  // Init a cache object with all options
  initResourceCache() {
    const cache = {
      img: {},
      txt: {},
      sound: {},
    };
    Object.keys(imgUrls).map( key => cache.img[key] = '');
    Object.keys(textUrls).map( key => cache.txt[key] = '');
    Object.keys(soundUrls).map( key => cache.sound[key] = '');
    return cache;
  }

  componentDidUpdate(prevProps) {
    console.log('DEBUG:UPDATING_THIS_PROPS_',JSON.stringify(this.props),'_PREV_PROPS_',JSON.stringify(prevProps));

    // If tab info is not cached, add to cache.
    if (!(prevProps.tab in this.state.tabCache)) {
      const cache = Object.assign(this.state.tabCache);
      cache[prevProps.tab] = prevProps.selectedItems;
      this.setState({tabCache:cache});
    }

    // If uncached item were fetched, add to cache.
    if (APIResultInState(this) && 'fetchedItem' in this.state) {
      const cache = Object.assign(this.state.resourceCache);
      console.log('EVENT:GALLERY_FETCHED_FROM_URL');
      cache[this.state.fetchedItem.itemType][this.state.fetchedItem.item[0]] = {[this.state.fetchedItem.item[1]]:this.state.apiResult};
      this.setState({resourceCache:cache, apiResult:undefined, fetchedItem:undefined});
    }

    console.log('DEBUG:PROPS_SELECTED_',JSON.stringify(this.props.selectedItems),'_PREV_SELECTED_',JSON.stringify(prevProps.selectedItems));
    if(!this.isSelectedItemsEqualOnUpdate(this.props.selectedItems, prevProps.selectedItems)) {
      this.checkCacheForItems();
    }
  }

  isSelectedItemsEqualOnUpdate(newSelected, oldSelected) {
    const bothOrNoneUndefined = typeof newSelected !== 'undefined' ? typeof oldSelected !== 'undefined' : typeof oldSelected === 'undefined';
    console.log('EVENT:GALLERY_COMPARING_SELECTED');
    if (!bothOrNoneUndefined) {
      console.log('DEBUG:ONE_SELECTED_WAS_UNDEFINED');
      return false;
    }

    for (const key in newSelected) {
      if (!(oldSelected[key] === newSelected[key])) {
        console.log('DEBUG:SELECTED_KEYS_WERE_UNEQUAL');
        return false;
      }
      if (oldSelected[key][0] !== newSelected[key][0] || oldSelected[key][1] !== newSelected[key][1]) {
        console.log('DEBUG:SELECTED_ARRAY_IN_KEY_WERE_UNEQUAL');
        return false;
      }

    }
    console.log('DEBUG:FOUND_NO_DIFFERENCES');
    console.log('DEBUG:OBJECT1_',JSON.stringify(newSelected),'_OBJECT2_',JSON.stringify(oldSelected));
    return true;
  }

  getUncachedItem(itemType, item, url, json=false) {
    console.log('EVENT:GALLERY_GETTING_UNCACHED');
    if (typeof url === 'undefined' || url === 'undefined'){
      console.warn('Could not understand fetch URL. URL: ',url);
      return;
    }
    try {
      json ? GetJSON(this, url) : GetRaw(this, url);
      this.setState({fetchedItem:{itemType, item}});
    }
    catch(e) {
      console.warn('Could not get items. Error message: ' + e);
    }
  }

  checkCacheForItems() {
    console.log('EVENT:GALLERY_CHECKING_CACHE');
    const selectedItems = this.props.selectedItems;
    const lists = {img:imgUrls,txt:textUrls,sound:soundUrls};
    for (const key in selectedItems) {
      // Prevent checking proto
      if (selectedItems.hasOwnProperty(key) && key !== 'undefined') {
        if (!(selectedItems[key] in this.state.resourceCache[key] && this.state.resourceCache[selectedItems[key]])) {
          this.getUncachedItem(key, selectedItems[key], lists[key][selectedItems[key][0]][selectedItems[key][1]], key === 'txt');
          break;
        }
      }
      if(key === 'undefined') {
        console.error('Options should be Image, Text or Sound. Cannot display resource w/ wrong title.');
      }
    }
  }



  render(){
    const selectedItems = this.props.selectedItems;
    const resourceCache = this.state.resourceCache;
    if (selectedItems) {
      return (
        <div className="boxWrapper">
          <Showcasebox img={resourceCache.img[selectedItems.img]}/>
          <Showcasetext txt={resourceCache.txt[selectedItems.txt]}/>
        </div>
      )
    }
    return (
      <React.Fragment>
          <div className="sidebarBack"></div>
          <div className="boxWrapper">
          <Showcasebox />
          <Showcasetext text="Swiggity Swooty Here come dat Booty" name="Horsie" />
      </div>
    </React.Fragment>
    );
  }
}

export default Gallery;
