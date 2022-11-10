// src/mocks/handlers.js
import { rest } from 'msw'
import silverGoldData from "./silverGoldData.json"
import otherRatesData from "./otherRatesData.json"

export const handlers = [
    rest.get(
        'https://metals-api.com/api/timeseries', 
        (req, res, ctx) => {
            return res(
            ctx.status(200),
            ctx.json(silverGoldData),
        )
    }),

    rest.get(
        'https://api.apilayer.com/exchangerates_data/timeseries',
        (req, res, ctx) => {
            return res(
            ctx.status(200),
            ctx.json(otherRatesData),
        )
    })

  ]