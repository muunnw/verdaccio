/**
 * @prettier
 */

/* @flow */

import React from 'react';

type IProps = {
  children?: ReactElement,
  href?: string,
};

const Link = ({children, href = '#'}: IProps): ReactElement => <a href={href}>{children}</a>;

export default Link;
