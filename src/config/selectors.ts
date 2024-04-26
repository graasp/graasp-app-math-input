export const PLAYER_VIEW_CY = 'player-view';
export const BUILDER_VIEW_CY = 'builder-view';
export const ANALYTICS_VIEW_CY = 'analytics-view';

export const MATH_INPUT_VIEW_CY = 'math-input-view';
export const SETTINGS_VIEW_CY = 'settings_view';

export const MATH_INPUT_TAB_CY = 'math-input-tab';
export const SETTINGS_TAB_CY = 'settings-tab';

export const buildDataCy = (selector: string): string =>
  `[data-cy=${selector}]`;
