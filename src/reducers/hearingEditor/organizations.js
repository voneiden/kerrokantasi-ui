import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

import {EditorActions} from '../../actions/hearingEditor';


const all = handleActions(
  {
    [EditorActions.RECEIVE_META_DATA]: (state, {payload: {organizations}}) => {
      return organizations.entities.organizations ? Object.values(organizations.entities.organizations) : [];
    },
  },
  [],
);


export default combineReducers({
  all,
});
