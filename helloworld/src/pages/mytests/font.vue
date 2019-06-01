<template>
    <q-page class="flex column" style="align-items: center;">
        <section style="margin-top: 1em;">
            <CanvasTextRender
                :value="testmessage"
                :font-family="font_active"
                :font-weight="font_weight"
                :font-style="font_style"
                :height="height"
                style="margin: 1em auto;"
            />

            <div
                style="margin: 2em; background-color:$primary;"
                :style="{fontFamily: font_active, fontWeight: font_weight, fontStyle: font_style}"
            >
                {{ testmessage }}
            </div>
        </section>
        <section>
            <q-input
                clearable
                filled
                v-model="testmessage"
                label="Test Message"
            />
            <q-select
                filled
                label="select font"
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
            <q-toggle
                v-model="font_style"
                false-value=""
                true-value="italic"
                label="italic"
            />
            <q-slider
                v-model="font_weight"
                :min="100"
                :max="900"
                :step="100"
                snap
                markers
                label
            />
            <q-badge color="secondary">
                font_weight: {{ font_weight }}, font_active: {{ font_active }}
            </q-badge>
        </section>
    </q-page>
</template>

<style lang="stylus">
</style>

<script>

import CanvasTextRender from 'components/CanvasTextRender.vue'

export default {
    name: 'FontTest',
    data () {
        return {
            testmessage: '16:05 Here we have some text. This is only for testing the font...',
            font_active: 'Titillium',
            font_list: [
                'Titillium',
                // "Ruji's Handwriting Font v.2.0",
                // "Ruji's Handwriting Font v20",
                // 'Rujis Handwriting Font v.2.0',
                'Rujis Handwriting Font v20',
                'Office Code Pro',
                // 'Office Code Pro D',
                'Overpass',
                'Overpass-mono',
                'Roboto'
                // 'Overlock',
                // 'Ruthie'
            ],
            font_list_filtered: this.font_list,
            font_weight: 500,
            font_style: '',
            height: 11
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
    },
    computed: {
        // https://vuejs.org/v2/guide/computed.html#Basic-Example
        example_computed: function () {
            return undefined
        }
    },
    filters: {
        prettyprint: function (value) {
            if (!value) return ''
            return JSON.stringify(value, null, '    ')
        }
    },
    components: {
        CanvasTextRender
    }
}

// https://quasar.dev/quasar-plugins/web-storage
// this.$q.localStorage.set(key, value)
// let value = this.$q.localStorage.getItem(key)
//
// this.$q.sessionStorage.set(key, value)
// let value = this.$q.sessionStorage.getItem(key)
</script>
