<template>
  <div class="landing">
    <div class="landing_intro">
      <img
        class="logo_banner"
        :src="require('@/assets/imgs/mainLogo.png')"
        alt="outdoor"
      />
      <div class="intro_content">
        緯創戶外活動社 將於2023年開幕<br />
        敬請期待
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing ::v-deep {
  .landing_intro {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    .logo_banner {
      max-width: 640px;
    }
    .intro_content {
      color: white;
      font-size: 2em;
      margin-top: 20px;
    }
  }
}
</style>