<template>
    <q-page class="flex flex-center">
        <section>
            <img
                alt="Quasar logo"
                src="~assets/quasar-logo-full.svg"
            >
            <h1>Hello World :-)</h1>
            <img
                alt="App-Logo"
                src="~assets/logo_test3_splashscreen.svg"
            >
        </section>
        <section>
            <q-input
                clearable
                v-model="message"
                label="Message"
            />
            <div class="">
                {{ message }}
            </div>
        </section>
    </q-page>
</template>

<style>
</style>

<script>
export default {
    name: 'PageIndex'
}
</script>
