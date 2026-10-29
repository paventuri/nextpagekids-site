/* @ds-bundle: {"format":4,"namespace":"NextPageKidsDesignSystem_372e96","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Sticker","sourcePath":"components/core/Sticker.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"AskAtDinnerCard","sourcePath":"components/family/AskAtDinnerCard.jsx"},{"name":"BookCover","sourcePath":"components/family/BookCover.jsx"},{"name":"ChildChip","sourcePath":"components/family/ChildChip.jsx"},{"name":"GuideCard","sourcePath":"components/family/GuideCard.jsx"},{"name":"ProgressBar","sourcePath":"components/family/ProgressBar.jsx"},{"name":"RIBBON_COLORS","sourcePath":"components/family/Ribbon.jsx"},{"name":"Ribbon","sourcePath":"components/family/Ribbon.jsx"},{"name":"VERDICTS","sourcePath":"components/family/Verdict.jsx"},{"name":"Verdict","sourcePath":"components/family/Verdict.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"5531cd964172","components/core/Card.jsx":"7fe26ed1450d","components/core/Icon.jsx":"d3a6b69450b7","components/core/IconButton.jsx":"9a36e489936a","components/core/Sticker.jsx":"77aec641e944","components/core/Tag.jsx":"e4ca72387bdc","components/family/AskAtDinnerCard.jsx":"5d151392e13c","components/family/BookCover.jsx":"b8578b4c3874","components/family/ChildChip.jsx":"b523875c54ec","components/family/GuideCard.jsx":"bf746e6945bf","components/family/ProgressBar.jsx":"f58aa5947063","components/family/Ribbon.jsx":"10c1e8fd60c7","components/family/Verdict.jsx":"b5cc706df675","components/feedback/Dialog.jsx":"b85c9eee4ba9","components/feedback/Toast.jsx":"507a7e4c05bc","components/feedback/Tooltip.jsx":"7f1f8e704332","components/forms/Checkbox.jsx":"03bb540d3263","components/forms/Input.jsx":"a2f060849596","components/forms/Radio.jsx":"ccc5175d8b5b","components/forms/Select.jsx":"c5b911c09717","components/forms/Switch.jsx":"987e332aa075","components/navigation/Tabs.jsx":"ff4dbb15aa73","ui_kits/printables/Pages.jsx":"b312cd2011b1","ui_kits/website/AccountScreens.jsx":"49dfd6218b27","ui_kits/website/BrowseScreens.jsx":"4b9c01af1119","ui_kits/website/Chrome.jsx":"bd589756dc20","ui_kits/website/ContentScreens.jsx":"eeb1142b8c98","ui_kits/website/GrowthScreens.jsx":"85301b1ccc0d","ui_kits/website/GuideScreen.jsx":"2682d260e8e1","ui_kits/website/GuideSections.jsx":"6b99b39b9176","ui_kits/website/HomeScreen.jsx":"41c864ef0cb4","ui_kits/website/InfoScreens.jsx":"f4c8f1111fe7","ui_kits/website/ShopScreens.jsx":"5e9ba2174868","ui_kits/website/data.js":"6a892cebbae1","ui_kits/website/data2.js":"e7509acf8d65","ui_kits/website/image-slot.js":"fff26d081c8d","ui_kits/website/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[{"name":"ribbonColor","sourcePath":"components/family/Ribbon.jsx"}]} */

(() => {

const __ds_ns = (window.NextPageKidsDesignSystem_372e96 = window.NextPageKidsDesignSystem_372e96 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
const TONES = {
  card: 'var(--surface-card)',
  paper: 'var(--paper-200)',
  pink: 'var(--pink-300)',
  butter: 'var(--butter-300)',
  sky: 'var(--sky-300)',
  clover: 'var(--clover-300)',
  ink: 'var(--ink-900)'
};
function Card({
  children,
  tone = 'card',
  shape = 'rounded',
  padding = 24,
  bordered,
  shadow,
  style,
  onClick
}) {
  const bg = TONES[tone] || tone;
  if (shape === 'scallop' || shape === 'cloud') {
    const r = shape === 'cloud' ? 22 : 12;
    return /*#__PURE__*/React.createElement("div", {
      className: 'np-scallop' + (shape === 'cloud' ? ' np-scallop--cloud' : ''),
      onClick: onClick,
      style: {
        background: bg,
        color: tone === 'ink' ? 'var(--paper-50)' : 'var(--text-body)',
        filter: shadow ? 'drop-shadow(0 10px 18px rgba(28,37,65,.18))' : undefined,
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: Math.max(0, padding - r)
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: bg,
      color: tone === 'ink' ? 'var(--paper-50)' : 'var(--text-body)',
      borderRadius: shape === 'square' ? 'var(--radius-s)' : 'var(--radius-l)',
      padding,
      border: bordered ? 'var(--border-w) solid var(--border-subtle)' : 'none',
      boxShadow: shadow ? 'var(--shadow-soft)' : 'none',
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Lucide v0.469.0 (ISC) path data, copied from lucide-static. Stroke-based, 24px grid.
const ICONS = {
  "leaf": "<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\" /><path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\" />",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M12 2v2\" /><path d=\"M12 20v2\" /><path d=\"m4.93 4.93 1.41 1.41\" /><path d=\"m17.66 17.66 1.41 1.41\" /><path d=\"M2 12h2\" /><path d=\"M20 12h2\" /><path d=\"m6.34 17.66-1.41 1.41\" /><path d=\"m19.07 4.93-1.41 1.41\" />",
  "moon": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\" />",
  "ghost": "<path d=\"M9 10h.01\" /><path d=\"M15 10h.01\" /><path d=\"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z\" />",
  "backpack": "<path d=\"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\" /><path d=\"M8 10h8\" /><path d=\"M8 18h8\" /><path d=\"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6\" /><path d=\"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2\" />",
  "languages": "<path d=\"m5 8 6 6\" /><path d=\"m4 14 6-6 2-3\" /><path d=\"M2 5h12\" /><path d=\"M7 2h1\" /><path d=\"m22 22-5-10-5 10\" /><path d=\"M14 18h6\" />",
  "calendar-days": "<path d=\"M8 2v4\" /><path d=\"M16 2v4\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /><path d=\"M3 10h18\" /><path d=\"M8 14h.01\" /><path d=\"M12 14h.01\" /><path d=\"M16 14h.01\" /><path d=\"M8 18h.01\" /><path d=\"M12 18h.01\" /><path d=\"M16 18h.01\" />",
  "puzzle": "<path d=\"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z\" />",
  "layers": "<path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\" /><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\" /><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "users-round": "<path d=\"M18 21a8 8 0 0 0-16 0\" /><circle cx=\"10\" cy=\"8\" r=\"5\" /><path d=\"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3\" />",
  "hand": "<path d=\"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2\" /><path d=\"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2\" /><path d=\"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8\" /><path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\" />",
  "book-open": "<path d=\"M12 7v14\" /><path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />",
  "bookmark": "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\" />",
  "printer": "<path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\" /><path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\" /><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" rx=\"1\" />",
  "message-circle": "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\" />",
  "utensils": "<path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\" /><path d=\"M7 2v20\" /><path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\" />",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" />",
  "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /><path d=\"m21 21-4.3-4.3\" />",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />",
  "x": "<path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" />",
  "arrow-right": "<path d=\"M5 12h14\" /><path d=\"m12 5 7 7-7 7\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" /><path d=\"M19 12H5\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /><polyline points=\"7 10 12 15 17 10\" /><line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\" />",
  "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\" /><circle cx=\"6\" cy=\"12\" r=\"3\" /><circle cx=\"18\" cy=\"19\" r=\"3\" /><line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" /><line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />",
  "user-round": "<circle cx=\"12\" cy=\"8\" r=\"5\" /><path d=\"M20 21a8 8 0 0 0-16 0\" />",
  "plus": "<path d=\"M5 12h14\" /><path d=\"M12 5v14\" />",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /><path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />",
  "shopping-bag": "<path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\" /><path d=\"M3 6h18\" /><path d=\"M16 10a4 4 0 0 1-8 0\" />",
  "sticker": "<path d=\"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z\" /><path d=\"M14 3v4a2 2 0 0 0 2 2h4\" /><path d=\"M8 13h.01\" /><path d=\"M16 13h.01\" /><path d=\"M10 16s.8 1 2 1c1.3 0 2-1 2-1\" />",
  "award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\" /><circle cx=\"12\" cy=\"8\" r=\"6\" />",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><polyline points=\"12 6 12 12 16 14\" />",
  "lightbulb": "<path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\" /><path d=\"M9 18h6\" /><path d=\"M10 22h4\" />",
  "pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\" /><path d=\"m15 5 4 4\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 16v-4\" /><path d=\"M12 8h.01\" />",
  "log-out": "<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\" /><polyline points=\"16 17 21 12 16 7\" /><line x1=\"21\" x2=\"9\" y1=\"12\" y2=\"12\" />",
  "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /><circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />",
  "library": "<path d=\"m16 6 4 14\" /><path d=\"M12 6v14\" /><path d=\"M8 8v12\" /><path d=\"M4 4v16\" />",
  "trophy": "<path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\" /><path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\" /><path d=\"M4 22h16\" /><path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\" /><path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\" /><path d=\"M18 2H6v7a6 6 0 0 0 12 0V2Z\" />",
  "map": "<path d=\"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z\" /><path d=\"M15 5.764v15\" /><path d=\"M9 3.236v15\" />",
  "stamp": "<path d=\"M5 22h14\" /><path d=\"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z\" /><path d=\"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13\" />",
  "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />",
  "gift": "<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\" /><path d=\"M12 8v13\" /><path d=\"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7\" /><path d=\"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5\" />",
  "sparkle": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" />",
  "smile": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M8 14s1.5 2 4 2 4-2 4-2\" /><line x1=\"9\" x2=\"9.01\" y1=\"9\" y2=\"9\" /><line x1=\"15\" x2=\"15.01\" y1=\"9\" y2=\"9\" />",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /><path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /><path d=\"M10 9H8\" /><path d=\"M16 13H8\" /><path d=\"M16 17H8\" />",
  "list-checks": "<path d=\"m3 17 2 2 4-4\" /><path d=\"m3 7 2 2 4-4\" /><path d=\"M13 6h8\" /><path d=\"M13 12h8\" /><path d=\"M13 18h8\" />",
  "timer": "<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\" /><line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\" /><circle cx=\"12\" cy=\"14\" r=\"8\" />",
  "circle-help": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" /><path d=\"M12 17h.01\" />"
};
function Icon({
  name,
  size = 20,
  stroke = 2,
  color = 'currentColor',
  label,
  style,
  ...rest
}) {
  const inner = ICONS[name];
  if (!inner) return null;
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    role: label ? 'img' : undefined,
    'aria-label': label,
    'aria-hidden': label ? undefined : true,
    style: {
      flexShrink: 0,
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    },
    ...rest
  });
}
Object.assign(__ds_scope, { ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  s: {
    h: 36,
    px: 14,
    fs: 14,
    ic: 16
  },
  m: {
    h: 46,
    px: 20,
    fs: 16,
    ic: 18
  },
  l: {
    h: 56,
    px: 28,
    fs: 18,
    ic: 20
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--ink-900)',
    hover: 'var(--ink-800)',
    fg: 'var(--paper-50)',
    bd: 'var(--ink-900)'
  },
  accent: {
    bg: 'var(--tomato-500)',
    hover: 'var(--tomato-600)',
    fg: 'var(--paper-50)',
    bd: 'var(--tomato-500)'
  },
  secondary: {
    bg: 'transparent',
    hover: 'var(--paper-200)',
    fg: 'var(--ink-900)',
    bd: 'var(--ink-900)'
  },
  soft: {
    bg: 'var(--paper-200)',
    hover: 'var(--paper-300)',
    fg: 'var(--ink-900)',
    bd: 'transparent'
  },
  ghost: {
    bg: 'transparent',
    hover: 'rgba(28,37,65,.06)',
    fg: 'var(--ink-900)',
    bd: 'transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'm',
  iconLeft,
  iconRight,
  disabled,
  fullWidth,
  onClick,
  type = 'button',
  href,
  style
}) {
  const [hov, setHov] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = SIZES[size] || SIZES.m;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : type,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => {
      setHov(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: 'var(--radius-pill)',
      border: `var(--border-w-strong) solid ${v.bd}`,
      background: hov && !disabled ? v.hover : v.bg,
      color: v.fg,
      font: `700 ${s.fs}px/1 var(--font-body)`,
      letterSpacing: '0.005em',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      boxSizing: 'border-box',
      whiteSpace: 'nowrap',
      transform: down && !disabled ? 'scale(var(--press-scale))' : 'none',
      transition: 'background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'soft',
  size = 40,
  onClick,
  disabled,
  style
}) {
  const [hov, setHov] = React.useState(false);
  const V = {
    primary: ['var(--ink-900)', 'var(--ink-800)', 'var(--paper-50)', 'var(--ink-900)'],
    soft: ['var(--paper-200)', 'var(--paper-300)', 'var(--ink-900)', 'transparent'],
    outline: ['transparent', 'var(--paper-200)', 'var(--ink-900)', 'var(--ink-900)'],
    ghost: ['transparent', 'rgba(28,37,65,.07)', 'var(--ink-900)', 'transparent']
  }[variant] || [];
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-grid',
      placeItems: 'center',
      padding: 0,
      border: `var(--border-w-strong) solid ${V[3]}`,
      background: hov && !disabled ? V[1] : V[0],
      color: V[2],
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--dur-fast) var(--ease-soft)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.46)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Sticker.jsx
try { (() => {
const PAIRS = {
  tomato: ['var(--tomato-500)', 'var(--paper-50)'],
  pink: ['var(--pink-300)', 'var(--tomato-600)'],
  butter: ['var(--butter-300)', 'var(--cobalt-600)'],
  cobalt: ['var(--cobalt-500)', 'var(--butter-200)'],
  sky: ['var(--sky-300)', 'var(--ink-900)'],
  ink: ['var(--ink-900)', 'var(--butter-300)']
};
function Sticker({
  children,
  tone = 'butter',
  size = 112,
  rotate = -8,
  hand = true,
  style
}) {
  const [bg, fg] = PAIRS[tone] || PAIRS.butter;
  return /*#__PURE__*/React.createElement("div", {
    className: "np-scallop np-scallop--s",
    style: {
      width: size,
      height: size,
      boxSizing: 'border-box',
      background: bg,
      color: fg,
      transform: `rotate(${rotate}deg)`,
      filter: 'drop-shadow(0 4px 6px rgba(28,37,65,.22))',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: hand ? `400 ${Math.round(size * 0.22)}px/0.9 var(--font-hand)` : `800 ${Math.round(size * 0.12)}px/1.05 var(--font-body)`,
      textTransform: hand ? 'none' : 'uppercase',
      letterSpacing: hand ? 0 : '0.06em'
    }
  }, children));
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const TONES = {
  paper: ['var(--paper-200)', 'var(--ink-900)'],
  ink: ['var(--ink-900)', 'var(--paper-50)'],
  tomato: ['var(--pink-300)', 'var(--tomato-600)'],
  cobalt: ['var(--butter-300)', 'var(--cobalt-600)'],
  sky: ['var(--sky-300)', 'var(--ink-900)'],
  clover: ['var(--clover-300)', 'var(--good-700)'],
  outline: ['transparent', 'var(--ink-900)']
};
function Tag({
  children,
  tone = 'paper',
  icon,
  size = 'm',
  style
}) {
  const [bg, fg] = TONES[tone] || TONES.paper;
  const sm = size === 's';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: sm ? 24 : 30,
      padding: sm ? '0 10px' : '0 13px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      border: tone === 'outline' ? 'var(--border-w) solid var(--ink-900)' : 'none',
      font: `700 ${sm ? 12 : 13}px/1 var(--font-body)`,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 13 : 15
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/family/BookCover.jsx
try { (() => {
const PAIRS = {
  tomato: ['var(--tomato-500)', 'var(--pink-200)'],
  pink: ['var(--pink-300)', 'var(--tomato-600)'],
  cobalt: ['var(--cobalt-500)', 'var(--butter-300)'],
  butter: ['var(--butter-300)', 'var(--cobalt-600)'],
  sky: ['var(--sky-300)', 'var(--ink-900)'],
  clover: ['var(--clover-300)', 'var(--good-700)'],
  ink: ['var(--ink-900)', 'var(--butter-300)']
};
function BookCover({
  title,
  author,
  src,
  tone = 'cobalt',
  width = 140,
  style
}) {
  const [bg, fg] = PAIRS[tone] || PAIRS.cobalt;
  const h = Math.round(width * 1.5);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: h,
      borderRadius: '4px 10px 10px 4px',
      overflow: 'hidden',
      flexShrink: 0,
      position: 'relative',
      background: bg,
      color: fg,
      boxShadow: 'inset 6px 0 0 rgba(0,0,0,.08), var(--shadow-sticker)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: `${Math.round(width * 0.12)}px ${Math.round(width * 0.1)}px ${Math.round(width * 0.1)}px ${Math.round(width * 0.14)}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 ${Math.round(width * 0.14)}px/1.02 var(--font-display)`,
      textWrap: 'balance'
    }
  }, title), author && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `700 ${Math.max(9, Math.round(width * 0.068))}px/1.2 var(--font-body)`,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, author)));
}
Object.assign(__ds_scope, { BookCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/family/BookCover.jsx", error: String((e && e.message) || e) }); }

// components/family/Ribbon.jsx
try { (() => {
const RIBBON_COLORS = ['tomato', 'sunflower', 'cobalt', 'rose', 'clover', 'sky', 'lilac', 'sea'];
function ribbonColor(c) {
  return RIBBON_COLORS.includes(c) ? `var(--ribbon-${c})` : c || 'var(--ribbon-tomato)';
}
function Ribbon({
  color = 'tomato',
  width = 18,
  height = 44,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": label ? undefined : true,
    className: "np-ribbon",
    style: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width,
      height,
      flexShrink: 0,
      background: ribbonColor(color),
      color: color === 'sunflower' ? 'var(--ink-900)' : 'var(--paper-50)',
      paddingTop: Math.round(width * 0.22),
      boxSizing: 'border-box',
      font: `800 ${Math.round(width * 0.5)}px/1 var(--font-body)`,
      boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.08)',
      ...style
    }
  }, label);
}
Object.assign(__ds_scope, { RIBBON_COLORS, ribbonColor, Ribbon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/family/Ribbon.jsx", error: String((e && e.message) || e) }); }

// components/family/AskAtDinnerCard.jsx
try { (() => {
const TONES = {
  butter: ['var(--butter-300)', 'var(--cobalt-600)'],
  pink: ['var(--pink-300)', 'var(--tomato-600)'],
  sky: ['var(--sky-300)', 'var(--ink-900)'],
  clover: ['var(--clover-300)', 'var(--good-700)']
};
function AskAtDinnerCard({
  book,
  author,
  questions = [],
  tone = 'butter',
  ribbon,
  width = 420,
  label = 'Ask at dinner',
  tagline = 'no wrong answers',
  byline = 'by',
  style
}) {
  const [bg, accent] = TONES[tone] || TONES.butter;
  const u = width / 420;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      aspectRatio: '4 / 5',
      position: 'relative',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "np-scallop np-scallop--cloud",
    style: {
      position: 'absolute',
      inset: 0,
      background: bg,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: `${10 * u}px ${12 * u}px ${6 * u}px`,
      boxSizing: 'border-box',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8 * u,
      color: accent,
      font: `800 ${12 * u}px/1 var(--font-body)`,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "utensils",
    size: 16 * u,
    stroke: 2.25
  }), label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 ${34 * u}px/1.02 var(--font-display)`,
      letterSpacing: '-0.015em',
      marginTop: 14 * u,
      textWrap: 'balance'
    }
  }, book), author && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 ${14 * u}px/1.2 var(--font-body)`,
      marginTop: 6 * u,
      color: 'var(--ink-700)'
    }
  }, byline, " ", author), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: `${22 * u}px 0 0`,
      padding: 0,
      display: 'grid',
      gap: 16 * u,
      flex: 1,
      alignContent: 'start'
    }
  }, questions.slice(0, 3).map((q, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: `${36 * u}px 1fr`,
      gap: 12 * u,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36 * u,
      height: 36 * u,
      borderRadius: '50%',
      background: 'var(--ink-900)',
      color: bg,
      display: 'grid',
      placeItems: 'center',
      font: `400 ${20 * u}px/1 var(--font-display)`
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 ${17 * u}px/1.35 var(--font-body)`,
      paddingTop: 6 * u,
      textWrap: 'pretty'
    }
  }, q)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: `1.5px solid rgba(28,37,65,.18)`,
      paddingTop: 10 * u
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 ${22 * u}px/1 var(--font-hand)`,
      color: accent
    }
  }, tagline), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `800 ${12 * u}px/1 var(--font-body)`,
      letterSpacing: '0.04em'
    }
  }, "nextpagekids.com")))), ribbon && /*#__PURE__*/React.createElement(__ds_scope.Ribbon, {
    color: ribbon,
    width: 22 * u,
    height: 60 * u,
    style: {
      position: 'absolute',
      top: 0,
      right: 40 * u
    }
  }));
}
Object.assign(__ds_scope, { AskAtDinnerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/family/AskAtDinnerCard.jsx", error: String((e && e.message) || e) }); }

// components/family/ChildChip.jsx
try { (() => {
function ChildChip({
  name,
  ribbon = 'tomato',
  meta,
  size = 'm',
  selected,
  onClick,
  style
}) {
  const [hov, setHov] = React.useState(false);
  const d = size === 's' ? 36 : size === 'l' ? 72 : 48;
  const avatar = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: d,
      height: d,
      borderRadius: '50%',
      background: 'var(--paper-50)',
      border: `2px solid ${__ds_scope.ribbonColor(ribbon)}`,
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      boxSizing: 'border-box',
      font: `400 ${Math.round(d * 0.46)}px/1 var(--font-display)`,
      color: 'var(--ink-900)'
    }
  }, name ? name[0] : '', /*#__PURE__*/React.createElement(__ds_scope.Ribbon, {
    color: ribbon,
    width: Math.round(d * 0.24),
    height: Math.round(d * 0.5),
    style: {
      position: 'absolute',
      right: Math.round(d * 0.02),
      top: Math.round(d * 0.62)
    }
  }));
  if (size === 'l') return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 10,
      background: 'none',
      border: 0,
      padding: 0,
      cursor: onClick ? 'pointer' : 'default',
      color: 'var(--ink-900)',
      ...style
    }
  }, avatar, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 16px/1.2 var(--font-body)'
    }
  }, name), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.2 var(--font-body)',
      color: 'var(--text-muted)',
      marginTop: -6
    }
  }, meta));
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 16px 4px 4px',
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      background: selected ? 'var(--ink-900)' : hov && onClick ? 'var(--paper-300)' : 'var(--paper-200)',
      color: selected ? 'var(--paper-50)' : 'var(--ink-900)',
      border: 0,
      textAlign: 'left',
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, avatar, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `700 ${size === 's' ? 14 : 16}px/1.1 var(--font-body)`
    }
  }, name), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1.2 var(--font-body)',
      opacity: .75
    }
  }, meta)));
}
Object.assign(__ds_scope, { ChildChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/family/ChildChip.jsx", error: String((e && e.message) || e) }); }

// components/family/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 10,
  color = 'ink',
  label,
  showCount = true,
  height = 10,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = color === 'ink' ? 'var(--ink-900)' : __ds_scope.ribbonColor(color);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8,
      ...style
    }
  }, (label || showCount) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: '600 14px/1.2 var(--font-body)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showCount && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, value, " of ", max)), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--paper-300)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/family/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/family/Verdict.jsx
try { (() => {
const VERDICTS = {
  good: {
    word: 'Good fit',
    icon: 'check',
    fg: 'var(--good-700)',
    bg: 'var(--good-100)'
  },
  together: {
    word: 'Read together',
    icon: 'users-round',
    fg: 'var(--together-700)',
    bg: 'var(--together-100)',
    dot: 'var(--together-500)'
  },
  notyet: {
    word: 'Not yet',
    icon: 'hand',
    fg: 'var(--notyet-700)',
    bg: 'var(--notyet-100)'
  }
};
function Verdict({
  kind = 'good',
  variant = 'pill',
  size = 'm',
  child,
  note,
  word,
  style
}) {
  const v0 = VERDICTS[kind] || VERDICTS.good;
  const v = word ? {
    ...v0,
    word
  } : v0;
  const dot = v.dot || v.fg;
  if (variant === 'stamp') {
    const d = size === 's' ? 64 : size === 'l' ? 120 : 88;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: d,
        height: d,
        borderRadius: '50%',
        background: v.bg,
        color: v.fg,
        border: `2px solid ${v.fg}`,
        boxShadow: `inset 0 0 0 4px ${v.bg}, inset 0 0 0 5px ${v.fg}`,
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        transform: 'rotate(-6deg)',
        flexShrink: 0,
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        justifyItems: 'center',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: v.icon,
      size: Math.round(d * 0.26),
      stroke: 2.5
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `800 ${Math.round(d * 0.11)}px/1.05 var(--font-body)`,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        maxWidth: d * 0.7
      }
    }, v.word)));
  }
  if (variant === 'block') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        background: v.bg,
        color: v.fg,
        borderRadius: 'var(--radius-m)',
        padding: child ? '18px 20px 18px 48px' : '18px 20px',
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start',
        ...style
      }
    }, child && /*#__PURE__*/React.createElement(__ds_scope.Ribbon, {
      color: child.ribbon,
      width: 16,
      height: 40,
      style: {
        position: 'absolute',
        left: 18,
        top: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: dot,
        color: 'var(--paper-50)',
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: v.icon,
      size: 22,
      stroke: 2.5
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 26px/1.05 var(--font-display)'
      }
    }, child ? `${v.word} for ${child.name}` : v.word), note && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px/1.45 var(--font-body)',
        color: 'var(--ink-800)'
      }
    }, note)));
  }
  const sm = size === 's';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: sm ? 28 : 34,
      padding: child ? sm ? '0 12px 0 8px' : '0 14px 0 10px' : sm ? '0 12px 0 4px' : '0 14px 0 5px',
      borderRadius: 'var(--radius-pill)',
      background: v.bg,
      color: v.fg,
      font: `700 ${sm ? 13 : 14}px/1 var(--font-body)`,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...style
    }
  }, child ? /*#__PURE__*/React.createElement(__ds_scope.Ribbon, {
    color: child.ribbon,
    width: sm ? 10 : 12,
    height: sm ? 18 : 22,
    style: {
      alignSelf: 'flex-start',
      marginTop: 0
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: sm ? 20 : 24,
      height: sm ? 20 : 24,
      borderRadius: '50%',
      background: dot,
      color: 'var(--paper-50)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: v.icon,
    size: sm ? 12 : 14,
    stroke: 3
  })), child && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: v.icon,
    size: sm ? 14 : 16,
    stroke: 2.75
  }), child ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink-800)'
    }
  }, child.name, ":"), " ", v.word) : v.word);
}
Object.assign(__ds_scope, { VERDICTS, Verdict });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/family/Verdict.jsx", error: String((e && e.message) || e) }); }

// components/family/GuideCard.jsx
try { (() => {
function GuideCard({
  title,
  author,
  ages,
  verdict = 'good',
  cover = 'cobalt',
  coverSrc,
  blurb,
  childVerdicts,
  onClick,
  style
}) {
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0,1fr)',
      gap: 20,
      padding: 20,
      borderRadius: 'var(--radius-l)',
      background: 'var(--surface-card)',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hov && onClick ? 'var(--shadow-lift)' : '0 0 0 1.5px var(--border-subtle)',
      transform: hov && onClick ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BookCover, {
    title: title,
    author: author,
    tone: cover,
    src: coverSrc,
    width: 96
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Verdict, {
    kind: verdict,
    size: "s",
    style: {
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '400 24px/1.08 var(--font-display)',
      margin: 0,
      color: 'var(--ink-900)',
      letterSpacing: '-0.01em'
    }
  }, title), author && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1.3 var(--font-body)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, author)), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.45 var(--font-body)',
      color: 'var(--ink-800)',
      margin: 0
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 'auto',
      alignItems: 'center'
    }
  }, ages && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    size: "s"
  }, "Ages ", ages), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    size: "s",
    tone: "outline",
    icon: "timer"
  }, "1-min guide")), childVerdicts && childVerdicts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, childVerdicts.map((c, i) => /*#__PURE__*/React.createElement(__ds_scope.Verdict, {
    key: i,
    kind: c.kind,
    size: "s",
    child: {
      name: c.name,
      ribbon: c.ribbon
    }
  })))));
}
Object.assign(__ds_scope, { GuideCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/family/GuideCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  width = 480,
  inline,
  style
}) {
  if (!open) return null;
  const box = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": !inline,
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 32,
      boxShadow: 'var(--shadow-lift)',
      position: 'relative',
      boxSizing: 'border-box',
      ...style
    }
  }, onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    size: 40,
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 32px/1.08 var(--font-display)',
      margin: '0 40px 12px 0',
      color: 'var(--ink-900)',
      letterSpacing: '-0.015em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 17px/1.55 var(--font-body)',
      color: 'var(--ink-800)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, actions));
  if (inline) return box;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'grid',
      justifyItems: 'center',
      alignItems: 'safe center',
      overflowY: 'auto',
      padding: 24,
      zIndex: 100
    }
  }, box);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  icon = 'check',
  action,
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px 12px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-900)',
      color: 'var(--paper-50)',
      boxShadow: 'var(--shadow-lift)',
      font: '600 15px/1.3 var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--butter-300)',
      color: 'var(--ink-900)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    stroke: 2.75
  })), /*#__PURE__*/React.createElement("span", null, message), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--butter-300)',
      font: '800 14px/1 var(--font-body)',
      cursor: 'pointer',
      padding: '6px 8px',
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, action));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  text,
  children,
  placement = 'top',
  open,
  style
}) {
  const [hov, setHov] = React.useState(false);
  const show = open ?? hov;
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: `translateX(-50%) translateY(${show ? 0 : 4}px)`,
      ...pos,
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--dur-fast), transform var(--dur-fast) var(--ease-out)',
      background: 'var(--ink-900)',
      color: 'var(--paper-50)',
      font: '600 13px/1.3 var(--font-body)',
      padding: '7px 11px',
      borderRadius: 'var(--radius-s)',
      whiteSpace: 'nowrap',
      zIndex: 50
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '500 16px/1.3 var(--font-body)',
      color: 'var(--ink-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 24,
      height: 24,
      borderRadius: 7,
      border: '2px solid var(--ink-900)',
      background: on ? 'var(--ink-900)' : 'var(--paper-50)',
      color: 'var(--paper-50)',
      display: 'grid',
      placeItems: 'center',
      boxSizing: 'border-box',
      transition: 'background var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    stroke: 3
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  icon,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  onChange,
  disabled,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const bd = error ? 'var(--notyet-700)' : focus ? 'var(--ink-900)' : 'rgba(28,37,65,.22)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 14px/1.2 var(--font-body)',
      color: 'var(--ink-900)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 50,
      padding: '0 16px',
      borderRadius: 'var(--radius-m)',
      background: disabled ? 'var(--paper-200)' : 'var(--paper-50)',
      border: `var(--border-w-strong) solid ${bd}`,
      boxShadow: focus ? '0 0 0 4px rgba(47,84,198,.16)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      boxSizing: 'border-box'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--ink-500)"
  }), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      font: '500 16px/1 var(--font-body)',
      color: 'var(--ink-900)'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.35 var(--font-body)',
      color: error ? 'var(--notyet-700)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  direction = 'column',
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 12,
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => {
        if (value === undefined) setInner(v);
        onChange && onChange(v);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        font: '500 16px/1.3 var(--font-body)',
        color: 'var(--ink-900)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        border: '2px solid var(--ink-900)',
        background: 'var(--paper-50)',
        display: 'grid',
        placeItems: 'center',
        boxSizing: 'border-box'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'var(--ink-900)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 14px/1.2 var(--font-body)',
      color: 'var(--ink-900)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 50,
      padding: '0 44px 0 16px',
      borderRadius: 'var(--radius-m)',
      background: 'var(--paper-50)',
      border: 'var(--border-w-strong) solid rgba(28,37,65,.22)',
      font: '500 16px/1 var(--font-body)',
      color: 'var(--ink-900)',
      cursor: 'pointer',
      boxSizing: 'border-box'
    }
  }, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '500 16px/1.3 var(--font-body)',
      color: 'var(--ink-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      width: 46,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--ink-900)' : 'var(--paper-300)',
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-soft)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--paper-50)',
      boxShadow: '0 1px 3px rgba(28,37,65,.3)',
      transition: 'left var(--dur-base) var(--ease-bounce)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'pill',
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const cur = value ?? inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  if (variant === 'underline') return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1.5px solid var(--border-subtle)',
      ...style
    }
  }, items.map(it => {
    const v = it.value ?? it;
    const on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        background: 'none',
        border: 0,
        padding: '0 0 12px',
        marginBottom: -1.5,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        font: '700 16px/1 var(--font-body)',
        color: on ? 'var(--ink-900)' : 'var(--text-muted)',
        borderBottom: on ? '3px solid var(--tomato-500)' : '3px solid transparent'
      }
    }, it.label ?? it);
  }));
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      flexShrink: 0,
      gap: 4,
      padding: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--paper-200)',
      ...style
    }
  }, items.map(it => {
    const v = it.value ?? it;
    const on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        height: 38,
        padding: '0 18px',
        borderRadius: 'var(--radius-pill)',
        border: 0,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        font: '700 15px/1 var(--font-body)',
        background: on ? 'var(--ink-900)' : 'transparent',
        color: on ? 'var(--paper-50)' : 'var(--ink-900)',
        transition: 'background var(--dur-fast)'
      }
    }, it.label ?? it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/printables/Pages.jsx
try { (() => {
(() => {
  const {
    Ribbon,
    Verdict,
    Icon
  } = window.NextPageKidsDesignSystem_372e96;
  const ribbonColor = c => ["tomato", "sunflower", "cobalt", "rose", "clover", "sky", "lilac", "sea"].includes(c) ? `var(--ribbon-${c})` : c;
  const W = 816,
    H = 1056;
  function Page({
    kid,
    children,
    bg = 'var(--print-paper)'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: W,
        height: H,
        background: bg,
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '120px 72px 64px',
        color: 'var(--ink-900)',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Ribbon, {
      color: kid.ribbon,
      width: 56,
      height: 150,
      style: {
        position: 'absolute',
        top: 0,
        right: 84,
        zIndex: 2
      }
    }), children, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 72,
        right: 72,
        bottom: 36,
        display: 'flex',
        justifyContent: 'space-between',
        font: '700 13px/1 var(--font-body)',
        color: 'var(--ink-700)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Made for ", kid.name), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 18px/1 var(--font-display)',
        color: 'var(--ink-900)'
      }
    }, "NextPage ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--print-tomato)'
      }
    }, "Kids"))));
  }
  const Eyebrow = ({
    c,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 16px/1 var(--font-body)',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: c
    }
  }, children);
  function Certificate({
    kid,
    book
  }) {
    return /*#__PURE__*/React.createElement(Page, {
      kid: kid,
      bg: "var(--print-sunflower)"
    }, /*#__PURE__*/React.createElement("div", {
      className: "np-scallop np-scallop--cloud",
      style: {
        position: 'absolute',
        inset: '100px 56px 90px',
        background: 'var(--print-paper)',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 22,
        padding: 24
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "award",
      size: 72,
      stroke: 1.75,
      color: "var(--print-tomato)"
    }), /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--print-cobalt)"
    }, "Certificate of reading"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 40px/1 var(--font-hand)',
        color: 'var(--ink-700)'
      }
    }, "this is to say that"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 120px/0.95 var(--font-display)',
        color: ribbonColor(kid.ribbon),
        letterSpacing: '-0.02em'
      }
    }, kid.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 24px/1.4 var(--font-body)',
        maxWidth: 520
      }
    }, "finished ", /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 30px/1 var(--font-display)'
      }
    }, book), " and read it all the way to the last page."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 80,
        marginTop: 36,
        font: '600 15px/1 var(--font-body)',
        color: 'var(--ink-700)'
      }
    }, ['Date', 'Signed'].map(l => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'grid',
        gap: 10,
        width: 200
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        borderBottom: '2px solid var(--ink-900)',
        height: 34
      }
    }), l))))));
  }
  function Quiz({
    kid,
    book,
    questions
  }) {
    const qs = questions || [['Who kept the light on?', ['The keeper', 'The fox', 'A seagull']], ['What season is the story in?', ['Summer', 'Winter', 'Spring']], ['What did the fox fix first?', ['The lamp', 'The door', 'The boat']]];
    return /*#__PURE__*/React.createElement(Page, {
      kid: kid
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--print-tomato)"
    }, "Book quiz"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 64px/1 var(--font-display)',
        marginTop: 14,
        letterSpacing: '-0.015em'
      }
    }, book), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 32px/1 var(--font-hand)',
        color: 'var(--print-cobalt)',
        marginTop: 12
      }
    }, "circle one answer. no peeking!"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 34,
        marginTop: 48
      }
    }, qs.map(([q, as], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '64px 1fr',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: ['var(--print-pink)', 'var(--print-sky)', 'var(--print-clover)'][i],
        display: 'grid',
        placeItems: 'center',
        font: '400 30px/1 var(--font-display)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 26px/1.3 var(--font-body)',
        paddingTop: 10
      }
    }, q), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 28
      }
    }, as.map(a => /*#__PURE__*/React.createElement("span", {
      key: a,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        font: '500 21px/1 var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        border: '2.5px solid var(--ink-900)'
      }
    }), a))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 52,
        border: '2.5px dashed var(--ink-900)',
        borderRadius: 24,
        padding: '24px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 22px/1.3 var(--font-body)'
      }
    }, "My verdict on this book"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 22,
        marginTop: 18
      }
    }, ['good', 'together', 'notyet'].map(v => /*#__PURE__*/React.createElement(Verdict, {
      key: v,
      kind: v,
      variant: "stamp",
      size: "m"
    })))));
  }
  function Passport({
    kid
  }) {
    const D = window.NPK_DATA;
    const shelf = D.shelf[kid.id] || {};
    const slots = D.books.slice(0, 6).concat([null, null, null]);
    return /*#__PURE__*/React.createElement(Page, {
      kid: kid,
      bg: "var(--print-sky)"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--ink-900)"
    }, "Reading passport"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 72px/1 var(--font-display)',
        marginTop: 14,
        letterSpacing: '-0.02em'
      }
    }, kid.name, "'s", /*#__PURE__*/React.createElement("br", null), "book stamps"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22,
        marginTop: 44
      }
    }, slots.map((b, i) => {
      const v = b && shelf[b.id];
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          height: 196,
          background: 'var(--print-paper)',
          borderRadius: 24,
          display: 'grid',
          justifyItems: 'center',
          alignContent: 'center',
          gap: 12,
          padding: 14,
          textAlign: 'center',
          border: v ? 'none' : '2.5px dashed rgba(28,37,65,.35)',
          boxSizing: 'border-box'
        }
      }, v ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Verdict, {
        kind: v,
        variant: "stamp",
        size: "m"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '700 15px/1.2 var(--font-body)'
        }
      }, b.title)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
        name: "stamp",
        size: 40,
        stroke: 1.75,
        color: "var(--ink-300)"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '400 24px/1 var(--font-hand)',
          color: 'var(--ink-500)'
        }
      }, "next book here")));
    })));
  }
  function DinnerSheet({
    kid,
    book
  }) {
    const b = window.NPK_DATA.books[0];
    return /*#__PURE__*/React.createElement(Page, {
      kid: kid,
      bg: "var(--print-pink)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "utensils",
      size: 26,
      color: "var(--print-tomato)"
    }), /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--ink-900)"
    }, "Ask at dinner")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 68px/1 var(--font-display)',
        marginTop: 14,
        letterSpacing: '-0.02em'
      }
    }, book), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 26,
        marginTop: 52
      }
    }, b.questions.map((q, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "np-scallop",
      style: {
        background: 'var(--print-paper)',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '72px 1fr',
        gap: 18,
        alignItems: 'center',
        padding: '14px 18px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--ink-900)',
        color: 'var(--print-sunflower)',
        display: 'grid',
        placeItems: 'center',
        font: '400 36px/1 var(--font-display)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 28px/1.3 var(--font-body)'
      }
    }, q))))), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 40px/1 var(--font-hand)',
        color: 'var(--print-tomato)',
        marginTop: 40,
        textAlign: 'center'
      }
    }, "no wrong answers, just good talks"));
  }
  Object.assign(window, {
    PrintPage: Page,
    Certificate,
    Quiz,
    Passport,
    DinnerSheet,
    PRINT_W: W,
    PRINT_H: H
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/printables/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AccountScreens.jsx
try { (() => {
(() => {
  const {
    Button,
    BookCover,
    Verdict,
    ChildChip,
    ProgressBar,
    Tabs,
    Ribbon,
    Dialog,
    Input,
    Select,
    Icon,
    Switch,
    Card,
    RIBBON_COLORS
  } = window.NextPageKidsDesignSystem_372e96;
  const ribbonColor = c => RIBBON_COLORS.includes(c) ? `var(--ribbon-${c})` : c;
  function RibbonPicker({
    value,
    onChange,
    taken = []
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        minHeight: 64
      }
    }, RIBBON_COLORS.map(c => {
      const off = taken.includes(c) && c !== value;
      return /*#__PURE__*/React.createElement("button", {
        key: c,
        "aria-label": c,
        title: off ? `${c} is taken` : c,
        disabled: off,
        onClick: () => onChange(c),
        style: {
          background: 'none',
          border: 0,
          padding: 0,
          cursor: off ? 'not-allowed' : 'pointer',
          opacity: off ? 0.25 : 1,
          transition: 'transform var(--dur-base) var(--ease-bounce)',
          transform: value === c ? 'translateY(4px)' : 'none'
        }
      }, /*#__PURE__*/React.createElement(Ribbon, {
        color: c,
        width: 28,
        height: value === c ? 60 : 48
      }));
    }));
  }
  function ShelfScreen({
    app
  }) {
    const m = useM();
    const d = window.NPK_DATA;
    const kid = app.kids.find(k => k.id === app.kidId) || app.kids[0];
    const [tab, setTab] = React.useState('Finished');
    const [open, setOpen] = React.useState(false);
    const [nm, setNm] = React.useState('');
    const [rb, setRb] = React.useState('rose');
    const mine = Object.entries(app.shelf[kid.id] || {}).map(([bid, v]) => ({
      ...d.books.find(b => b.id === bid),
      mine: v
    }));
    const reading = (d.reading[kid.id] || []).map(id => d.books.find(b => b.id === id));
    const want = d.books.filter(b => !(app.shelf[kid.id] || {})[b.id] && !(d.reading[kid.id] || []).includes(b.id)).slice(0, 4);
    const list = tab === 'Finished' ? mine : tab === 'Reading now' ? reading : want;
    const cw = m ? 140 : 170;
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "40px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, app.kids.map(k => /*#__PURE__*/React.createElement(ChildChip, {
      key: k.id,
      name: k.name,
      ribbon: k.ribbon,
      meta: `Age ${k.age}`,
      selected: k.id === kid.id,
      onClick: () => app.setKidId(k.id)
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconLeft: "plus",
      onClick: () => setOpen(true)
    }, "Add a reader")), /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        marginTop: 24,
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-xl)',
        padding: m ? '72px 24px 28px' : '48px 48px 40px 120px',
        boxShadow: '0 0 0 1.5px var(--border-subtle)',
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) 320px',
        gap: m ? 24 : 40,
        alignItems: 'end'
      }
    }, /*#__PURE__*/React.createElement(Ribbon, {
      color: kid.ribbon,
      width: m ? 30 : 40,
      height: m ? 80 : 120,
      style: {
        position: 'absolute',
        left: m ? 24 : 48,
        top: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 30px/1 var(--font-hand)',
        color: ribbonColor(kid.ribbon)
      }
    }, kid.name, "\u2019s shelf"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, mine.length, " ", mine.length === 1 ? 'book' : 'books', " and counting.")), /*#__PURE__*/React.createElement(ProgressBar, {
      label: "Summer goal",
      value: mine.length,
      max: 12,
      color: kid.ribbon
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '32px 0 24px',
        overflowX: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: ['Reading now', 'Finished', 'Want to read'],
      value: tab,
      onChange: setTab
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${cw}px, 1fr))`,
        gap: m ? 20 : 28
      }
    }, list.map(b => /*#__PURE__*/React.createElement("button", {
      key: b.id,
      onClick: () => app.openGuide(b.id),
      style: {
        background: 'none',
        border: 0,
        padding: 0,
        textAlign: 'left',
        cursor: 'pointer',
        display: 'grid',
        gap: 10,
        justifyItems: 'start',
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(BookCover, {
      title: b.title,
      author: b.author,
      tone: b.cover,
      width: cw
    }), b.mine && /*#__PURE__*/React.createElement(Ribbon, {
      color: kid.ribbon,
      width: 20,
      height: 52,
      style: {
        position: 'absolute',
        right: 16,
        top: -4
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 16px/1.25 var(--font-body)',
        color: 'var(--ink-900)'
      }
    }, b.title), b.mine ? /*#__PURE__*/React.createElement(Verdict, {
      kind: b.mine,
      size: "s"
    }) : tab === 'Reading now' ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 22px/1 var(--font-hand)',
        color: ribbonColor(kid.ribbon)
      }
    }, "reading now") : /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1 var(--font-body)',
        color: 'var(--text-muted)',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), "Add to shelf")))), /*#__PURE__*/React.createElement(Card, {
      tone: "butter",
      shape: "scallop",
      padding: m ? 24 : 32,
      style: {
        marginTop: 48
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: m ? 'column' : 'row',
        gap: 18,
        alignItems: m ? 'flex-start' : 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 26px/1.1 var(--font-display)',
        color: 'var(--cobalt-600)'
      }
    }, "Print ", kid.name, "\u2019s passport"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px/1.4 var(--font-body)'
      }
    }, "Every finished book becomes a stamp, in ", kid.name, "\u2019s ribbon color.")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: "printer",
      onClick: () => app.go('shop')
    }, "See printables"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 32,
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      label: `Hide “Not yet” books from ${kid.name}’s shelf`
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Email me when a new guide matches their age",
      defaultChecked: true
    }))), /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      title: "Add a reader",
      width: m ? 360 : 480,
      onClose: () => setOpen(false),
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        onClick: () => {
          if (nm) {
            app.addKid({
              id: nm.toLowerCase() + Date.now(),
              name: nm,
              age: 7,
              ribbon: rb
            });
            setOpen(false);
            setNm('');
          }
        }
      }, "Add ", nm || 'reader'), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setOpen(false)
      }, "Cancel"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 18,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      placeholder: "e.g. Ava",
      value: nm,
      onChange: e => setNm(e.target.value)
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Age",
      options: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
      defaultValue: "7"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 14px/1.2 var(--font-body)'
      }
    }, "Pick a ribbon"), /*#__PURE__*/React.createElement(RibbonPicker, {
      value: rb,
      onChange: setRb,
      taken: app.kids.map(k => k.ribbon)
    })))));
  }
  function SignupScreen({
    app
  }) {
    const m = useM();
    const [step, setStep] = React.useState(1);
    const [email, setEmail] = React.useState('');
    const [err, setErr] = React.useState('');
    const [kids, setKids] = React.useState([{
      name: '',
      age: '8',
      ribbon: 'cobalt'
    }]);
    const upd = (i, k, v) => setKids(ks => ks.map((x, j) => j === i ? {
      ...x,
      [k]: v
    } : x));
    const steps = ['Your account', 'Your readers', 'All set'];
    const finish = () => {
      const ok = kids.filter(k => k.name.trim());
      if (!ok.length) {
        setErr('Add a first name so we can make their shelf.');
        return;
      }
      app.signUp(ok.map((k, i) => ({
        id: k.name.toLowerCase() + i,
        name: k.name.trim(),
        age: +k.age,
        ribbon: k.ribbon
      })));
      setStep(3);
    };
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "48px",
      style: {
        maxWidth: 720
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: m ? 8 : 16,
        marginBottom: 32,
        flexWrap: 'wrap'
      }
    }, steps.map((s, i) => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        font: '700 14px/1 var(--font-body)',
        color: step >= i + 1 ? 'var(--ink-900)' : 'var(--ink-300)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        background: step > i + 1 ? 'var(--good-700)' : step === i + 1 ? 'var(--ink-900)' : 'var(--paper-300)',
        color: 'var(--paper-50)',
        font: '400 14px/1 var(--font-display)'
      }
    }, step > i + 1 ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      stroke: 3
    }) : i + 1), !m || step === i + 1 ? s : ''))), step === 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--cobalt-600)"
    }, "Free family account"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "A shelf for every kid, free."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Save verdicts, track what they\u2019ve read and print things with their name on top."), /*#__PURE__*/React.createElement(Input, {
      label: "Your email",
      type: "email",
      placeholder: "you@example.com",
      value: email,
      onChange: e => setEmail(e.target.value),
      error: err && step === 1 ? err : undefined
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      type: "password",
      placeholder: "At least 8 characters"
    }), /*#__PURE__*/React.createElement(Button, {
      size: "l",
      fullWidth: m,
      onClick: () => {
        if (!email.includes('@')) {
          setErr('Add your email so you can sign back in.');
          return;
        }
        setErr('');
        setStep(2);
      },
      style: {
        justifySelf: 'start'
      }
    }, "Continue")), step === 2 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "Who\u2019s reading?"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Let each kid pick a ribbon. It marks their shelf and everything we print for them."), kids.map((k, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-l)',
        padding: m ? '56px 20px 22px' : '28px 28px 24px 84px',
        boxShadow: '0 0 0 1.5px var(--border-subtle)',
        display: 'grid',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Ribbon, {
      color: k.ribbon,
      width: 30,
      height: 72,
      style: {
        position: 'absolute',
        left: m ? 20 : 30,
        top: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) 140px',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      placeholder: "e.g. Maya",
      value: k.name,
      onChange: e => {
        upd(i, 'name', e.target.value);
        setErr('');
      },
      error: i === 0 && err ? err : undefined
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Age",
      options: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
      value: k.age,
      onChange: e => upd(i, 'age', e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 14px/1.2 var(--font-body)'
      }
    }, k.name ? `${k.name}’s ribbon` : 'Their ribbon'), /*#__PURE__*/React.createElement(RibbonPicker, {
      value: k.ribbon,
      onChange: c => upd(i, 'ribbon', c),
      taken: kids.map(x => x.ribbon)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "plus",
      onClick: () => setKids([...kids, {
        name: '',
        age: '10',
        ribbon: RIBBON_COLORS.find(c => !kids.some(k => k.ribbon === c))
      }])
    }, "Add another reader"), /*#__PURE__*/React.createElement(Button, {
      onClick: finish
    }, "Make our shelves"))), step === 3 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 24,
        justifyItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 34px/1 var(--font-hand)',
        color: 'var(--tomato-600)',
        transform: 'rotate(-3deg)'
      }
    }, "welcome in!"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "Your shelves are ready."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, app.kids.map(k => /*#__PURE__*/React.createElement(ChildChip, {
      key: k.id,
      size: "l",
      name: k.name,
      ribbon: k.ribbon,
      meta: `Age ${k.age}`
    }))), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Next: find a book they\u2019re reading and save a verdict."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => app.go('shelf')
    }, "Go to the shelves"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => app.go('library')
    }, "Browse guides")))));
  }
  Object.assign(window, {
    ShelfScreen,
    SignupScreen,
    RibbonPicker
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AccountScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BrowseScreens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Button,
    GuideCard,
    AskAtDinnerCard,
    Tabs,
    Tag,
    Input,
    Icon,
    Checkbox
  } = window.NextPageKidsDesignSystem_372e96;
  function LibraryScreen({
    app
  }) {
    const m = useM();
    const d = window.NPK_DATA;
    const [band, setBand] = React.useState(app.band || 'All ages');
    const [q, setQ] = React.useState('');
    const [verdicts, setVerdicts] = React.useState({
      good: true,
      together: true,
      notyet: true
    });
    const [topic, setTopic] = React.useState(null);
    const topics = [...new Set(d.books.flatMap(b => b.topics))];
    const list = d.books.filter(b => (band === 'All ages' || b.band.includes(band)) && verdicts[b.verdict] && (!topic || b.topics.includes(topic)) && (!q || (b.title + b.author).toLowerCase().includes(q.toLowerCase())));
    const filters = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 22,
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 14px/1 var(--font-body)'
      }
    }, "Verdict"), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Good fit",
      checked: verdicts.good,
      onChange: v => setVerdicts({
        ...verdicts,
        good: v
      })
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Read together",
      checked: verdicts.together,
      onChange: v => setVerdicts({
        ...verdicts,
        together: v
      })
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Not yet",
      checked: verdicts.notyet,
      onChange: v => setVerdicts({
        ...verdicts,
        notyet: v
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 14px/1 var(--font-body)'
      }
    }, "Topic"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, topics.map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTopic(topic === t ? null : t),
      style: {
        background: 'none',
        border: 0,
        padding: 0,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      tone: topic === t ? 'ink' : 'paper'
    }, t))))));
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "48px",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14,
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Book guides"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "Find the book. Get the verdict."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Every guide takes about a minute to read. Filter by age, verdict or topic.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: m ? 'column' : 'row',
        gap: 16,
        marginTop: 28,
        alignItems: m ? 'stretch' : 'center'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: "Search by title or author",
      value: q,
      onChange: e => setQ(e.target.value),
      style: {
        flex: 1,
        maxWidth: m ? 'none' : 420
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: 'auto',
        minWidth: 0,
        flex: m ? 'none' : 1
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: d.liveBands,
      value: band,
      onChange: setBand
    })))), /*#__PURE__*/React.createElement(Wrap, {
      pad: "32px",
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : '220px minmax(0,1fr)',
        gap: m ? 24 : 40
      }
    }, m ? /*#__PURE__*/React.createElement("details", {
      style: {
        background: 'var(--paper-200)',
        borderRadius: 'var(--radius-m)',
        padding: '14px 18px'
      }
    }, /*#__PURE__*/React.createElement("summary", {
      style: {
        font: '700 15px/1 var(--font-body)',
        cursor: 'pointer'
      }
    }, "Filters"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, filters)) : filters, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16,
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, list.length, " ", list.length === 1 ? 'guide' : 'guides'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(2, minmax(0,1fr))',
        gap: m ? 14 : 20
      }
    }, list.map(b => /*#__PURE__*/React.createElement(GuideCard, _extends({
      key: b.id
    }, b, {
      onClick: () => app.openGuide(b.id),
      childVerdicts: app.signedIn ? app.kids.filter(k => app.shelf[k.id] && app.shelf[k.id][b.id]).map(k => ({
        name: k.name,
        ribbon: k.ribbon,
        kind: app.shelf[k.id][b.id]
      })) : undefined
    })))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 40,
        textAlign: 'center',
        background: 'var(--paper-200)',
        borderRadius: 'var(--radius-l)',
        font: '500 16px/1.5 var(--font-body)'
      }
    }, "No guides match yet. Try a different age or topic."))), /*#__PURE__*/React.createElement(NewsletterBand, {
      app: app,
      tone: "butter"
    }));
  }
  function DinnerScreen({
    app
  }) {
    const m = useM();
    const w = useW();
    const d = window.NPK_DATA;
    const [band, setBand] = React.useState('All ages');
    const tones = ['butter', 'pink', 'sky', 'clover'];
    const list = d.books.filter(b => band === 'All ages' || b.band.includes(band));
    const cols = w >= 1140 ? 3 : w >= 760 ? 2 : 1;
    const cw = Math.min(m ? 380 : 360, Math.floor((Math.min(w, 1180) - (m ? 40 : 48) - (cols - 1) * 36) / cols));
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "48px",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14,
        maxWidth: 680
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "utensils"
    }, "Ask at dinner"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "Three questions for every book."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Screenshot a card, or share it with the family group chat. There are no wrong answers.")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        overflowX: 'auto',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: d.liveBands,
      value: band,
      onChange: setBand
    }))), /*#__PURE__*/React.createElement(Wrap, {
      pad: "40px",
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
        gap: m ? 28 : 36,
        justifyItems: 'center'
      }
    }, list.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: b.id,
      style: {
        display: 'grid',
        gap: 14,
        justifyItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => app.openGuide(b.id),
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(AskAtDinnerCard, {
      book: b.title,
      author: b.author,
      questions: b.questions,
      tone: tones[i % 4],
      width: cw
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "soft",
      iconLeft: "share-2",
      onClick: () => app.toast('Card copied. Paste it anywhere.')
    }, "Share"), /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => app.openGuide(b.id)
    }, "Read the guide"))))));
  }
  Object.assign(window, {
    LibraryScreen,
    DinnerScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BrowseScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
(() => {
  const {
    Button,
    IconButton,
    Icon,
    ChildChip,
    Input,
    Ribbon
  } = window.NextPageKidsDesignSystem_372e96;
  const WidthCtx = React.createContext(1280);
  const useM = () => React.useContext(WidthCtx) < 760;
  const useW = () => React.useContext(WidthCtx);
  function Wrap({
    children,
    pad = '56px',
    style
  }) {
    const m = useM();
    return /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: `${m ? '36px' : pad} ${m ? 20 : 24}px`,
        boxSizing: 'border-box',
        ...style
      }
    }, children);
  }
  const Eyebrow = ({
    c = 'var(--tomato-600)',
    icon,
    children,
    style
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center',
      font: '800 12px/1 var(--font-body)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: c,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), children);
  function H({
    level = 2,
    children,
    style
  }) {
    const m = useM();
    const w = useW();
    const size = {
      1: m ? 44 : Math.min(64, Math.round(w * 0.052)),
      2: m ? 34 : 44,
      3: m ? 26 : 30
    }[level];
    const Tag = 'h' + level;
    return /*#__PURE__*/React.createElement(Tag, {
      style: {
        font: `400 ${size}px/1.03 var(--font-display)`,
        margin: 0,
        letterSpacing: '-0.018em',
        ...style
      }
    }, children);
  }
  function Wordmark({
    onClick,
    inverse,
    size = 28
  }) {
    return /*#__PURE__*/React.createElement("a", {
      onClick: onClick,
      style: {
        font: `400 ${size}px/1 var(--font-display)`,
        letterSpacing: '-0.02em',
        color: inverse ? 'var(--paper-50)' : 'var(--ink-900)',
        textDecoration: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }
    }, "NextPage ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: inverse ? 'var(--butter-300)' : 'var(--tomato-500)'
      }
    }, "Kids"));
  }
  function Photo({
    id,
    h = 420,
    radius = 36,
    label = 'Photo: parent and child reading, warm natural light',
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: h,
        position: 'relative',
        ...style
      }
    }, /*#__PURE__*/React.createElement("image-slot", {
      id: id,
      shape: "rounded",
      radius: radius,
      placeholder: label
    }));
  }
  function SectionHead({
    eyebrow,
    title,
    action,
    c
  }) {
    const m = useM();
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: m ? 'column' : 'row',
        alignItems: m ? 'flex-start' : 'flex-end',
        justifyContent: 'space-between',
        gap: m ? 16 : 24,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12,
        flexShrink: 0
      }
    }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
      c: c
    }, eyebrow), /*#__PURE__*/React.createElement(H, null, title)), action && /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '100%',
        overflowX: 'auto',
        minWidth: 0
      }
    }, action));
  }
  const NAV = [['library', 'Book guides'], ['series', 'Series'], ['lists', 'Lists'], ['dinner', 'Ask at dinner'], ['shop', 'Shop'], ['pass', 'Family Pass'], ['about', 'How it works']];
  function Header({
    app
  }) {
    const W = useW();
    const m = W < 1000;
    const compact = W < 1320;
    const phone = useM();
    const [open, setOpen] = React.useState(false);
    const kid = app.kids.find(k => k.id === app.kidId);
    const count = app.cart.reduce((n, i) => n + i.qty, 0);
    const nav = r => {
      setOpen(false);
      app.go(r);
    };
    const Bag = /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "shopping-bag",
      label: "Bag",
      variant: "ghost",
      onClick: () => nav('cart')
    }), count > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 2,
        right: 0,
        minWidth: 18,
        height: 18,
        borderRadius: 9,
        background: 'var(--tomato-500)',
        color: 'var(--paper-50)',
        font: '800 11px/18px var(--font-body)',
        textAlign: 'center',
        padding: '0 4px',
        boxSizing: 'border-box',
        pointerEvents: 'none'
      }
    }, count));
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'rgba(251,244,232,.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1.5px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: phone ? '0 12px 0 20px' : '0 24px',
        height: phone ? 64 : 76,
        display: 'flex',
        alignItems: 'center',
        gap: m ? 4 : 22
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      size: phone ? 24 : 28,
      onClick: () => nav('home')
    }), !m && /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: compact ? 26 : 30,
        flex: 1,
        minWidth: 0
      }
    }, NAV.filter(([r]) => !(compact && r === 'about')).map(([r, l]) => /*#__PURE__*/React.createElement("a", {
      key: r,
      onClick: () => nav(r),
      style: {
        font: `600 ${compact ? 14 : 15}px/1 var(--font-body)`,
        color: 'var(--ink-900)',
        textDecoration: app.route === r ? 'underline' : 'none',
        textDecorationColor: 'var(--tomato-500)',
        textDecorationThickness: 2,
        textUnderlineOffset: 8,
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }
    }, l))), m && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), m && !phone && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 4
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "Search guides",
      variant: "ghost",
      onClick: () => nav('library')
    }), Bag, !phone && (app.signedIn ? /*#__PURE__*/React.createElement(ChildChip, {
      name: kid.name,
      ribbon: kid.ribbon,
      size: "s",
      selected: app.route === 'shelf',
      onClick: () => nav('shelf')
    }) : /*#__PURE__*/React.createElement(Button, {
      size: "s",
      onClick: () => nav('signup')
    }, "Free family account")), m && /*#__PURE__*/React.createElement(IconButton, {
      icon: open ? 'x' : 'menu',
      label: "Menu",
      variant: "ghost",
      onClick: () => setOpen(!open)
    })), m && open && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: phone ? 64 : 76,
        left: 0,
        right: 0,
        height: `calc(100vh - ${phone ? 64 : 76}px)`,
        background: 'var(--paper-100)',
        padding: '16px 20px 32px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        overflowY: 'auto'
      }
    }, [['home', 'Home'], ...NAV, ['quiz', 'Reader quiz'], ['newsletter', 'Sunday email']].map(([r, l]) => /*#__PURE__*/React.createElement("a", {
      key: r,
      onClick: () => nav(r),
      style: {
        font: '400 30px/1 var(--font-display)',
        color: 'var(--ink-900)',
        textDecoration: 'none',
        padding: '14px 0',
        borderBottom: '1.5px solid var(--border-subtle)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, l, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, app.signedIn ? /*#__PURE__*/React.createElement(ChildChip, {
      name: kid.name,
      ribbon: kid.ribbon,
      meta: "Go to shelf",
      onClick: () => nav('shelf')
    }) : /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "l",
      onClick: () => nav('signup')
    }, "Start a free family account"))));
  }
  function NewsletterBand({
    app,
    tone = 'sky'
  }) {
    const m = useM();
    const [email, setEmail] = React.useState('');
    const bg = tone === 'sky' ? 'var(--sky-300)' : 'var(--butter-300)';
    return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: bg,
        borderRadius: 'var(--radius-xl)',
        padding: m ? 28 : 48,
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,420px)',
        gap: m ? 20 : 48,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--ink-900)",
      icon: "backpack"
    }, "The Sunday email"), /*#__PURE__*/React.createElement(H, {
      level: 3
    }, "The books schools are sending home this week, by age.")), /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        app.toast('You’re on the list. See you Sunday.');
        setEmail('');
      },
      style: {
        display: 'flex',
        flexDirection: m ? 'column' : 'row',
        gap: 10,
        alignItems: m ? 'stretch' : 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "you@example.com",
      type: "email",
      value: email,
      onChange: e => setEmail(e.target.value),
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      size: "m",
      style: {
        height: 50
      }
    }, "Sign me up"))));
  }
  function Footer({
    app
  }) {
    const m = useM();
    const cols = [['Guides', [['library', 'Preschoolers (2–4)', 'Preschoolers (2–4)', 'soon'], ['library', 'Little Kids (5–7)', 'Little Kids (5–7)'], ['library', 'Big Kids (7–9)', 'Big Kids (7–9)'], ['library', 'Tweens (10–12)', 'Tweens (10–12)'], ['library', 'Teens (13–15)', 'Teens (13–15)', 'soon'], ['dinner', 'Ask at dinner']]], ['Shop', [['shop', 'Printables and kits'], ['stickers', 'Stickers and stamps'], ['pass', 'Family Pass'], ['pass', 'Gift a year of reading'], ['cart', 'Your bag']]], ['More', [['series', 'Series guides'], ['lists', 'Book lists'], ['quiz', 'Reader quiz'], ['about', 'How it works'], ['newsletter', 'Sunday email']]]];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--ink-900)',
        color: 'var(--paper-50)',
        marginTop: m ? 40 : 72
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: m ? '44px 20px 28px' : '64px 24px 40px',
        display: 'grid',
        gridTemplateColumns: m ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14,
        alignContent: 'start',
        gridColumn: m ? '1 / -1' : 'auto'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      inverse: true,
      onClick: () => app.go('home')
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 15px/1.5 var(--font-body)',
        color: 'var(--paper-300)',
        margin: 0,
        maxWidth: 300
      }
    }, "One-minute guides to the books your kids are reading, and something to talk about at dinner.")), cols.map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        display: 'grid',
        gap: 10,
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 12px/1 var(--font-body)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--butter-300)'
      }
    }, h), ls.map(([r, l, band, soon]) => soon ? /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap',
        font: '500 15px/1.3 var(--font-body)',
        color: 'var(--paper-300)'
      }
    }, l, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 10px/1 var(--font-body)',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        background: 'var(--butter-300)',
        color: 'var(--ink-900)',
        padding: '4px 8px',
        borderRadius: 'var(--radius-pill)'
      }
    }, "Coming soon")) : /*#__PURE__*/React.createElement("a", {
      key: l,
      onClick: () => band ? app.browse(band) : app.go(r),
      style: {
        font: '500 15px/1.3 var(--font-body)',
        color: 'var(--paper-50)',
        textDecoration: 'none',
        cursor: 'pointer'
      }
    }, l))))));
  }
  function PackArt({
    tone = 'pink',
    h = 200,
    ribbon = 'tomato',
    rotate = -4
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: h,
        background: `var(--${tone}-300)`,
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: h * 0.6,
        height: h * 0.78,
        background: 'var(--print-paper)',
        borderRadius: 6,
        boxShadow: 'var(--shadow-sticker)',
        transform: `rotate(${rotate}deg)`,
        position: 'relative',
        padding: h * 0.07,
        boxSizing: 'border-box',
        display: 'grid',
        alignContent: 'start',
        gap: h * 0.03
      }
    }, /*#__PURE__*/React.createElement(Ribbon, {
      color: ribbon,
      width: h * 0.08,
      height: h * 0.18,
      style: {
        position: 'absolute',
        right: h * 0.07,
        top: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '55%',
        height: h * 0.05,
        borderRadius: 3,
        background: 'var(--ink-900)',
        marginTop: h * 0.08
      }
    }), [80, 90, 70].map((w, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: w + '%',
        height: h * 0.025,
        borderRadius: 2,
        background: 'var(--paper-300)'
      }
    }))));
  }
  Object.assign(window, {
    WidthCtx,
    useM,
    useW,
    Wrap,
    Eyebrow,
    H,
    Wordmark,
    Header,
    Footer,
    Photo,
    SectionHead,
    NewsletterBand,
    PackArt
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContentScreens.jsx
try { (() => {
(() => {
  const {
    Button,
    BookCover,
    Verdict,
    Tag,
    Card,
    Icon,
    Tabs
  } = window.NextPageKidsDesignSystem_372e96;
  const D = () => window.NPK_DATA;
  function BuyButtons({
    app,
    guide,
    size = 's'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: size,
      variant: "accent",
      iconLeft: "shopping-bag",
      onClick: () => app.toast('Opening Bookshop.org (affiliate link).')
    }, "Buy on Bookshop.org"), /*#__PURE__*/React.createElement(Button, {
      size: size,
      variant: "secondary",
      onClick: () => app.toast('Opening Amazon (affiliate link).')
    }, "Amazon"), guide && /*#__PURE__*/React.createElement(Button, {
      size: size,
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => app.openGuide(guide)
    }, "Read the guide"));
  }
  const Disclosure = () => /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.45 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, "Buy links are affiliate links. We earn a small amount if you buy, and it never changes a verdict.");
  function Spooky({
    n
  }) {
    return /*#__PURE__*/React.createElement("span", {
      title: `Spooky: ${n} of 3`,
      style: {
        display: 'inline-flex',
        gap: 2,
        alignItems: 'center',
        color: 'var(--ink-900)'
      }
    }, [1, 2, 3].map(i => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "ghost",
      size: 16,
      stroke: 2,
      style: {
        opacity: i <= n ? 1 : 0.2
      }
    })));
  }
  function BookRow({
    app,
    item,
    extra
  }) {
    const m = useM();
    const b = item.guide ? {
      ...D().books.find(x => x.id === item.guide),
      ...item
    } : item;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `${m ? 72 : 96}px minmax(0,1fr)`,
        gap: m ? 14 : 22,
        padding: m ? 16 : 20,
        borderRadius: 'var(--radius-l)',
        background: 'var(--surface-card)',
        boxShadow: '0 0 0 1.5px var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(BookCover, {
      title: b.title,
      author: b.author,
      tone: b.cover,
      width: m ? 72 : 96
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 8,
        alignContent: 'start',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Verdict, {
      kind: b.verdict,
      size: "s"
    }), /*#__PURE__*/React.createElement(Tag, {
      size: "s"
    }, "Ages ", b.ages), b.spooky && /*#__PURE__*/React.createElement(Spooky, {
      n: b.spooky
    }), extra), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 23px/1.1 var(--font-display)'
      }
    }, b.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 14px/1.3 var(--font-body)',
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, b.author)), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 15px/1.5 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, b.why || b.note), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(BuyButtons, {
      app: app,
      guide: item.guide
    }))));
  }
  function SeriesHub({
    app
  }) {
    const m = useM();
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "48px",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14,
        maxWidth: 700
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "layers"
    }, "Series guides"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "Book by book, when is each one right?"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Series change as they go. We show where the tone shifts and what age each book usually works for."))), /*#__PURE__*/React.createElement(Wrap, {
      pad: "36px",
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(3, minmax(0,1fr))',
        gap: 20
      }
    }, D().series.map(s => /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      bordered: true,
      padding: 0,
      style: {
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column'
      },
      onClick: () => app.openSeries(s.id)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: `var(--${s.tone === 'cobalt' ? 'butter' : s.tone}-300)`,
        height: 190,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 6,
        padding: '0 20px',
        overflow: 'hidden'
      }
    }, s.books.slice(0, 5).map((b, i) => /*#__PURE__*/React.createElement(BookCover, {
      key: i,
      title: b.title.replace('Harry Potter and the ', ''),
      tone: s.tone === 'cobalt' ? ['cobalt', 'tomato', 'ink', 'clover', 'pink'][i] : [s.tone === 'sky' ? 'cobalt' : 'tomato', 'ink', 'clover', 'pink', 'sky'][i],
      width: 64,
      style: {
        marginBottom: -8 - i % 2 * 14
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 22,
        display: 'grid',
        gap: 10,
        flex: 1,
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      size: "s"
    }, s.count, " books"), /*#__PURE__*/React.createElement(Tag, {
      size: "s",
      tone: "outline"
    }, "Starts at ", s.start)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 26px/1.1 var(--font-display)'
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 15px/1.4 var(--font-body)',
        color: 'var(--cobalt-600)'
      }
    }, "\u201C", s.q, "\u201D"))))));
  }
  function SeriesScreen({
    app
  }) {
    const m = useM();
    const s = D().series.find(x => x.id === app.series) || D().series[0];
    const shiftAt = s.books.findIndex(b => b.shift);
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "32px"
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => app.go('series'),
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        font: '600 14px/1 var(--font-body)',
        color: 'var(--ink-700)',
        textDecoration: 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), "All series"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16,
        maxWidth: 760,
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "layers"
    }, "Series guide \xB7 ", s.count, " books \xB7 ", s.author), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, s.title, ", book by book"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, s.intro)), /*#__PURE__*/React.createElement(Card, {
      tone: "butter",
      shape: "scallop",
      padding: m ? 24 : 34,
      style: {
        marginTop: 32,
        maxWidth: 860
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 30px/1 var(--font-hand)',
        color: 'var(--cobalt-600)'
      }
    }, "the big question"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `400 ${m ? 26 : 32}px/1.1 var(--font-display)`,
        color: 'var(--ink-900)'
      }
    }, s.q), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 17px/1.5 var(--font-body)',
        color: 'var(--ink-900)'
      }
    }, s.answer)))), /*#__PURE__*/React.createElement(Wrap, {
      pad: "8px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 0,
        position: 'relative'
      }
    }, s.books.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: b.n
    }, i === shiftAt && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        margin: '10px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: 0,
        borderTop: '2.5px dashed var(--tomato-500)',
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 28px/1 var(--font-hand)',
        color: 'var(--tomato-600)',
        whiteSpace: 'nowrap'
      }
    }, "the tone shifts here"), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 0,
        borderTop: '2.5px dashed var(--tomato-500)',
        flex: 1
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '44px minmax(0,1fr)' : '64px 120px minmax(0,1fr) auto',
        gap: m ? 14 : 24,
        alignItems: 'center',
        padding: m ? '16px 0' : '18px 0',
        borderBottom: '1.5px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: m ? 44 : 56,
        height: m ? 44 : 56,
        borderRadius: '50%',
        background: 'var(--ink-900)',
        color: 'var(--butter-300)',
        display: 'grid',
        placeItems: 'center',
        font: `400 ${m ? 22 : 28}px/1 var(--font-display)`
      }
    }, b.n), !m && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 11px/1 var(--font-body)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Usually works at"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 34px/1 var(--font-display)'
      }
    }, b.age)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 6,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 18px/1.25 var(--font-body)'
      }
    }, b.title), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 15px/1.45 var(--font-body)',
        color: 'var(--ink-800)'
      }
    }, b.note), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, m && /*#__PURE__*/React.createElement(Tag, {
      size: "s",
      tone: "ink"
    }, "Ages ", b.age), /*#__PURE__*/React.createElement(Verdict, {
      kind: b.verdict,
      size: "s"
    }), m && /*#__PURE__*/React.createElement("a", {
      onClick: () => app.toast('Opening Bookshop.org (affiliate link).'),
      style: {
        font: '700 14px/1 var(--font-body)',
        cursor: 'pointer'
      }
    }, "Buy"))), !m && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, b.guide && /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "ghost",
      onClick: () => app.openGuide(b.guide)
    }, "Guide"), /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "secondary",
      iconLeft: "shopping-bag",
      onClick: () => app.toast('Opening Bookshop.org (affiliate link).')
    }, "Buy")))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Disclosure, null))), /*#__PURE__*/React.createElement(NewsletterBand, {
      app: app,
      tone: "butter"
    }));
  }
  function ListsHub({
    app
  }) {
    const m = useM();
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "48px",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14,
        maxWidth: 680
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "list-checks"
    }, "Book lists"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "The right book for the moment."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Summer, Halloween, the holidays. Every pick has a verdict and an age."))), /*#__PURE__*/React.createElement(Wrap, {
      pad: "36px",
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(3, minmax(0,1fr))',
        gap: 20
      }
    }, D().lists.map(l => /*#__PURE__*/React.createElement(Card, {
      key: l.id,
      tone: l.tone,
      shape: "cloud",
      padding: m ? 32 : 40,
      style: {
        cursor: 'pointer'
      },
      onClick: () => app.openList(l.id)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14,
        minHeight: m ? 0 : 200,
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: l.icon,
      size: 34,
      stroke: 1.75
    }), /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--ink-900)"
    }, l.eyebrow), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 30px/1.05 var(--font-display)'
      }
    }, l.title), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px/1.45 var(--font-body)'
      }
    }, l.blurb))))), /*#__PURE__*/React.createElement(QuizBand, {
      app: app
    }));
  }
  function ListScreen({
    app
  }) {
    const m = useM();
    const l = D().lists.find(x => x.id === app.list) || D().lists[0];
    const [band, setBand] = React.useState('All');
    const bands = l.groups.length > 1 ? ['All', ...l.groups.map(g => g.band)] : null;
    const groups = l.groups.filter(g => band === 'All' || g.band === band);
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "32px"
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => app.go('lists'),
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        font: '600 14px/1 var(--font-body)',
        color: 'var(--ink-700)',
        textDecoration: 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), "All lists"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: `var(--${l.tone}-300)`,
        borderRadius: 'var(--radius-xl)',
        padding: m ? 28 : 48,
        marginTop: 24,
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--ink-900)",
      icon: l.icon
    }, l.eyebrow), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, l.title), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '500 18px/1.5 var(--font-body)',
        margin: 0,
        maxWidth: 600
      }
    }, l.blurb)), bands && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        overflowX: 'auto',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: bands,
      value: band,
      onChange: setBand
    }))), /*#__PURE__*/React.createElement(Wrap, {
      pad: "8px",
      style: {
        display: 'grid',
        gap: 36
      }
    }, groups.map(g => /*#__PURE__*/React.createElement("div", {
      key: g.band,
      style: {
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: '400 28px/1.1 var(--font-display)',
        margin: 0
      }
    }, g.band), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(2, minmax(0,1fr))',
        gap: 16
      }
    }, g.items.map((it, i) => /*#__PURE__*/React.createElement(BookRow, {
      key: i,
      app: app,
      item: it
    }))))), l.id === 'gifts' && /*#__PURE__*/React.createElement(Card, {
      tone: "ink",
      padding: m ? 28 : 40,
      style: {
        borderRadius: 'var(--radius-xl)',
        display: 'flex',
        flexDirection: m ? 'column' : 'row',
        gap: 20,
        alignItems: m ? 'flex-start' : 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--butter-300)",
      icon: "gift"
    }, "For grandparents"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 32px/1.05 var(--font-display)',
        color: 'var(--paper-50)'
      }
    }, "Give a year of reading."), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 16px/1.5 var(--font-body)',
        color: 'var(--paper-300)'
      }
    }, "A Family Pass with a card they can open on the day.")), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => app.go('pass')
    }, "Gift a Family Pass")), /*#__PURE__*/React.createElement(Disclosure, null)));
  }
  Object.assign(window, {
    BuyButtons,
    Disclosure,
    BookRow,
    SeriesHub,
    SeriesScreen,
    ListsHub,
    ListScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContentScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GrowthScreens.jsx
try { (() => {
(() => {
  const {
    Button,
    BookCover,
    Verdict,
    Tag,
    Card,
    Icon,
    Input,
    ProgressBar,
    Ribbon,
    IconButton
  } = window.NextPageKidsDesignSystem_372e96;
  const D = () => window.NPK_DATA;
  function QuizBand({
    app
  }) {
    const m = useM();
    return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--cobalt-500)',
        color: 'var(--paper-50)',
        borderRadius: 'var(--radius-xl)',
        padding: m ? 28 : 52,
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) auto',
        gap: m ? 22 : 48,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--butter-300)",
      icon: "puzzle"
    }, "Two-minute quiz"), /*#__PURE__*/React.createElement(H, {
      style: {
        color: 'var(--paper-50)'
      }
    }, "What kind of reader is your kid?"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--sky-200)',
        margin: 0,
        maxWidth: 520
      }
    }, "Answer five questions and get five books picked for them, even if they say they hate reading.")), /*#__PURE__*/React.createElement(Button, {
      size: "l",
      variant: "accent",
      iconRight: "arrow-right",
      onClick: () => app.go('quiz'),
      fullWidth: m
    }, "Take the quiz")));
  }
  function QuizScreen({
    app
  }) {
    const m = useM();
    const Q = D().quiz;
    const [step, setStep] = React.useState(0);
    const [ans, setAns] = React.useState([]);
    const [email, setEmail] = React.useState('');
    const [err, setErr] = React.useState('');
    const [sent, setSent] = React.useState(false);
    const pick = a => {
      const n = [...ans];
      n[step] = a;
      setAns(n);
      setStep(step + 1);
    };
    const done = step >= Q.questions.length;
    const typeKey = ['maker', 'mover', 'gamer', 'dreamer'][Math.max(0, Q.questions[1].a.indexOf(ans[1]))];
    const type = Q.types[typeKey];
    const band = ans[4];
    const inBand = D().books.filter(b => b.band.includes(band));
    const picks = [...inBand, ...D().books.filter(b => !inBand.includes(b) && b.band.some(x => D().bands.indexOf(x) - D().bands.indexOf(band) === 1 || D().bands.indexOf(x) - D().bands.indexOf(band) === -1))].slice(0, 5);
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "48px",
      style: {
        maxWidth: 820
      }
    }, !done ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, step > 0 && /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-left",
      label: "Back",
      variant: "ghost",
      onClick: () => setStep(step - 1)
    }), /*#__PURE__*/React.createElement(ProgressBar, {
      value: step,
      max: Q.questions.length,
      label: `Question ${step + 1} of ${Q.questions.length}`,
      showCount: false,
      style: {
        flex: 1
      }
    })), /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "puzzle"
    }, "What kind of reader is your kid?"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, Q.questions[step].q), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(2, minmax(0,1fr))',
        gap: 12
      }
    }, Q.questions[step].a.map((a, i) => /*#__PURE__*/React.createElement("button", {
      key: a,
      onClick: () => pick(a),
      style: {
        textAlign: 'left',
        padding: '20px 22px',
        borderRadius: 'var(--radius-l)',
        border: ans[step] === a ? '2px solid var(--ink-900)' : '2px solid transparent',
        background: ['var(--pink-300)', 'var(--butter-300)', 'var(--sky-300)', 'var(--clover-300)', 'var(--paper-200)'][i % 5],
        cursor: 'pointer',
        font: '700 18px/1.3 var(--font-body)',
        color: 'var(--ink-900)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
      }
    }, a, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: type.tone,
      shape: "cloud",
      padding: m ? 32 : 48
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10,
        justifyItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 30px/1 var(--font-hand)',
        color: 'var(--ink-800)'
      }
    }, "your kid is"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `400 ${m ? 44 : 60}px/1 var(--font-display)`,
        letterSpacing: '-0.02em'
      }
    }, type.name), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 18px/1.5 var(--font-body)',
        maxWidth: 520
      }
    }, type.line, ans[0] === 'Avoids it' ? ' Start short. One chapter a night counts.' : ''))), !sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(H, {
      level: 2
    }, "Where should we send their five books?"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 17px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "You\u2019ll get the list now, plus the Sunday email with what schools are sending home for ", band, "."), /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        if (!email.includes('@')) {
          setErr('Add your email so we can send the list.');
          return;
        }
        setSent(true);
      },
      style: {
        display: 'flex',
        flexDirection: m ? 'column' : 'row',
        gap: 10,
        alignItems: m ? 'stretch' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      type: "email",
      placeholder: "you@example.com",
      value: email,
      onChange: e => {
        setEmail(e.target.value);
        setErr('');
      },
      error: err || undefined,
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      style: {
        height: 50
      }
    }, "Send my five books"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        font: '700 17px/1.4 var(--font-body)',
        color: 'var(--good-700)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 22,
      stroke: 3
    }), "Sent to ", email, ". Here they are."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14
      }
    }, picks.map(b => /*#__PURE__*/React.createElement(BookRow, {
      key: b.id,
      app: app,
      item: {
        guide: b.id
      }
    }))), /*#__PURE__*/React.createElement(Disclosure, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconLeft: "arrow-left",
      onClick: () => {
        setStep(0);
        setAns([]);
        setSent(false);
      }
    }, "Take it again")))));
  }
  function PassScreen({
    app
  }) {
    const m = useM();
    const P = D().pass;
    const [mode, setMode] = React.useState('family');
    const [g, setG] = React.useState({
      kids: 'Maya and Leo',
      from: 'Grandma',
      email: '',
      note: 'Happy reading! Love you both.'
    });
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "56px",
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,440px)',
        gap: m ? 32 : 56,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--cobalt-600)",
      icon: "star"
    }, "Family Pass"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "Everything we make, for a whole year."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Guides stay free. The pass adds every printable, the seasonal kits and a few extras for reading together."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12,
        marginTop: 8
      }
    }, P.perks.map(([ic, t, s]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'grid',
        gridTemplateColumns: '44px minmax(0,1fr)',
        gap: 14,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--butter-300)',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--cobalt-600)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 3,
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 17px/1.3 var(--font-body)'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 15px/1.45 var(--font-body)',
        color: 'var(--ink-800)'
      }
    }, s)))))), /*#__PURE__*/React.createElement(Card, {
      bordered: true,
      padding: m ? 24 : 32,
      style: {
        position: m ? 'static' : 'sticky',
        top: 108,
        display: 'grid',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4,
        padding: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--paper-200)'
      }
    }, [['family', 'For my family'], ['gift', 'As a gift']].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => setMode(v),
      style: {
        flex: 1,
        height: 40,
        borderRadius: 'var(--radius-pill)',
        border: 0,
        cursor: 'pointer',
        font: '700 15px/1 var(--font-body)',
        background: mode === v ? 'var(--ink-900)' : 'transparent',
        color: mode === v ? 'var(--paper-50)' : 'var(--ink-900)'
      }
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 56px/1 var(--font-display)'
      }
    }, "$", P.price), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 16px/1 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, "per year, whole family")), mode === 'family' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "l",
      fullWidth: true,
      disabled: app.hasPass,
      onClick: () => {
        app.addToCart({
          id: 'pass',
          title: 'Family Pass · 1 year',
          price: P.price,
          kind: 'pass',
          tone: 'butter'
        });
        app.go('cart');
      }
    }, app.hasPass ? 'You have the Family Pass' : 'Get the Family Pass'), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.45 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, "Or buy printables one at a time in the shop.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "np-scallop",
      style: {
        background: 'var(--pink-300)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 14px',
        display: 'grid',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 11px/1 var(--font-body)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--tomato-600)'
      }
    }, "A year of reading for"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 30px/1.05 var(--font-display)',
        color: 'var(--ink-900)'
      }
    }, g.kids || 'your readers'), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 26px/1.1 var(--font-hand)',
        color: 'var(--tomato-600)'
      }
    }, g.note), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 13px/1 var(--font-body)',
        color: 'var(--ink-800)'
      }
    }, "From ", g.from || '…')), /*#__PURE__*/React.createElement(Ribbon, {
      color: "tomato",
      width: 20,
      height: 50,
      style: {
        position: 'absolute',
        top: 0,
        right: 30
      }
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Kids\u2019 names",
      value: g.kids,
      onChange: e => setG({
        ...g,
        kids: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "From",
      value: g.from,
      onChange: e => setG({
        ...g,
        from: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Parent\u2019s email",
      type: "email",
      placeholder: "We send the card here",
      value: g.email,
      onChange: e => setG({
        ...g,
        email: e.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Note on the card",
      value: g.note,
      onChange: e => setG({
        ...g,
        note: e.target.value.slice(0, 60)
      }),
      hint: "Up to 60 characters."
    }), /*#__PURE__*/React.createElement(Button, {
      size: "l",
      variant: "accent",
      iconLeft: "gift",
      fullWidth: true,
      onClick: () => {
        app.addToCart({
          id: 'pass-gift-' + (g.kids || 'x'),
          title: `Gift Family Pass for ${g.kids || 'readers'}`,
          price: P.price,
          kind: 'gift',
          tone: 'pink'
        });
        app.go('cart');
      }
    }, "Gift a year \xB7 $", P.price)))));
  }
  Object.assign(window, {
    QuizBand,
    QuizScreen,
    PassScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GrowthScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GuideScreen.jsx
try { (() => {
(() => {
  const {
    Button,
    BookCover,
    Verdict,
    Tag,
    AskAtDinnerCard,
    Card,
    Icon,
    Tabs,
    Ribbon
  } = window.NextPageKidsDesignSystem_372e96;
  function GuideScreen({
    app
  }) {
    const m = useM();
    const w = useW();
    const tab2 = !m && w < 1080;
    const d = window.NPK_DATA;
    const b = d.books.find(x => x.id === app.guide) || d.books[0];
    const [tab, setTab] = React.useState('Guide');
    React.useEffect(() => setTab('Guide'), [b.id]);
    const pack = d.packs.find(p => p.id === 'p-' + b.id) || {
      id: 'p-' + b.id,
      title: b.title + ' pack',
      price: 1.99,
      pages: 12,
      tone: b.cover === 'ink' ? 'sky' : b.cover === 'cobalt' ? 'butter' : b.cover,
      kind: 'Book pack',
      includes: ['Quiz', 'Certificate', 'Passport stamp', 'Ask at dinner sheet']
    };
    const [lang, setLang] = React.useState('en');
    const [preview, setPreview] = React.useState(false);
    React.useEffect(() => setLang('en'), [b.id]);
    const L = lang !== 'en' && b.i18n ? b.i18n[lang] : null;
    const T = L ? {
      ...b,
      ...L
    } : b;
    const heads = L ? L.h : ['What it’s about', 'What might come up', 'Why kids like it'];
    const pickLang = l => {
      if (l !== 'en' && !app.hasPass) {
        app.toast('Español and Português guides come with the Family Pass.');
        return;
      }
      setLang(l);
    };
    const Block = ({
      h,
      children
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: '700 19px/1.2 var(--font-body)',
        margin: 0
      }
    }, h), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 17px/1.6 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, children));
    const buy = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "s",
      iconLeft: "library",
      fullWidth: true,
      onClick: () => app.toast('Opening your library’s catalog.')
    }, "Find at your library"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "s",
      iconLeft: "shopping-bag",
      fullWidth: true,
      onClick: () => app.toast('Opening Bookshop.org (affiliate link).')
    }, "Buy the book"));
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "32px"
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => app.go('library'),
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        font: '600 14px/1 var(--font-body)',
        color: 'var(--ink-700)',
        textDecoration: 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), "All guides"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : tab2 ? '180px minmax(0,1fr)' : '200px minmax(0,1fr) 340px',
        gap: m ? 28 : 44,
        marginTop: 24,
        alignItems: 'start'
      }
    }, m ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '120px minmax(0,1fr)',
        gap: 18,
        alignItems: 'end'
      }
    }, /*#__PURE__*/React.createElement(BookCover, {
      title: b.title,
      author: b.author,
      tone: b.cover,
      width: 120
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      size: "s"
    }, "Ages ", b.ages), /*#__PURE__*/React.createElement(Tag, {
      size: "s",
      tone: "outline",
      icon: "timer"
    }, "1-min guide")), /*#__PURE__*/React.createElement(H, {
      level: 2
    }, b.title), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px/1.3 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, "by ", b.author))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16,
        position: 'sticky',
        top: 108
      }
    }, /*#__PURE__*/React.createElement(BookCover, {
      title: b.title,
      author: b.author,
      tone: b.cover,
      width: tab2 ? 180 : 200
    }), buy), /*#__PURE__*/React.createElement("article", {
      style: {
        display: 'grid',
        gap: 24,
        minWidth: 0
      }
    }, !m && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Tag, null, "Ages ", b.ages), /*#__PURE__*/React.createElement(Tag, {
      tone: "outline",
      icon: "timer"
    }, "1-min guide"), b.topics.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      tone: "sky"
    }, t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      level: 1
    }, b.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 17px/1.3 var(--font-body)',
        color: 'var(--text-muted)',
        marginTop: 10
      }
    }, "by ", b.author))), b.i18n && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "languages",
      size: 18
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--paper-200)'
      }
    }, [['en', 'English'], ['es', 'Español'], ['pt', 'Português']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => pickLang(k),
      style: {
        height: 32,
        padding: '0 14px',
        borderRadius: 'var(--radius-pill)',
        border: 0,
        cursor: 'pointer',
        font: '700 14px/1 var(--font-body)',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: lang === k ? 'var(--ink-900)' : 'transparent',
        color: lang === k ? 'var(--paper-50)' : 'var(--ink-900)'
      }
    }, l, k !== 'en' && !app.hasPass && /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 12
    }))))), /*#__PURE__*/React.createElement(Verdict, {
      kind: b.verdict,
      variant: "block",
      note: T.note,
      word: L ? L.word[b.verdict] : undefined
    }), !app.signedIn && /*#__PURE__*/React.createElement(FamilyTeaser, {
      app: app
    }), /*#__PURE__*/React.createElement(Tabs, {
      variant: "underline",
      items: ['Guide', ...(b.readAloud ? ['Read aloud'] : []), ...(app.signedIn ? ['Your readers'] : [])],
      value: tab,
      onChange: setTab
    }), tab === 'Guide' ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Block, {
      h: heads[0]
    }, T.about), b.ending && /*#__PURE__*/React.createElement(GuideSec, {
      h: "The ending",
      icon: "book-open"
    }, /*#__PURE__*/React.createElement(EndingReveal, {
      text: b.ending
    })), b.comeUpList ? /*#__PURE__*/React.createElement(GuideSec, {
      h: heads[1]
    }, /*#__PURE__*/React.createElement(ComeUpMeter, {
      items: b.comeUpList
    })) : /*#__PURE__*/React.createElement(Block, {
      h: heads[1]
    }, T.comeUp), /*#__PURE__*/React.createElement(Block, {
      h: heads[2]
    }, T.why), b.quiz && /*#__PURE__*/React.createElement(GuideSec, {
      h: "Free printable quiz",
      icon: "printer"
    }, /*#__PURE__*/React.createElement(QuizCard, {
      app: app,
      questions: b.quiz,
      pack: pack,
      onPack: () => setPreview(true)
    })), b.movie && /*#__PURE__*/React.createElement(WatchSection, {
      movie: b.movie,
      onPack: () => setPreview(true)
    })) : tab === 'Read aloud' ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 17px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Reading it together at night? Here\u2019s one question for each chapter."), b.readAloud.map((c, i) => {
      const locked = !app.hasPass && i >= 3;
      return /*#__PURE__*/React.createElement("div", {
        key: c.n,
        style: {
          display: 'grid',
          gridTemplateColumns: '40px minmax(0,1fr)',
          gap: 14,
          alignItems: 'start',
          padding: '14px 0',
          borderBottom: '1.5px solid var(--border-subtle)',
          opacity: locked ? 0.45 : 1,
          filter: locked ? 'blur(3px)' : 'none',
          userSelect: locked ? 'none' : 'auto'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'var(--butter-300)',
          display: 'grid',
          placeItems: 'center',
          font: '400 18px/1 var(--font-display)'
        }
      }, c.n), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '800 11px/1 var(--font-body)',
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)'
        }
      }, "Chapter ", c.n, " \xB7 ", c.title), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '600 17px/1.4 var(--font-body)'
        }
      }, c.q)));
    }).slice(0, app.hasPass ? undefined : 6), !app.hasPass && /*#__PURE__*/React.createElement(Card, {
      tone: "ink",
      padding: 24,
      style: {
        display: 'flex',
        flexDirection: m ? 'column' : 'row',
        gap: 16,
        alignItems: m ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        marginTop: -40,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 24px/1.1 var(--font-display)',
        color: 'var(--paper-50)'
      }
    }, "All ", b.readAloud.length, " chapters with the Family Pass"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px/1.4 var(--font-body)',
        color: 'var(--paper-300)'
      }
    }, "The first three are free.")), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => app.go('pass')
    }, "See the Family Pass"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, app.kids.map(k => {
      const cur = (app.shelf[k.id] || {})[b.id];
      return /*#__PURE__*/React.createElement("div", {
        key: k.id,
        style: {
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 10,
          padding: '16px 18px 16px 52px',
          borderRadius: 'var(--radius-m)',
          background: 'var(--surface-card)',
          boxShadow: '0 0 0 1.5px var(--border-subtle)'
        }
      }, /*#__PURE__*/React.createElement(Ribbon, {
        color: k.ribbon,
        width: 18,
        height: 44,
        style: {
          position: 'absolute',
          left: 20,
          top: 0
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '700 17px/1 var(--font-body)',
          flex: 1,
          minWidth: 90
        }
      }, k.name, ", ", k.age), ['good', 'together', 'notyet'].map(v => /*#__PURE__*/React.createElement("button", {
        key: v,
        onClick: () => {
          app.setVerdict(k.id, b.id, v);
          app.toast(`Saved for ${k.name}.`);
        },
        style: {
          background: 'none',
          border: 0,
          padding: 0,
          cursor: 'pointer',
          opacity: cur === v ? 1 : 0.38,
          transition: 'opacity var(--dur-fast)'
        }
      }, /*#__PURE__*/React.createElement(Verdict, {
        kind: v,
        size: "s"
      }))));
    })), m && buy), /*#__PURE__*/React.createElement("aside", {
      style: {
        display: 'grid',
        gap: 18,
        justifyItems: m ? 'center' : 'stretch',
        ...(tab2 ? {
          gridColumn: '1 / -1',
          gridTemplateColumns: '340px minmax(0,1fr)',
          alignItems: 'start'
        } : {})
      }
    }, /*#__PURE__*/React.createElement(AskAtDinnerCard, {
      book: b.title,
      author: b.author,
      questions: T.questions,
      label: L ? L.label : undefined,
      tagline: L ? L.tagline : undefined,
      byline: L ? 'de' : undefined,
      tone: b.verdict === 'notyet' ? 'sky' : 'butter',
      width: m ? Math.min(380, w - 40) : 340
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 18,
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "soft",
      iconLeft: "share-2",
      onClick: () => app.toast('Card copied. Paste it anywhere.')
    }, "Share card"), /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "soft",
      iconLeft: "download",
      onClick: () => app.toast('Saved to your photos.')
    }, "Save image")), /*#__PURE__*/React.createElement(Card, {
      tone: "paper",
      padding: 22,
      style: {
        width: '100%',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "printer"
    }, `Printable pack · ${pack.price}`), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 24px/1.1 var(--font-display)'
      }
    }, "Quiz, certificate and passport stamp"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 15px/1.45 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, pack.pages, " pages. Personalized with your kid\u2019s name and ribbon."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconLeft: "shopping-bag",
      onClick: () => app.addToCart({
        id: pack.id,
        title: pack.title,
        price: pack.price,
        kind: 'digital',
        tone: pack.tone
      })
    }, "Add to bag"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconLeft: "search",
      onClick: () => setPreview(true)
    }, "Preview")))))))), /*#__PURE__*/React.createElement(ReadNextSection, {
      app: app,
      book: b
    }), b.faq && /*#__PURE__*/React.createElement(ParentsAsk, {
      faq: b.faq
    }), preview && /*#__PURE__*/React.createElement(PreviewDialog, {
      app: app,
      pack: pack,
      onClose: () => setPreview(false)
    }));
  }
  window.GuideScreen = GuideScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GuideScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GuideSections.jsx
try { (() => {
(() => {
  const {
    Button,
    BookCover,
    Verdict,
    Tag,
    Card,
    Icon
  } = window.NextPageKidsDesignSystem_372e96;
  const H3 = ({
    children,
    icon
  }) => /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 19px/1.2 var(--font-body)',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), children);
  const Sec = ({
    h,
    icon,
    children,
    gap = 14
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gap
    }
  }, /*#__PURE__*/React.createElement(H3, {
    icon: icon
  }, h), children);
  const Link = ({
    onClick,
    children
  }) => /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    style: {
      font: '600 14px/1.45 var(--font-body)',
      color: 'var(--ink-900)',
      cursor: 'pointer'
    }
  }, children);
  function FamilyTeaser({
    app
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        opacity: 0.45,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement(Verdict, {
      kind: "good",
      size: "s",
      child: {
        name: 'Emma',
        ribbon: 'rose'
      }
    }), /*#__PURE__*/React.createElement(Verdict, {
      kind: "together",
      size: "s",
      child: {
        name: 'Noah',
        ribbon: 'sea'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.45 var(--font-body)',
        color: 'var(--ink-800)'
      }
    }, /*#__PURE__*/React.createElement(Link, {
      onClick: () => app.go('signup')
    }, "Create a free family account"), " to see a verdict for each of your kids."));
  }
  function EndingReveal({
    text
  }) {
    const [open, setOpen] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-m)',
        border: '2px dashed var(--ink-300)',
        background: open ? 'var(--surface-card)' : 'transparent',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(!open),
      "aria-expanded": open,
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        padding: '16px 18px',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        font: '700 16px/1.3 var(--font-body)',
        color: 'var(--ink-900)',
        textAlign: 'left'
      }
    }, open ? 'Hide the ending' : 'Show the ending (spoilers)', /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 18,
      style: {
        transform: open ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    })), open && /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 16px/1.6 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0,
        padding: '0 18px 18px'
      }
    }, text));
  }
  const LEVELS = {
    'None': 0,
    'A little': 1,
    'Some': 2,
    'A lot': 3
  };
  function ComeUpMeter({
    items
  }) {
    const m = useM();
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid'
      }
    }, items.map(it => {
      const n = LEVELS[it.level] ?? 0;
      return /*#__PURE__*/React.createElement("div", {
        key: it.topic,
        style: {
          display: 'grid',
          gridTemplateColumns: m ? 'minmax(0,1fr) auto' : '150px 150px minmax(0,1fr)',
          gap: m ? '6px 12px' : 16,
          alignItems: 'center',
          padding: '13px 0',
          borderBottom: '1.5px solid var(--border-subtle)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '700 16px/1.3 var(--font-body)'
        }
      }, it.topic), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        "aria-label": `${it.level}`,
        style: {
          display: 'inline-flex',
          gap: 4
        }
      }, [1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
        key: i,
        style: {
          width: 11,
          height: 11,
          borderRadius: '50%',
          background: i <= n ? 'var(--ink-900)' : 'transparent',
          boxShadow: i <= n ? 'none' : 'inset 0 0 0 1.5px var(--ink-300)'
        }
      }))), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '600 14px/1 var(--font-body)',
          color: n ? 'var(--ink-900)' : 'var(--text-muted)',
          minWidth: 52
        }
      }, it.level)), it.note ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: '400 15px/1.45 var(--font-body)',
          color: 'var(--ink-800)',
          gridColumn: m ? '1 / -1' : 'auto'
        }
      }, it.note) : !m && /*#__PURE__*/React.createElement("span", null));
    }));
  }
  function QuizCard({
    app,
    questions,
    pack,
    onPack
  }) {
    const [show, setShow] = React.useState(false);
    const pill = (label, active, locked) => /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: locked ? onPack : undefined,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 32,
        padding: '0 14px',
        borderRadius: 'var(--radius-pill)',
        border: active ? '0' : '1.5px solid var(--border-subtle)',
        background: active ? 'var(--ink-900)' : 'transparent',
        color: active ? 'var(--paper-50)' : 'var(--ink-700)',
        font: '700 13px/1 var(--font-body)',
        cursor: locked ? 'pointer' : 'default',
        whiteSpace: 'nowrap'
      }
    }, locked && /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 12
    }), label, locked && /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: 'var(--text-muted)'
      }
    }, "in the book pack"));
    return /*#__PURE__*/React.createElement(Card, {
      bordered: true,
      padding: 24,
      style: {
        display: 'grid',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, pill('Easy · free', true), pill('Medium', false, true), pill('Challenge', false, true)), /*#__PURE__*/React.createElement("ol", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gap: 14
      }
    }, questions.map(([q, a], i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '32px minmax(0,1fr)',
        gap: 12,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'var(--sky-300)',
        display: 'grid',
        placeItems: 'center',
        font: '400 16px/1 var(--font-display)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 4,
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 16px/1.4 var(--font-body)'
      }
    }, q), show && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px/1.4 var(--font-body)',
        color: 'var(--good-700)',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      stroke: 3
    }), a))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      iconLeft: "printer",
      onClick: () => app.toast('Opening the print dialog.')
    }, "Print quiz"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setShow(!show)
    }, show ? 'Hide answers' : 'Show answers')), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.45 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, "Medium and Challenge levels are in the ", /*#__PURE__*/React.createElement(Link, {
      onClick: onPack
    }, pack.title, " ($", pack.price, ")"), "."));
  }
  function SpotCard({
    items
  }) {
    const [ticks, setTicks] = React.useState({});
    return /*#__PURE__*/React.createElement("div", {
      className: "np-scallop np-scallop--cloud",
      style: {
        background: 'var(--sky-300)',
        maxWidth: 440
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '6px 4px 2px',
        display: 'grid',
        gap: 14,
        color: 'var(--ink-900)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        font: '800 12px/1 var(--font-body)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--cobalt-600)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "list-checks",
      size: 16,
      stroke: 2.25
    }), "Spot the difference"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 28px/1.05 var(--font-display)',
        letterSpacing: '-0.015em'
      }
    }, "Book vs. movie"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, items.map((q, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setTicks({
        ...ticks,
        [i]: !ticks[i]
      }),
      style: {
        display: 'grid',
        gridTemplateColumns: '28px minmax(0,1fr)',
        gap: 12,
        alignItems: 'start',
        background: 'none',
        border: 0,
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 7,
        border: '2.5px solid var(--ink-900)',
        background: ticks[i] ? 'var(--ink-900)' : 'var(--paper-50)',
        color: 'var(--butter-300)',
        display: 'grid',
        placeItems: 'center',
        boxSizing: 'border-box'
      }
    }, ticks[i] && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      stroke: 3
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 16px/1.35 var(--font-body)',
        paddingTop: 2
      }
    }, q)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderTop: '1.5px solid rgba(28,37,65,.18)',
        paddingTop: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 22px/1 var(--font-hand)',
        color: 'var(--cobalt-600)'
      }
    }, "tick it while you watch"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 12px/1 var(--font-body)',
        letterSpacing: '0.04em'
      }
    }, "nextpagekids.com"))));
  }
  function WatchSection({
    movie,
    onPack
  }) {
    const m = useM();
    return /*#__PURE__*/React.createElement(Sec, {
      h: "Read it, then watch it",
      icon: "star",
      gap: 16
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 17px/1.6 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Read the book first. Then the movie becomes a game: spot what changed."), /*#__PURE__*/React.createElement(Card, {
      bordered: true,
      padding: 0,
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 22px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--paper-200)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 24px/1.1 var(--font-display)'
      }
    }, movie.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, movie.meta.map(x => /*#__PURE__*/React.createElement(Tag, {
      key: x,
      size: "s",
      tone: "outline"
    }, x)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)'
      }
    }, ['In the book', 'In the movie'].map((h, i) => /*#__PURE__*/React.createElement("span", {
      key: h,
      style: {
        padding: '14px 22px 8px',
        font: '800 11px/1 var(--font-body)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: i ? 'var(--cobalt-600)' : 'var(--tomato-600)',
        borderLeft: i ? '1.5px solid var(--border-subtle)' : 'none'
      }
    }, h)), movie.diffs.map(([a, bb], r) => [a, bb].map((t, i) => /*#__PURE__*/React.createElement("span", {
      key: r + '-' + i,
      style: {
        padding: m ? '10px 16px 14px' : '10px 22px 16px',
        font: '400 15px/1.45 var(--font-body)',
        color: 'var(--ink-800)',
        borderTop: '1.5px solid var(--border-subtle)',
        borderLeft: i ? '1.5px solid var(--border-subtle)' : 'none'
      }
    }, t))))), /*#__PURE__*/React.createElement(SpotCard, {
      items: movie.spot
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.45 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, "The full movie night kit is in the ", /*#__PURE__*/React.createElement(Link, {
      onClick: onPack
    }, "book pack"), "."));
  }
  function ReadNextSection({
    app,
    book
  }) {
    const m = useM();
    const w = useW();
    const d = window.NPK_DATA;
    const items = book.readNextRich || (book.readNext || []).map(r => {
      const x = d.books.find(y => y.id === r.id);
      return x && {
        title: x.title,
        author: x.author,
        cover: x.cover,
        why: r.why,
        guide: x.id
      };
    }).filter(Boolean);
    if (!items.length) return null;
    const cols = m ? 1 : w < 1000 ? 2 : 3;
    return /*#__PURE__*/React.createElement(Wrap, {
      pad: "24px"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "If they liked this",
      title: "Read next"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
        gap: 20
      }
    }, items.map(it => /*#__PURE__*/React.createElement(Card, {
      key: it.title,
      bordered: true,
      padding: 22,
      style: {
        display: 'grid',
        gridTemplateColumns: '88px minmax(0,1fr)',
        gap: 18,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(BookCover, {
      title: it.title,
      author: it.author,
      tone: it.cover,
      width: 88
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 8,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: it.guide ? () => app.openGuide(it.guide) : undefined,
      style: {
        font: '400 22px/1.1 var(--font-display)',
        cursor: it.guide ? 'pointer' : 'default'
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.3 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, it.author), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 15px/1.45 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, it.why), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "secondary",
      iconLeft: "library",
      onClick: () => app.toast('Opening your library’s catalog.')
    }, "Find at your library"), /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "accent",
      iconLeft: "shopping-bag",
      onClick: () => app.toast('Opening Bookshop.org (affiliate link).')
    }, "Buy")))))));
  }
  function ParentsAsk({
    faq
  }) {
    const [open, setOpen] = React.useState(0);
    return /*#__PURE__*/React.createElement(Wrap, {
      pad: "24px"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Parents also ask",
      title: "Quick answers",
      c: "var(--cobalt-600)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        maxWidth: 820,
        borderTop: '1.5px solid var(--border-subtle)'
      }
    }, faq.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        borderBottom: '1.5px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(open === i ? -1 : i),
      "aria-expanded": open === i,
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        padding: '20px 0',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        font: '700 18px/1.3 var(--font-body)',
        color: 'var(--ink-900)',
        textAlign: 'left'
      }
    }, q, /*#__PURE__*/React.createElement(Icon, {
      name: open === i ? 'minus' : 'plus',
      size: 20
    })), open === i && /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 17px/1.6 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0,
        padding: '0 0 22px',
        maxWidth: 680
      }
    }, a)))));
  }
  Object.assign(window, {
    GuideSec: Sec,
    FamilyTeaser,
    EndingReveal,
    ComeUpMeter,
    QuizCard,
    WatchSection,
    ReadNextSection,
    ParentsAsk
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GuideSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Button,
    GuideCard,
    AskAtDinnerCard,
    Sticker,
    ChildChip,
    Verdict,
    Card,
    Tabs,
    Icon,
    BookCover
  } = window.NextPageKidsDesignSystem_372e96;
  const D = () => window.NPK_DATA;
  const Lede = ({
    children,
    c = 'var(--ink-800)',
    max = 480
  }) => /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 19px/1.55 var(--font-body)',
      color: c,
      margin: 0,
      maxWidth: max
    }
  }, children);
  function HeroEditorial({
    app
  }) {
    const m = useM();
    const w = useW();
    return /*#__PURE__*/React.createElement(Wrap, {
      pad: "64px",
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1.05fr) minmax(0,1fr)',
        gap: m ? 36 : 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--cobalt-600)"
    }, "For parents of kids 2 to 15"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: `400 ${m ? 48 : Math.min(72, Math.round(w * 0.058))}px/1 var(--font-display)`,
        margin: 0,
        letterSpacing: '-0.02em'
      }
    }, "Know the book", /*#__PURE__*/React.createElement("br", null), "in ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--tomato-500)'
      }
    }, "one minute.")), /*#__PURE__*/React.createElement(Lede, null, "Every guide starts with a verdict. Then what might come up, why kids like it, and three questions for dinner."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "l",
      onClick: () => app.go('signup'),
      fullWidth: m
    }, "Start a free family account"), /*#__PURE__*/React.createElement(Button, {
      size: "l",
      variant: "secondary",
      onClick: () => app.go('library'),
      fullWidth: m
    }, "Browse guides"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      id: "home-hero",
      h: m ? 340 : 500
    }), /*#__PURE__*/React.createElement(Sticker, {
      tone: "tomato",
      size: m ? 92 : 118,
      style: {
        position: 'absolute',
        left: m ? -8 : -34,
        bottom: m ? -24 : 40
      }
    }, "Free for families"), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        right: 24,
        top: m ? -26 : -34,
        font: `400 ${m ? 28 : 34}px/1 var(--font-hand)`,
        color: 'var(--cobalt-600)',
        transform: 'rotate(4deg)'
      }
    }, "chapter 3 already!")));
  }
  function HeroShelf({
    app
  }) {
    const m = useM();
    const w = useW();
    const books = D().books.slice(0, m ? 3 : 6);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "80px",
      style: {
        textAlign: 'center',
        display: 'grid',
        justifyItems: 'center',
        gap: 22,
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: `400 ${m ? 28 : 34}px/1 var(--font-hand)`,
        color: 'var(--tomato-600)',
        transform: 'rotate(-3deg)'
      }
    }, "what are they reading?"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: `400 ${m ? 46 : Math.min(84, Math.round(w * 0.066))}px/0.98 var(--font-display)`,
        margin: 0,
        letterSpacing: '-0.025em',
        maxWidth: 900,
        textWrap: 'balance'
      }
    }, "A one-minute guide to every book on their shelf."), /*#__PURE__*/React.createElement(Lede, {
      max: 560
    }, "The verdict first. Then what might come up and three questions for dinner."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: m ? '100%' : 'auto'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "l",
      onClick: () => app.go('signup'),
      fullWidth: m
    }, "Start a free family account"), /*#__PURE__*/React.createElement(Button, {
      size: "l",
      variant: "secondary",
      onClick: () => app.go('library'),
      fullWidth: m
    }, "Browse guides"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: m ? 40 : 56,
        background: 'var(--paper-200)',
        borderBottom: '10px solid var(--paper-400)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: m ? '32px 20px 0' : '44px 24px 0',
        display: 'flex',
        justifyContent: 'center',
        gap: m ? 14 : 28,
        alignItems: 'flex-end'
      }
    }, books.map((b, i) => /*#__PURE__*/React.createElement("button", {
      key: b.id,
      onClick: () => app.openGuide(b.id),
      style: {
        background: 'none',
        border: 0,
        padding: 0,
        cursor: 'pointer',
        display: 'grid',
        justifyItems: 'center',
        gap: 12,
        paddingBottom: 18
      }
    }, /*#__PURE__*/React.createElement(BookCover, {
      title: b.title,
      author: b.author,
      tone: b.cover,
      width: m ? 96 : [132, 150, 124, 144, 136, 128][i]
    }), !m && /*#__PURE__*/React.createElement(Verdict, {
      kind: b.verdict,
      size: "s"
    }))))));
  }
  function HeroDinner({
    app
  }) {
    const m = useM();
    const w = useW();
    const b = D().books[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink-900)',
        color: 'var(--paper-50)'
      }
    }, /*#__PURE__*/React.createElement(Wrap, {
      pad: "72px",
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) auto',
        gap: m ? 40 : 72,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--butter-300)",
      icon: "utensils"
    }, "Ask at dinner"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: `400 ${m ? 46 : Math.min(74, Math.round(w * 0.058))}px/1 var(--font-display)`,
        margin: 0,
        letterSpacing: '-0.02em',
        color: 'var(--paper-50)'
      }
    }, "Tonight, ask about ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--butter-300)'
      }
    }, "the book.")), /*#__PURE__*/React.createElement(Lede, {
      c: "var(--paper-300)"
    }, "Three questions for every book your kid reads, plus a one-minute guide so you know what\u2019s inside."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "l",
      variant: "accent",
      onClick: () => app.go('signup'),
      fullWidth: m
    }, "Start a free family account"), /*#__PURE__*/React.createElement(Button, {
      size: "l",
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => app.go('dinner'),
      style: {
        color: 'var(--paper-50)'
      }
    }, "All dinner cards"))), /*#__PURE__*/React.createElement("div", {
      style: {
        transform: m ? 'none' : 'rotate(2.5deg)',
        justifySelf: 'center'
      }
    }, /*#__PURE__*/React.createElement(AskAtDinnerCard, {
      book: b.title,
      author: b.author,
      questions: b.questions,
      tone: "butter",
      ribbon: "cobalt",
      width: m ? Math.min(360, w - 40) : 380
    }))));
  }
  function VerdictExplainer() {
    const m = useM();
    const rows = [['good', 'Hand it over. Nothing here needs a talk first.'], ['together', 'Something in it is worth talking about. Read that part with them.'], ['notyet', 'A great book, a little later. We say when.']];
    return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "How verdicts work",
      title: "The answer comes first.",
      c: "var(--good-700)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(3, minmax(0,1fr))',
        gap: 16
      }
    }, rows.map(([k, t]) => /*#__PURE__*/React.createElement(Verdict, {
      key: k,
      kind: k,
      variant: "block",
      note: t
    }))));
  }
  function FreshGuides({
    app
  }) {
    const m = useM();
    const [band, setBand] = React.useState('All ages');
    const books = D().books.filter(b => band === 'All ages' || b.band.includes(band));
    return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "New this week",
      title: "Fresh book guides",
      action: /*#__PURE__*/React.createElement(Tabs, {
        items: D().liveBands,
        value: band,
        onChange: setBand
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(2, minmax(0,1fr))',
        gap: m ? 14 : 20
      }
    }, books.slice(0, 4).map(b => /*#__PURE__*/React.createElement(GuideCard, _extends({
      key: b.id
    }, b, {
      onClick: () => app.openGuide(b.id)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "arrow-right",
      onClick: () => app.go('library')
    }, "All book guides")));
  }
  function DinnerBand({
    app
  }) {
    const m = useM();
    const w = useW();
    const b = D().books[3];
    return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--pink-300)',
        borderRadius: 'var(--radius-xl)',
        padding: m ? 24 : 56,
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) auto',
        gap: m ? 28 : 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 18,
        maxWidth: 440
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "utensils"
    }, "Ask at dinner"), /*#__PURE__*/React.createElement(H, {
      style: {
        color: 'var(--tomato-600)'
      }
    }, "Three questions. No wrong answers."), /*#__PURE__*/React.createElement(Lede, {
      c: "var(--ink-900)"
    }, "Every guide comes with a card you can screenshot and bring to the table. Hard topics become easy openers."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      iconRight: "arrow-right",
      onClick: () => app.go('dinner')
    }, "See all dinner cards"))), /*#__PURE__*/React.createElement(AskAtDinnerCard, {
      book: b.title,
      author: b.author,
      questions: b.questions,
      tone: "butter",
      width: m ? w - 88 : 360
    })));
  }
  function FamilyPromo({
    app
  }) {
    const m = useM();
    const d = D();
    return /*#__PURE__*/React.createElement(Wrap, {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1fr)',
        gap: m ? 28 : 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "sky",
      shape: "cloud",
      padding: m ? 32 : 44,
      style: {
        order: m ? 2 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16
      }
    }, d.kids.map(k => /*#__PURE__*/React.createElement(ChildChip, {
      key: k.id,
      name: k.name,
      ribbon: k.ribbon,
      meta: `Age ${k.age} · ${Object.keys(d.shelf[k.id]).length} books`,
      style: {
        background: 'var(--paper-50)',
        justifySelf: 'start'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Verdict, {
      kind: "good",
      size: "s",
      child: {
        name: 'Maya',
        ribbon: 'cobalt'
      }
    }), /*#__PURE__*/React.createElement(Verdict, {
      kind: "notyet",
      size: "s",
      child: {
        name: 'Leo',
        ribbon: 'sunflower'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--cobalt-600)"
    }, "Free family account"), /*#__PURE__*/React.createElement(H, null, "A bookshelf for every kid."), /*#__PURE__*/React.createElement(Lede, null, "Each child picks a ribbon color. It marks their shelf, their verdicts and the top of every printable made for them."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => app.go(app.signedIn ? 'shelf' : 'signup')
    }, "Make our shelves"))));
  }
  function PrintPromo({
    app
  }) {
    const m = useM();
    const packs = D().packs.slice(0, 3);
    return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Printables",
      title: "Print tonight, use tomorrow.",
      action: !m && /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconRight: "arrow-right",
        onClick: () => app.go('shop')
      }, "Shop printables")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(3, minmax(0,1fr))',
        gap: 20
      }
    }, packs.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.id,
      bordered: true,
      padding: 0,
      style: {
        overflow: 'hidden',
        cursor: 'pointer'
      },
      onClick: () => app.go('shop')
    }, /*#__PURE__*/React.createElement(PackArt, {
      tone: p.tone,
      h: m ? 170 : 200
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 22px/1.1 var(--font-display)'
      }
    }, p.title), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 17px/1 var(--font-body)'
      }
    }, "$", p.price))))), m && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      iconRight: "arrow-right",
      onClick: () => app.go('shop')
    }, "Shop printables")));
  }
  function SeriesTeaser({
    app
  }) {
    const m = useM();
    const s = window.NPK_DATA.series[0];
    return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--paper-200)',
        borderRadius: 'var(--radius-xl)',
        padding: m ? 24 : 52,
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1fr)',
        gap: m ? 24 : 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "layers",
      c: "var(--cobalt-600)"
    }, "Series guides"), /*#__PURE__*/React.createElement(H, null, "\u201C", s.q, "\u201D"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Series change as they go. We show where the tone shifts and the age each book usually works for."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => app.openSeries(s.id)
    }, `See ${s.title}, book by book`), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => app.go('series')
    }, "All series"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 8
      }
    }, s.books.slice(2, 5).map(b => /*#__PURE__*/React.createElement("div", {
      key: b.n,
      style: {
        display: 'grid',
        gridTemplateColumns: '44px minmax(0,1fr) auto',
        gap: 14,
        alignItems: 'center',
        padding: '14px 18px',
        borderRadius: 'var(--radius-m)',
        background: b.shift ? 'var(--together-100)' : 'var(--surface-card)',
        boxShadow: b.shift ? '0 0 0 2px var(--together-500)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--ink-900)',
        color: 'var(--butter-300)',
        display: 'grid',
        placeItems: 'center',
        font: '400 20px/1 var(--font-display)'
      }
    }, b.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 3,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 15px/1.25 var(--font-body)'
      }
    }, b.title.replace('Harry Potter and the ', '')), b.shift && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 22px/1 var(--font-hand)',
        color: 'var(--tomato-600)'
      }
    }, "the tone shifts here")), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 26px/1 var(--font-display)'
      }
    }, b.age))))));
  }
  function HomeScreen({
    app,
    direction = 'editorial'
  }) {
    return /*#__PURE__*/React.createElement("main", null, direction === 'shelf' ? /*#__PURE__*/React.createElement(HeroShelf, {
      app: app
    }) : direction === 'dinner' ? /*#__PURE__*/React.createElement(HeroDinner, {
      app: app
    }) : /*#__PURE__*/React.createElement(HeroEditorial, {
      app: app
    }), direction === 'shelf' && /*#__PURE__*/React.createElement(VerdictExplainer, null), /*#__PURE__*/React.createElement(FreshGuides, {
      app: app
    }), /*#__PURE__*/React.createElement(QuizBand, {
      app: app
    }), /*#__PURE__*/React.createElement(SeriesTeaser, {
      app: app
    }), direction !== 'dinner' && /*#__PURE__*/React.createElement(DinnerBand, {
      app: app
    }), direction !== 'shelf' && /*#__PURE__*/React.createElement(VerdictExplainer, null), /*#__PURE__*/React.createElement(FamilyPromo, {
      app: app
    }), /*#__PURE__*/React.createElement(PrintPromo, {
      app: app
    }), /*#__PURE__*/React.createElement(NewsletterBand, {
      app: app
    }));
  }
  window.HomeScreen = HomeScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InfoScreens.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Verdict,
    Icon,
    Input,
    Checkbox,
    AskAtDinnerCard,
    Tag
  } = window.NextPageKidsDesignSystem_372e96;
  function AboutScreen({
    app
  }) {
    const m = useM();
    const w = useW();
    const b = window.NPK_DATA.books[0];
    const steps = [['search', 'Find the book', 'Search by title or browse by age.'], ['check', 'Read the verdict', 'It comes first: Good fit, Read together or Not yet, with one sentence on why.'], ['book-open', 'Read the one-minute guide', 'What it’s about, what might come up, and why kids like it.'], ['utensils', 'Ask at dinner', 'Three questions on a card you can screenshot and share.']];
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "64px",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 20,
        maxWidth: 680
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--good-700)"
    }, "How it works"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "The verdict first. Then the details."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 19px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Every book guide follows the same order, so you can decide fast and know what to talk about."))), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(4, minmax(0,1fr))',
        gap: 16
      }
    }, steps.map(([ic, t, s], i) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      tone: ['pink', 'butter', 'sky', 'clover'][i],
      padding: 24,
      style: {
        display: 'grid',
        gap: 12,
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 28,
      stroke: 1.75
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 34px/1 var(--font-display)',
        opacity: .5
      }
    }, i + 1)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 18px/1.25 var(--font-body)'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 15px/1.5 var(--font-body)'
      }
    }, s))))), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "The verdicts",
      title: "What each one means",
      c: "var(--good-700)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14,
        maxWidth: 780
      }
    }, /*#__PURE__*/React.createElement(Verdict, {
      kind: "good",
      variant: "block",
      note: "Nothing in this book needs a talk first. Hand it over."
    }), /*#__PURE__*/React.createElement(Verdict, {
      kind: "together",
      variant: "block",
      note: "There is something worth talking about. The guide says what and where, so you can read that part together."
    }), /*#__PURE__*/React.createElement(Verdict, {
      kind: "notyet",
      variant: "block",
      note: "A good book, a little later. The guide says which age fits, and why."
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '500 15px/1.55 var(--font-body)',
        color: 'var(--text-muted)',
        margin: '20px 0 0',
        maxWidth: 640
      }
    }, "You know your kid best. A verdict is where the conversation starts, not where it ends.")), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1fr)',
        gap: m ? 28 : 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--cobalt-600)"
    }, "Your family account"), /*#__PURE__*/React.createElement(H, null, "A verdict for each kid."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Each child gets a shelf and picks a ribbon color. Save your own verdict for each kid on every book. The ribbon marks their verdicts and the top of every printable made for them."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => app.go(app.signedIn ? 'shelf' : 'signup')
    }, "Start a free family account"))), /*#__PURE__*/React.createElement(Card, {
      tone: "sky",
      shape: "cloud",
      padding: m ? 28 : 40
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 26px/1.1 var(--font-display)'
      }
    }, b.title), /*#__PURE__*/React.createElement(Verdict, {
      kind: "together",
      child: {
        name: 'Maya',
        ribbon: 'cobalt'
      },
      style: {
        justifySelf: 'start'
      }
    }), /*#__PURE__*/React.createElement(Verdict, {
      kind: "good",
      child: {
        name: 'Leo',
        ribbon: 'sunflower'
      },
      style: {
        justifySelf: 'start'
      }
    })))), /*#__PURE__*/React.createElement(NewsletterBand, {
      app: app
    }));
  }
  function NewsletterScreen({
    app
  }) {
    const m = useM();
    const d = window.NPK_DATA;
    const [email, setEmail] = React.useState('');
    const [done, setDone] = React.useState(false);
    const [bands, setBands] = React.useState({
      'Big Kids (7–9)': true,
      'Tweens (10–12)': true
    });
    const shown = d.bands.slice(1).filter(bd => bands[bd]);
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "64px",
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,480px)',
        gap: m ? 40 : 64,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "backpack"
    }, "The Sunday email"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "What\u2019s coming home in the backpack."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 19px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Every Sunday, the books schools are sending home that week, by age. Each one with a verdict and a link to the one-minute guide."), done ? /*#__PURE__*/React.createElement(Card, {
      tone: "clover",
      padding: 22
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        font: '600 17px/1.4 var(--font-body)',
        color: 'var(--good-700)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 22,
      stroke: 3
    }), "You\u2019re on the list. See you Sunday.")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        if (email.includes('@')) setDone(true);
      },
      style: {
        display: 'grid',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Your email",
      type: "email",
      placeholder: "you@example.com",
      value: email,
      onChange: e => setEmail(e.target.value)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 14px/1.2 var(--font-body)'
      }
    }, "Send books for"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(2, minmax(0,1fr))',
        gap: 12
      }
    }, d.bands.slice(1).map(bd => /*#__PURE__*/React.createElement(Checkbox, {
      key: bd,
      label: bd,
      checked: !!bands[bd],
      onChange: v => setBands({
        ...bands,
        [bd]: v
      })
    })))), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      size: "l",
      style: {
        justifySelf: 'start'
      }
    }, "Sign me up"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.5 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, "Unsubscribe in one click, any time."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 28px/1 var(--font-hand)',
        color: 'var(--cobalt-600)',
        transform: 'rotate(-2deg)',
        justifySelf: 'start'
      }
    }, "this Sunday\u2019s email"), /*#__PURE__*/React.createElement(Card, {
      bordered: true,
      padding: 0,
      style: {
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lift)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink-900)',
        padding: '18px 22px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      inverse: true,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 13px/1 var(--font-body)',
        color: 'var(--paper-300)'
      }
    }, "Sunday")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 22,
        display: 'grid',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 26px/1.1 var(--font-display)'
      }
    }, "In the backpack this week"), shown.length === 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px/1.4 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, "Pick an age to see a sample."), shown.map(bd => /*#__PURE__*/React.createElement("div", {
      key: bd,
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 11px/1 var(--font-body)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--tomato-600)'
      }
    }, bd), (d.backpack[bd] || []).map(id => {
      const bk = d.books.find(x => x.id === id);
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onClick: () => app.openGuide(id),
        style: {
          display: 'grid',
          gridTemplateColumns: '44px minmax(0,1fr)',
          gap: 12,
          alignItems: 'center',
          background: 'none',
          border: 0,
          padding: 0,
          textAlign: 'left',
          cursor: 'pointer'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 44,
          height: 66,
          borderRadius: '2px 5px 5px 2px',
          background: `var(--${bk.cover === 'ink' ? 'ink-900' : bk.cover === 'cobalt' ? 'cobalt-500' : bk.cover === 'tomato' ? 'tomato-500' : bk.cover + '-300'})`
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gap: 5
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '700 15px/1.25 var(--font-body)',
          color: 'var(--ink-900)'
        }
      }, bk.title), /*#__PURE__*/React.createElement(Verdict, {
        kind: bk.verdict,
        size: "s",
        style: {
          justifySelf: 'start'
        }
      })));
    }))))))));
  }
  Object.assign(window, {
    AboutScreen,
    NewsletterScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InfoScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ShopScreens.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Tag,
    Sticker,
    Ribbon,
    Input,
    Radio,
    Icon,
    IconButton,
    Tabs,
    Checkbox,
    Dialog,
    RIBBON_COLORS
  } = window.NextPageKidsDesignSystem_372e96;
  const ribbonColor = c => RIBBON_COLORS.includes(c) ? `var(--ribbon-${c})` : c;
  const money = n => '$' + n.toFixed(2).replace('.00', '');
  const QUIZ = {
    "Charlotte’s Web": [['What is the pig’s name?', ['Wilbur', 'Templeton', 'Fern']], ['What word did Charlotte write first?', ['Terrific', 'Some Pig', 'Radiant']], ['Where did Wilbur win a prize?', ['At school', 'At the fair', 'In the barn']]],
    'The Wild Robot': [['What is the robot’s name?', ['Roz', 'Rex', 'Rita']], ['Who does Roz raise?', ['A fox', 'A gosling', 'A bear cub']], ['Where does Roz wash up?', ['A desert', 'A city', 'An island']]]
  };
  const SAMPLE = {
    'Book pack': 'quiz',
    'Passport': 'passport',
    'Bundle': 'certificate',
    'Card deck': 'dinner',
    'Theme pack': 'quiz',
    'Kit': 'passport'
  };
  function PreviewDialog({
    app,
    pack,
    onClose
  }) {
    const m = useM();
    const w = useW();
    const kid = app.kids.find(k => k.id === app.kidId) || app.kids[0];
    const book = pack.kind === 'Book pack' ? pack.title.replace(' pack', '').replace("Charlotte's", 'Charlotte’s') : 'Charlotte’s Web';
    const kind = pack.id === 'p-club' ? 'dinner' : SAMPLE[pack.kind] || 'quiz';
    const scale = Math.max(0.3, Math.min(m ? 0.4 : 0.5, (w - 80) / PRINT_W, (window.innerHeight - 260) / PRINT_H));
    const page = kind === 'passport' ? /*#__PURE__*/React.createElement(Passport, {
      kid: kid
    }) : kind === 'certificate' ? /*#__PURE__*/React.createElement(Certificate, {
      kid: kid,
      book: "Charlotte\u2019s Web"
    }) : kind === 'dinner' ? /*#__PURE__*/React.createElement(DinnerSheet, {
      kid: kid,
      book: "Charlotte\u2019s Web"
    }) : QUIZ[book] ? /*#__PURE__*/React.createElement(Quiz, {
      kid: kid,
      book: book,
      questions: QUIZ[book]
    }) : /*#__PURE__*/React.createElement(Certificate, {
      kid: kid,
      book: book
    });
    return /*#__PURE__*/React.createElement(Dialog, {
      open: true,
      title: pack.title,
      width: PRINT_W * scale + 64,
      onClose: onClose,
      actions: pack.external ? /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        iconLeft: "shopping-bag",
        onClick: () => app.toast('Opening Amazon.')
      }, "Buy on Amazon \xB7 ", money(pack.price)) : /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        iconLeft: "shopping-bag",
        onClick: () => {
          app.addToCart({
            id: pack.id,
            title: pack.title,
            price: pack.price,
            kind: 'digital',
            tone: pack.tone
          });
          onClose();
        }
      }, "Add to bag \xB7 ", money(pack.price))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.4 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, "Sample page, made for ", kid.name, ". Page 1 of ", pack.pages, "."), /*#__PURE__*/React.createElement("div", {
      style: {
        width: PRINT_W * scale,
        height: PRINT_H * scale,
        overflow: 'hidden',
        borderRadius: 6,
        boxShadow: 'var(--shadow-sticker)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        transform: `scale(${scale})`,
        transformOrigin: '0 0'
      }
    }, page))));
  }
  function PackCard({
    app,
    p,
    i,
    onPreview
  }) {
    const m = useM();
    return /*#__PURE__*/React.createElement(Card, {
      bordered: true,
      padding: 0,
      style: {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onPreview,
      style: {
        border: 0,
        padding: 0,
        background: 'none',
        cursor: 'zoom-in',
        position: 'relative',
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement(PackArt, {
      tone: p.tone,
      h: m ? 180 : 210,
      ribbon: RIBBON_COLORS[i % 8],
      rotate: i % 2 ? 4 : -4
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        right: 12,
        bottom: 12,
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        height: 30,
        padding: '0 12px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--paper-50)',
        font: '700 13px/1 var(--font-body)',
        color: 'var(--ink-900)',
        boxShadow: 'var(--shadow-sticker)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 14
    }), "Preview")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        display: 'grid',
        gap: 10,
        flex: 1,
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      size: "s",
      tone: p.external ? 'sky' : 'tomato',
      icon: p.external ? 'book-open' : 'printer'
    }, p.kind), /*#__PURE__*/React.createElement(Tag, {
      size: "s"
    }, p.pages, " pages")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 24px/1.1 var(--font-display)'
      }
    }, p.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 14px/1.45 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, p.includes.join(' · ')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
        paddingTop: 8,
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 18px/1 var(--font-body)'
      }
    }, money(p.price)), p.external ? /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "secondary",
      onClick: () => app.toast('Opening Amazon.')
    }, "Buy on Amazon") : /*#__PURE__*/React.createElement(Button, {
      size: "s",
      variant: "accent",
      onClick: () => app.addToCart({
        id: p.id,
        title: p.title,
        price: p.price,
        kind: 'digital',
        tone: p.tone
      })
    }, "Add to bag"))));
  }
  function ShopScreen({
    app
  }) {
    const m = useM();
    const d = window.NPK_DATA;
    const [group, setGroup] = React.useState('All');
    const [preview, setPreview] = React.useState(null);
    const groups = ['All', 'Kits', 'Printables', 'Journal'];
    const feat = d.packs.find(p => p.featured);
    const list = d.packs.filter(p => !p.featured && (group === 'All' || p.group === group));
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "48px",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14,
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "printer"
    }, "Shop"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "Print tonight, use tomorrow."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 18px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, "Quizzes, certificates and kits, each with your kid\u2019s name and ribbon on top. Instant download, Letter or A4."))), feat && /*#__PURE__*/React.createElement(Wrap, {
      pad: "32px",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--pink-300)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1fr)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: m ? 28 : 48,
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--tomato-600)",
      icon: "leaf"
    }, "September to November"), /*#__PURE__*/React.createElement(H, {
      style: {
        color: 'var(--tomato-600)'
      }
    }, feat.title), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '500 17px/1.5 var(--font-body)',
        margin: 0
      }
    }, "A progress chart, weekly milestones and a certificate at the finish. Personalized for your kid."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: "shopping-bag",
      onClick: () => app.addToCart({
        id: feat.id,
        title: feat.title,
        price: feat.price,
        kind: 'digital',
        tone: feat.tone
      })
    }, "Add to bag \xB7 ", money(feat.price)), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconLeft: "search",
      onClick: () => setPreview(feat)
    }, "Preview")), /*#__PURE__*/React.createElement("a", {
      onClick: () => app.toast('We’ll email you classroom pricing.'),
      style: {
        font: '600 14px/1.4 var(--font-body)',
        cursor: 'pointer'
      }
    }, "Teachers: get a classroom license")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setPreview(feat),
      style: {
        border: 0,
        padding: 0,
        background: 'none',
        cursor: 'zoom-in'
      }
    }, /*#__PURE__*/React.createElement(PackArt, {
      tone: "pink",
      h: m ? 240 : 380,
      ribbon: "tomato",
      rotate: 3
    })))), /*#__PURE__*/React.createElement(Wrap, {
      pad: "32px",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: 'auto',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: groups,
      value: group,
      onChange: setGroup
    }))), /*#__PURE__*/React.createElement(Wrap, {
      pad: "24px",
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'repeat(3, minmax(0,1fr))',
        gap: 20
      }
    }, list.map((p, i) => /*#__PURE__*/React.createElement(PackCard, {
      key: p.id,
      app: app,
      p: p,
      i: i,
      onPreview: () => setPreview(p)
    }))), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1fr)',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "pink",
      padding: m ? 24 : 36,
      style: {
        display: 'grid',
        gap: 14,
        alignContent: 'start',
        borderRadius: 'var(--radius-xl)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 30px/1.05 var(--font-display)',
        color: 'var(--tomato-600)'
      }
    }, "Their name on every book"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 16px/1.45 var(--font-body)'
      }
    }, "Personalized stickers and a self-inking stamp in their ribbon color."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      iconRight: "arrow-right",
      onClick: () => app.go('stickers')
    }, "Make stickers or a stamp"))), /*#__PURE__*/React.createElement(Card, {
      tone: "ink",
      padding: m ? 24 : 36,
      style: {
        display: 'grid',
        gap: 14,
        alignContent: 'start',
        borderRadius: 'var(--radius-xl)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 30px/1.05 var(--font-display)',
        color: 'var(--butter-300)'
      }
    }, "Or get everything"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 16px/1.45 var(--font-body)',
        color: 'var(--paper-300)'
      }
    }, "The Family Pass includes every printable and kit for a year."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconRight: "arrow-right",
      onClick: () => app.go('pass')
    }, "See the Family Pass")))), preview && /*#__PURE__*/React.createElement(PreviewDialog, {
      app: app,
      pack: preview,
      onClose: () => setPreview(null)
    }));
  }
  function StickerScreen({
    app
  }) {
    const m = useM();
    const d = window.NPK_DATA;
    const kid = app.kids.find(k => k.id === app.kidId) || app.kids[0];
    const [product, setProduct] = React.useState('Stickers');
    const [name, setName] = React.useState(kid.name);
    const [rb, setRb] = React.useState(kid.ribbon);
    const [line, setLine] = React.useState('This book belongs to');
    const [opt, setOpt] = React.useState(d.stickers[0].label);
    const s = product === 'Stamp' ? d.stamp : d.stickers.find(x => x.label === opt);
    const size = m ? 220 : 280;
    const isStamp = product === 'Stamp';
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "48px",
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1fr)',
        gap: m ? 32 : 56,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: isStamp ? 'var(--sky-300)' : 'var(--butter-300)',
        borderRadius: 'var(--radius-xl)',
        height: m ? 340 : 520,
        display: 'grid',
        placeItems: 'center',
        position: m ? 'relative' : 'sticky',
        top: 108
      }
    }, isStamp ? /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'var(--paper-50)',
        display: 'grid',
        placeItems: 'center',
        boxShadow: 'var(--shadow-sticker)',
        transform: 'rotate(-4deg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: size - 36,
        height: size - 36,
        borderRadius: '50%',
        border: `3px solid ${ribbonColor(rb)}`,
        boxShadow: `inset 0 0 0 6px var(--paper-50), inset 0 0 0 8px ${ribbonColor(rb)}`,
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        color: ribbonColor(rb)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        justifyItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "book-open",
      size: m ? 30 : 38,
      stroke: 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 11px/1.2 var(--font-body)',
        letterSpacing: '.16em',
        textTransform: 'uppercase',
        maxWidth: size * 0.55
      }
    }, line), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `400 ${m ? 36 : 46}px/1 var(--font-display)`
      }
    }, name || 'Your kid')))) : /*#__PURE__*/React.createElement("div", {
      className: "np-scallop",
      style: {
        width: size,
        height: size,
        boxSizing: 'border-box',
        background: 'var(--paper-50)',
        display: 'grid',
        placeItems: 'center',
        filter: 'drop-shadow(0 6px 10px rgba(28,37,65,.22))',
        transform: 'rotate(-6deg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        justifyItems: 'center',
        gap: 6,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Ribbon, {
      color: rb,
      width: m ? 22 : 28,
      height: m ? 46 : 60
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 12px/1.2 var(--font-body)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--ink-700)',
        marginTop: 6,
        maxWidth: size * 0.7
      }
    }, line), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `400 ${m ? 40 : 52}px/1 var(--font-display)`,
        color: ribbonColor(rb)
      }
    }, name || 'Your kid'))), /*#__PURE__*/React.createElement(Sticker, {
      tone: "tomato",
      size: m ? 80 : 100,
      rotate: 10,
      style: {
        position: 'absolute',
        top: 24,
        right: 24
      }
    }, isStamp ? 'Ink included' : opt.includes('48') ? '48 stickers' : '24 stickers')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      c: "var(--cobalt-600)",
      icon: isStamp ? 'stamp' : 'sticker'
    }, "Personalized ", isStamp ? 'stamp' : 'stickers'), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, "Their name, their ribbon, on every book."), /*#__PURE__*/React.createElement(Tabs, {
      items: ['Stickers', 'Stamp'],
      value: product,
      onChange: setProduct,
      style: {
        justifySelf: 'start'
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 17px/1.55 var(--font-body)',
        color: 'var(--ink-800)',
        margin: 0
      }
    }, isStamp ? 'A self-inking stamp for the inside cover. Good for about 5,000 stamps before a refill.' : '2-inch matte stickers that peel clean off library books.', " Printed and shipped by us."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, app.kids.map(k => /*#__PURE__*/React.createElement("button", {
      key: k.id,
      onClick: () => {
        setName(k.name);
        setRb(k.ribbon);
      },
      style: {
        background: 'none',
        border: 0,
        padding: 0,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      tone: name === k.name ? 'ink' : 'paper'
    }, "For ", k.name)))), /*#__PURE__*/React.createElement(Input, {
      label: `Name on the ${isStamp ? 'stamp' : 'sticker'}`,
      value: name,
      onChange: e => setName(e.target.value.slice(0, 12)),
      hint: "Up to 12 letters."
    }), /*#__PURE__*/React.createElement(Radio, {
      options: ['This book belongs to', 'From the shelf of', 'Read by'],
      value: line,
      onChange: setLine,
      direction: m ? 'column' : 'row'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 14px/1.2 var(--font-body)'
      }
    }, isStamp ? 'Ink color' : 'Ribbon color'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, RIBBON_COLORS.map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      "aria-label": c,
      onClick: () => setRb(c),
      style: {
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: ribbonColor(c),
        border: 0,
        cursor: 'pointer',
        boxShadow: rb === c ? '0 0 0 3px var(--paper-100), 0 0 0 5px var(--ink-900)' : 'none'
      }
    })))), !isStamp && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 14px/1.2 var(--font-body)'
      }
    }, "How many"), /*#__PURE__*/React.createElement(Radio, {
      options: d.stickers.map(x => x.label),
      value: opt,
      onChange: setOpt,
      direction: m ? 'column' : 'row'
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "l",
      variant: "accent",
      iconLeft: "shopping-bag",
      fullWidth: m,
      onClick: () => app.addToCart({
        id: s.id + name + rb,
        title: isStamp ? `${name || 'Name'} stamp` : `${name || 'Name'} stickers · ${s.label}`,
        price: s.price,
        kind: 'physical',
        tone: isStamp ? 'sky' : 'butter',
        ribbon: rb
      })
    }, "Add to bag \xB7 ", money(s.price)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.4 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, "Free shipping over $25")))));
  }
  function CartScreen({
    app
  }) {
    const m = useM();
    const [stage, setStage] = React.useState('bag');
    const [err, setErr] = React.useState({});
    const [f, setF] = React.useState({
      email: '',
      name: '',
      card: '',
      addr: ''
    });
    const sub = app.cart.reduce((n, i) => n + i.price * i.qty, 0);
    const physical = app.cart.some(i => i.kind === 'physical');
    const ship = physical && sub < 25 ? 4 : 0;
    const tax = +(sub * 0.07).toFixed(2);
    const total = sub + ship + tax;
    const place = () => {
      const e = {};
      if (!f.email.includes('@')) e.email = 'Add your email so we can send your downloads.';
      if (!f.name.trim()) e.name = 'Add the name on the card.';
      if (f.card.replace(/\D/g, '').length < 12) e.card = 'Check the card number.';
      if (physical && !f.addr.trim()) e.addr = 'Add a shipping address for the stickers.';
      setErr(e);
      if (Object.keys(e).length) return;
      setStage('done');
      if (app.cart.some(i => i.kind === 'pass')) app.setHasPass(true);
      app.clearCart(app.cart);
    };
    if (stage === 'done') {
      const bought = app.lastOrder || [];
      return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
        pad: "72px",
        style: {
          maxWidth: 720,
          display: 'grid',
          gap: 22,
          justifyItems: 'start'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'var(--good-700)',
          color: 'var(--paper-50)',
          display: 'grid',
          placeItems: 'center'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 32,
        stroke: 3
      })), /*#__PURE__*/React.createElement(H, {
        level: 1
      }, "Thank you. You\u2019re all set."), /*#__PURE__*/React.createElement("p", {
        style: {
          font: '400 18px/1.55 var(--font-body)',
          color: 'var(--ink-800)',
          margin: 0
        }
      }, "Your printables are ready now. We also emailed the links", physical ? ', and your order ships in 3–5 days' : '', ".", bought.some(i => i.kind === 'pass') ? ' Your Family Pass is active.' : ''), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gap: 10,
          width: '100%'
        }
      }, bought.filter(i => i.kind === 'digital').map(i => /*#__PURE__*/React.createElement("div", {
        key: i.id,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '14px 18px',
          borderRadius: 'var(--radius-m)',
          background: 'var(--surface-card)',
          boxShadow: '0 0 0 1.5px var(--border-subtle)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '700 16px/1.3 var(--font-body)'
        }
      }, i.title), /*#__PURE__*/React.createElement(Button, {
        size: "s",
        variant: "accent",
        iconLeft: "download",
        onClick: () => app.toast('Download started.')
      }, "Download")))), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => app.go('library')
      }, "Back to the guides")));
    }
    const Summary = /*#__PURE__*/React.createElement(Card, {
      tone: "paper",
      padding: 24,
      style: {
        display: 'grid',
        gap: 12,
        alignSelf: 'start',
        position: m ? 'static' : 'sticky',
        top: 108
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 26px/1 var(--font-display)'
      }
    }, "Order summary"), [['Subtotal', sub], ['Shipping', ship], ['Tax', tax]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        font: '500 15px/1 var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", null, l === 'Shipping' && !physical ? '—' : v === 0 && l === 'Shipping' ? 'Free' : money(v)))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1.5px solid var(--border-subtle)',
        paddingTop: 12,
        display: 'flex',
        justifyContent: 'space-between',
        font: '800 18px/1 var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, money(total))), stage === 'bag' ? /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "l",
      disabled: !app.cart.length,
      onClick: () => setStage('checkout')
    }, "Check out") : /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "l",
      variant: "accent",
      iconLeft: "lock",
      onClick: place
    }, "Pay ", money(total)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 13px/1.4 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, "Printables download right after checkout."));
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: "48px",
      style: {
        display: 'grid',
        gridTemplateColumns: m ? 'minmax(0,1fr)' : 'minmax(0,1fr) 360px',
        gap: m ? 28 : 48
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 22,
        alignContent: 'start'
      }
    }, stage === 'checkout' && /*#__PURE__*/React.createElement("a", {
      onClick: () => setStage('bag'),
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        font: '600 14px/1 var(--font-body)',
        color: 'var(--ink-700)',
        textDecoration: 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), "Back to bag"), /*#__PURE__*/React.createElement(H, {
      level: 1
    }, stage === 'bag' ? 'Your bag' : 'Checkout'), stage === 'bag' && (app.cart.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--paper-200)',
        borderRadius: 'var(--radius-l)',
        padding: 32,
        display: 'grid',
        gap: 14,
        justifyItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 17px/1.5 var(--font-body)'
      }
    }, "Your bag is empty."), /*#__PURE__*/React.createElement(Button, {
      onClick: () => app.go('shop')
    }, "Shop printables")) : app.cart.map(i => /*#__PURE__*/React.createElement("div", {
      key: i.id,
      style: {
        display: 'grid',
        gridTemplateColumns: '72px minmax(0,1fr) auto',
        gap: 16,
        alignItems: 'center',
        padding: 14,
        borderRadius: 'var(--radius-l)',
        background: 'var(--surface-card)',
        boxShadow: '0 0 0 1.5px var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        borderRadius: 'var(--radius-s)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(PackArt, {
      tone: i.tone,
      h: 72,
      ribbon: i.ribbon || 'tomato'
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 6,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 16px/1.3 var(--font-body)'
      }
    }, i.title), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 13px/1.3 var(--font-body)',
        color: 'var(--text-muted)'
      }
    }, i.kind === 'digital' ? 'Instant download' : i.kind === 'pass' ? 'Starts today, renews yearly' : i.kind === 'gift' ? 'Card emailed to the parent' : 'Ships in 3–5 days'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "minus",
      label: "Less",
      size: 30,
      onClick: () => app.setQty(i.id, i.qty - 1)
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 15px/1 var(--font-body)',
        minWidth: 20,
        textAlign: 'center'
      }
    }, i.qty), /*#__PURE__*/React.createElement(IconButton, {
      icon: "plus",
      label: "More",
      size: 30,
      onClick: () => app.setQty(i.id, i.qty + 1)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        justifyItems: 'end',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 17px/1 var(--font-body)'
      }
    }, money(i.price * i.qty)), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Remove",
      variant: "ghost",
      size: 32,
      onClick: () => app.setQty(i.id, 0)
    }))))), stage === 'checkout' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@example.com",
      value: f.email,
      onChange: e => setF({
        ...f,
        email: e.target.value
      }),
      error: err.email,
      hint: "Your download links go here."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Name on card",
      value: f.name,
      onChange: e => setF({
        ...f,
        name: e.target.value
      }),
      error: err.name
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Card number",
      icon: "lock",
      placeholder: "1234 5678 9012 3456",
      value: f.card,
      onChange: e => setF({
        ...f,
        card: e.target.value
      }),
      error: err.card
    }), physical && /*#__PURE__*/React.createElement(Input, {
      label: "Shipping address",
      placeholder: "Street, city, state, ZIP",
      value: f.addr,
      onChange: e => setF({
        ...f,
        addr: e.target.value
      }),
      error: err.addr
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Send me the Sunday email",
      defaultChecked: true
    }))), Summary));
  }
  Object.assign(window, {
    ShopScreen,
    StickerScreen,
    CartScreen,
    PreviewDialog
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ShopScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Real, well-known titles used as PLACEHOLDERS. Guide copy is sample text written for the mock; verify before publishing.
window.NPK_DATA = {
  kids: [{
    id: 'maya',
    name: 'Maya',
    age: 8,
    ribbon: 'cobalt'
  }, {
    id: 'leo',
    name: 'Leo',
    age: 11,
    ribbon: 'sunflower'
  }],
  bands: ['All ages', 'Preschoolers (2–4)', 'Little Kids (5–7)', 'Big Kids (7–9)', 'Tweens (10–12)', 'Teens (13–15)'],
  books: [{
    id: 'charlotte',
    title: "Charlotte's Web",
    author: 'E. B. White',
    ages: '7–10',
    band: ['Big Kids (7–9)', 'Tweens (10–12)'],
    readNext: [{
      "id": "robot",
      "why": "Another animal story about friendship and caring for someone."
    }, {
      "id": "terabithia",
      "why": "For when they’re older: a deeper story about friendship and loss."
    }, {
      "id": "frog",
      "why": "A lighter pick about two best friends."
    }],
    verdict: 'together',
    cover: 'pink',
    topics: ['Friendship', 'Loss'],
    blurb: 'A pig, a clever spider and a farm-full of friends.',
    note: 'Charlotte dies near the end. It is gentle and hopeful. Read the last chapters together.',
    about: 'Wilbur the pig is saved from the axe by Fern, then by Charlotte, a spider who writes words in her web. A story about friendship and the seasons of life.',
    comeUp: 'Death, told softly. Charlotte dies of old age after her work is done, and her children stay with Wilbur.',
    why: 'Funny barn animals, a brave friend, and an ending kids remember for years.',
    questions: ['What word would Charlotte write about you?', 'How did Wilbur show he was a good friend?', 'Why do you think Charlotte helped Wilbur?']
  }, {
    id: 'frog',
    title: 'Frog and Toad Are Friends',
    author: 'Arnold Lobel',
    ages: '6–8',
    band: ['Little Kids (5–7)'],
    readNext: [{
      "id": "treehouse",
      "why": "Short chapters and a brother-sister team, perfect next step."
    }, {
      "id": "ramona",
      "why": "Funny, real family stories when they’re ready for longer books."
    }, {
      "id": "caterpillar",
      "why": "A cozy read-aloud for a younger sibling."
    }],
    verdict: 'good',
    cover: 'clover',
    topics: ['Friendship', 'Humor'],
    blurb: 'Five short stories about two very different best friends.',
    note: 'Gentle, funny and short. Perfect for brand-new readers.',
    about: 'Frog is cheerful and Toad is grumpy. In five small stories they look for a lost button, wait for spring and write each other letters.',
    comeUp: 'Nothing tricky. Small friend squabbles that always get worked out.',
    why: 'Big type, short chapters, and jokes kids can read by themselves.',
    questions: ['Are you more like Frog or Toad?', 'What would you write in a letter to a friend?', 'What is the best way to cheer someone up?']
  }, {
    id: 'treehouse',
    title: 'Dinosaurs Before Dark',
    author: 'Mary Pope Osborne',
    ages: '6–8',
    band: ['Little Kids (5–7)', 'Big Kids (7–9)'],
    readNext: [{
      "id": "frog",
      "why": "Gentle, funny stories for new readers."
    }, {
      "id": "robot",
      "why": "Adventure plus real nature facts, a bit longer."
    }, {
      "id": "ramona",
      "why": "Everyday adventures at home and school."
    }],
    verdict: 'good',
    cover: 'butter',
    topics: ['Adventure', 'Nature'],
    blurb: 'Jack and Annie find a magic tree house full of books.',
    note: 'A quick, safe adventure. Great for starting a series.',
    about: 'Siblings climb into a tree house, open a dinosaur book and land in prehistoric times. Book one of the Magic Tree House series.',
    comeUp: 'A short T. rex chase. It is over fast and nobody gets hurt.',
    why: 'Short chapters that end on a cliffhanger, plus real dinosaur facts.',
    questions: ['Where would your tree house take you?', 'Was Annie brave or just curious?', 'Which dinosaur would you want to meet?']
  }, {
    id: 'robot',
    title: 'The Wild Robot',
    author: 'Peter Brown',
    ages: '8–11',
    band: ['Big Kids (7–9)', 'Tweens (10–12)'],
    readNext: [{
      "id": "charlotte",
      "why": "A classic about animals, friendship and the seasons."
    }, {
      "id": "hatchet",
      "why": "Survival in the wild, for older readers."
    }, {
      "id": "holes",
      "why": "Another story where every piece fits by the end."
    }],
    verdict: 'together',
    cover: 'sky',
    topics: ['Nature', 'Family'],
    blurb: 'A robot washes up on a wild island and learns to live there.',
    note: 'Early on, a mother goose is killed, and winter is hard on the animals. Short chapters make pauses easy.',
    about: 'Roz the robot has to learn from the animals around her, and ends up raising an orphaned gosling named Brightbill.',
    comeUp: 'Animal deaths, danger in a storm and a winter, and a robot who gets damaged. It ends with hope.',
    why: 'Very short chapters, lots of drawings and a big heart.',
    questions: ['What would Roz need to learn at our house?', 'What makes someone part of a family?', 'Which animal on the island would you be?']
  }, {
    id: 'matilda',
    title: 'Matilda',
    author: 'Roald Dahl',
    ages: '8–11',
    band: ['Big Kids (7–9)', 'Tweens (10–12)'],
    readNext: [{
      "id": "ramona",
      "why": "Another girl with big feelings and a big heart."
    }, {
      "id": "holes",
      "why": "Clever, funny and full of unfair grown-ups."
    }, {
      "id": "wonder",
      "why": "A school story about being yourself."
    }],
    verdict: 'good',
    cover: 'tomato',
    topics: ['School', 'Humor'],
    blurb: 'A brilliant girl, awful grown-ups and a very kind teacher.',
    note: 'Funny and a little wicked. Some kids find the headmistress scary.',
    about: 'Matilda loves books and has parents who do not care. At school she meets Miss Honey, and the terrible Miss Trunchbull.',
    comeUp: 'Cruel adults played for laughs, including a headmistress who throws kids. Good for talking about fairness.',
    why: 'Matilda wins, the jokes land, and reading is the superpower.',
    questions: ['If you had Matilda’s powers, what would you do first?', 'Was it fair that Matilda played tricks?', 'Who is a Miss Honey in your life?']
  }, {
    id: 'ramona',
    title: 'Ramona Quimby, Age 8',
    author: 'Beverly Cleary',
    ages: '7–9',
    band: ['Big Kids (7–9)'],
    readNext: [{
      "id": "matilda",
      "why": "Big personality, bigger laughs."
    }, {
      "id": "frog",
      "why": "Short, funny chapters for reading aloud together."
    }, {
      "id": "charlotte",
      "why": "A classic to read together next."
    }],
    verdict: 'good',
    cover: 'cobalt',
    topics: ['Family', 'School'],
    blurb: 'Third grade, a new school and a raw egg in her hair.',
    note: 'Warm, real and funny. Kids see themselves in Ramona.',
    about: 'Ramona starts third grade while her dad goes back to school. Small disasters, a sick day and a family dinner out.',
    comeUp: 'Money worries at home and parents who argue a little. Handled with care.',
    why: 'Ramona feels like a real kid, and every chapter is its own story.',
    questions: ['What was your most embarrassing day at school?', 'How did Ramona help her family?', 'What would you do on a rainy Sunday?']
  }, {
    id: 'wonder',
    title: 'Wonder',
    author: 'R. J. Palacio',
    ages: '9–12',
    band: ['Tweens (10–12)'],
    readNext: [{
      "id": "terabithia",
      "why": "A friendship story that stays with you."
    }, {
      "id": "holes",
      "why": "A fun, clever read after a heavy one."
    }, {
      "id": "giver",
      "why": "For teens: a book that asks big questions."
    }],
    verdict: 'good',
    cover: 'ink',
    topics: ['Kindness', 'School'],
    blurb: 'Auggie starts fifth grade with a face that looks different.',
    note: 'A great book for talking about kindness. There is bullying and the family dog dies.',
    about: 'After years of homeschooling, Auggie goes to middle school. The story is told by him and the people around him.',
    comeUp: 'Bullying, unkind words, and the death of the family dog.',
    why: 'Short chapters from different kids, and a lot of heart.',
    questions: ['When have you chosen kind over right?', 'Whose chapter was your favorite and why?', 'How would you help a new kid feel welcome?']
  }, {
    id: 'holes',
    title: 'Holes',
    author: 'Louis Sachar',
    ages: '10–12',
    band: ['Tweens (10–12)'],
    readNext: [{
      "id": "hatchet",
      "why": "Tough kid, tough place, great story."
    }, {
      "id": "wonder",
      "why": "Friendship at school, told from many sides."
    }, {
      "id": "matilda",
      "why": "Another hero who outsmarts awful adults."
    }],
    verdict: 'good',
    cover: 'butter',
    topics: ['Mystery', 'Friendship'],
    blurb: 'A boy digs holes at a desert camp and uncovers a family curse.',
    note: 'Clever and funny. Great for readers who like puzzles.',
    about: 'Stanley Yelnats is sent to Camp Green Lake, where boys dig holes all day. Three stories from different times fit together.',
    comeUp: 'A harsh camp, racism in a past storyline, and a brief killing told simply. Some peril.',
    why: 'Every piece of the puzzle clicks into place by the end.',
    questions: ['What would you have done at Camp Green Lake?', 'Do you believe in luck?', 'Which clue did you notice first?']
  }, {
    id: 'terabithia',
    title: 'Bridge to Terabithia',
    author: 'Katherine Paterson',
    ages: '10–12',
    band: ['Tweens (10–12)'],
    readNext: [{
      "id": "charlotte",
      "why": "A gentler story about friendship and loss."
    }, {
      "id": "wonder",
      "why": "Kindness and friendship at school."
    }, {
      "id": "giver",
      "why": "For older readers who liked the big feelings."
    }],
    verdict: 'together',
    cover: 'clover',
    topics: ['Friendship', 'Loss'],
    blurb: 'Two friends make a secret kingdom in the woods.',
    note: 'A main character dies suddenly. Read it together and leave room to talk.',
    about: 'Jess and Leslie become best friends and invent Terabithia, a magic land across the creek. Then something terrible happens.',
    comeUp: 'The sudden death of a child and a family’s grief. Honest and sad, with a hopeful end.',
    why: 'A friendship that feels real, and an imaginary world kids love.',
    questions: ['What would your secret kingdom be called?', 'How did Jess change because of Leslie?', 'What helps you when you feel sad?']
  }, {
    id: 'hatchet',
    title: 'Hatchet',
    author: 'Gary Paulsen',
    ages: '11–12',
    band: ['Tweens (10–12)', 'Teens (13–15)'],
    readNext: [{
      "id": "robot",
      "why": "Surviving in the wild, for younger readers."
    }, {
      "id": "holes",
      "why": "Adventure and grit, with more laughs."
    }, {
      "id": "hunger",
      "why": "For teens ready for more intense survival."
    }],
    verdict: 'notyet',
    cover: 'sky',
    topics: ['Adventure', 'Nature'],
    blurb: 'After a plane crash, a boy survives alone in the wild.',
    note: 'The pilot dies early on, and the survival scenes are intense. Best at 12 and up.',
    about: 'Brian, 13, is the only one left after a small plane crashes in the Canadian woods. He has a hatchet and nothing else.',
    comeUp: 'A death in the first chapters, hunger, injury, and a family secret about divorce.',
    why: 'Fast, tense and full of real survival know-how.',
    questions: ['What would you pack if you could only take one thing?', 'How did Brian stay calm?', 'What is the hardest thing you have learned on your own?']
  }, {
    id: 'caterpillar',
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
    ages: '2–4',
    band: ['Preschoolers (2–4)'],
    verdict: 'good',
    cover: 'clover',
    topics: ['Nature', 'Counting'],
    readNext: [{
      "id": "goodnight",
      "why": "Another short, soothing read-aloud."
    }, {
      "id": "frog",
      "why": "When they’re ready for first chapter books."
    }],
    blurb: 'A tiny caterpillar eats his way through the week.',
    note: 'A perfect first book. Counting, days of the week and a happy ending.',
    about: 'A caterpillar hatches, eats more and more each day, and becomes a butterfly.',
    comeUp: 'Nothing tricky. One tummy ache.',
    why: 'Holes to poke fingers through and bright, bold pictures.',
    questions: ['What would you eat on Saturday?', 'What color would your butterfly be?', 'How did the caterpillar feel after eating so much?']
  }, {
    id: 'goodnight',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown',
    ages: '2–4',
    band: ['Preschoolers (2–4)'],
    verdict: 'good',
    cover: 'ink',
    topics: ['Bedtime'],
    readNext: [{
      "id": "caterpillar",
      "why": "Bright and playful for daytime reading."
    }, {
      "id": "treehouse",
      "why": "A first adventure series for later."
    }],
    blurb: 'A little bunny says goodnight to everything in the room.',
    note: 'Calm, quiet and made for bedtime.',
    about: 'In a great green room, a bunny says goodnight to the moon, the mittens and the mush.',
    comeUp: 'Nothing tricky.',
    why: 'The rhythm is soothing and there is something new to spot each time.',
    questions: ['What would you say goodnight to?', 'Can you find the little mouse?', 'What is your favorite thing in your room?']
  }, {
    id: 'giver',
    title: 'The Giver',
    author: 'Lois Lowry',
    ages: '12–15',
    band: ['Tweens (10–12)', 'Teens (13–15)'],
    verdict: 'together',
    cover: 'sky',
    topics: ['Big questions', 'Family'],
    readNext: [{
      "id": "hunger",
      "why": "Another world with rules worth questioning."
    }, {
      "id": "wonder",
      "why": "A lighter read about choosing kindness."
    }],
    blurb: 'In a perfect town, one boy learns what everyone has forgotten.',
    note: 'A great book for big talks. There is a scene where a baby is put to death. Read it together.',
    about: 'Jonas lives in a community with no pain and no choices. When he is chosen to hold its memories, he sees the cost.',
    comeUp: 'Euthanasia, including of a baby, and questions about freedom and control.',
    why: 'It makes kids think, and the ending leaves room to talk.',
    questions: ['Would you give up choices to never feel pain?', 'Which memory would you keep forever?', 'Was Jonas right to leave?']
  }, {
    id: 'hunger',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    ages: '13–15',
    band: ['Teens (13–15)'],
    verdict: 'together',
    cover: 'tomato',
    topics: ['Adventure', 'Big questions'],
    readNext: [{
      "id": "giver",
      "why": "A quieter story that asks similar questions."
    }, {
      "id": "hatchet",
      "why": "Survival without the violence."
    }],
    blurb: 'A girl volunteers for a televised fight to save her sister.',
    note: 'Violence between teens is central to the story. Great for talking about power and fairness.',
    about: 'Katniss takes her sister’s place in the Hunger Games, where kids from each district must fight until one is left.',
    comeUp: 'Kids killing kids, hunger, grief and a little romance. Not graphic, but intense.',
    why: 'A fierce hero and a story that is hard to put down.',
    questions: ['What would you have done in Katniss’s place?', 'Why do people watch the Games?', 'Who was the most loyal character?']
  }],
  shelf: {
    maya: {
      charlotte: 'together',
      frog: 'good',
      treehouse: 'good',
      ramona: 'good',
      hatchet: 'notyet'
    },
    leo: {
      wonder: 'good',
      holes: 'good',
      matilda: 'good',
      terabithia: 'together'
    }
  },
  reading: {
    maya: ['robot'],
    leo: ['hatchet']
  },
  packs: [{
    id: 'p-charlotte',
    title: "Charlotte's Web pack",
    tone: 'pink',
    pages: 12,
    price: 1.99,
    kind: 'Book pack',
    includes: ['Quiz', 'Certificate', 'Passport stamp', 'Ask at dinner sheet']
  }, {
    id: 'p-robot',
    title: 'The Wild Robot pack',
    tone: 'sky',
    pages: 12,
    price: 1.99,
    kind: 'Book pack',
    includes: ['Quiz', 'Certificate', 'Passport stamp', 'Ask at dinner sheet']
  }, {
    id: 'p-passport',
    title: 'Summer reading passport',
    tone: 'butter',
    pages: 8,
    price: 6,
    kind: 'Passport',
    includes: ['24 book stamps', 'Goal tracker', 'Certificate']
  }, {
    id: 'p-mystery',
    title: 'Mystery month pack',
    tone: 'clover',
    pages: 16,
    price: 7,
    kind: 'Theme pack',
    includes: ['4 book quizzes', 'Clue cards', 'Detective badge']
  }, {
    id: 'p-certs',
    title: 'Certificates for every book',
    tone: 'pink',
    pages: 10,
    price: 5,
    kind: 'Bundle',
    includes: ['10 certificates', 'Name and ribbon on each']
  }, {
    id: 'p-dinner',
    title: 'Ask at dinner deck',
    tone: 'butter',
    pages: 20,
    price: 5,
    kind: 'Card deck',
    includes: ['60 question cards', 'Cut-out guide']
  }],
  stickers: [{
    id: 's-24',
    label: 'Sheet of 24',
    price: 9
  }, {
    id: 's-48',
    label: 'Two sheets (48)',
    price: 15
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/data2.js
try { (() => {
// Growth + paid features. Real titles are PLACEHOLDERS; ages, notes and questions are sample copy to be checked by an editor.
(() => {
  const D = window.NPK_DATA;
  D.series = [{
    id: 'hp',
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    tone: 'cobalt',
    count: 7,
    start: '8+',
    q: 'When is my kid ready for Harry Potter 4?',
    answer: 'Most families find book 4 works around age 10. That’s where the tone shifts: a student dies, and the villain comes back for real.',
    intro: 'The books grow up with Harry. Each one is longer and darker than the last, so the right age climbs book by book.',
    books: [{
      n: 1,
      title: 'Harry Potter and the Sorcerer’s Stone',
      age: '7–8+',
      verdict: 'good',
      note: 'A gentle start. A troll, a dark forest and a scary face at the end.'
    }, {
      n: 2,
      title: 'Harry Potter and the Chamber of Secrets',
      age: '8+',
      verdict: 'good',
      note: 'Students get frozen and a giant snake shows up. Still an adventure.'
    }, {
      n: 3,
      title: 'Harry Potter and the Prisoner of Azkaban',
      age: '9+',
      verdict: 'good',
      note: 'The Dementors are truly scary. Longer and more tense.'
    }, {
      n: 4,
      title: 'Harry Potter and the Goblet of Fire',
      age: '10+',
      verdict: 'together',
      shift: true,
      note: 'The tone shifts here. A student is killed and the villain returns.'
    }, {
      n: 5,
      title: 'Harry Potter and the Order of the Phoenix',
      age: '11+',
      verdict: 'together',
      note: 'Very long, angry and sad. A cruel teacher and a big loss.'
    }, {
      n: 6,
      title: 'Harry Potter and the Half-Blood Prince',
      age: '11+',
      verdict: 'together',
      note: 'A major character dies. Some teen crushes.'
    }, {
      n: 7,
      title: 'Harry Potter and the Deathly Hallows',
      age: '12+',
      verdict: 'together',
      note: 'A war story. Many deaths, including characters they love.'
    }]
  }, {
    id: 'pj',
    title: 'Percy Jackson and the Olympians',
    author: 'Rick Riordan',
    tone: 'sky',
    count: 5,
    start: '9+',
    q: 'Is Percy Jackson OK for my 9-year-old?',
    answer: 'Yes for most kids. The monster fights are fast and funny. Book 5 has a big battle and a sad loss, so it fits better around 10.',
    intro: 'Greek myths meet middle school. The tone stays pretty steady until the final battle in book 5.',
    books: [{
      n: 1,
      title: 'The Lightning Thief',
      age: '9+',
      verdict: 'good',
      note: 'Monsters, jokes and a quest. Some scary fights.'
    }, {
      n: 2,
      title: 'The Sea of Monsters',
      age: '9+',
      verdict: 'good',
      note: 'Same fun, with a cyclops and a sea journey.'
    }, {
      n: 3,
      title: 'The Titan’s Curse',
      age: '9+',
      verdict: 'good',
      note: 'A new friend is lost. A little sadder.'
    }, {
      n: 4,
      title: 'The Battle of the Labyrinth',
      age: '10+',
      verdict: 'good',
      note: 'Darker maze scenes and higher stakes.'
    }, {
      n: 5,
      title: 'The Last Olympian',
      age: '10+',
      verdict: 'together',
      shift: true,
      note: 'A big battle and a character dies. Worth a talk.'
    }]
  }, {
    id: 'mth',
    title: 'Magic Tree House',
    author: 'Mary Pope Osborne',
    tone: 'butter',
    count: 4,
    start: '6+',
    q: 'Can I let my 6-year-old read all of Magic Tree House?',
    answer: 'Yes. The early books keep the same gentle tone, so kids can read them in any order.',
    intro: 'Short, safe adventures with real facts. A great first series.',
    books: [{
      n: 1,
      title: 'Dinosaurs Before Dark',
      age: '6+',
      verdict: 'good',
      note: 'A quick T. rex chase. Nobody gets hurt.',
      guide: 'treehouse'
    }, {
      n: 2,
      title: 'The Knight at Dawn',
      age: '6+',
      verdict: 'good',
      note: 'A castle, a moat and a friendly knight.'
    }, {
      n: 3,
      title: 'Mummies in the Morning',
      age: '6+',
      verdict: 'good',
      note: 'A ghost queen who turns out to be kind.'
    }, {
      n: 4,
      title: 'Pirates Past Noon',
      age: '6+',
      verdict: 'good',
      note: 'Grumpy pirates and a treasure hunt.'
    }]
  }];
  D.liveBands = D.bands.filter(b => !['Preschoolers (2–4)', 'Teens (13–15)'].includes(b));
  D.lists = [{
    id: 'summer',
    title: 'Summer reading, by age',
    eyebrow: 'Summer',
    tone: 'butter',
    icon: 'sun',
    blurb: 'Easy wins for long days, from board books to big reads.',
    groups: D.bands.slice(1).map(b => ({
      band: b,
      items: D.books.filter(x => x.band.includes(b)).slice(0, 3).map(x => ({
        guide: x.id
      }))
    }))
  }, {
    id: 'halloween',
    title: 'Halloween books that aren’t too scary',
    eyebrow: 'Halloween',
    tone: 'pink',
    icon: 'moon',
    blurb: 'Spooky fun, rated by how much it might keep them up.',
    groups: [{
      band: 'Rated by spookiness',
      items: [{
        title: 'Room on the Broom',
        author: 'Julia Donaldson',
        ages: '3–6',
        verdict: 'good',
        cover: 'clover',
        spooky: 1,
        why: 'A kind witch, a hungry dragon and a lot of rhyme.'
      }, {
        title: 'The Little Old Lady Who Was Not Afraid of Anything',
        author: 'Linda Williams',
        ages: '4–7',
        verdict: 'good',
        cover: 'butter',
        spooky: 1,
        why: 'Shoes that clomp and pants that wiggle. Fun to read aloud.'
      }, {
        title: 'Bunnicula',
        author: 'Deborah and James Howe',
        ages: '7–10',
        verdict: 'good',
        cover: 'ink',
        spooky: 1,
        why: 'Is the bunny a vampire? Mostly it’s a comedy.'
      }, {
        title: 'The House with a Clock in Its Walls',
        author: 'John Bellairs',
        ages: '9–12',
        verdict: 'together',
        cover: 'sky',
        spooky: 2,
        why: 'A creepy old house and a real sense of dread. Some nightmares possible.'
      }, {
        title: 'Coraline',
        author: 'Neil Gaiman',
        ages: '10–12',
        verdict: 'together',
        cover: 'tomato',
        spooky: 3,
        why: 'Truly creepy. Button eyes stay with some kids for a while.'
      }]
    }]
  }, {
    id: 'gifts',
    title: 'Holiday gifts by age',
    eyebrow: 'Gift guide',
    tone: 'clover',
    icon: 'gift',
    blurb: 'One great book for every age, plus gifts that keep them reading.',
    groups: D.bands.slice(1).map((b, i) => ({
      band: b,
      items: [{
        guide: ['caterpillar', 'frog', 'charlotte', 'robot', 'giver'][i],
        why: ['The board book edition survives toddlers.', 'The collection has all four books.', 'A hardcover worth keeping for years.', 'Read it before the sequels.', 'Pairs well with a journal for big thoughts.'][i]
      }]
    }))
  }];
  D.quiz = {
    questions: [{
      q: 'How does your kid feel about reading right now?',
      a: ['Loves it', 'It’s fine', 'Avoids it']
    }, {
      q: 'What do they do with free time?',
      a: ['Build or make things', 'Run around outside', 'Games and screens', 'Draw or make up stories']
    }, {
      q: 'What makes them laugh?',
      a: ['Silly jokes', 'Clever tricks', 'Gross stuff', 'Hard to say']
    }, {
      q: 'How long can they sit with a book?',
      a: ['About 5 minutes', 'About 20 minutes', 'An hour or more']
    }, {
      q: 'How old are they?',
      a: D.bands.slice(1)
    }],
    types: {
      maker: {
        name: 'The Tinkerer',
        tone: 'sky',
        line: 'Loves to know how things work. Give them books with a problem to solve.'
      },
      mover: {
        name: 'The Adventurer',
        tone: 'butter',
        line: 'Wants action. Short chapters and big stakes keep them going.'
      },
      gamer: {
        name: 'The Level-Upper',
        tone: 'pink',
        line: 'Likes progress and series. Book one leads to book two.'
      },
      dreamer: {
        name: 'The Dreamer',
        tone: 'clover',
        line: 'Lives in stories. Give them worlds to get lost in.'
      }
    }
  };
  const ch = ["Before Breakfast", "Wilbur", "Escape", "Loneliness", "Charlotte", "Summer Days", "Bad News", "A Talk at Home", "Wilbur’s Boast", "An Explosion", "The Miracle", "A Meeting", "Good Progress", "Dr. Dorian", "The Crickets", "Off to the County Fair", "Uncle", "The Cool of the Evening", "The Egg Sac", "The Hour of Triumph", "Last Day", "A Warm Wind"];
  const cq = ["Would you have stood up for Wilbur like Fern did?", "What would you name a baby animal?", "Where would you go if you escaped for a day?", "What do you do when you feel lonely?", "What was your first thought about Charlotte?", "What is your favorite summer sound?", "How did Wilbur feel when he heard the news?", "Why do you think Fern’s mom was worried?", "What is something you’re proud of?", "Was Templeton being a good friend?", "What word would you want in a web about you?", "How do friends make a plan together?", "What would the next word be?", "Do you think animals can talk to each other?", "What does the end of summer feel like?", "What would you do first at the fair?", "Is it fair to compare Wilbur to Uncle?", "What is the best part of your evening?", "Why is the egg sac so important to Charlotte?", "How did Wilbur feel when he won?", "How can we remember someone we love?", "Which of Charlotte’s children would you want as a friend?"];
  const cb = D.books.find(b => b.id === 'charlotte');
  cb.readAloud = ch.map((t, i) => ({
    n: i + 1,
    title: t,
    q: cq[i]
  }));
  cb.i18n = {
    es: {
      word: {
        good: 'Buena opción',
        together: 'Leer juntos',
        notyet: 'Todavía no'
      },
      h: ['De qué se trata', 'Qué puede surgir', 'Por qué les gusta'],
      label: 'Pregunta en la cena',
      tagline: 'no hay respuestas incorrectas',
      note: 'Charlotte muere cerca del final. Es suave y esperanzador. Lean juntos los últimos capítulos.',
      about: 'Fern salva al cerdito Wilbur, y luego lo salva Charlotte, una araña que escribe palabras en su telaraña. Una historia de amistad y de las estaciones de la vida.',
      comeUp: 'La muerte, contada con cuidado. Charlotte muere de vieja después de cumplir su tarea, y sus hijas se quedan con Wilbur.',
      why: 'Animales graciosos, una amiga valiente y un final que recuerdan por años.',
      questions: ['¿Qué palabra escribiría Charlotte sobre ti?', '¿Cómo demostró Wilbur que era un buen amigo?', '¿Por qué crees que Charlotte ayudó a Wilbur?']
    },
    pt: {
      word: {
        good: 'Boa escolha',
        together: 'Ler juntos',
        notyet: 'Ainda não'
      },
      h: ['Sobre o que é', 'O que pode surgir', 'Por que as crianças gostam'],
      label: 'Pergunte no jantar',
      tagline: 'não tem resposta errada',
      note: 'A Charlotte morre perto do fim. É delicado e cheio de esperança. Leiam juntos os últimos capítulos.',
      about: 'Fern salva o porquinho Wilbur, e depois quem o salva é Charlotte, uma aranha que escreve palavras na teia. Uma história sobre amizade e as estações da vida.',
      comeUp: 'A morte, contada com cuidado. Charlotte morre de velhice depois de cumprir sua missão, e as filhas dela ficam com Wilbur.',
      why: 'Bichos engraçados, uma amiga corajosa e um final que as crianças lembram por anos.',
      questions: ['Que palavra a Charlotte escreveria sobre você?', 'Como o Wilbur mostrou que era um bom amigo?', 'Por que você acha que a Charlotte ajudou o Wilbur?']
    }
  };
  const rb = D.books.find(b => b.id === 'robot');
  Object.assign(rb, {
    ending: 'Roz is badly damaged when the robots sent to collect her fight the animals who try to protect her. She lets herself be taken so her friends stay safe, and promises Brightbill she will come back. Her story continues in The Wild Robot Escapes.',
    comeUpList: [{
      topic: 'Death and loss',
      level: 'Some',
      note: 'Brightbill’s family dies in an accident Roz causes. Animals die as they do in nature.'
    }, {
      topic: 'Violence',
      level: 'Some',
      note: 'Predators hunt. The final chapters include a fight between robots and animals.'
    }, {
      topic: 'Scary moments',
      level: 'A little',
      note: 'A storm, a harsh winter, and the robots arriving at the end.'
    }, {
      topic: 'Big feelings',
      level: 'Some',
      note: 'Adoption, belonging and saying goodbye. A good door into talking about family.'
    }, {
      topic: 'Language',
      level: 'None'
    }, {
      topic: 'Romance',
      level: 'None'
    }],
    quiz: [['What kind of animal does Roz adopt?', 'A gosling, a baby goose'], ['What is his name?', 'Brightbill'], ['How does Roz end up on the island?', 'She washes ashore in a crate after a storm'], ['How does she learn to talk with the animals?', 'By listening and learning their language'], ['Who comes looking for Roz at the end?', 'Robots sent by the company that made her']],
    movie: {
      title: 'The Wild Robot',
      meta: ['2024', 'Rated PG', 'Animated'],
      diffs: [['The fox, Fink, is a minor character', 'Fink becomes Roz’s funny sidekick and a main character'], ['Quiet, gentle pacing with very short chapters', 'Faster, with more action and big set pieces']],
      spot: ['Who becomes Roz’s best friend in the movie?', 'Which scenes are bigger and louder than in the book?', 'What happens to Roz at the end, and is it the same as the book?']
    },
    readNextRich: [{
      title: 'The Wild Robot Escapes',
      author: 'Peter Brown',
      cover: 'sky',
      why: 'The direct sequel. Roz on a farm, trying to get home.'
    }, {
      title: 'How to Train Your Dragon',
      author: 'Cressida Cowell',
      cover: 'clover',
      why: 'Same heart, much sillier, and a long series to grow into.'
    }, {
      title: 'The One and Only Ivan',
      author: 'Katherine Applegate',
      cover: 'butter',
      why: 'Another animal who finds family. A little sadder, for 9 and up.'
    }],
    faq: [['What age is The Wild Robot for?', 'Most kids read it on their own from about 8. It works as a read-aloud from 6 or 7, with a grown-up nearby for the sad parts.'], ['Is it sad?', 'In places. The overall feeling is warm and hopeful, and the short chapters give natural stopping points after the hard moments.'], ['How many books are there?', 'Three: The Wild Robot, The Wild Robot Escapes and The Wild Robot Protects.'], ['Should we watch the movie first?', 'Read first. The movie tells its own version, and comparing the two makes a great second conversation.']]
  });
  D.packs.unshift({
    id: 'p-fall',
    title: 'Fall Reading Challenge',
    tone: 'pink',
    pages: 24,
    price: 9.99,
    kind: 'Kit',
    group: 'Kits',
    featured: true,
    includes: ['September–November progress chart', 'Weekly milestones', 'Finisher certificate']
  }, {
    id: 'p-club',
    title: 'Book Club Kit',
    tone: 'clover',
    pages: 18,
    price: 9.99,
    kind: 'Kit',
    group: 'Kits',
    includes: ['Talk guide for 4–6 kids', 'One activity', 'Snack ideas', 'Invitations']
  }, {
    id: 'journal',
    title: 'The NextPage Reading Journal',
    tone: 'sky',
    pages: 120,
    price: 9.99,
    kind: 'Printed journal',
    group: 'Journal',
    external: true,
    includes: ['Same questions as the site', 'Milestones and stamps', 'Paperback, sold on Amazon']
  });
  D.packs.forEach(p => {
    if (!p.group) p.group = 'Printables';
  });
  D.stamp = {
    id: 'stamp',
    label: 'Self-inking stamp',
    price: 24
  };
  D.pass = {
    price: 49,
    perks: [['printer', 'Every printable pack', 'Quizzes, certificates and passport stamps for every guide.'], ['calendar-days', 'Seasonal Reading Challenges', 'Four kits a year: fall, winter, spring and summer.'], ['users-round', 'Book Club Kits', 'Talk guides and activities for 4–6 kids.'], ['book-open', 'Read-aloud questions', 'One question per chapter for bedtime reading.']]
  };
  D.backpack = {
    'Preschoolers (2–4)': ['caterpillar', 'goodnight'],
    'Little Kids (5–7)': ['frog', 'treehouse'],
    'Big Kids (7–9)': ['charlotte', 'ramona'],
    'Tweens (10–12)': ['wonder', 'holes'],
    'Teens (13–15)': ['giver', 'hunger']
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data2.js", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.AskAtDinnerCard = __ds_scope.AskAtDinnerCard;

__ds_ns.BookCover = __ds_scope.BookCover;

__ds_ns.ChildChip = __ds_scope.ChildChip;

__ds_ns.GuideCard = __ds_scope.GuideCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.RIBBON_COLORS = __ds_scope.RIBBON_COLORS;

__ds_ns.Ribbon = __ds_scope.Ribbon;

__ds_ns.VERDICTS = __ds_scope.VERDICTS;

__ds_ns.Verdict = __ds_scope.Verdict;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
