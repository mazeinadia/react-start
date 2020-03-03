import { combineReducers } from 'redux';
import checkBox, { ICheckBoxState } from './checkBox';

export interface IAppState {
  checkBox: ICheckBoxState
}

export default combineReducers({
  checkBox,
});