import http from '../http-common';

class PacienteWS{

    getPacientes(){
        return http.get('/patients');
    }

    getPacienteID(id){
        return http.get(`/patients/${id}`);
    }

    criarPaciente(paciente){
        return http.post('/patients', paciente);
    }

    atualizarPaciente(id, paciente){
        return http.put(`/patients/${id}`, paciente);
    }

    deletarPacienteID(id){
        return http.delete(`/patients/${id}`);
    }

    deletarTodosPacientes(){
        return http.delete(`/patients`);
    }

}

export default new PacienteWS();