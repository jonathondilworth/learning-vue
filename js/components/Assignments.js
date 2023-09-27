import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
    <section class="flex gap-8">

        <assignment-list title="In Progress" :assignments="filterAssignments.incomplete">
            <assignment-create @add="add"></assignment-create>
        </assignment-list>

        <!-- if you want to handle showCompleted @ parent level -->
        <div v-show="showCompleted">
            <assignment-list 
                title="Completed" 
                :assignments="filterAssignments.completed"
                can-toggle
                @toggle="showCompleted = !showCompleted"
            ></assignment-list>
        </div>

    </section>
    `,
    data() {
        return {
            app: "Assignments App",
            assignments: [],
            showCompleted: true,
        };
    },
    created() {
        fetch("http://localhost:3002/assignments")
            .then(response => response.json())
            .then(assignments => this.assignments = assignments);
    },
    computed: {
        filterAssignments() {
            return {
                incomplete: this.assignments.filter(x => !x.complete),
                completed: this.assignments.filter(x => x.complete),
            };
        },
    },
    methods: {
        add(name) {
            if (!name) {
                return;
            }
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false,
                tag: "all",
            });
        },
    },
}