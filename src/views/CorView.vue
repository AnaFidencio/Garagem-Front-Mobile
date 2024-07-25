<script setup>
import { ref, reactive, onMounted } from "vue";
import CoresApi from "@/api/cores";
const coresApi = new CoresApi();

const defaultCor = { id: null, descricao: "" };
const cores = ref([]);
const cor = reactive({ ...defaultCor });

onMounted(async () => {
  cores.value = await coresApi.buscarTodasAsCores();
});

function limpar() {
  Object.assign(cor, { ...defaultCor });
}

async function salvar() {
  if (cor.id) {
    await coresApi.atualizarCor(cor);
  } else {
    await coresApi.adicionarCor(cor);
  }
  cores.value = await coresApi.buscarTodasAsCores();
  limpar();
}

function editar(cor_para_editar) {
  Object.assign(cor, cor_para_editar);
}

async function excluir(id) {
  await coresApi.excluirCor(id);
  cores.value = await coresApi.buscarTodasAsCores();
  limpar();
}
</script>

<template>
  <h1>Cor</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="cor.descricao" placeholder="Descrição" />
    <button class="button2" @click="salvar">Salvar</button>
    <button class="button" @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="cor in cores" :key="cor.id">
      <span @click="editar(cor)"> ({{ cor.id }}) - {{ cor.descricao }} - </span>
      <button class="button1" @click="excluir(cor.id)">X</button>
    </li>
  </ul>
</template>

<style>
.button {
  font-family:Arial, Helvetica, sans-serif;
  font-size:18px;
  border-radius:4px;
  padding-left:10px;
  padding-right:10px;
  padding-top:5px;
  padding-bottom:5px;
  color:#ffffff;
  background-color:#cc6666;
  outline:none;
  border:none;
  cursor:pointer;
  display:inline-block;
  text-decoration: none;
  transition: .4s;
  }
  .button2 {
  font-family:Arial, Helvetica, sans-serif;
  font-size:18px;
  border-radius:4px;
  padding-left:10px;
  padding-right:10px;
  padding-top:5px;
  padding-bottom:5px;
  color:#ffffff;
  background-color:#61aa25;
  outline:none;
  border:none;
  cursor:pointer;
  display:inline-block;
  text-decoration: none;
  transition: .4s;
  }
  .button1 {
  font-family:Arial, Helvetica, sans-serif;
  font-size:18px;
  border-radius:4px;
  padding-left:10px;
  padding-right:10px;
  padding-top:5px;
  padding-bottom:5px;
  color:#ffffff;
  background-color:#414141;
  outline:none;
  border:none;
  cursor:pointer;
  display:inline-block;
  text-decoration: none;
  transition: .4s;
  }
  </style>