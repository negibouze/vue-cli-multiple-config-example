<template>
  <div id="app" class="site-frame flex">
    <header class="site-header">
      ヘッダー
    </header>
    <div class="content-frame flex">
      <nav class="content-menu" role="navigation">
        <ul class="no-bullet" style="text-align:center">
          <li class="menu-list-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="menu-list-item">
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
      <main class="content-body" role="main">
        <keep-alive>
          <router-view />
        </keep-alive>
      </main>
    </div>
    <footer class="site-footer">
      フッター
    </footer>
  </div>
</template>

<style lang="stylus" scoped>
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.menu-list-item
  width: 100%
  height: 50px
  line-height: 50px
  &:hover
    background-color: #eee
  > a
    display: block
    width: 100%
    height: 100%
    padding-left: 17px
    text-decoration: none
    color: #2c3e50
    &.router-link-exact-active
      font-weight: bold
      background-color: #eee
      color: #42b983
</style>
