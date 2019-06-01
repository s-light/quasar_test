<template>
    <q-page class="flex column" style="align-items: center;">
        <section style="margin-top: 1em;">
            <q-btn
                filled
                label="Find Devices"
                @click="find_devices()"
            />
            <div class="">
                {{ hid_device_list }}
            </div>
            <ul>
                <li
                    v-for="(device, index) in hid_device_list"
                    :key="index"
                >
                    {{ device }}
                </li>
            </ul>
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
            hid_device_list: []
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
