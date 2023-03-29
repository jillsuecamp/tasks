import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="textbox">
                <Form.Label>How many cats are there?</Form.Label>
                <Form.Control
                    type="string"
                    value={userAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserAnswer(event.target.value)
                    }
                />
            </Form.Group>
            <div>{userAnswer == expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
