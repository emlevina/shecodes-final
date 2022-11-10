import { getFormattedDate } from '../../../utils';

export const getUrl = () => {
    const accessKey = process.env.REACT_APP_API_KEY_METALAPI
    const endDate = getFormattedDate(1)
    const startDate = getFormattedDate(30)
    const metalApiUrl = `https://metals-api.com/api/timeseries?access_key=${accessKey}&start_date=${startDate}&end_date=${endDate}&base=XAG&symbols=XAU`
    return metalApiUrl
}