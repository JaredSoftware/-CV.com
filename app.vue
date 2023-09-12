<template>
  <div>
    <button @click="handleClick()">hola</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log("¡Haz hecho clic en el botón!");
    },
  }
};
</script>