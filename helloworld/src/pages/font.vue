<template>
    <q-page class="flex flex-center">
        <section>
            <section>
                <q-editor
                    v-model="qeditor"
                    :dense="$q.screen.lt.md"
                    :toolbar="[
                        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                        [
                            {
                                label: $q.lang.editor.fontSize,
                                icon: $q.iconSet.editor.fontSize,
                                fixedLabel: true,
                                fixedIcon: true,
                                list: 'no-icons',
                                options: [
                                    'size-1',
                                    'size-2',
                                    'size-3',
                                    'size-4',
                                    'size-5',
                                    'size-6',
                                    'size-7'
                                ]
                            },
                            {
                                label: $q.lang.editor.defaultFont,
                                icon: $q.iconSet.editor.font,
                                fixedIcon: true,
                                list: 'no-icons',
                                options: [
                                    'default_font',
                                    'titillium',
                                    'rujis_handwriting',
                                    'office_code_pro',
                                    'office_code_pro_d',
                                    'overpass',
                                    'overpass_mono',
                                    'roboto'
                                ]
                            },
                            'removeFormat'
                        ],
                        ['undo', 'redo']
                    ]"
                    toolbar-toggle-color="secondary"
                    :fonts="{
                        titillium: 'Titillium',
                        rujis_handwriting: 'Rujis Handwriting Font v20',
                        office_code_pro: 'Office Code Pro',
                        office_code_pro_d: 'Office Code Pro D',
                        overpass: 'Overpass',
                        overpass_mono: 'Overpass-mono',
                        roboto: 'Roboto',
                    }"
                />
                <div style="max-width: 50vw;">
                    {{ qeditor }}
                </div>
                <hr>
                <div style="max-width: 50vw;">
                    {{ qeditor_tree }}
                </div>
            </section>
            <br>
            <hr>
            <br>
            <section>
                <div
                    :style="{fontFamily : font_active}"
                >
                    {{ testmessage }}
                </div>

                <br>
                <br>

                {{ font_active }}
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
            qeditor: `
                Hello
                <font size="4" face="Rujis Handwriting Font v20">World</font> :-)
                <font size="1">This</font>
                <font face="Office Code Pro">
                    Is a <u>funny</u> <strike><i>test</i></strike>
                </font>
                <font face="Titillium">
                    and <sub>i</sub> don't
                    <sup>know</sup>
                    <font face="Roboto">what</font>
                    <font face="Overpass-mono">is happening</font>..
                </font>`,
            testmessage: '16:05 Here we have some text. This is only for testing the font...',
            font_active: 'Titillium',
            font_list: [
                'Titillium',
                // "Ruji's Handwriting Font v.2.0",
                // "Ruji's Handwriting Font v20",
                // 'Rujis Handwriting Font v.2.0',
                'Rujis Handwriting Font v20',
                'Office Code Pro',
                'Office Code Pro D',
                'Overpass',
                'Overpass-mono',
                'Roboto',
                '-- Not a Font --',
                'Overlock',
                'Ruthie'
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
    },
    computed: {
        // https://vuejs.org/v2/guide/computed.html#Basic-Example
        qeditor_tree: function () {
            let parser = new DOMParser()
            let doc = parser.parseFromString(this.qeditor, 'text/html')
            // console.log('body:', doc.body)
            // console.log('NodeList:', doc.body.childNodes)
            let resulttree = doc.body.childNodes
            if (doc.body.firstChild.nodeName === 'DIV') {
                resulttree = doc.body.firstChild.childNodes
            }
            console.log('resulttree:', resulttree)
            // let resulttree = this.qeditor.split('<br>')[0]
            return resulttree
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
