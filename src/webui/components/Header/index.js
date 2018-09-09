/**
 * @prettier
 */

// @flow

import React, {Component, MouseEvent} from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Link from '../Link';
import Logo from '../Logo';

import {IProps, IState} from './indexInterfaces';
import {Wrapper, InnerWrapper} from './indexStyles';

class Header extends Component<IProps, IState> {
  constructor() {
    super();
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      anchorEl: null,
    };
  }

  handleMenu(event: MouseEvent<HTMLElement>) {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null,
    });
  }

  renderMenu() {
    const {username = '', handleLogout} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);
    return (
      <React.Fragment>
        <IconButton aria-owns={username ? 'menu-appbar' : null} aria-haspopup="true" color="inherit" onClick={this.handleMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }

  render() {
    const {username = '', toggleLoginModal} = this.props;
    return (
      <Wrapper position="static">
        <InnerWrapper>
          <Link href="/">
            <Logo />
          </Link>
          {username ? (
            this.renderMenu()
          ) : (
            <Button color="inherit" onClick={toggleLoginModal}>
              Login
            </Button>
          )}
        </InnerWrapper>
      </Wrapper>
    );
  }
}

export default Header;
