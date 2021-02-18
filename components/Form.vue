<template>
  <div>
    <form name="contact" netlify-honeypot="bot-field" action="thank-you" data-netlify="true">
      <input type="hidden" name="form-name" value="contact">
      <p class="hidden" style="display: none;">
        <label>Don’t fill this out: <input name="bot-field"></label>
      </p>
      <p>
        <label>Email: <input type="text" name="name"></label>
      </p>
      <p>
        <label>Message: <textarea name="message" /></label>
      </p>
      <p>
        <button type="submit">
          Send
        </button>
      </p>
    </form>

    <!-- <form role="form" method="POST" @submit.prevent="sendEmail">
      <dl>
        <dt>
          <label>Your Name:</label>
        </dt>
        <dd>
          <input v-model="nameMsg" type="text" name="name" placeholder="Name">
        </dd>
      </dl>
      <dl>
        <dt>
          <label>Your Email:</label>
        </dt>
        <dd>
          <input v-model="emailMsg" type="email" name="_replyto" placeholder="abc@abc.com">
        </dd>
      </dl>
      <dl>
        <dt>
          <label>Message:</label>
        </dt>
        <dd>
          <textarea v-model="messageMsg" name="message" rows="5" placeholder="Message" />
        </dd>
      </dl>
      <dl>
        <dd>
          <input type="submit" :disabled="!nameMsg || !emailMsg || !messageMsg">
        </dd>
      </dl>
      <dl>
        <dd>
          <div v-if="loadingTxt">
            <p class="mb-8 text-primary">
              Delivering your email...
            </p>
          </div>
        </dd>
      </dl>
    </form> -->
  </div>
</template>

<script>
// import axios from 'axios'
// export default {
//   data () {
//     return {
//       nameMsg: '',
//       emailMsg: '',
//       messageMsg: '',
//       loadingTxt: false
//     }
//   },
//   methods: {
//     sendEmail () {
//       this.loadingTxt = true
//       axios
//         .post('https://formspree.io/f/xnqoyqja', {
//           name: this.nameMsg,
//           from: this.emailMsg,
//           _subject: `${this.nameMsg} | Friendly Message from Github Page`,
//           message: this.messageMsg
//         })
//         .then((response) => {
//           this.nameMsg = ''
//           this.emailMsg = ''
//           this.messageMsg = ''
//           this.loadingTxt = false
//           this.$router.push({ path: '/success' })
//         })
//         .catch((error) => {
//           if (error.response) {
//             // eslint-disable-next-line no-alert
//             alert(error.response.data) // => the response payload
//           }
//         })
//     }
//   }
// }
</script>

<style lang="scss" scoped></style>
