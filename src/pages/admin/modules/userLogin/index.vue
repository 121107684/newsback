<template>
<div class="login-page sidebar-collapse">
    <!-- Navbar -->
    <nav class="navbar fixed-top">
        <div class="container">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="http://lyxh.dev.jingbaotech.com/web.html">打开网站</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="page-header" filter-color="orange">
        <div class="page-header-image"></div>
        <div class="container">
            <router-view></router-view>
        </div>
        <footer class="footer">
            <div class="container">
                Designed by InterNet. Coded by Little local tyrant.
            </div>
        </footer>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
@import '~@/assets/css/bootstrap.min.css';
@import '~@/assets/sass/now-ui-kit.scss';

</style>
