<template>
    <q-page class="flex flex-center">
        <section>
            <q-select
                filled
                v-model="font_active"
                :options="font_list"
                label="select font"
            />
            <!-- https://stackoverflow.com/a/52599854/574981 -->
            <select v-model="font_active">
                <option
                    value=""
                    disabled
                    selected
                >
                    Font
                </option>
                <option
                    v-for="(font, index) in font_list"
                    :key="index"
                    :value="font"
                    :style="{fontFamily : font}"
                >
                    {{ font }}
                </option>
            </select>
            <div>
                <q-input
                    clearable
                    filled
                    color="purple-12"
                    v-model="testmessage"
                    label="Test Message"
                />
                <div
                    :style="{fontFamily : font_active}"
                >
                    {{ testmessage }}
                </div>
            </div>
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
            testmessage: 'Here we have some text. This is only for testing the font...',
            font_active: null,
            font_list: [
                'Overlock',
                'Ruthie',
                'Almendra',
                'DejaVu Sans Condensed'
            ]
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
