export default {
    components: {},
    template: `
    <p> 
        <input type="text" v-model="greeting" />
    </p>
    <p>
        {{ greeting }} ({{ greeting.length }})
    </p>
    <p>
        <!-- directives -->
        <!-- :class="exprs" is shorthand for v-bind:class="exprs" -->
        <!-- v-on:click, shorthand is @click="methodName" -->
        <!-- listeners: @click, etc is similar, see example -->
        <button
            :class="buttonClass"
            @click="setRandomFallacyGreeting()"
        >Click Me</button>
    </p>
    `,
    data() {
        return {
            greeting: 'Hello World!',
            fallacies: [
                'The network is reliable.',
                'Latency is zero.',
                'Bandwidth is infinite.',
                'The network is secure',
                'The network topology doesn\'t change',
                'There is only one network administrator',
                'Transport costs are zero',
                'The network is homogeneous',
            ],
            buttonClass: "text-blue-600",
        };
    },
    mounted() {
        setTimeout(() => {
            this.setRandomFallacyGreeting();
        }, 1500);
    },
    methods: {
        setRandomFallacyGreeting() {
            this.greeting = this.generateRandomFallacy();
        },
        generateRandomFallacy() {
            return this.fallacies[Math.floor(Math.random() * this.fallacies.length)];
        }
    }
}