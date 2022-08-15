import Vue from "vue";
import VueRouter from "vue-router";

import Apresentacao from "@/views/Apresentacao.vue";
import Aula01Introducao from "@/views/aulas/aula-01/Aula01Introducao.vue";
import Aula02Introducao from "@/views/aulas/aula-02/Aula02Introducao.vue";
import Aula03Introducao from "@/views/aulas/aula-03/Aula03Introducao.vue";

import Receitas from "@/views/aulas/aula-03/Receitas.vue";
import MassaProfissional from "@/views/aulas/aula-03/receitas/MassaProfissional.vue";
import MassaArtesanalle from "@/views/aulas/aula-03/receitas/MassaArtesanalle.vue";
import Portuguesa from "@/views/aulas/aula-03/receitas/Portuguesa.vue";
import MolhoDeTomate from "@/views/aulas/aula-03/receitas/MolhoDeTomate.vue";
import CarneDeSol from "@/views/aulas/aula-03/receitas/CarneDeSol.vue";
import MassaTradicionalBasica from "@/views/aulas/aula-03/receitas/MassaTradicionalBasica.vue";
import Calabresa from "@/views/aulas/aula-03/receitas/Calabresa.vue";
import Mussarela from "@/views/aulas/aula-03/receitas/Mussarela.vue";
import Marguerita from "@/views/aulas/aula-03/receitas/Marguerita.vue";
import FrangoComRequeijao from "@/views/aulas/aula-03/receitas/FrangoComRequeijao.vue";
import Chocolate from "@/views/aulas/aula-03/receitas/Chocolate.vue";
import BananaComDoceDeLeite from "@/views/aulas/aula-03/receitas/BananaComDoceDeLeite.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Apresentacao",
    component: Apresentacao,
  },
  {
    path: "/aula-01",
    name: "Aula 01 - Boas práticas na fabricação de alimentos (BPF)",
    component: Aula01Introducao,
  },
  {
    path: "/aula-02",
    name: "Aula 02 - Conhecendo os utensílios",
    component: Aula02Introducao,
  },
  {
    path: "/aula-03",
    name: "Aula 03 - Receitas",
    component: Aula03Introducao,
    children: [
      {
        path: "",
        name: "Aula 03 - Receitas",
        component: Receitas,
      },
      {
        path: "massa-tradicional-basica",
        name: "Aula 03 - Receita: Massa Tradicional Básica",
        component: MassaTradicionalBasica,
      },
      {
        path: "massa-profissional",
        name: "Aula 03 - Receita: Massa Profissinal",
        component: MassaProfissional,
      },
      {
        path: "massa-artesanalle",
        name: "Aula 03 - Receita: Massa Artesanalle",
        component: MassaArtesanalle,
      },
      {
        path: "molho-de-tomate",
        name: "Aula 03 - Receita: Molho de Tomate",
        component: MolhoDeTomate,
      },
      {
        path: "mussarela",
        name: "Aula 03 - Receita: Mussarela",
        component: Mussarela,
      },
      {
        path: "calabresa",
        name: "Aula 03 - Receita: Calabresa",
        component: Calabresa,
      },
      {
        path: "carne-de-sol",
        name: "Aula 03 - Receita: Carne de Sol",
        component: CarneDeSol,
      }, 
      {
        path: "portuguesa",
        name: "Aula 03 - Receita: Portuguesa",
        component: Portuguesa,
      },
      {
        path: "marguerita",
        name: "Aula 03 - Receita: Marguerita",
        component: Marguerita,
      },
      {
        path: "frango-com-catupiry",
        name: "Aula 03 - Receita: Frango com Catupiry",
        component: FrangoComRequeijao,
      },
      {
        path: "chocolate",
        name: "Aula 03 - Receita: Chocolate",
        component: Chocolate,
      },
      {
        path: "banana-com-doce-de-leite",
        name: "Aula 03 - Receita: Banana com Doce de Leite",
        component: BananaComDoceDeLeite,
      },
    ],
  },
];

const router = new VueRouter({
  //mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

//salvar ultima pagina visitada ao reabrir o site
router.afterEach((to) => {
  localStorage.setItem("router-fabricacao-de-pizza", to.name);
});

let isFirstTransition = true;
router.beforeEach((to, from, next) => {
  const lastRouteName = localStorage.getItem("router-fabricacao-de-pizza");
  const shouldRedirect = Boolean(
    to.name === "Apresentacao" && lastRouteName && isFirstTransition
  );

  if (shouldRedirect && to.name !== from.name) {
    isFirstTransition = false;
    next({ name: lastRouteName });
    console.log("pegou o localstorage");
  } else {
    next();
    console.log("Navegou normal sem reabrir a aba");
  }
});

export default router;
