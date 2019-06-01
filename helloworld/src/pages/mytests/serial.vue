<template>
    <q-page class="flex column" style="align-items: center;">
        <section style="margin-top: 1em;">
            <q-select
                filled
                v-model="model"
                :options="options"
                label="Select Device Port"
            />

            <q-input
                clearable
                filled
                v-model="testmessage"
                label="Test Message"
            />
            <div class="">
                {{ testmessage }}
            </div>
        </section>
    </q-page>
</template>

<style lang="stylus">
</style>

<script>
export default {
    name: 'HidTest',
    data () {
        return {
            testmessage: 'Some text',
            model: null,
            options: [
                'ttyUSB0',
                'ttyUSB1',
                'ttyACM0',
                'ttyACM1'
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
