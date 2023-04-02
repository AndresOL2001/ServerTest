import { blue, lightBlue } from '@material-ui/core/colors';
import { light } from '@material-ui/core/styles/createPalette';
import { IPanel } from './Panel';

const base: IPanel = {
  width: 600,
  height: 783,
  background_color: 'lightBlue',
  border_color: 'blue',
  border_radius:10,
  border_weight: 1,
  drop_shadow: ['10','0','10','red'],
  children:'',
};

export const mockPanelProps = {
  base,
};