import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },
    template: `
    <section v-show="show && assignments.length" class="w-60">

        <div class="flex justify-between items-start">

            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ tagFilteredAssignments.length }})</span>    
            </h2>

            <button v-show="canToggle" @click="toggleList()">&times;</button>

        </div>

        <assignment-tags
            class="mt-1"
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(x => x.tag)"
        />

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
            <assignment 
                v-for="assignment in tagFilteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
            ></assignment>
        </ul>

        <slot></slot>

    </section>
    `,
    data() {
        return {
            currentTag: 'all',
            show: true,
        };
    },
    props: {
        title: {
            type: String,
        },
        assignments: {
            type: Array,
        },
        canToggle: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        toggleList() {
            this.show = !this.show;
            this.$emit('toggle');
        },
    },
    computed: {
        tags() {
            return new Set(['all', ...this.assignments.map(x => x.tag)]);
        },
        tagFilteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(x => x.tag === this.currentTag);
        },
    },
}