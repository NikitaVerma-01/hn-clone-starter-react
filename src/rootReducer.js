import { combineReducers } from 'redux';
//import userDataReducer from './components/userData/container/userData.reducer';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    //userDataReducer,
    form: formReducer,
});

export default rootReducer;