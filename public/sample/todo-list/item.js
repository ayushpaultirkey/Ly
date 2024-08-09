import "@style/main.css";
import H12 from "@library/h12";

@Component
class Item extends H12 {
    constructor() {
        super();
    }
    async init() {


    }
    async render() {

        const { title } = this.args;

        return <>
            <div class="bg-zinc-200 space-x-2 px-3 p-1 rounded-md">
                <label>{ title }</label>
                <button onclick={ this.remove }>&times;</button>
            </div>
        </>;
        
    }
    remove() {
        this.root.remove();
    }
};

export default Item;