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
    this.renderInfoDialog = this.renderInfoDialog.bind(this);
    this.state = {
      anchorEl: null,
      openInfoDialog: false,
      registryUrl: '',
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

  renderLeftSide() {
    return (
      <Link href="/">
        <Logo />
      </Link>
    );
  }

  renderRightSide() {
    const {username = '', toggleLoginModal} = this.props;
    return (
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
    );
  }

  renderMenu() {
    const {username = '', handleLogout} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);
    return (
      <React.Fragment>
        <IconButton aria-owns={username ? 'sidebar-menu' : null} aria-haspopup="true" color="inherit" onClick={this.handleMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          id="sidebar-menu"
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

  renderInfoDialog() {
    const {scope} = this.props;
    const {openInfoDialog, registryUrl} = this.state;
    return (
      <InfoDialog open={openInfoDialog} onClose={this.handleCloseInfoDialog}>
        <p style={{cursor: 'pointer'}}>
          npm set {scope} registry {registryUrl}
        </p>
        <p style={{cursor: 'pointer'}}>npm adduser --registry {registryUrl}</p>
      </InfoDialog>
    );
  }

  render() {
    return (
      <Wrapper position="static">
        <InnerWrapper>
          {this.renderLeftSide()}
          {this.renderRightSide()}
        </InnerWrapper>
        {this.renderInfoDialog()}
      </Wrapper>
    );
  }
}

export default Header;
