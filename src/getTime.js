async function getTime(lat, lon) {
    const fetchTime = await fetch(`https://api.api-ninjas.com/v1/worldtime?lat=${lat}&lon=${lon}`,
    {method: 'GET',
    headers: {'X-Api-Key': 'pKp6JFlMuCitmLa9gZXMKg==MzHw02r32xKXdEyO'},
    contentType: 'application/json',
    success: function(result){
        console.log(result)
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
    });
    const timeData = await fetchTime.json();
    const time = {
        year: timeData.year,
        month: timeData.month,
        day: timeData.day,
        hour: timeData.hour,
        minute: timeData.minute,
        second: timeData.second,
        dayOfWeek: timeData.day_of_week
    }
    document.querySelector('.timeDate').innerText = (`${time.dayOfWeek}, ${time.day}.${time.month}.${time.year}, ${time.hour}:${time.minute}:${time.second}`)
}

export default getTime