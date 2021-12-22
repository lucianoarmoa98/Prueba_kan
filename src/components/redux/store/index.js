import { createStore, combineReducers } from 'redux';
import reducerGlobal from '../../redux/reducers/reducer';

//-------------------------------------------Alamacenamiento de estados, se utiliza para combinar los reducers "estados"

const reducer = combineReducers({
    reducerGlobal
});

//-------------------------------------------Creacion del store
const store = createStore(reducer
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;