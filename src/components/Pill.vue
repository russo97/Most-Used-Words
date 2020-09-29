<template>
  <div class="pill">
      <span class="name">{{ name }}</span>
      <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
    props: ['name', 'amount']
}
</script>

<style scoped>
    .pill {
        display: flex;
        align-items: center;
        height: 55px;
        margin: 10px;
        color: #fff;
        font-size: 1.3rem;
        font-weight: bold;
        border-radius: 30px;
        background-color: #dc143c;
    }

    .pill .name {
        margin-left: 15px;
    }

    .pill .amount {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        padding: 5px;
        width: 35px;
        height: 35px;
        color: #dc143c;
        background-color: #fff;
        border-radius: 18px;
        font-size: 14px;
    }
</style>