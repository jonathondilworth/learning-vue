import Assignment from "./Assignment.js";

export default {
    components: { Assignment },
    template: `
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{ tagFilteredAssignments.length }})</span>    
        </h2>

        <div class="flex gap-2">
            <button 
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                @click="currentTag = tag"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
            >{{ tag }}</button>
        </div>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
            <assignment 
                v-for="assignment in tagFilteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
            ></assignment>
        </ul>

    </section>
    `,
    data() {
        return {
            currentTag: 'all',
        };
    },
    props: {
        title: {
            type: String,
        },
        assignments: {
            type: Array,
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
    }
}