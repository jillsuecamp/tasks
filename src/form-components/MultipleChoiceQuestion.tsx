import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const DEFAULT_OPTION = options[0];
    const [selectedChoice, setSelectedChoice] =
        useState<string>(DEFAULT_OPTION);
    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Label>How many siblings do I have?</Form.Label>
                <Form.Select value={selectedChoice} onChange={updateOption}>
                    {options.map((selectedOption: string) => (
                        <option key={selectedOption} value={selectedOption}>
                            {selectedOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selectedChoice == expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
