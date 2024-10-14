import { expect, test, describe } from '@jest/globals';
import { rootReducer } from '@store';
import {
  initialConstructorState,
  initialIngredientsState,
  initialUserState,
  initialFeedState,
  initialOrderState,
} from './slices';

describe('Тест корневого редьюсера', () => {
  const initialState = {
    user: { ...initialUserState },
    feed: { ...initialFeedState },
    order: { ...initialOrderState },
    ingredients: { ...initialIngredientsState },
    kit: { ...initialConstructorState }
  };
  test('Тест инициализации корневого редьюсера', () => {
    const action = { type: 'UNKNOW_ACTION' };
    const newState = rootReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });
});
