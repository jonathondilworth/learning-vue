import Assignment from "./Assignment.js";

export default {
    components: { Assignment },
    template: `
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">{{ title }}</h2>

        <ul>
            <li 
                v-for="assignment in assignments" 
                :key="assignment.id"
            >
 
                <assignment
                    :assignment="assignment"
                ></assignment>

            </li>
        </ul>

    </section>
    `,
    props: {
        title: {
            type: String,
        },
        assignments: {
            type: Array,
        },
    }
}