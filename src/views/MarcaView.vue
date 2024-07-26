<script setup>
import { ref, reactive, onMounted } from "vue";
import MarcasApi from "@/api/marcas";

const marcasApi = new MarcasApi();
const defaultMarca = { id: null, nome: "", nacionalidade: "" };
const marcas = ref([]);
const marca = reactive({ ...defaultMarca });

onMounted(async () => {
  marcas.value = await marcasApi.buscarTodasAsMarcas();
});

function limpar() {
  Object.assign(marca, { ...defaultMarca });
}

async function salvar() {
  if (marca.id) {
    await marcasApi.atualizarMarca(marca);
  } else {
    await marcasApi.adicionarMarca(marca);
  }
  marcas.value = await marcasApi.buscarTodasAsMarcas();
  limpar();
}

function editar(marca_para_editar) {
  Object.assign(marca, marca_para_editar);
}

async function excluir(id) {
  await marcasApi.excluirMarca(id);
  marcas.value = await marcasApi.buscarTodasAsMarcas();
  limpar();
}
</script>

<template>
  <h1>Marca</h1>

  <div class="form">
    <input class="form1" type="text" v-model="marca.nome" placeholder="Nome" />
    <input class="form1"
      type="text"
      v-model="marca.nacionalidade"
      placeholder="Nacionalidade"
    />
    <button class="button2" @click="salvar">Salvar</button>
    <button class="button" @click="limpar">Limpar</button>
  </div>

  <ul>
    <li v-for="marca in marcas" :key="marca.id">
      <span @click="editar(marca)">
        ({{ marca.id }}) - {{ marca.nome }} - {{ marca.nacionalidade }}
      </span>
      <button class="button1" @click="excluir(marca.id)">X</button>
    </li>
  </ul>
</template>

<style scoped>
.button {
font-family:Arial, Helvetica, sans-serif;
font-size:18px;
border-radius:4px;
padding-left:10px;
padding-right:10px;
padding-top:5px;
padding-bottom:5px;
color:#e5e0d8;
background-color:#725c3a;
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
color:#e5e0d8;
background-color:#809651;
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
color:#e5e0d8;
background-color:#bd9e7e;
outline:none;
border:none;
cursor:pointer;
display:inline-block;
text-decoration: none;
transition: .4s;
}
.form{
  font-family:Arial, Helvetica, sans-serif;
font-size:18px;
border-radius:4px;
padding-left:10px;
padding-right:10px;
padding-top:5px;
padding-bottom:5px;
color:#000000;
background-color:#b3b792;
outline:none;
border:none;
cursor:pointer;
display:inline-block;
text-decoration: none;
transition: .4s;
}
.form1{
  font-family:Arial, Helvetica, sans-serif;
font-size:18px;
border-radius:4px;
padding-left:10px;
padding-right:10px;
padding-top:5px;
padding-bottom:5px;
color:#725c3a;
/* background-color:#e5e0d8; */
outline:none;
border:none;
cursor:pointer;
/* display:inline-block; */
/* text-decoration: none; */
transition: .4s;
}

</style>