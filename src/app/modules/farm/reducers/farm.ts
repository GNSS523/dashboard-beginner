import * as farms from '../actions/farm';


export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
};

const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export function reducer(state = initialState, action: farms.Actions): State {
  switch (action.type) {
    case farms.ActionTypes.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case farms.ActionTypes.LOAD_SUCCESS: {
      const farm = action.payload;

      return {
        loaded: true,
        loading: false,
        ids: farm.map(farm => farm.id)
      };
    }

    case farms.ActionTypes.ADD_FARM_SUCCESS:
    case farms.ActionTypes.REMOVE_FARM_FAIL: {
      const farm = action.payload;

      if (state.ids.indexOf(farm.id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [ ...state.ids, farm.id ]
      });
    }

    case farms.ActionTypes.REMOVE_FARM_SUCCESS:
    case farms.ActionTypes.ADD_FARM_FAIL: {
      const farm = action.payload;

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== farm.id)
      });
    }

    default: {
      return state;
    }
  }
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;