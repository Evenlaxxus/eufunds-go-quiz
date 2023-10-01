<template>
  <v-container>
    <div
      v-if="displayedQuestion"
    >
      <BaseQuestion
        :question="displayedQuestion"
        @select-answer="submitQuestion"
      ></BaseQuestion>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'QuestionsForCountyPage',
  data: () => ({
    displayedQuestion: '',
    currentIndex: 0
  }),
  computed: {
    ...mapGetters(['getQuestions', 'getAnswers'])
  },
  mounted() {
    const fetchData = async () => {
      await this.fetchQuestions(this.$route.params.county);
      this.displayedQuestion = this.getQuestions[this.currentIndex];
    }

    fetchData();
  },
  methods: {
    ...mapActions(['fetchQuestions', 'addAnswer']),

    submitQuestion(answer) {
      this.addAnswer({
        question: this.displayedQuestion.question,
        answer: answer.id
      });

      setTimeout(() => {
        this.currentIndex += 1;
        if (this.currentIndex < this.getQuestions.length - 1) {
          this.displayedQuestion = this.getQuestions[this.currentIndex];
        } else {
          this.$router.push('/score');
        }
      }, 800);


    }
  }
}
</script>
