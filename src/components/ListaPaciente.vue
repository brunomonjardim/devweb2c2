<!--ESTRUTURA-->
<template>
    <div class="list row mt-11">
        <div class="col-md-6 listPaciente">
            <h4>Lista de Pacientes</h4>
            <ul class="list-group">
                <li class="list-group-item"
                    :class="{ active: index == currentIndex }"
                    v-for="(paciente, index) in pacientes"
                    :key="index"
                    @click="selecionarPaciente(paciente, index)"
                    >{{ paciente.nome }}</li>
            </ul>
            <button class="m-3 btn btn-danger"
                @click="removerTodosPaciente()">
                Excluir Todos Os Pacientes
            </button>
        </div>
        <div class="col-md-6 viewPaciente">
            <div v-if="currentPaciente">
                <h4>Paciente</h4>
                    <div>
                        <label>
                            <strong>Nome:</strong>
                        </label>
                        {{ currentPaciente.nome }}
                    </div>
                    <div>
                        <label>
                            <strong>E-mail:</strong>
                        </label>
                        {{ currentPaciente.email }}
                    </div>
                    <div>
                        <label>
                            <strong>Data da Internação:</strong>
                        </label>
                        {{ currentPaciente.data_internacao }}
                    </div>
                    <a class="btn btn-warning"
                        :href="'/patients/' + currentPaciente.id">
                    Editar Paciente
                    </a>
            </div>
            <div v-else>
                <h4>Dados do Paciente</h4>
                <p>Por favor, selecione um paciente!</p>
            </div>
        </div>
    </div>
    
</template>

<!--COMPORTAMENTO-->

<script>
import PacienteWS from '../services/PacientesWS';

export default {
    name: "listarPacientes",
    data(){
        return {
            pacientes: [],
            currentIndex: -1,
            currentPaciente: null,
            nome: ""
        };
    },
    methods:{
        obterPacientes(){
            PacienteWS.getPacientes()
                .then(pacientes => {
                    this.pacientes = pacientes.data;
                    console.log(this.pacientes);
                })
                .catch(error => {
                    console.log(error.messege);
                });
        },
        refreshPacientes(){
            this.obterPacientes();
            this.currentPaciente = null;
            this.currentIndex = -1;
        },
        selecionarPaciente(paciente, index){
            this.currentPaciente = paciente;
            this.currentIndex = index;
        },
        removerTodosPaciente(){
            PacienteWS.deletarTodosPacientes()
                .then(res => {
                    console.log(res.data);
                    console.log("Todos os Pacientes Excluidos!!");
                })
                .catch(error => {
                    console.log(error.messege);
                });
        },
    },
    mounted(){
        this.obterPacientes();
    }
};
</script>

<!--ESTILIZAÇÃO-->
<style>
    .list{
        text-align: left;
        max-width: 750px;
        margin: auto;
        line-height: 3px;
        font-size: 1.0rem;
    }
    .viewPaciente, .listPaciente{
        border:3px solid rgb(250, 6, 26);
        border-radius: 3px;
        padding:10px;
        background-color: rgba(204, 194, 194, 0.9);
    }
    .list-group .list-group-item{
        margin-top: 2px;
        margin-bottom: 2px;
        border-radius: 3px;
        padding: 15px;
    }
    .viewPaciente div div{
        background-color: azure;
        margin-bottom: 2px;
        margin-top: 2px;
        padding: 15px;
        border-radius: 3px;;
    }
    .viewPaciente div h4{
        font-size: 1.7rem;
        font-weight: 900;;
    }
</style>