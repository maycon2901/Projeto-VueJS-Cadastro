<script>

import { RouterLink } from 'vue-router';

</script>

<template>

  <div id="header">

    <div id="logo">
      <img src="./img/logo.png" alt="VueJs" width="150" height="90">
    </div>
    <div id="texto">
      <h1>SISTEMA PARA CADASTRO DE CLIENTES</h1>
    </div>

  </div>

  <div id="body">

    <div id="Nav">
      <RouterLink to="/">
        <button>INICIO</button>
      </RouterLink>

      <RouterLink to="/clientes">
        <button>CLIENTES</button>
      </RouterLink>

      <RouterLink to="/cadastro">
        <button>CADASTRO</button>
      </RouterLink>

    </div>

    <div id="Views">
      <RouterView />
    </div>

  </div>

  <div id="footer">

    <p>Desenvolvido em VueJs por Maycon Santos</p>

  </div>

</template>