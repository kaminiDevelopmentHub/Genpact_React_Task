import { combineReducers } from 'redux';
import { localeReducer as locale } from 'react-localize-redux';
// import login from './LoginReducer';
import dashboard from './DashboardReducer';

export default combineReducers({
  locale,
  dashboard
});
