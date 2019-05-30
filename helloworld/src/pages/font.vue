<template>
    <q-page class="flex flex-center">
        <section>
            <div
                :style="{fontFamily : font_active}"
            >
                {{ testmessage }}
            </div>

            <br>
            <br>

            <q-input
                clearable
                filled
                v-model="testmessage"
                label="Test Message"
            />

            <q-select
                filled
                label="select font"
                hint="you can search.."
                v-model="font_active"
                :options="font_list_filtered"
                use-input
                input-debounce="0"
                @filter="filterFn"
            >
                <template v-slot:no-option>
                    <q-item>
                        <q-item-section class="text-grey">
                            No results
                        </q-item-section>
                    </q-item>
                </template>
                <template v-slot:option="scope">
                    <q-item
                        v-bind="scope.itemProps"
                        v-on="scope.itemEvents"
                    >
                        <q-item-section>
                            <q-item-label
                                v-html="scope.opt"
                                :style="{fontFamily : scope.opt}"
                            />
                        </q-item-section>
                    </q-item>
                </template>
            </q-select>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            .
        </section>
    </q-page>
</template>

<style>
</style>

<script>
export default {
    name: 'HidTest',
    data () {
        return {
            testmessage: '16:05 Here we have some text. This is only for testing the font...',
            font_active: 'Titillium',
            font_list: [
                'Titillium',
                'RujisHandwritingFontv20',
                'Office Code Pro',
                'Office Code Pro D',
                'Roboto',
                '-- Not a Font --',
                'Overlock',
                'Ruthie',
                'Almendra',
                'DejaVu Sans Condensed'
            ],
            font_list_filtered: this.font_list
        }
    },
    methods: {
        // https://quasar.dev/vue-components/select#Example--Basic-autocomplete
        filterFn (val, update, abort) {
            update(() => {
                const needle = val.toLowerCase()
                this.font_list_filtered = this.font_list.filter(v => v.toLowerCase().indexOf(needle) > -1)
            })
        }
    }
}

// https://quasar.dev/quasar-plugins/web-storage
// this.$q.localStorage.set(key, value)
// let value = this.$q.localStorage.getItem(key)
//
// this.$q.sessionStorage.set(key, value)
// let value = this.$q.sessionStorage.getItem(key)
</script>
