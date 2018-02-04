<template>
  <div id="Main">

    <h1>QuickAns Chatbot</h1>
    <h4>
      This chatbot can answer any question about McHacks
    </h4>
    <div>
      <div class="Input" align="center">
        <input type="text" id="input" class="Input-text" v-on:keyup.enter="askQuestion(userInput)" v-model="userInput" placeholder="Ask a question!">
      </div>
    </div>
  </br>
  <table align="center" style="font-size:100%">
    <tr v-for="message in chats">
      {{message}}
    </tr>
  </table>
</div>
</template>
<script src="./mchacks.js">
</script>
<style>
#FAQ {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background: #e6e8ed;
}

#Main{
  background: #e6e8ed;
}

:root {
  /* generic */
  --gutterSm: 0.4rem;
  --gutterMd: 0.8rem;
  --gutterLg: 1.6rem;
  --gutterXl: 2.4rem;
  --gutterXx: 7.2rem;
  --colorPrimary400: #7e57c2;
  --colorPrimary600: #5e35b1;
  --colorPrimary800: #4527a0;
  --fontFamily: "Dosis", sans-serif;
  --fontSizeSm: 1.2rem;
  --fontSizeMd: 1.6rem;
  --fontSizeLg: 2.1rem;
  --fontSizeXl: 2.8rem;
  --fontSizeXx: 3.6rem;
  --lineHeightSm: 1.1;
  --lineHeightMd: 1.8;
  --transitionDuration: 300ms;
  --transitionTF: cubic-bezier(0.645, 0.045, 0.355, 1);

  /* floated labels */
  --inputPaddingV: var(--gutterMd);
  --inputPaddingH: var(--gutterLg);
  --inputFontSize: var(--fontSizeLg);
  --inputLineHeight: var(--lineHeightMd);
  --labelScaleFactor: 0.8;
  --labelDefaultPosY: 50%;
  --labelTransformedPosY: calc(
    (var(--labelDefaultPosY)) -
    (var(--inputPaddingV) * var(--labelScaleFactor)) -
    (var(--inputFontSize) * var(--inputLineHeight))
    );
    --inputTransitionDuration: var(--transitionDuration);
    --inputTransitionTF: var(--transitionTF);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    color: #455A64;
    background-color: #e6e8ed;
    font-family: var(--fontFamily);
    font-size: var(--fontSizeMd);
    line-height: var(--lineHeightMd);
  }

  .Wrapper {
    width: 1000px;
    width: 1000px;
  }

  .Input {
    align: center;
    width: 300px;
    margin : 0 auto;
  }

  .Input-text {
    display: block;
    margin: 0;
    padding: var(--inputPaddingV) var(--inputPaddingH);
    color: inherit;
    width: 100%;
    font-family: inherit;
    text-align: center;
    font-size: var(--inputFontSize);
    font-weight: inherit;
    line-height: var(--inputLineHeight);
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow var(--transitionDuration);
  }

  .Input-text:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem var(--colorPrimary600);
  }

  .Input-text:not(:placeholder-shown) + .Input-label,
  .Input-text:focus:not(:placeholder-shown) + .Input-label {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform:
    translate3d(0, var(--labelTransformedPosY), 0)
    scale(var(--labelScaleFactor));
    transition:
    transform var(--inputTransitionDuration),
    visibility 0ms,
    z-index 0ms;
  }
  </style>
