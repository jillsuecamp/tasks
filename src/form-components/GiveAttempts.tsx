import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<string>("3");
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");
    const [abilityToUse, setAbilityToUse] = useState<boolean>(false);

    function decrementAttempt(): void {
        const attempts = parseInt(numAttempts);
        setNumAttempts(attempts - 1 > 0 ? (attempts - 1).toString() : "0");
        setAbilityToUse(attempts - 1 == 0 ? false : true);
    }

    function incrementAttempt(): void {
        const attempts = parseInt(numAttempts) + parseInt(attemptsRequested);
        setNumAttempts(
            Number.isNaN(attempts) ? numAttempts : attempts.toString()
        );
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <h2>{numAttempts}</h2>
            <div>
                <Form.Group controlId="spinbutton">
                    <Form.Label>
                        How many attempts would you like to request?
                    </Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setAttemptsRequested(event.target.value)}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={decrementAttempt}
                    disabled={numAttempts === "0" && !abilityToUse}
                >
                    use
                </Button>
                <Button onClick={incrementAttempt}>gain</Button>
            </div>
        </div>
    );
}
