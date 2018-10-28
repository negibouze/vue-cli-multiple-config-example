<template>
  <div id="app" class="site-frame flex">
    <header class="site-header">
      ヘッダー
    </header>
    <div class="content-frame flex">
      <main class="content-body" role="main">
        <keep-alive>
          <router-view />
        </keep-alive>
      </main>
      <nav class="content-menu" role="navigation">
        <div class="menu-item">
          <router-link to="/">Home</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/about">About</router-link>
        </div>
      </nav>
    </div>
    <footer class="site-footer">
      フッター
    </footer>
  </div>
</template>

<style lang="stylus" scoped>
$menu-height=40px

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.content-menu
  display: flex
  flex-wrap: nowrap
  align-items: stretch
  justify-content: center
  width: 100%
  background-color: #ddd
  height: $menu-height

.menu-item
  flex-grow: 1
  height: 100%
  line-height: $menu-height
  text-align: center
  > a
    display: block
    width: 100%
    height: 100%
    text-decoration: none
    color: #2c3e50
    &.router-link-exact-active
      font-weight: bold
      background-color: #eee
      color: #42b983
</style>
