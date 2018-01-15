import {combineReducers} from 'redux';
import assets from './assetReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  assets,
  ajaxCallsInProgress
});

export default rootReducer;
