export default {
    components: {},
    template: `
        <p>Welcome to the new {{ app }}!</p>
    `,
    data() {
        return {
            app: "Application Name",
        };
    },
    beforeCreate() {
        console.log("Lifecycle hook: beforeCreate.");
    },
    created() {
        console.log("Lifecycle hook: created.");
    },
    beforeMount() {
        console.log("Lifecycle hook: beforeMount.");
    },
    mounted() {
        console.log("Lifecycle hook: mounted.");
    },
    beforeUpdate() {
        console.log("Lifecycle hook: beforeUpdate.");
    },
    updated() {
        console.log("Lifecycle hook: updated.");
    },
    beforeUnmount() {
        console.log("Lifecycle hook: beforeUnmount.");
    },
    unmounted() {
        console.log("Lifecycle hook: unmounted.");
    },
    methods: {
        myCustomMethod() {
            let result = "stuff goes here...";
            console.log(result);
            return result;
        },
        oneMoreMethod() {
            return null;
        },
    },
}