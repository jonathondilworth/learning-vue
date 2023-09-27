export default {
    template: `
    <div 
        :class="{ 
                  'p-4 border rounded-lg' : true,
                  'bg-gray-700 border-gray-600 text-white' : theme === 'dark',
                  'bg-white border-black-600 text-black' : theme === 'light' 
                }"
    >

        <h2 v-if="$slots.heading" class="font-bold text-lg">
            <slot name="heading" />
        </h2>

        <div class="mt-2">

            <slot />

        </div>

        <footer v-if="$slots.footer" class="mt-2 text-gray-400 border-t border-gray-600">

            <div class="text-sm mt-2">
                <slot name="footer" />
            </div>

        </footer>

    </div>
    `,
    props: {
        theme: { type: String, default: "dark" }
    },
}