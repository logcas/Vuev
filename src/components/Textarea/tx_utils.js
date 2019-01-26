/**
 *  textarea utils
 */

// 隐藏textarea的样式
const HIDDEN_STYLE = [
  'position: absolute !important;',
  'top: 0 !important;',
  'left: 0 !important;',
  'visibility: hidden !important;',
  'z-index: -999999 !important;',
  'overflow: hidden !important;',
  'line-height: 18px !important',
];

let hiddenTx = null;

const getHeight = function getHeight(targetNode, minRow, maxRow) {
  if (hiddenTx === null) {
    hiddenTx = document.createElement('textarea');
    hiddenTx.setAttribute('style', HIDDEN_STYLE.join(''));
    document.body.appendChild(hiddenTx);
  }
  hiddenTx.value = targetNode.value;
  const hiddenTxScrollHeight = hiddenTx.scrollHeight;
  const { lineHeight, padding } = window.getComputedStyle(hiddenTx);
  let rows = (parseFloat(hiddenTxScrollHeight) - parseFloat(padding) * 2) / parseFloat(lineHeight);
  document.body.removeChild(hiddenTx);
  hiddenTx = null;
  const {
    lineHeight: tlineHeight,
    padding: tPadding,
    borderWidth: tBorder,
  } = window.getComputedStyle(targetNode);
  if (minRow) {
    rows = Math.max(rows, minRow);
  }
  if (maxRow) {
    rows = Math.min(rows, maxRow);
  }
  const height = rows * parseFloat(tlineHeight)
                 + 2 * parseFloat(tPadding)
                 + 2 * parseFloat(tBorder);
  return height;
};

export default {
  getHeight,
};
