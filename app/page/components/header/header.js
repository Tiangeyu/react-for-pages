import React from 'react';
import Style from './headerStyle.js';

const Header = (props) => (
    <section style={Style.Head}>
        <a style={Style.go} href="index.html"></a>
        <p style={Style.tit}>{props.title}</p>
    </section>
)

export default Header