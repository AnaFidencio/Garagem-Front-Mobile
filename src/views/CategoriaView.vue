<script setup>
import { ref, reactive, onMounted } from "vue";
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();

const defaultCategoria = { id: null, descricao: "" };
const categorias = ref([]);
const categoria = reactive({ ...defaultCategoria });

onMounted(async () => {
  categorias.value = await categoriasApi.buscarTodasAsCategorias();
});

function limpar() {
  Object.assign(categoria, { ...defaultCategoria });
}

async function salvar() {
  if (categoria.id) {
    await categoriasApi.atualizarCategoria(categoria);
  } else {
    await categoriasApi.adicionarCategoria(categoria);
  }
  categorias.value = await categoriasApi.buscarTodasAsCategorias();
  limpar();
}

function editar(categoria_para_editar) {
  Object.assign(categoria, categoria_para_editar);
}

async function excluir(id) {
  await categoriasApi.excluirCategoria(id);
  categorias.value = await categoriasApi.buscarTodasAsCategorias();
  limpar();
}
</script>

<template >
  <h1>Categoria</h1>
  <div class="form">
    <input class="form1" type="text" v-model="categoria.descricao" placeholder="Descrição" />
    <button class="button2" @click="salvar">Salvar</button>
    <button class="button" @click="limpar">Limpar</button>
  </div>
  <ul>
    <li v-for="categoria in categorias" :key="categoria.id">
      <span @click="editar(categoria)">
        ({{ categoria.id }}) - {{ categoria.descricao }} -
      </span>
      <button class="button1" @click="excluir(categoria.id)">X</button>
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