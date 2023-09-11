<template>
  <div>
    <button @click="handleClick">Haz clic aquí</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('¡Haz hecho clic en el botón!')
    }
  }
}
</script>