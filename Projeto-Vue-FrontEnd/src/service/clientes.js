import { Teleport } from 'vue'
import api from './api'

export default {
    
    Listar: () => {
       return api.get('cadastros')
    },
    Salvar: (nome, telefone, idade, email) => {
        return api.post('cadastros', nome, telefone, idade, email)
    }
}
