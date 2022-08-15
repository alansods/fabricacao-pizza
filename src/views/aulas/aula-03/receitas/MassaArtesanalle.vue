<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[2].nome }}
      </h3>
      <!-- <div class="container-icones">
        <div class="icone">
          <img
            src="../../../../assets/img/icones-receitas/tempo-de-preparo.png"
          />
          <span>25min</span>
        </div>

        <div class="icone">
          <img src="../../../../assets/img/icones-receitas/porcoes.png" />
          <span>8 porções de 150g</span>
        </div>

        <div class="icone">
          <img src="../../../../assets/img/icones-receitas/dificuldade.png" />
          <span>fácil</span>
        </div>
      </div> -->
      <hr class="border-t-1 border-gray-300 my-5" />
      <div class="mt-10">
        <div class="rounded-lg">
          <div id="video-apresentacao" class="aspect-w-16 aspect-h-9">
            <youtube
              video-id="O8vX3uqmyh8"
              class="border-white border-4 shadow-xl rounded-sm"
              @ended="ended"
            />
          </div>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Ingredientes
        </h3>

        <ul class="lista-check mb-0">
          <li>Farinha de trigo (450g - 100%)</li>
          <li>Água (75g - 50%)</li>
          <li>Sal (10g - 2%)</li>
          <li>Fermento biológico (23g - 4%)</li>
          <li>Açúcar cristal (23g - 2%)</li>
          <li>Azeite (36g - 5%)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Método de preparo
        </h3>

        <ol class="lista-numerica mb-0">
          <li>
            Misturar todos os ingredientes e colocar em um recipiente,
            acrescentar a farinha de trigo e sovar bem a massa até que solte das
            mãos e fique lisa e elástica.
          </li>

          <li>
            Colocar em superfície enfarinhada, cobrir e descansar por trinta
            minutos ou até dobrar de volume.
          </li>

          <li>
            Dividir a massa conforme a instrução do professor, boleie e deixe
            descansar por 15 minutos.
          </li>

          <li>
            Abrir os discos com um rolo formando um disco, colocar em formas
            enfarinhadas (pincelar com uma camada de molho e rechear ou
            pré-assar conforme necessidade).
          </li>

          <li>
            Levar ao forno pré-aquecido a 220 ° C durante 5 a 7 minutos, rechear
            o quanto baste.
          </li>
        </ol>
      </div>

      

      <button
        @click.prevent="$router.push('/aula-03')"
        class="mx-auto bg-primary-color xl:hover:bg-primary-color-hover xl:transform xl:hover:-translate-y-1 xl:transition-all h-12 w-full md:w-60 rounded-lg text-white flex justify-center items-center"
      >
        <v-icon class="icone-setas mr-3" name="arrow-left" />
        Voltar para receitas
      </button>
    </div>
  </div>
</template>

<script>
export default {
  title: "Aula 03 - Receitas: Massa Artesanalle",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_3");
    },
  },
  created() {
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", false);
    this.$store.commit("ESTA_NA_AULA_2", false);
    this.$store.commit("ESTA_NA_AULA_3", true);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
  },
};
</script>

<style scoped>
.container-icones {
  display: flex;
  gap: 10px;
  justify-content: center;
  max-width: 500px;
  margin: 12px auto;
}

.icone {
  display: flex;
  justify-content: center;
}

.icone span {
  font-size: 1rem;
}

.icone img {
  width: auto;
  height: 17px;
  margin-right: 5px;
}

svg {
  fill: white;
}
</style>
