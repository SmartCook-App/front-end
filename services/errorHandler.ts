import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

const errorHandler = (error: any): string => {
    let finalErrorMessage: string = '';
    if (error?.response) {
        const errorsArray: string[] = error?.response?.data?.errors;
        if (errorsArray) {
            const reducer = (
                accumulator: string,
                currentValue: string,
                index: number,
            ) => {
                accumulator += currentValue;
                if (errorsArray.length - index !== 1) {
                    accumulator += '\n';
                }
                return accumulator;
            };
            finalErrorMessage = errorsArray.reduce(reducer);
        } else {
            finalErrorMessage = 'Error';
        }
    } else {
        finalErrorMessage = capitalizeFirstLetter(
            error?.message ? error.message : 'Error',
        );
    }
    return finalErrorMessage;
};

export default errorHandler;
