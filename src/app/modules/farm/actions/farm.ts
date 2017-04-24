import { Action } from '@ngrx/store';
import { Farm } from '../models/farm';
import { type } from '../util';


export const ActionTypes = {
  LOAD_FARMS:                 type('[Farm] Load'),
  LOAD_FARMS_SUCCESS:         type('[Farm] Load Success'),
  LOAD_FARMS_FAIL:            type('[Farm] Load Fail'),

  GET_SELECTED_FARM:    type('[Farm] Get Selected Farm'),
  GET_SELECTED_FARM_SUCCESS:  type('[Farm] Get Selected Farm Success'),

  SELECT_FARM:          type('[Farm] Select Farm'),
  SEARCH_FARM:          type('[Farm] Search Farm'),

  ADD_FARM:             type('[Farm] Add FARM'),
  ADD_FARM_SUCCESS:     type('[Farm] Add FARM Success'),
  ADD_FARM_FAIL:        type('[Farm] Add FARM Fail'),

  REMOVE_FARM:          type('[Farm] Remove FARM'),
  REMOVE_FARM_SUCCESS:   type('[Farm] Remove FARM Success'),
  REMOVE_FARM_FAIL:     type('[Farm] Remove FARM Fail')
};

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD_FARMS;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_FARMS_SUCCESS;

  constructor(public payload: Farm[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FARMS_FAIL;

  constructor(public payload: any) { }
}


export class GetSelectedFarmAction implements Action {
  type = ActionTypes.GET_SELECTED_FARM;

  constructor(public payload: string) { };
}

export class GetSelectedFarmSuccessAction implements Action {
  type = ActionTypes.GET_SELECTED_FARM_SUCCESS;

  constructor(public payload: Pin){};
}

export class SelectFarmAction implements Action {
  type = ActionTypes.SELECT_FARM;

  constructor(public payload: string){};
}

export class SearchFarmAction implements Action {
  type = ActionTypes.SEARCH_FARM

  constructor(public payload: string){};
}


/**
 * Add FARM to Collection Actions
 */
export class AddFarmAction implements Action {
  type = ActionTypes.ADD_FARM;

  constructor(public payload: Farm) { }
}

export class AddFarmSuccessAction implements Action {
  type = ActionTypes.ADD_FARM_SUCCESS;

  constructor(public payload: Farm) { }
}

export class AddFarmFailAction implements Action {
  type = ActionTypes.ADD_FARM_FAIL;

  constructor(public payload: Farm) { }
}


/**
 * Remove FARM from Collection Actions
 */
export class RemoveFarmAction implements Action {
  type = ActionTypes.REMOVE_FARM;

  constructor(public payload: Farm) { }
}

export class RemoveFarmSuccessAction implements Action {
  type = ActionTypes.REMOVE_FARM_SUCCESS;

  constructor(public payload: Farm) { }
}

export class RemoveFarmFailAction implements Action {
  type = ActionTypes.REMOVE_FARM_FAIL;

  constructor(public payload: Farm) { }
}




export type Actions
  = AddFarmAction
  | AddFarmSuccessAction
  | AddFarmFailAction
  | RemoveFarmAction
  | RemoveFarmSuccessAction
  | RemoveFarmFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | GetSelectedFarmAction
  | GetSelectedFarmSuccessAction
  | SelectFarmAction
  | SearchFarmAction
  ;