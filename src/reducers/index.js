import { combineReducers } from 'redux';
import perception from './perception';
import attributes from './attributes';
import themes from './themes';

export default combineReducers({
  perception,
  attributes,
  themes,
});
