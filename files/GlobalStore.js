import { types } from 'mobx-state-tree';
import { ViewStore } from './ViewStore';

export const GlobalStore = types
  .model('GlobalStore', {
    viewStore: ViewStore,
  })
  .actions((self) => ({
  }));
