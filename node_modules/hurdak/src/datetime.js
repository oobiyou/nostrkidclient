export const DATE = '^[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])$'
export const TIME = '^T(?:[0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9].[0-9]{3}Z$'
export const DATETIME = DATE.slice(0, -1) + TIME.slice(1)

export const now = () => new Date()
export const iso = () => new Date().toISOString()
export const time = () => new Date().valueOf()
export const formatDate = d => new Date(d).toLocaleDateString()
export const formatTime = d => new Date(d).toLocaleTimeString()
export const formatDateTime = d => `${formatDate(d)} at ${formatTime(d)}`
