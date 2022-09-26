function getTime(weather) {
    let time = new Date((new Date()[Symbol.toPrimitive]('number')+weather.offset*1000)).toGMTString()
    return time;
}
export default getTime;