<template>
    <div>
        <button :class="color + ' py-2 px-4 w-fit rounded-sm text-base font-poppins font-semibold cursor-pointer'">
            {{ name }}
        </button>
    </div>
</template>
<script>
export default {
    name: 'LoginButton',
    props: {
        name: {
            type: String,
            require: true
        },
        color: {
            type: String,
            require: false
        }
    }
}
</script>
<style></style>