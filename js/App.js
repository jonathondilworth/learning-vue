import Assignments from "./components/Assignments.js";
import Panel from "./components/Panel.js";

export default {
    components: { Assignments, Panel },
    template: `
    <div class="grid gap-6 mt-8">
    
        <assignments></assignments>

        <hr class="border border-gray-600" />

        <panel>
            
            <template #heading>
                Hello World
            </template>
            
            Some additional text which fits to the body of the card.

            <template #footer>
                <a href="#">Click here to learn more...</a>
            </template>

        </panel>

        <panel theme="light">
            
            Some Text.

        </panel>

    </div>
    `,
}