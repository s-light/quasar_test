<template>
    <q-page
        class="flex column"
        style="align\-items: center;"
    >
        <section style="margin-top: 1em;">
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
        </section>
        <section>
            <!-- eslint-disable-next-line -->
            <div class="my-pre">{{ qeditor }}</div>
            <!-- <div class="my-pre">{{ message_formated | prettyprint }}</div> -->
        </section>
        <section>
            <h4>
                Todo:
            </h4>
            <p>
                write code that can translate dom tree with fromating into canvas draw commands...<br>
                or use on of the html to canvas converter options..<br>
                (they use svg images as intermedit step. look at the
                <a
                    target="_blank"
                    href="https://github.com/s-light/quasar_test/issues/5"
                >
                    issue
                </a>
                for more info.)
            </p>
        </section>
    </q-page>
</template>

<style lang="stylus">
    .my-pre
        max-width: 50vw
        background-color: hsla(0, 0, 0, 0.05)
        padding: 0.5em
        margin: 0.5em
        white-space: pre
</style>

<script>
export default {
    name: 'FontTest2',
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
                </font>`
        }
    },
    methods: {
        test (value) {
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
            // console.log('resulttree:', resulttree)
            // let resulttree = this.qeditor.split('<br>')[0]
            return resulttree
        }
        // },
        // message_formated: function () {
        //     let result = []
        //     for (const node of this.qeditor_tree) {
        //         // console.log('node', node)
        //         if (node === 'BR') {
        //             break
        //         } else {
        //             const nodeObj = {
        //                 value: '',
        //                 format: {}
        //             }
        //             if (node === '#text') {
        //                 nodeObj.value = node.textContent
        //             } else {
        //                 nodeObj.value = node.textContent
        //                 // nodeObj.format.fontFamily = node
        //                 // TODO!!!!!
        //             }
        //             // console.log('nodeObj', nodeObj)
        //             result.push(nodeObj)
        //         }
        //     }
        //     console.log('result:', result)
        //     return result
        // }
    },
    filters: {
        prettyprint: function (value) {
            console.log('value', value)
            if (!value) return ''
            return JSON.stringify(value, null, 4)
        }
    }
}
</script>
