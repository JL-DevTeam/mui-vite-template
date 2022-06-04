import Slider, { SliderProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

// example styled component
export const SuccessSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  width: 300,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.success.main,
}));
