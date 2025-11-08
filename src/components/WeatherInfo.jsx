import WeatherDisplay from "./WeatherDisplay";

function WeatherInfo(){
    const weatherData={city:"chennai" , temp:"30"}
    return(
        <>
        <WeatherDisplay weather={weatherData} />
        </>
    );
}
export default WeatherInfo;