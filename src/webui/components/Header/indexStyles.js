
import styled from 'react-emotion';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import colors from '../../utils/styles/colors';

export const Wrapper = styled(AppBar)`
    && {
        background-color: ${colors.primary};
    }
`;

export const InnerWrapper = styled(Toolbar)`
    && {
        justify-content: space-between;
        align-items: center;
    }
`;