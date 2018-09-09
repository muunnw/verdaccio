/**
 * @prettier
 */

// @flow

export interface IProps {
  username?: string;
  handleLogout: () => {};
  toggleLoginModal: () => {};
  scope: string;
}

export interface IState {
  anchorEl: null | HTMLElement;
  openInfoDialog: boolean;
  registryURL: string;
}
