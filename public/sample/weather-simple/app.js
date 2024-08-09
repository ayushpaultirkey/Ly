import "@style/main.css";
import H12 from "@library/h12";

@Component
class App extends H12 {
    constructor() {
        super();
    }
    async init() {
        try {
            
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=1");
            if(response.ok) {

                const data = await response.json();

                this.set("{lat}", data.latitude);
                this.set("{lon}", data.longitude);
                this.set("{temp}", data.hourly.temperature_2m[0]);

            }

        }
        catch(error) {
            console.error(error);
        }
    }
    async render() {
        return <>
            <div class="w-full h-full overflow-auto scroll relative">
                <div class="h-full p-6 flex flex-col">
                    <label class="text-xl">Weather App</label>
                    <label>Latitude: {lat}</label>
                    <label>Longitude: {lon}</label>
                    <label>Temperature: {temp}</label>
                </div>
            </div>
        </>;
    }
};

H12.load(App, ".app");