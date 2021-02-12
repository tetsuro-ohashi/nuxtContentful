<template>
  <section>
    <form role="form" method="POST" @submit.prevent="sendEmail">
      <!--NAME -->
      <label>Your Name:</label>
      <input type="text" name="name"placeholder="Name" v-model="nameMsg"/>
      <!--EMAIL -->
      <label>Your Email:</label>
      <input type="email" name="_replyto" placeholder="abc@abc.com" v-model="emailMsg"/>
      <!--MESSAGE-->
      <label>Message:</label>
      <textarea name="message" rows="5" placeholder="Message" v-model="messageMsg"></textarea>
      <!--SUBMIT BUTTON-->
      <input type="submit" :disabled="!nameMsg || !emailMsg || !messageMsg"/>
      <!--LOADING MESSAGE-->
      <div v-if="loadingTxt">
        <p class="mb-8 text-primary">Delivering your email...</p>
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
  return {
      nameMsg: '',
      emailMsg: '',
      messageMsg: '',
      loadingTxt: false,
      };
  },
  methods: {
    sendEmail() {
      this.loadingTxt= true;
      axios.post('https://formspree.io/f/xnqoyqja',{
        name: this.nameMsg,
        from: this.emailMsg,
        _subject: `${this.nameMsg} | Friendly Message from Github Page`,
        message: this.messageMsg,
      },).then((response) => {
          this.nameMsg = '';
          this.emailMsg = '';
          this.messageMsg = '';
          this.loadingTxt = false;
          //i redirect my app to '/success' route once payload completed.
          this.$router.push({ path: '/success' });
        }).catch((error) => {
        if (error.response) {
          // eslint-disable-next-line no-alert
          alert(error.response.data); // => the response payload
        }
      });
    },
  },
};
</script>
