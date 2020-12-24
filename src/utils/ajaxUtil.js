export const getErrorMessage = (error) => {
    let message = error.message;
    if (error.response) {
        if (error.response.data.message) {
            message = error.response.data.message;
        }
    }   
    return message;
}

export const parseParams = (params) => {
    const keys = Object.keys(params);
    let options = '';

    keys.forEach((key) => {
        const isParamTypeObject = typeof params[key] === 'object';
        const isParamTypeArray = isParamTypeObject && (params[key].length >= 0);

        if (!isParamTypeObject) {
            options += `${key}=${params[key]}&`;
        }

        if (isParamTypeObject && isParamTypeArray) {
            params[key].forEach((element) => {
                options += `${key}=${element}&`;
            });
        }
    });

    return options ? options.slice(0, -1) : options;
};