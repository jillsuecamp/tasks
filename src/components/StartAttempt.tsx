import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function decrementAttempt(): void {
        setAttempt(attempt - 1 > 0 ? attempt - 1 : 0);
    }

    function incrementAttempt(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            <div>
                <div>
                    <span>{attempt}</span>
                </div>
                <Button
                    onClick={() => {
                        setProgress(true);
                        decrementAttempt();
                    }}
                    disabled={progress || attempt <= 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => setProgress(false)} disabled={!progress}>
                    Stop Quiz
                </Button>
                <div>
                    <span>
                        <Button
                            onClick={() => {
                                incrementAttempt();
                                setProgress(false);
                            }}
                            disabled={progress}
                        >
                            Mulligan
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
}
