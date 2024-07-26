<script setup>
import { ref, reactive, onMounted } from "vue";
import AcessoriosApi from "@/api/acessorios";
const acessoriosApi = new AcessoriosApi();

const defaultAcessorio = { id: null, descricao: "" };
const acessorios = ref([]);
const acessorio = reactive({ ...defaultAcessorio });

onMounted(async () => {
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios();
});

function limpar() {
  Object.assign(acessorio, { ...defaultAcessorio });
}

async function salvar() {
  if (acessorio.id) {
    await acessoriosApi.atualizarAcessorio(acessorio);
  } else {
    await acessoriosApi.adicionarAcessorio(acessorio);
  }
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios();
  limpar();
}

function editar(acessorio_para_editar) {
  Object.assign(acessorio, acessorio_para_editar);
}

async function excluir(id) {
  await acessoriosApi.excluirAcessorio(id);
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios();
  limpar();
}
</script>

<template>
  <h1>Acessorios</h1>
 
  <div class="form">
    <input class="form1" type="text" v-model="acessorio.descricao" placeholder="Descrição" />
    <button class="button2" @click="salvar">Salvar</button>
    <button class="button" @click="limpar">Limpar</button>
  </div>
 
  <ul>
    <li v-for="acessorio in acessorios" :key="acessorio.id">
      <span @click="editar(acessorio)">
        ({{ acessorio.id }}) - {{ acessorio.descricao }} -
      </span>
      <button class="button1" @click="excluir(acessorio.id)">X</button>
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