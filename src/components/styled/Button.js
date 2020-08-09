import styled, { css } from 'styled-components';
import MaterialButton from '@material-ui/core/Button';

const Button = styled(MaterialButton)`
    && {
        color: rgb(255, 255, 255);
        font-weight: bold;

        ${({ buttonColour }) =>
            buttonColour &&
            css`
                background-color: ${buttonColour};
            `}
    }
`;

export default Button;
