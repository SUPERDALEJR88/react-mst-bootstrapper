import { applySnapshot } from 'mobx-state-tree';
import { GlobalStore } from './GlobalStore';

let store = null;

export function initStore(snapshot = null) {
  if (!store) {
    store = GlobalStore.create({
      viewStore: {
        isMobile: true,
      }
    });
  }
  if (snapshot) {
    applySnapshot(store, snapshot)
  }
  return store;
}
