import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../routes/history';
import { homeReducer } from '../containers/Home/reducer';

export default combineReducers({ home: homeReducer, router: connectRouter(history) });
