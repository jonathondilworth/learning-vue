export default {
    template: `
    <label>
        {{ assignment.name }} 
        
        <!-- this is going to need to emit an event, possibly? -->
        <input type="checkbox" v-model="assignment.complete">
    </label>
    `,
    props: {
        assignment: {
            type: Object,
        }
    }
}