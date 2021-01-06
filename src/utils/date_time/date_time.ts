
import dateConfig from './config'

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

//console.log(toLocaleStringFormat('2021-01-06T15:20:10.965Z', ' ás '))
console.log(toLocaleStringFormat('2021-01-06T12:55:10.965', ' ás '))
