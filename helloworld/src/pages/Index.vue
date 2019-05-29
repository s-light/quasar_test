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
            testmessage: 'Some text'
        }
    }
}
</script>
