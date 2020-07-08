<template>
  <div class="submit-form">
    <!--<div class="alert alert-success">{{ msg }}</div>-->
    
    <div class="form-group">
      <label for="nome">Nome</label>
      <input
        type="text"
        class="form-control"
        id="nome"
        required
        v-model="paciente.nome"
        name="nome"
        autocomplete="off"
        autofocus
      />
    </div>
    <div class="form-group">
      <label for="email">E-mail</label>
      <input
        type="email"
        class="form-control"
        id="email"
        required
        v-model="paciente.email"
        name="email"
        autocomplete="off"
      />
    </div>
    <div class="form-group">
      <label for="data">Data de Internação</label>
      <input
        type="date"
        name="data_internacao"
        id="data_internacao"
        required
        v-model="paciente.data_internacao"
        class="form-control"
      />
    </div>
    <button @click="inserirPaciente" class="btn btn-success">Inserir paciente</button>
  </div>
</template>

<script>
import PacienteWS from "../services/PacientesWS";
export default {
  name: "adicionarPaciente",
  data() {
    return {
      paciente: {
        id: "",
        nome: "",
        email: "",
        data_internacao: new Date(),
      }
    };
  },
  methods: {
    inserirPaciente() {
      let dadosPaciente = {
        nome: this.paciente.nome,
        email: this.paciente.email,
        data_internacao: this.paciente.data_internacao
      };

      PacienteWS.criarPaciente(dadosPaciente)
        .then(response => {
          this.paciente.id = response.data.id;
          console.log(this.paciente);
          console.log("Paciente Incluso Com sucesso!");
        })
        .catch(error => {
          console.log(error.messege);
        });
    }
  }
};
</script>

<style>
.form-group{
    background-color:#fff;
    padding: 5px;
    border-radius: 3px;
}
label{
  font-weight: 900;
  font-size: 1.7rem;
}
</style>