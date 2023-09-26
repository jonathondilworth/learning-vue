export default {
    components: {},
    template: `
    <div class="flex gap-2">
        <button 
            v-for="tag in tags" 
            class="border rounded px-1 py-px text-xs"
            @click="$emit('update:currentTag', tag)"
            :class="{
                'border-blue-500 text-blue-500': tag === currentTag
            }"
        >{{ tag }}</button>
    </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String,
    },
    computed: {
        tags() {
            return new Set(['all', ...this.initialTags]);
        },
    },
}