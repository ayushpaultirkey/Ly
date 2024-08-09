import "@style/main.css";
import H12 from "@library/h12";
import Item from "./item";

@Component
class App extends H12 {
    constructor() {
        super();
    }
    async init() {

        // Set default value
        this.set("{list}", "");

    }
    async render() {
        return <>
            <div class="w-full h-full overflow-auto scroll relative">
                <div class="h-full p-6 flex flex-col justify-center items-center">
                    <label class="text-xl">TODO List</label>
                    <div class="bg-zinc-300 px-2 p-1 rounded-md text-sm">
                        <input type="text" placeholder="Enter items..." class="bg-transparent" id="txtbox" />
                        <button onclick={ this.addItem }>Add</button>
                    </div>
                    <div class="space-y-2 p-2">
                        {list}
                    </div>
                </div>
            </div>
        </>;
    }
    async addItem() {

        const { txtbox } = this.element;
        this.set("{list}++", <><Item args title={ txtbox.value }></Item></>);

        txtbox.value = "";

    }
};

H12.load(App, ".app");