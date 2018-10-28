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
      <nav class="content-menu flex" role="navigation">
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

.flex
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  align-items: stretch
  justify-content: flex-start

.site-frame
  width: 100%
  height: 100%

.site-header
  flex-grow: 0
  flex-basis: 60px
  width: 100%
  min-height: 60px
  background-color: #ccc

.site-footer
  flex-grow: 0
  flex-basis: 40px
  width: 100%
  min-height: 40px
  background-color: #ccc

.content-frame
  flex-grow: 1
  width: 100%

.content-body
  flex-grow: 1
  flex-shrink: 1
  min-width: 0
  width: 100%
  padding: 0 5px
  background-color: #eee
  text-align: center
  overflow: scroll

.content-menu
  flex-grow: 0
  flex-shrink: 0
  flex-basis: $menu-height
  width: 100%
  background-color: #ddd

.content-menu.flex
  flex-direction: row
  justify-content: center

.menu-list.flex
  flex-direction: row

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
