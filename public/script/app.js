import "@style/main.css";
import H12 from "@library/h12";

class App extends H12 {
    constructor() {
        super();
        this.num = 0;
    }
    main(args) {
        const { count } = this.key;
        count(this.num);
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
        const { count } = this.key;
        count(++this.num);
    }
};

// Render app
new App().init(".app");