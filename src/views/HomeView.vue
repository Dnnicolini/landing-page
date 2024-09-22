<script setup>
import { ref } from 'vue';

// Defina os dados diretamente dentro do `script setup`
const icons = ref([
  { src: '/src/assets/images/icons/php.svg', alt: 'PHP' },
  { src: '/src/assets/images/icons/laravel.svg', alt: 'Laravel' },
  { src: '/src/assets/images/icons/wordpress-logo.svg', alt: 'Wordpress' },
  { src: '/src/assets/images/icons/js-badge.svg', alt: 'JavaScript' },
  { src: '/src/assets/images/icons/vue-js.svg', alt: 'Vue' },
  { src: '/src/assets/images/icons/jsx-atom.svg', alt: 'React' },
  { src: '/src/assets/images/icons/linux.svg', alt: 'Linux' },
  { src: '/src/assets/images/icons/docker.svg', alt: 'Docker' },
  { src: '/src/assets/images/icons/git.svg', alt: 'Git' }
]);
</script>

<template>
  <main>
    <section
      id="initial"
      class="container-fluid  justify-content-center text-center align-content-center"
    >
        <h1 class="text-initial ">
        Olá, sou Daniele Nicolini
        </h1>
        <h4 class=" text-white ">Desenvolvedora de Sistemas - PHP | Laravel | JavaScript | Vue</h4>
        <div class="mt-3">

          <a
            href="https://www.linkedin.com/in/daniele-nicolini"
            target="_blank"
            class="social-icon me-2"
            ><i class="bi bi-linkedin"></i
          ></a>
          <a href="https://github.com/dnnicolini" target="_blank" class="social-icon me-2"
            ><i class="bi bi-github"></i
          ></a>
          <a href="https://wa.me/5569992814769" target="_blank" class="social-icon me-2"
            ><i class="bi bi-whatsapp"></i
          ></a>
          <a
            href="https://www.instagram.com/dnnicolini/"
            target="_blank"
            class="social-icon"
            ><i class="bi bi-instagram"></i
          ></a>
      </div>
    </section>

    <section id="about" class="container align-content-center justify-content-center">
      <h2 class="title-about">Sobre Mim</h2>
      <div>
        <h4 class="text-about">{{ $t("message.about") }}</h4>
      </div>
    </section>

    <section id="habilities" class="container">
      <h2 class="title-about">Skills</h2>
      <transition-group name="fade-left"  appear mode="out-in" tag="div" class="row justify-content-evenly align-content-center">
        <img v-for="(icon, index) in icons" :key="index" :src="icon.src" :alt="icon.alt" class="icon-habilities">
      </transition-group>
    </section>
  </main>
</template>

<style>
  /* Adicione o CSS para transição */
  .fade-left-enter-active, .fade-left-leave-active {
    transition: transform 2s ease, opacity 2s ease;
  }
  .fade-left-enter, .fade-left-leave-to {
    transform: translateX(-30px);
    opacity: 0;
  }
</style>