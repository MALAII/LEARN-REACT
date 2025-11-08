function WeatherDisplay({weather}){
    return(
        <>
        <h2>{`Current Temperature in ${weather.city} is ${weather.temp}'C`}</h2>
        </>
    );
}
export default WeatherDisplay;