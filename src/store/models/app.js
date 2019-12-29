import { createModel } from '@rematch/core';
import {default as reducers, initialState }  from './app.reducers';


export default createModel({
  name: 'app',
  state: initialState,
  reducers,
});
