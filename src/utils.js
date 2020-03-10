export const formatDate = (startDate, endDate) => {
    let formattedDate = ''
    const startYear = startDate.split('-')[0]
    const startMonth = startDate.split('-')[1]
    const startDay = startDate.split('-')[2]
    const endYear = endDate.split('-')[0]
    const endMonth = endDate.split('-')[1]
    const endDay = endDate.split('-')[2]
    if (startYear !== endYear) {
        formattedDate = `${startDay}.${startMonth}.${startYear}-${endDay}.${endMonth}.${endYear}`
    } else if (startMonth !== endMonth) {
        formattedDate = `${startDay}.${startMonth}-${endDay}.${endMonth}.${endYear}`
    } else if (startDay !== endDay) {
        formattedDate = `${startDay}-${endDay}.${endMonth}.${endYear}`
    } else {
        formattedDate = `${endDay}.${endMonth}.${endYear}`
    }
    return formattedDate
}
