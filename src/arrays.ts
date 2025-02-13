/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 *
 */
export function bookEndList(numbers: number[]): number[] {
    const firstLast: number[] = [...numbers];
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        return [firstLast[0], firstLast[0]];
    } else {
        return [firstLast[0], firstLast[firstLast.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numbersTripled: number[] = numbers.map(
        (num: number): number => num * 3
    );
    return numbersTripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((int: string): number => (!+int ? 0 : +int));
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const doubledLowPrices = amounts.map((amount: string): string =>
        amount[0] == "$" ? amount.substring(1) : amount
    );
    const finalNums = doubledLowPrices.map((int: string): number =>
        +int ? +int : 0
    );
    return finalNums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // Filtering out the questions from original messages array
    const noQuestions = messages.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    // Mapping the new array, noQuestions, to convert all exclamatory messages to uppercase.
    const onlyShouting = noQuestions.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    return onlyShouting;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const onlyShort = words.filter((word: string): boolean => word.length < 4);
    return onlyShort.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const onlyRGB = colors.filter(
        (color: string): boolean =>
            color != "blue" && color != "red" && color != "green"
    );
    if (onlyRGB.length > 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const representAddition = addends.join("+");
    if (addends.length == 0) {
        return "0=0";
    } else {
        return sum + "=" + representAddition;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */

export function injectPositive(values: number[]): number[] {
    const negatives = values.findIndex((value: number): boolean => value < 0);
    const total =
        negatives == -1
            ? values.reduce((a, b) => a + b, 0)
            : values.slice(0, negatives).reduce((a, b) => a + b, 0);
    const injectpos = [...values];
    negatives == -1
        ? injectpos.push(total)
        : injectpos.splice(negatives + 1, 0, total);
    return injectpos;
}
