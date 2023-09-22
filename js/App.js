export default {
    components: {},
    template: `
    <section v-show="filterAssignments.incomplete.length">
        <h2 class="font-bold mb-2">In Progress</h2>

        <ul>
            <li 
                v-for="assignment in filterAssignments.incomplete" 
                :key="assignment.id"
            >
                <label>
                    {{ assignment.name }} 
                    
                    <input type="checkbox" v-model="assignment.complete">
                </label>
            </li>
        </ul>

    </section>

    <section v-show="filterAssignments.completed.length">

        <h2 class="font-bold mt-8">Completed</h2>

        <ul>
            <li 
                v-for="assignment in filterAssignments.completed" 
                :key="assignment.id"
            >
                <label>
                    {{ assignment.name }} 
                    
                    <input type="checkbox" v-model="assignment.complete">
            
                </label>
            </li>
        </ul>

    </section>
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