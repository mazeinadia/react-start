import React, { ReactChild } from 'react';
import * as UI from './styles';

type LayoutProps = {
    children: ReactChild
}

const Layout = (props: LayoutProps) =>
{
    const { children } = props;
    return (
        <>
            <UI.Header />
            <UI.Content>{children}</UI.Content>
            <UI.Footer />
        </>
    );
};

export default Layout;