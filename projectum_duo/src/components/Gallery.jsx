import React, {Component} from 'react';
import Showcasebox from '../parts/Showcasebox.jsx';
import Showcasetext from '../parts/Showcasetext.jsx';
import {imgUrls, textUrls, soundUrls} from '../constants.js';
import {GetJSON, GetRaw, APIResultInState} from '../api/core.js';
import { cloneObject } from './../utils';


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceCache: this.initResourceCache(),
    }
  }

  // Init a cache object with all options
  initResourceCache() {
    const cache = {
      img: {},
      txt: {},
      sound: {},
    };
    Object.keys(imgUrls).map( key => cache.img[key] = {});
    Object.keys(textUrls).map( key => cache.txt[key] = {});
    Object.keys(soundUrls).map( key => cache.sound[key] = {});
    return cache;
  }


  componentDidUpdate(prevProps) {
    // If uncached item were fetched, add to cache.
    if (APIResultInState(this) && 'fetchedItem' in this.state && this.state.fetchedItem) {
      const cache = cloneObject(this.state.resourceCache);
      const fetchedItem = this.state.fetchedItem;
      const subCategoryName = fetchedItem.item[0];
      const subCategoryIndex = fetchedItem.item[1];
      const categoryCache = cache[fetchedItem.itemType];
      const newUrlObject = {[subCategoryIndex]:this.state.apiResult};
      if (categoryCache && subCategoryName in categoryCache) {
        subCategoryIndex in categoryCache[subCategoryName] ? categoryCache[subCategoryName][subCategoryIndex] = this.state.apiResult : Object.assign(categoryCache[subCategoryName], newUrlObject);
      }

      this.setState({resourceCache:cache, apiResult:undefined, fetchedItem:undefined});
    }

    // If the update was not because of api results, check if api results should be fetched.
    else if(!this.isSelectedItemsEqualOnUpdate(this.props.selectedItems, prevProps.selectedItems)) {
      this.checkCacheForItems();
    }
  }

  isSelectedItemsEqualOnUpdate(newSelected, oldSelected) {
    const bothOrNoneUndefined = typeof newSelected !== 'undefined' ? typeof oldSelected !== 'undefined' : typeof oldSelected === 'undefined';
    if (!bothOrNoneUndefined) {
      return false;
    }

    // Check every key in both instances and the array within them.
    for (const key in newSelected) {
      if (!(oldSelected[key] === newSelected[key])) {
        return false;
      }
      if (oldSelected[key][0] !== newSelected[key][0] || oldSelected[key][1] !== newSelected[key][1]) {
        return false;
      }

    }
    return true;
  }

  getUncachedItem(itemType, item, url, json=false) {
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
    const cache = this.state.resourceCache;
    const selectedItems = this.props.selectedItems;
    const lists = {img:imgUrls,txt:textUrls,sound:soundUrls};
    for (const key in selectedItems) {
      // Prevent checking proto
      if (selectedItems.hasOwnProperty(key) && key !== 'undefined') {
        // Check the correct place in cache and the content of it.
        // If it's not there, kill the for-loop since this will be called again when the selection is updated.
        const subCategoryName = selectedItems[key][0];
        const subCategoryIndex = selectedItems[key][1];
        const categoryCache = cache[key];
        const url = lists[key][subCategoryName][subCategoryIndex];
        if (!(categoryCache && subCategoryName in categoryCache && categoryCache[subCategoryName] && subCategoryIndex in categoryCache[subCategoryName])) {
          this.getUncachedItem(key, selectedItems[key], url, key === 'txt');
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
