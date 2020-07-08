<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a href="/" class="navbar-brand">
        Painel Covid-19
      </a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/patients" class="nav-link">Pacientes</a>
        </li>
        <li class="nav-item">
          <a href="/adicionar" class="nav-link">Adicionar Paciente</a>
        </li>
      </div>      
    </nav>
    <div class="container-fluid mt-3">
      <router-view />
    
    </div>

  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}

</script>

<style>
body{
  background-position: center;
  background-repeat:repeat-y;
  background-image: url('./assets/back.jpg');
  background-size: cover;
}
.navbar-brand{
  font-size: 3rem;
  font-weight: bold;
}
.navbar{
  background-color:#047ef7;
}
.nav-item{
  border-radius: 3px;
  margin-left: 5px;
  background-color: #f00;
}
.nav-item a{
  font-weight: 900;
  font-size: 2rem;
  color: #fff;
}
</style>
