import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    interface Holiday {
        name: string;
        date: Date;
        emoji: string;
    }

    const holidays: Holiday[] = [
        {
            name: "New Year's Day",
            date: new Date("2023-01-01"),
            emoji: "🎆"
        },
        {
            name: "Valentine's Day",
            date: new Date("2023-02-14"),
            emoji: "❤️"
        },
        { name: "Easter", date: new Date("2023-04-16"), emoji: "\u{1F423}" },
        { name: "Halloween", date: new Date("2023-10-31"), emoji: "\u{1F383}" },
        {
            name: "Thanksgiving",
            date: new Date("2023-11-23"),
            emoji: "\u{1F983}"
        }
    ];

    function getNextHolidayInAlphabet(
        currentHoliday: Holiday,
        holidayArray: Holiday[]
    ): Holiday {
        const sortedHolidays = [...holidayArray].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        const currentIndex = sortedHolidays.findIndex(
            (h) => h.name === currentHoliday.name
        );
        const nextIndex =
            currentIndex === sortedHolidays.length - 1 ? 0 : currentIndex + 1;
        return sortedHolidays[nextIndex];
    }

    function getNextHolidayInYear(
        currentHoliday: Holiday,
        hollidayArray: Holiday[]
    ): Holiday {
        const currentIndex = hollidayArray.findIndex(
            (h) => h.name === currentHoliday.name
        );
        const nextIndex =
            currentIndex === hollidayArray.length - 1 ? 0 : currentIndex + 1;
        return hollidayArray[nextIndex];
    }

    const [holiday, setHoliday] = useState<Holiday>(holidays[0]);

    const handleChangeHolidayInAlphabet = () => {
        const nextHoliday = getNextHolidayInAlphabet(holiday, holidays);
        setHoliday(nextHoliday);
    };

    const handleChangeHolidayInYear = () => {
        const nextHoliday = getNextHolidayInYear(holiday, holidays);
        setHoliday(nextHoliday);
    };

    return (
        <div>
            <span>
                <div>Holiday: {holiday.emoji}</div>
            </span>
            <Button onClick={handleChangeHolidayInAlphabet}>
                Advance By Alphabet
            </Button>
            <Button onClick={handleChangeHolidayInYear}>Advance By Year</Button>
        </div>
    );
}
