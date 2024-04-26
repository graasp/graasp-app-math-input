import Container from '@mui/material/Container';

import { PLAYER_VIEW_CY } from '@/config/selectors';

import MathInputView from '../math-input-view/MathInputView';

const PlayerView = (): JSX.Element => (
  <Container data-cy={PLAYER_VIEW_CY}>
    <MathInputView />
  </Container>
);
export default PlayerView;
