import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answer, setAnswer] = useState<boolean>(false);

    function flipVisibility(): void {
        setAnswer(!answer);
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {answer && <div>42</div>}
        </div>
    );
}
