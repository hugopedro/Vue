<template>
  <nav class="menu">
      <ul>
         <router-link to="/" tag="li" active-class="active" exact><a>Inicio</a></router-link>  
         <router-link to="/usuario" tag="li" active-class="active" exact><a>Usuário</a></router-link> <!--equivale ao codigo comentado abaixo, é a melhor prática -->
      </ul> <!--o active-class="active" exact funciona pra ao clicar na guia só a guia clicada ficar ativa usando o estilo, entao é importante -->
      <!-- <ul>
          <li>
      <router-link to="/">Inicio </router-link>   <!-- Cria um link e faz o processamento por tras-->
          <!-- </li>
          <li>
      <router-link to="/Usuario">Usuário</router-link>
          </li>
      </ul> -->
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>