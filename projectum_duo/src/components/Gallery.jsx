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


    // If tab info is not cached, add to cache.
    if (!(prevProps.tab in this.state.tabCache)) {
      const cache = Object.assign(this.state.tabCache);
      cache[prevProps.tab] = prevProps.selectedItems;
      this.setState({tabCache:cache});
    }

    // If uncached item were fetched, add to cache.
    if (APIResultInState(this) && 'fetchedItem' in this.state) {
      const cache = Object.assign(this.state.resourceCache);
      cache[this.state.fetchedItem.itemType][this.state.fetchedItem.item] = this.state.apiResult;
      this.setState({resourceCache:cache, apiResult:undefined, fetchedItem:undefined});
    }

    if(!this.isSelectedItemsEqualOnUpdate(this.props.selectedItems, prevProps.selectedItems)) {
      this.checkCacheForItems();
    }
  }

  isSelectedItemsEqualOnUpdate(newSelected, oldSelected) {
    const bothOrNoneUndefined = typeof newSelected !== 'undefined' ? typeof oldSelected !== 'undefined' : typeof oldSelected === 'undefined';

    if (!bothOrNoneUndefined) {
      return false;
    }

    for (const key in newSelected) {
      if (!(oldSelected[key] === newSelected[key])) {
        return false;
      }
    }
    return true;
  }

  getUncachedItem(itemType, item, url, json=false) {
    try {
      json ? GetJSON(this, url) : GetRaw(this, url);
      this.setState({fetchedItem:{itemType, item}});
    } 
    catch(e) {
      console.warn('Could not get items. Error message: ' + e);
    }
  }

  checkCacheForItems() {
    const selectedItems = this.props.selectedItems;
    const lists = {img:imgUrls,txt:textUrls,sound:soundUrls};
    for (const key in selectedItems) {
      // Prevent checking proto
      if (selectedItems.hasOwnProperty(key)) {
        if (!(selectedItems[key] in this.state.resourceCache[key] && this.state.resourceCache[selectedItems[key]])) {
          this.getUncachedItem(key, selectedItems[key], lists[key][selectedItems[key]], key === 'txt');
          break;
        }
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
      <div className="boxWrapper">
        <Showcasebox />
        <Showcasetext />
      </div>
    );
  }
}

export default Gallery;
