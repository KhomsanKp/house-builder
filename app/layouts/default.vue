<template>
    <v-app>
        <v-app-bar color="white" elevation="2">
            <template v-slot:prepend>
                <v-icon color="primary" size="x-large" icon="mdi-home-city"></v-icon>
            </template>
            
            <v-app-bar-title class="font-weight-bold text-primary">
               MD DREAM HOME <span class="text-caption text-grey">รับสร้างบ้านครบวงจร</span>
            </v-app-bar-title>
            
            <v-spacer></v-spacer>
            
            <div v-if="$vuetify.display.md" class="d-none d-md-flex">
                <v-btn variant="text" to="/">หน้าแรก</v-btn>
                <v-btn variant="text" to="#services">บริการของเรา</v-btn>
                <v-btn variant="text" to="#portfolio">ผลงาน</v-btn>
                <v-btn color="primary" variant="flat" class="ml-2" to="#contact">ติดต่อเรา</v-btn>
            </div>
            <v-app-bar-nav-icon v-else></v-app-bar-nav-icon>
        </v-app-bar>

        <v-main>
            <slot />
        </v-main>

        <v-footer color="grey-darken-4" class="d-flex flex-column py-6">
            <div class="d-flex w-100 align-center px-4">
                <strong>ติดตามผลงานสร้างบ้านของเราได้ที่ Social Media</strong>
                <v-spacer></v-spacer>
                <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-2" size="small" variant="plain"></v-btn>
            </div>
            <div class="px-4 py-2 text-center w-100 text-grey-lighten-1 text-caption">
                {{ new Date().getFullYear() }} — <strong>MD Dream Home Builder Co., Ltd.</strong>
            </div>
        </v-footer>
    </v-app>
</template>

<script setup>
const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-instagram', 'mdi-youtube']
</script>