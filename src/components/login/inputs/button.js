import React from 'react';
import { Button as Btn, FormGroup } from 'react-bootstrap';

export const Button = props => (
    <FormGroup className="center" validationState={"error"}>
        <Btn {...props} />
    </FormGroup>
);
