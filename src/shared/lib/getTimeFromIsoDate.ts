export const getTimeFromIsoDate = (isoDate: string): string => {
  const date = new Date(isoDate)
  return `${date.getUTCHours()}:${date.getUTCMinutes()}`
}
