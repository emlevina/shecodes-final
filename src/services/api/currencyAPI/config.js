import { getFormattedDate } from '../../../utils';

const getUrl = () => {
    const symbols = 'EUR,GBP,BTC,XAU,XAG'
    const endDate = getFormattedDate(0) //today
    const startDate = getFormattedDate(1) //yesterday (1 day ago) 

    const base = 'USD'
    const urlCurrency = `https://api.apilayer.com/exchangerates_data/timeseries?symbols=${symbols}&base=${base}&start_date=${startDate}&end_date=${endDate}`
    return urlCurrency
}

const getRequestOptions = () => {
    const myHeadersCurrency = new Headers();
    myHeadersCurrency.append("apikey", process.env.REACT_APP_API_KEY_CURRENCIES);

    const requestOptionsCurrency = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeadersCurrency
    };

    return requestOptionsCurrency
}


export { getUrl, getRequestOptions}