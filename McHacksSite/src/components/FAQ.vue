<template>
<div id="FAQ">
  <p>
    Ask McHacks any question
  </p>
  <input type="text" v-model="userInput" placeholder="ask a question">
  <button v-on:click="askQuestion(userInput)">CLICK ME</button></br>
  <p>
    {{message}}
  </p>
</div>
</template>
<script src="./mchacks.js">
</script>
<style>
#FAQ {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	color: #2c3e50;
	background: #a8ddff;
}
</style>
