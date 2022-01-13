<template>
  <footer class="footer">
    © 2021
    <a href="https://tw.stock.yahoo.com/quote/3231.TW" target="_blank">偉創</a>
    | 戶外活動社 (內湖)
  </footer>
</template>

<style lang="scss">
.footer {
  text-align: center;
  padding: 20px 0;
  color: $white;
  background: $dark;
  will-change: transform;
  a {
    color: #ffffa4;
    transition: color 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: yellow;
    }
  }
}
</style>