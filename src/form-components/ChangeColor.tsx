import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <h4>
                You have chosen{" "}
                <div
                    data-testid="colored-box"
                    style={{ display: "inline-block", backgroundColor: color }}
                >
                    <p>{color}</p>
                </div>
                .
            </h4>
            <div style={{ display: "inline-block" }}>
                {COLORS.map((colorOption: string) => (
                    <Form.Check
                        key={colorOption}
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={`color-change-${colorOption}`}
                        label={
                            <>
                                <span
                                    style={{
                                        display: "inline-block",
                                        backgroundColor: colorOption
                                    }}
                                >
                                    {colorOption}
                                </span>
                            </>
                        }
                        value={colorOption}
                        checked={color === colorOption}
                    />
                ))}
            </div>
        </div>
    );
}
