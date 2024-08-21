<template>
    <div id="Formulario">
        <h1>FORMULARIO DE CADASTRO</h1>

        <form @submit.prevent="salvar">
            <label>Nome </label>
            <br>
            <input type="text" placeholder="Nome" v-model="NewUser.nome">
            {{ NewUser.nome }}
            <br>
            <label>Telefone </label>
            <br>
            <input type="text" placeholder="Telefone" v-model="NewUser.telefone">
            {{ NewUser.telefone }}
            <br>
            <label>Idade </label>
            <br>
            <input type="text" placeholder="idade" v-model="NewUser.idade">
            {{ NewUser.idade }}
            <br>
            <label>Email </label>
            <br>
            <input type="text" placeholder="Email" v-model="NewUser.email">
            {{ NewUser.email }}
            <hr>
            <button id="buttonSalvar">Salvar</button>
        </form>
    </div>
</template>

<script>

import clientes from '../service/clientes';

export default {

    data() {
        return {
            NewUser: { nome: '', telefone: '', idade: '', email: '' }
        }
    },

    methods: {

        salvar() {

            clientes.Salvar({
                nome: this.NewUser.nome,
                telefone: this.NewUser.telefone,
                idade: this.NewUser.idade,
                email: this.NewUser.email
            })
                .then(resposta => {
                    this.NewUser.nome = ''
                    this.NewUser.telefone = ''
                    this.NewUser.idade = ''
                    this.NewUser.email = ''

                })
                .catch(error => {
                    console.error(error);
                })

            alert('Salvado!')
        }

    }
}

</script>

<style>
#Formulario {
    margin-top: 20px;
}

#buttonSalvar {
    margin-left: 0px;
}
</style>
