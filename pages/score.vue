<template>
  <v-container>
    <h2>Dobra robota!!</h2>
    <p>Twoj wynik to: {{ getScore }}</p>
    <v-row v-for="(answer, index) in getAnswers" :key="index">
      <v-col>
        <p>Twoje odpowiedzi:</p>
        <v-row>
          {{ answer.question }}
        </v-row>
        <v-row>
          <v-col>
            Twoja odpowiedź: {{ answer.answerText }}
          </v-col>
          <v-col>
            Poprawna odpowiedź: {{ getCorrectAnswer(answer.question) }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'ScorePage',

  computed: {
    ...mapGetters(['getQuestions', 'getAnswers']),

    getScore() {
      return this.getAnswers.reduce((acc, answer) => {
        const question = this.getQuestions.find(question => question.question === answer.question);
        return question.correct_answer_id === answer.answer ? acc + 1 : acc;
      }, 0);
    }
  },

  methods: {
    getCorrectAnswer(question) {
      const questionObject = this.getQuestions.find(q => q.question === question);
      const correctAnswerId = questionObject?.correct_answer_id || '';
      return questionObject?.answers.find(q => q.id === correctAnswerId)?.answer || '';
    }
  }
}

</script>
