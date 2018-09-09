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
import Info from '@material-ui/icons/info';

import {getRegistryURL} from '../../utils/url';
import Link from '../Link';
import Logo from '../Logo';

import InfoDialog from './infoDialog';
import {IProps, IState} from './interfaces';
import {Wrapper, InnerWrapper} from './styles';

class Header extends Component<IProps, IState> {
  constructor() {
    super();
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpenInfoDialog = this.handleOpenInfoDialog.bind(this);
    this.handleCloseInfoDialog = this.handleCloseInfoDialog.bind(this);
    this.state = {
      anchorEl: null,
      openInfoDialog: false,
      registryURL: '',
    };
  }

  componentDidMount() {
    const registryUrl = getRegistryURL();
    this.setState({
      registryUrl,
    });
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

  handleOpenInfoDialog() {
    this.setState({
      openInfoDialog: true,
    });
  }

  handleCloseInfoDialog() {
    this.setState({
      openInfoDialog: false,
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
    const {scope, username = '', toggleLoginModal} = this.props;
    const {openInfoDialog, registryUrl} = this.state;
    return (
      <Wrapper position="static">
        <InnerWrapper>
          <Link href="/">
            <Logo />
          </Link>
          <div>
            <IconButton color="inherit" onClick={this.handleOpenInfoDialog}>
              <Info />
            </IconButton>
            {username ? (
              this.renderMenu()
            ) : (
              <Button color="inherit" onClick={toggleLoginModal}>
                Login
              </Button>
            )}
          </div>
        </InnerWrapper>
        <InfoDialog open={openInfoDialog} onClose={this.handleCloseInfoDialog}>
          <React.Fragment>
            <p>
              npm set {scope}
              registry {registryUrl}
            </p>
            <p>npm adduser --registry {registryUrl}</p>
          </React.Fragment>
        </InfoDialog>
      </Wrapper>
    );
  }
}

export default Header;
