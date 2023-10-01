<template>
  <v-container>
    <v-row justify="center" class="mb-2">
      {{ question.question }}
    </v-row>
    <v-row justify="center" align="center">
      <v-col
        v-for="(answer, index) in question.answers"
        :key="index"
        cols="12"
        sm="5"
        class="d-flex justify-center elevation-10 ma-2"
        @click="selectAnswer(answer)"
      >
        {{ answer.answer }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BaseQuestion',
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectAnswer(answer) {

      this.$emit('select-answer', answer);
    }
  }
}
</script>
