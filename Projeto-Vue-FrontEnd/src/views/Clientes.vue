<script>

import Clientes from '../service/clientes';

export default {

    data() {
        return {
            Users: []
        }
    },

    mounted() {

        Clientes.Listar()
            .then(resposta => {
                this.Users = resposta.data
            })
            .catch(error => {
                console.error(error);
            });
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
</style>