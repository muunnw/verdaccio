/**
 * @prettier
 */

// @flow

import {MouseEvent} from 'react';

export const copyToClipBoard = (event: MouseEvent<HTMLElement>) => {
  event.preventDefault();
  const range = document.createRange();
  range.selectNodeContents(event.target);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  window.getSelection().removeRange(range);
};
