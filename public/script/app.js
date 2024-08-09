import "./../style/main.css";
import H12 from "@library/h12";

@Component
class App extends H12 {
    constructor() {
        super();
        this.count = 0;
    }
    async init() {

        this.set("{count}", this.count);

    }
    async render() {
        return <>
            <div class="w-full h-full overflow-auto scroll relative">
                <div class="h-full p-6 flex flex-col justify-center items-center">
                    <label class="text-xl">H12 Application</label>
                    <button onclick={ this.increment } class="bg-zinc-300 px-4 p-1 rounded-md text-sm">Increment: {count}</button>
                </div>
            </div>
        </>;
    }
    increment() {
        this.count++;
        this.set("{count}", this.count);
    }
};

H12.load(App, ".app");