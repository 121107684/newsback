<template>
    <div class="col-md-4 content-center">
        <div class="card card-login card-plain">
            <form class="form" method="" action="">
                <div class="header header-primary text-center">
                    <div class="logo-container">
                        <img src="~@/assets/img/logo.png" alt="">
                    </div>
                </div>
                <div class="content">
                    <div class="input-group form-group-no-border input-lg input-row-reverse">
                        <input type="text" class="form-control" placeholder="用户名">
                        <span class="input-group-addon">
                            <i class="now-ui-icons users_circle-08"></i>
                        </span>
                    </div>
                    <div class="input-group form-group-no-border input-lg input-row-reverse">
                        <input type="text" placeholder="密码" class="form-control" />
                        <span class="input-group-addon">
                            <i class="now-ui-icons text_caps-small"></i>
                        </span>
                    </div>
                    <div class="input-group form-group-no-border input-lg input-row-reverse">
                        <input type="text" placeholder="新密码" class="form-control" />
                        <span class="input-group-addon">
                            <i class="now-ui-icons text_caps-small"></i>
                        </span>
                    </div>
                </div>
                <div class="footer text-center">
                    <a href="#pablo" class="btn btn-primary btn-round btn-lg btn-block">确定修改</a>
                </div>
                <!-- <div class="pull-left">
                    <h6>
                        <a href="#pablo" class="link">忘记用户名？点此找回</a>
                    </h6>
                </div> -->
                <div class="pull-right">
                    <h6>
                        <router-link tag="a" class="link" to="/login">返回登录</router-link>
                    </h6>
                </div>
            </form>
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