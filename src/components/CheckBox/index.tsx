import React, { useState } from 'react';
import * as UI from './styles';

const Layout = () => {
    const [checked, setIsChecked] = useState(false);

    return (
        <UI.Box onClick={() => setIsChecked(!checked)}>
            {checked && <UI.Check>✓</UI.Check>}
        </UI.Box>
    );
};

export default Layout;