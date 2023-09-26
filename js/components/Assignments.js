import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
    <section class="space-y-8">

        <assignment-list 
            title="In Progress"
            :assignments="filterAssignments.incomplete"
        ></assignment-list>

        <assignment-list 
            title="Completed"
            :assignments="filterAssignments.completed"
        ></assignment-list>

        <assignment-create @add="add"></assignment-create>

    </section>
    `,
    data() {
        return {
            app: "Assignments App",
            assignments: [],
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
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false,
                tag: "all",
            });
        },
    },
}