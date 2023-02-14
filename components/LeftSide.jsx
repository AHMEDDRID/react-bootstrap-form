import React from "react";
import {Form}   from "react-bootstrap";
const LeftSide = () => {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Enter your email</Form.Label>
                    <Form.control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter your password</Form.Label>
                    <Form.control
                        type="password"
                        placeholder="Enter your email"
                    />
                </Form.Group>
            </Form>
        </div>
    );
};

export default LeftSide;
