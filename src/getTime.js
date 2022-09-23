async function getTime(lat, lon) {
    const fetchTime = await fetch(`https://api.api-ninjas.com/v1/worldtime?lat=${lat}&lon=${lon}`,
    {method: 'GET',
    headers: {'X-Api-Key': 'pKp6JFlMuCitmLa9gZXMKg==MzHw02r32xKXdEyO'},
    contentType: 'application/json',
    success: function(){
        console.log('success')
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
    return time;
}

export default getTime