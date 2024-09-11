<script setup>
</script>

<template>
    <header>

        <nav class="navbar navbar-expand-sm navbar-light ">
            <div class="container-fluid ">
                <div class="navbar-nav justify-content-evenly w-50">
                    <a class="navlink " aria-current="page" href="#">{{ $t('menu.home') }}</a>
                    <a class="navlink " aria-current="page" href="#">{{ $t('menu.about') }}</a>
                    <a class="navlink " aria-current="page" href="#">{{ $t('menu.contact') }}</a>
                    <a class="navlink " aria-current="page" href="#">{{ $t('menu.skills') }}</a>
                    <a class="navlink " aria-current="page" href="#">{{ $t('menu.projects') }}</a>
                </div>
                <div class="navbar-nav w-50 justify-content-center ">
                    <div>
                        <a @click="locale = 'pt'" class="me-2 " > <img src="../assets/images/flag-brazil.png" class="lang-icon" alt="brazil flag"></a>
                        <a @click="locale = 'en'" > <img src="../assets/images/flag-us.png" class="lang-icon" alt="united states flag">  </a>
                    </div>
                </div>

            </div>
        </nav>

    </header>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale, t } = useI18n();
    locale.value = 'pt'; // Idioma inicial

    return { locale, t };
  }
};
</script>