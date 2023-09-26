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
            assignments: [
                { id: 1, name: 'Assignment One', complete: false, tag: "math" },
                { id: 2, name: 'Assignment Two', complete: false, tag: "science" },
                { id: 3, name: 'One More Assignment', complete: false, tag: "math" },
            ],
        };
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