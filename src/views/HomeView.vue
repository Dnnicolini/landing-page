<script setup>
</script>

<template>
  <main>
<section id="initial" class="container d-flex justify-content-between align-items-center">
  <div>
<h1 class="text-initial">{{ $t('message.hello') }}</h1>
<h2 class="text-name">{{ $t('message.iamthe') }} Daniele Nicolini</h2>
<h2 class="text-initial"> {{ $t('message.andiam') }} <span class="text-dev"> {{ $t('message.software_developer') }} </span></h2>

</div>
<div>
   <img src="../assets/images/code.png" class="img-fluid" alt="initial image">
</div>
</section>
<section id="about" class="container d-flex justify-content-between align-items-center">
  <div>
    <img src="../assets/images/web-development.png"  alt="skills image">

  </div>
<div>
<h1 class="text-about">{{ $t('message.about') }}</h1>
</div>

</section>
</main>
</template>
