<template>
    <q-page
        class="flex column"
        style="align\-items: center;"
    >
        <section style="margin-top: 1em;">
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
            testmessage: 'Some text'
        }
    }
}

</script>
