<template>
  <footer class="footer">
    © 2021
    <a href="https://tw.stock.yahoo.com/quote/3231.TW" target="_blank">偉創</a>
    | 戶外活動社 (內湖)
  </footer>
</template>

<style lang="scss" scope>
.footer ::v-deep {
  text-align: center;
  padding: 20px 0;
  color: $white;
  background: $dark;
  will-change: color;
  a {
    color: #ffffa4;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: yellow;
    }
  }
}
</style>