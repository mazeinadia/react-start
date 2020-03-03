import React, { ReactChild } from 'react';
import * as UI from './styles';
import { CheckBoxProps } from "../../containers/CheckBox";

const CheckBox = (props: CheckBoxProps): ReactChild => {
    const { checked, toggle } = props;

    return (
        <UI.Box onClick={toggle}>
            {checked && <UI.Check>✓</UI.Check>}
        </UI.Box>
    );
};

export default CheckBox;