import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function assetReducer(state = initialState.assets, action) {
  switch (action.type) {
    case types.LOAD_ASSETS_SUCCESS:
      return action.assets;

      case types.CREATE_ASSET_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.asset)
      ];

    case types.UPDATE_ASSET_SUCCESS:
      return [
        ...state.filter(asset => asset.id !== action.asset.id),
        Object.assign({}, action.asset)
      ];

    default:
      return state;
  }
}

