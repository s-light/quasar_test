<template>
    <q-page class="flex flex-center">
        <section>
            <img
                alt="App-Logo"
                src="~assets/logo_test3_splashscreen.svg"
            >
            <h1>Hello World :-)</h1>
        </section>
        <section>
            <q-input
                clearable
                filled
                color="purple-12"
                v-model="testmessage"
                label="Test Message"
            />
            <div class="">
                {{ testmessage }}
            </div>
            <q-select
                rounded
                filled
                v-model="model"
                :options="options"
                label="Rounded filled"
            />
        </section>
    </q-page>
</template>

<style>
</style>

<script>
export default {
    name: 'PageIndex',
    data () {
        return {
            testmessage: 'Some text',
            model: null,
            options: [
                'Font1', 'Font2', 'Font3', 'Font4', 'Font5'
            ]
        }
    }
}
</script>
