const APIKey = 'Z74ADnlq5zHJ7SldHBz7fxDJgLnkDysa'
const cityUrl = city => `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${city}`

async function getLocation (city){
    const responseApi = await fetch(cityUrl(city))
    const location = await responseApi.json()
    const locationKey = location[0]['Key']
    const nameLocalized = location[0].LocalizedName
    const nameAndCode = [locationKey,nameLocalized]
    return  nameAndCode
}



async function getWeather (cityName){
    const [cityCode] = await getLocation(cityName)
    const [,city] = await getLocation(cityName)

    const responseApi = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cityCode}?apikey=${APIKey}&language=pt-br`)
    const clima = await responseApi.json()
    const isDay = clima[0]['IsDayTime']
    const temperatura = clima[0]['Temperature']['Metric'].Value
    const descriptionWeather = clima[0]['WeatherText']
    const arrayDescription = [isDay,temperatura,descriptionWeather,city]

    return putWeather(arrayDescription)
    
 
}

 


