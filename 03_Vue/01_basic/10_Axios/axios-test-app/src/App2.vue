<template>
  <!-- <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->
  <div><button @click="requestAxios">axios 버튼</button></div>
</template>

<script setup>
import axios from 'axios';

const url = '/api/todos';
const data = {
  todo: 'Await  윗몸일으키기',
  desc: '너무 빠르지 않게 ...',
};

// const requestAxios = () => {
//   axios.post(url, data).then((response) => {
//     console.log(`[axios] 응답객체 : `, response);
//     console.log(`[axios] 응답객체 : `, response.data);
//   });
// };

//async await 사용
const requestAxios = async () => {
  const response = await axios.post(url, data);
  console.log('응답 데이터: ', response);
};
</script>

<style scoped></style>
