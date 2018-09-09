/**
 * @prettier
 */

/* @flow */

import React from 'react';
import {IProps} from './interfaces';

const Link = ({children, href = '#'}: IProps): ReactElement => <a href={href}>{children}</a>;

export default Link;
