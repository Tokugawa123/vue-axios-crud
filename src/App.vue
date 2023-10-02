<script setup lang="ts">
    import {computed, type PropType, watch} from "vue";
</script>

<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">bezKoder</router-link>
            <li>
                <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/add" class="nav-link">Add</router-link>
            </li>
        </nav>
    </div>

    <div class="container mt-3">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "App",
    });
</script>

<style>

</style>