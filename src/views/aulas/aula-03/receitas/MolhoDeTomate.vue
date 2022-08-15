<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[3].nome }}
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
              video-id="bVVw_gP7Jsg"
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
          <li>Tomates maduros (2000g - 100%)</li>
          <li>Azeite (60ml - 3%)</li>
          <li>Alho (20g - 1%)</li>
          <li>Manjericão fresco (20g - 1,5%)</li>
          <li>Cebola (100g - 5%)</li>
          <li>Salsa (30g - 1,5%)</li>
          <li>Sal (Q.B)</li>
          <li>Pimenta do reino (Q.B)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Método de preparo
        </h3>

        <ol class="lista-numerica">
          <li>
            Retire a pele e as sementes dos tomates, corte em pequenos pedaços e
            reserve. Com o manjericão e a salsa faça um <em>bouquet garnir*</em>.
          </li>

          <li>
            Faça um refogado com o azeite, o alho, a cebola em seguida
            acrescente os tomates e o bouquet garnir. Deixe ferver bem, mexendo
            de vez em quando, até ficar bem grosso. Caso o molho fique ácido,
            acrescente o açúcar.
          </li>
        </ol>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <p>
           <strong>OBS.:</strong> Conservar em vidros limpos e esterilizados. Guardar em geladeira por 12 dias.
        </p>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <small>
          <em>*O bouquet garni também chamado ramo de cheiros, é um conjunto de ervas aromáticas destinado a temperar pratos e molhos em diversas receitas culinárias.</em>
        </small>
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
  title: "Aula 03 - Molho de Tomate",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_4");
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
