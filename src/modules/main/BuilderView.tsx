import { SyntheticEvent, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useLocalContext } from '@graasp/apps-query-client';
import { PermissionLevel } from '@graasp/sdk';

import {
  BUILDER_VIEW_CY,
  MATH_INPUT_TAB_CY,
  SETTINGS_TAB_CY,
} from '@/config/selectors';

import TabPanel from '../common/TabPanel';
import MathInputView from '../math-input-view/MathInputView';
import SettingsView from '../settings/SettingsView';

interface TabType {
  tabLabel: string;
  tabChild: JSX.Element;
  tabSelector: string;
}

const BuilderView = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const { t } = useTranslation();
  const handleChange = (event: SyntheticEvent, value: number): void => {
    setSelectedTab(value);
  };
  const { permission } = useLocalContext();

  const isAdmin = useMemo(
    () => permission === PermissionLevel.Admin,
    [permission],
  );

  const mathInputTab = useMemo(
    () => ({
      tabLabel: t('MATH_INPUT_TAB'),
      tabChild: <MathInputView />,
      tabSelector: MATH_INPUT_TAB_CY,
    }),
    [t],
  );

  const settingsTab = useMemo(
    () => ({
      tabLabel: t('SETTINGS_TAB'),
      tabChild: <SettingsView />,
      tabSelector: SETTINGS_TAB_CY,
    }),
    [t],
  );

  const tabs: TabType[] = useMemo(
    () => (isAdmin ? [mathInputTab, settingsTab] : [mathInputTab]),
    [isAdmin, mathInputTab, settingsTab],
  );

  return (
    <Paper data-cy={BUILDER_VIEW_CY} elevation={0} sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="Tabs in the builder view."
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.tabLabel} data-cy={tab.tabSelector} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={selectedTab} index={index}>
          {tab.tabChild}
        </TabPanel>
      ))}
    </Paper>
  );
};

export default BuilderView;
