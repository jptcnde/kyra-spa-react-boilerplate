import { init } from '@rematch/core';
import * as models from './models';

const store = init({
  models,
});

export const { select, dispatch } = store;

export default store;
