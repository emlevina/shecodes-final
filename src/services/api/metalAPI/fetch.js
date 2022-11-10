import { getUrl } from "./config";

export const metalAPIFetch = async (userData, setUserData) => {
    fetch(getUrl())
        .then(response => response.json())
        .then(result => {
            if (!result.success) {
                const error = result.error.info;
                return Promise.reject(error);
            }
            setUserData({
                labels: Object.keys(result.rates),
                datasets: [
                    {
                        ...userData.datasets[0],
                        data: Object.values(result.rates).map(obj => obj["XAU"])
                    }
                ]
            })
        })
        .catch(error => console.log('Error: ', error));
}
