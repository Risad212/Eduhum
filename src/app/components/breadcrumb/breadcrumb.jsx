import React from 'react';
import style from './breadcrumb.module.css';
import { Container } from 'react-bootstrap';


function breadcrumb(props) {
    return (
        <div>
            <div className={style.breadcrumb}>
                 <Container>
                    <div className={style.breadcrumb_content}>
                        <h2>{props.title}</h2>
                        <ul className={style.content_list}>
                            <li><a href="index.html">Home</a></li>
                            <li>{props.title}</li>
                        </ul>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default breadcrumb;