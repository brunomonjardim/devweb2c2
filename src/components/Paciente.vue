<template>
    <div v-if="currentPaciente" class="edit-form">
        <h2>Paciente</h2>
        <form>
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" id="nome" class="form-control" v-model="currentPaciente.nome">
            </div>
            <div class="form-group">
                <label for="nome">E-mail</label>
                <input type="email" id="email" class="form-control" v-model="currentPaciente.email">
            </div>
            <div class="form-group">
                <label for="nome">Data da Internação</label>
                <input type="date" id="data_internacao" class="form-control" v-model="currentPaciente.data_internacao">
            </div>
        </form>
        <button class="btn btn-danger mr-2" @click="deletarPaciente()">Deletar</button>
        <button type="submit" class="btn badge-success mr-2" @click="atualizarPaciente()">Atualizar Paciente</button>
        <P>{{ message }}</P>
    </div>
    <div v-else>
        <p>Por favor, selecione um paciente!!!</p>
    </div>
</template>

<!--COMPORTAMENTO-->
<script>

    import PacienteWS from "../services/PacientesWS";

    export default {
        name: "paciente",
        data(){
            return {
                currentPaciente: null,
                message: ''
            }
        }, 
        methods: {
            getPaciente(id){
                PacienteWS.getPacienteID(id)
                    .then(paciente => {
                        this.currentPaciente = paciente.data;
                        let data = this.currentPaciente.data_internacao;
                        data = this.currentPaciente.data_internacao.split('T')[0];
                        console.log(data);
                        this.currentPaciente.data_internacao = data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            deletarPaciente(){
                PacienteWS.deletarPacienteID(this.currentPaciente.id)
                    .then(response => {
                        console.log(response.data);
                        this.message = 'O paciente foi deletado com sucesso!';
                        console.log("O paciente foi deletado com sucesso!");
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            },
            atualizarPaciente(){
                PacienteWS.atualizarPaciente(this.currentPaciente.id, this.currentPaciente)
                    .then(response => {
                        console.log(response.data);
                        this.message = "Paciente atualizado com sucesso!"
                        console.log("Paciente atualizado com sucesso!");
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            }
        },
        beforeMount(){
            this.message = '';
            this.getPaciente(this.$route.params.id);
        }
    }
</script>

<style>
label{
    font-size: 1.7rem;
    font-weight: 900;
}
.form-group{
    background-color:#fff;
    padding: 5px;
    border-radius: 3px;
}
</style>