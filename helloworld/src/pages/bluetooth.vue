<template>
    <q-page class="flex flex-center">
        <section>
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

<style>
</style>

<script>
export default {
    name: 'HidTest',
    data () {
        return {
            testmessage: 'Some text'
        }
    }
}

</script>
