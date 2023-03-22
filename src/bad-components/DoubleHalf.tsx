import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface dhValue {
    setValue: (newValue: number) => void;
    value: number;
}

function Doubler({ setValue, value }: dhValue): JSX.Element {
    return <Button onClick={() => setValue(value * 2)}>Double</Button>;
}

function Halver({ setValue, value }: dhValue): JSX.Element {
    return <Button onClick={() => setValue(value * 0.5)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <div></div>
            <div>
                <Doubler setValue={setValue} value={value}></Doubler>
                <Halver setValue={setValue} value={value}></Halver>
            </div>
        </div>
    );
}
