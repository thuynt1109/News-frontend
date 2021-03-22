import { Color } from '@material-ui/lab/Alert';
import { render } from '@testing-library/react';
import SnackbarAlert from '../commoms/SnackbarAlert';

export function showSnackBarAlert(duration: number, severty: Color, message: string) {
  render(<SnackbarAlert duration={duration} severty={severty} message={message} />);
}
