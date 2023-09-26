import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    template: `
    
    <assignment-list 
        title="In Progress"
        :assignments="filterAssignments.incomplete"
    ></assignment-list>

    <assignment-list 
        title="Completed"
        :assignments="filterAssignments.completed"
        class="mt-8"
    ></assignment-list>

    `,
    data() {
        return {
            app: "Application Name",
            assignments: [
                { id: 1, name: 'Assignment One', complete: false },
                { id: 2, name: 'Assignment Two', complete: false },
                { id: 3, name: 'One More Assignment', complete: false },
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
}