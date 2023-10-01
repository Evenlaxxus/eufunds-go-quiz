<template>
  <v-container>
    <BaseQuestion :question="questions[0]"></BaseQuestion>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'QuestionsForCountyPage',
  data: () => ({
    questions: [
      {
        name: 'question 1',
        answers: [
          'answer 1',
          'answer 2',
          'answer 3',
          'answer 4'
        ]
      }
    ]
  }),
  mounted() {
    this.fetchQuestions(this.$route.params.county);
  },
  methods: {
    ...mapActions(['fetchQuestions'])
  }
}
</script>
