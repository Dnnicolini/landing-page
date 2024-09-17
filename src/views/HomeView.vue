<script setup></script>

<template>
  <main>
    <section
      id="initial"
      class="container d-flex justify-content-between align-items-center"
    >
      <div>
        <h1 class="text-initial">
          {{ $t("message.iamthe") }} <span class="text-name">Daniele Nicolini</span>
        </h1>
        <h4 class="text-initial">Desenvolvedora Fullstack</h4>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <img
          src="../assets/images/daniele-nicolini.png"
          class="img-fluid dn-img me-3"
          alt="daniele nicolini image"
        />
        <div class="d-grid gap-2 justify-items-center">
          <a
            href="https://www.linkedin.com/in/daniele-nicolini"
            target="_blank"
            class="social-icon"
            ><i class="bi bi-linkedin"></i
          ></a>
          <a href="https://github.com/dnnicolini" target="_blank" class="social-icon"
            ><i class="bi bi-github"></i
          ></a>
          <a href="https://wa.me/5569992814769" target="_blank" class="social-icon"
            ><i class="bi bi-whatsapp"></i
          ></a>
          <a
            href="https://www.instagram.com/dnnicolini/"
            target="_blank"
            class="social-icon"
            ><i class="bi bi-instagram"></i
          ></a>
        </div>
      </div>
    </section>
    <hr class="line" />

    <section id="about" class="container align-content-center justify-content-center">
      <h2 class="title-about">Sobre Mim</h2>
      <div>
        <h4 class="text-about">{{ $t("message.about") }}</h4>
      </div>
    </section>
    <section id="habilities" class="container">
      <div class="row justify-content-evenly">
        <div class="col-12 my-2 col-sm-4">
          <div class="card text-white bg-dark">
            <div class="card-body">
              <h4 class="card-title">Front End</h4>
              <div class="row my-3">
                <h6 class="col-4">JavaScript</h6>
                <div class="col-8 progress p-0">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style="width: 80%"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >80%</div>
                </div>
              </div>
              <div class="row my-3">
                <h6 class="col-4">CSS/SCSS</h6>
                <div class="col-8 progress p-0">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style="width: 80%"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >80%</div>
                </div>
              </div>
              <div class="row my-3">
                <h6 class="col-4">Vue</h6>
                <div class="col-8 progress p-0">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  > 75%</div>
                </div>
              </div>
              <div class="row my-3">
                <h6 class="col-4">React</h6>
                <div class="col-8 progress p-0">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  75%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

           <div class="col-12 col-sm-4">
          <div class="card text-white bg-dark">
            <div class="card-body">
              <h4 class="card-title">Back End</h4>
              <div class="row my-3">
                <h6 class="col-4">PHP</h6>
                <div class="col-8 progress p-0">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style="width: 90%"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >80%</div>
                </div>
              </div>
              <div class="row my-3">
                <h6 class="col-4">C#</h6>
                <div class="col-8 progress p-0">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style="width: 90%"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >60%</div>
                </div>
              </div>
              <div class="row my-3">
                <h6 class="col-4">Laravel</h6>
                <div class="col-8 progress p-0">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style="width: 80%"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >80%</div>
                </div>
              </div>
              <div class="row my-3">
                <h6 class="col-4">Linux</h6>
                <div class="col-8 progress p-0">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  > 60%</div>
                </div>
              </div>
              <div class="row my-3">
                <h6 class="col-4">Mysql, Postgress</h6>
                <div class="col-8 progress p-0">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style="width: 60%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                  60%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  </main>
</template>
