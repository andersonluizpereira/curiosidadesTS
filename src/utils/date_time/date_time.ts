
import dateConfig from './config'
import moment from 'moment';
import 'moment/locale/pt-br';

function newDate(value?: string): Date {
    return value ? new Date(value) : new Date()
}

function toISOString(value?: string): Date {
    return newDate(value)
}

function toLocaleString(value?: string): string {
    const { locale, timeZone } = dateConfig
    return toISOString(value).toLocaleString(locale, { timeZone })
}

function toLocaleStringFormat(value: string, message: string ): string {
    return toLocaleString(value).replace(/ /, message)
}

function toLocalDate(value?: string): Date {
    const { locale } = dateConfig
    moment.locale(locale.toLowerCase())
    return moment("value", "MM-DD-YYYY").toDate()
}

//console.log(toLocaleStringFormat('2021-01-06T15:20:10.965Z', ' ás '))
console.log(toLocalDate('2021-01-06T12:55:10.965Z'))
