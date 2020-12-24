import {
    Col,
    Row
} from 'reactstrap';

import { Projects } from 'components/dashboard-components';
import React from 'react';

const Starter = () => {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row>
         </div>
    );
}

export default Starter;
