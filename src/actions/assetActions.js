import * as types from './actionTypes';
import AssetApi from '../api/mockAssetApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAssetsSuccess(assets) {
    return { type: types.LOAD_ASSETS_SUCCESS, assets};
}
  
export function createAssetSuccess(asset) {
    return {type: types.CREATE_ASSET_SUCCESS, asset};
}
  
export function updateAssetSuccess(asset) {
    return {type: types.UPDATE_ASSET_SUCCESS, asset};
}

export function loadAssets() {
  return function(dispatch) {
    dispatch(beginAjaxCall());

    return AssetApi.getAllAssets().then(assets => {
      dispatch(loadAssetsSuccess(assets));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveAsset(asset) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return AssetApi.saveAsset(asset).then(asset => {
      asset.id ? dispatch(updateAssetSuccess(asset)) :
        dispatch(createAssetSuccess(asset));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
