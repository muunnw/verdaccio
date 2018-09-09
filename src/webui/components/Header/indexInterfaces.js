/**
 * @prettier
 */

// @flow

export interface IProps {
  username?: string;
  handleLogout: () => {};
  toggleLoginModal: () => {};
}

export interface IState {
  anchorEl: null | HTMLElement;
}
