const apiKey = 'duBkTtQCuHMXG3gmbxeli7pxKIGfvufM'
const url = 'https://api.apilayer.com/fixer'

export const fetchCurrencies = async () => {
    try {
        const response = await fetch(url + '/symbols?apikey=' + apiKey);
        const data = await response.json();
        return data.symbols;
    } catch (error) {
        console.error('Error fetching currencies:', error);
        throw error;
    }
};

export const convertCurrency = async (from, to, amount) => {
    try {
        const response = await fetch(url + '/convert?from=' + from + '&to=' + to + '&amount=' + amount + '&apikey=' + apiKey);
        const data = await response.json();
        return parseFloat(data.result).toFixed(2);
    } catch (error) {
        console.error('Error converting currency:', error);
        throw error;
    }
};
