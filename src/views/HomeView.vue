<script setup>
</script>

<template>
  <main>
    <section id="initial" class="container d-flex justify-content-between align-items-center">
      <div>
        <h1 class="text-initial">{{ $t('message.hello') }}</h1>
        <h2 class="text-name">{{ $t('message.iamthe') }} Daniele Nicolini</h2>
        <h2 class="text-initial"> {{ $t('message.andiam') }} <span class="text-dev"> {{ $t('message.software_developer')
        }} </span></h2>

      </div>
      <div>
        <img src="../assets/images/code.png" class="img-fluid" alt="initial image">
      </div>
    </section>
    <section id="about" class="container d-flex justify-content-between align-items-center">
      <div>
        <img src="../assets/images/pc-dev.png" class="img-about" alt="pc image">

      </div>
      <div>
        <h1 class="text-about">{{ $t('message.about') }}</h1>
      </div>
    </section>
    <section id="habilities" class="container ">


      <div class="row ">
        <div class="col-12 col-sm-6 ">
          <div class="card text-white bg-dark">
            <div class="card-body">
              <h4 class="card-title">Front End</h4>
              <div class="row row-cols-2 my-3">    
                <h6>JavaScript</h6>
                <div class="progress p-0 ">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 25%;"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  </div>
                </div>
              </div>
              <div class="row row-cols-2 my-3">    
                <h6>JavaScript</h6>
                <div class="progress p-0 ">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 25%;"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  </div>
                </div>
              </div>
              <div class="row row-cols-2 my-3">    
                <h6>JavaScript</h6>
                <div class="progress p-0 ">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 25%;"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 ">
          <div class="card text-white bg-dark">
            <div class="card-body">
              <h4 class="card-title">Front End</h4>
              <div class="row row-cols-2 my-3">    
                <h6>JavaScript</h6>
                <div class="progress p-0 ">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 25%;"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  </div>
                </div>
              </div>
              <div class="row row-cols-2 my-3">    
                <h6>JavaScript</h6>
                <div class="progress p-0 ">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 25%;"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  </div>
                </div>
              </div>
              <div class="row row-cols-2 my-3">    
                <h6>JavaScript</h6>
                <div class="progress p-0 ">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 25%;"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
