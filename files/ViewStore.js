import { types } from 'mobx-state-tree';

export const ViewStore = types
  .model('ViewStore', {
    isMobile: types.boolean,
  })
  .actions(self => ({
    setIsMobile(isMobile) {
      self.isMobile = isMobile;
    }
  }))
