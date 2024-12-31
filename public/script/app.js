import "@style/main.css";
import H12 from "@library/h12";

@Component
class App extends H12 {
    constructor() {
        super();
        this.count = 0;
    }
    main(args) {
        this.set("{count}", this.count);
    }
    render() {
        return <>
            <div class="w-full h-full overflow-auto scroll relative">
                <div class="h-full p-6 flex flex-col justify-center items-center">
                    <label class="text-xl">Hello World</label>
                    <button onclick={ this.increment } class="bg-zinc-300 px-4 p-1 rounded-md text-sm hover:bg-zinc-200 active:bg-zinc-100">Increment: {count}</button>
                </div>
            </div>
        </>;
    }
    increment() {
        this.count++;
        this.set("{count}", this.count);
    }
};

// Render app
new App().init(".app");