import styled, { css } from 'styled-components';
import MaterialButton from '@material-ui/core/Button';

const Button = styled(MaterialButton)`
    && {
        color: rgb(255, 255, 255);
        font-weight: bold;

        ${({ buttoncolour }) =>
            buttoncolour &&
            css`
                background-color: ${buttoncolour};
            `}
    }

    width: 48%;
`;

export default Button;
