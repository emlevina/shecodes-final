import { formatDate } from "./formatDateUtil"

export const getFormattedDate = (num) => {
    return formatDate(new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * num))
}