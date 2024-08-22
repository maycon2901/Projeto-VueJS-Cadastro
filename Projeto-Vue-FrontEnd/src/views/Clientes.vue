<script>

import clientes from '../service/clientes';

export default {

    data() {
        return {
            Users: [],
            id: ''
        }
    },

    mounted() {

        clientes.Listar()
            .then(resposta => {
                this.Users = resposta.data
            })
            .catch(error => {
                console.error(error);
            })
    },

    methods: {
        Excluir() {
            clientes.Excluir(this.id)
            alert('Cliente Excluido!!')
        }
    }
}

</script>

<template>
    <div>
        <div>
            <h1>CONSUMINDO API</h1>
        </div>

        <hr>

        <div>
            <table id="table">
                <thead>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>TELEFONE</th>
                    <th>IDADE</th>
                    <th>EMAIL</th>
                </thead>

                <tbody>
                    <td>
                        <tr v-for="User in Users" :key="User.id">
                            {{ User.id }}
                        </tr>
                    </td>
                    <td>
                        <tr v-for="User in Users" :key="User.nome">
                            {{ User.nome }}
                        </tr>
                    </td>
                    <td>
                        <tr v-for="User in Users" :key="User.telefone">
                            {{ User.telefone }}
                        </tr>
                    </td>
                    <td>
                        <tr v-for="User in Users" :key="User.idade">
                            {{ User.idade }}
                        </tr>
                    </td>
                    <td>
                        <tr v-for="User in Users" :key="User.email">
                            {{ User.email }}
                        </tr>
                    </td>
                </tbody>
            </table>
            <hr>

        </div>
    </div>
    <input type="text" placeholder="ID Cliente" v-model="id">
    {{ id }}
    <button id="excluir" @click="Excluir">Excluir</button>

</template>


<style>
#table {
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    width: 100%;
}

tr,
td,
th {
    padding: 10px;
    text-align: left;
}

#excluir {
    color: rgb(250, 244, 244);
    background-color: black;
    border-radius: 5px;
}
</style>