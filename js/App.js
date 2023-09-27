import Assignments from "./components/Assignments.js";
import Panel from "./components/Panel.js";

export default {
    components: { Assignments, Panel },
    template: `
    <div class="grid gap-6 mt-8">
    
        <!-- TODO: change app to be a time-boxed scheduler, rather than a TODO -->
        <!-- TODO lists are evil, apparently -->
        <assignments></assignments>

        <hr class="border border-gray-600" />

        <!-- TODO: meditation timeout panel component goes here -->

        <!-- TODO: expandable panel module/component -->
        <panel>

            <template #heading>
                Creative Thoughts
            </template>

            Got a thought for a revolutionary idea?
            Quickly make a note of it here and have some time to ponder your idea automatically scheduled at a later date.

            <!-- short form component to note ideas here -->

            <!-- or trigger a modal to collect idea note -->

        </panel>

        <panel>
            
            <template #heading>
                Meditation Zone
            </template>
            
            Need a timeout? No problem. Surf the urge, or take a ten minute time-out.

            <template #footer>
                <a href="#">Click here to learn more about meditative techniques for high intensity work.</a>
            </template>

        </panel>

    </div>
    `,
}