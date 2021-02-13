<template>
  <section>
    <h1>Contact</h1>
    <form role="form" method="POST" @submit.prevent="sendEmail">
      <!--NAME -->
      <dl>
        <dt>
          <label>Your Name:</label>
        </dt>
        <dd>
          <input v-model="nameMsg" type="text" name="name" placeholder="Name">
        </dd>
      </dl>
      <!--EMAIL -->
      <dl>
        <dt>
          <label>Your Email:</label>
        </dt>
        <dd>
          <input v-model="emailMsg" type="email" name="_replyto" placeholder="abc@abc.com">
        </dd>
      </dl>
      <!--MESSAGE-->
      <dl>
        <dt>
          <label>Message:</label>
        </dt>
        <dd>
          <textarea v-model="messageMsg" name="message" rows="5" placeholder="Message" />
        </dd>
      </dl>
      <!--SUBMIT BUTTON-->
      <dl>
        <dd>
          <input type="submit" :disabled="!nameMsg || !emailMsg || !messageMsg">
        </dd>
      </dl>
      <!--LOADING MESSAGE-->
      <dl>
        <dd>
          <div v-if="loadingTxt">
            <p class="mb-8 text-primary">
              Delivering your email...
            </p>
          </div>
        </dd>
      </dl>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      nameMsg: '',
      emailMsg: '',
      messageMsg: '',
      loadingTxt: false
    }
  },
  methods: {
    sendEmail () {
      this.loadingTxt = true
      axios.post('https://formspree.io/f/xnqoyqja', {
        name: this.nameMsg,
        from: this.emailMsg,
        _subject: `${this.nameMsg} | Friendly Message from Github Page`,
        message: this.messageMsg
      }).then((response) => {
        this.nameMsg = ''
        this.emailMsg = ''
        this.messageMsg = ''
        this.loadingTxt = false
        this.$router.push({ path: '/success' })
      }).catch((error) => {
        if (error.response) {
          // eslint-disable-next-line no-alert
          alert(error.response.data) // => the response payload
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

