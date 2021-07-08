import { TextField, TextFieldProps } from '@material-ui/core';
import { colors } from '../../styles';
import {
    withStyles,
} from '@material-ui/core/styles';

export function Input(props: TextFieldProps) {
    const CssTextField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: colors.bisque,
            },
            '& label': {
                color: colors.bisque,
            },
            '&.MuiOutlinedInput-input': {
                color: colors.bisque
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: colors.bisque,
                color: colors.bisque
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: colors.bisque,
                    color: colors.bisque,
                },
                '& fieldset legend': {
                    color: colors.bisque,
                },
                '&:hover fieldset': {
                    borderColor: colors.bisque,
                },
                '&.Mui-focused fieldset': {
                    borderColor: colors.bisque,
                },
            },
            '& .MuiOutlinedInput-input': {
                color: colors.bisque,
            },
            '&input:-internal-autofill-selected':{
                backgroundColor: colors.darkPink,
            }
        },
    })(TextField);

    return (
        <CssTextField
            label="Custom CSS"
            variant="outlined"
            {...props}
        />
    );
}