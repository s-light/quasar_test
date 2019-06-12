<template>
    <q-page
        class="flex column"
        style="align\-items: center;"
    >
        <section style="margin-top: 1em;">
            <q-btn
                filled
                label="Search Devices"
                @click="search()"
            />
            <pre class="">{{ hid_device_list }}</pre>
            <!-- <ul>
                <li
                    v-for="(device, index) in hid_device_list"
                    :key="index"
                >
                    {{ device }}
                </li>
            </ul> -->
        </section>
    </q-page>
</template>

<style>
</style>

<script>
export default {
    name: 'PageHidTest',
    data () {
        return {
            hid_device_list: []
        }
    },
    methods: {
        search () {
            console.group('search for devices..')
            if (HID) {
                this.hid_device_list = HID.devices()
            }
            console.groupEnd()
        }
    },
    computed: {},
    mounted: function () {
        console.group('mounted')
        if (HID) {
            this.hid_device_list = HID.devices()
        }
        console.groupEnd()
    },
    beforeDestroy: function () {
        // console.group('beforeDestroy..')
        // console.groupEnd()
    },
    filters: {
    }
}

// https://quasar.dev/quasar-plugins/web-storage
// this.$q.localStorage.set(key, value)
// let value = this.$q.localStorage.getItem(key)
//
// this.$q.sessionStorage.set(key, value)
// let value = this.$q.sessionStorage.getItem(key)
</script>
