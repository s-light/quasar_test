<template>
    <q-page
        class="flex column"
        style="align-items: center;"
    >
        <img
            alt="App-Logo"
            src="~assets/logo_test3_splashscreen.svg"
        >
        <h3>Hello World :-)</h3>
        <p>
            Welcome to a bunch of tests -
            mainly this is what i have build on my way to learn quasar and vue :-)
            enjoy ;-)
        </p>
        <p>
            for more information check the
            <a
                target="_blank"
                href="https://github.com/s-light/quasar_test"
            >
                repository 'quasar_test'
            </a>.
        </p>
        <pre style="font-size:0.6em;">{{ $q.platform }}</pre>
    </q-page>
</template>

<style>
</style>

<script>
export default {
    name: 'PageWelcome'
}
</script>
