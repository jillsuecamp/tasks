import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <div>
                <h4>
                    {name} {isStudent ? "is a" : "is not a"} student.
                </h4>
            </div>
            <Form.Check
                type="switch"
                id="checkbox"
                label="Toggle the switch to edit."
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode && (
                <>
                    <Form.Group controlId="formMovieName" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formIsStudent" as={Row}>
                        <Form.Label column sm={2}>
                            Are you a student?
                        </Form.Label>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                label=""
                                checked={isStudent}
                                onChange={() => setStudent(!isStudent)}
                            />
                        </Col>
                    </Form.Group>
                </>
            )}
        </div>
    );
}
