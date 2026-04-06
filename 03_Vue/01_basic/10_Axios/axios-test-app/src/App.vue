<template>
  <!-- <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->
  <div><button @click="requestAxios">axios 버튼</button></div>
  <div><button @click="requestFetch">fetch 버튼</button></div>
</template>

<script setup>
import axios from 'axios';

const url = 'http://localhost:3000';

// axios.ger()은 비동기함수이기 때문에 결과를 바로 반환하지 않고 Promise 객체를 반환
// const response = axios.get(url);
// console.log('response', response);

const requestAxios = () => {
  axios.get(url).then((response) => {
    console.log(`[axios] 응답객체 : `, response);
    console.log(`[axios] 응답객체 : `, response.data);
  });
};

const requestFetch = () => {
  fetch(url)
    .then((response) => response.json()) //역직렬화
    .then((data) => {
      console.log('[fetch] 응답: ', data);
    });
};
</script>

<style scoped></style>
