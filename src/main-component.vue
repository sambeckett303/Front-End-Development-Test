<template>
    <div id="appWrapper">
        <div id="iphone"></div>
        <div id="phoneAppWrapper">
            <phone-app></phone-app>
        </div>
    </div>
</template>

<script>
    import PhoneApp from './phone-app.vue'
    export default
    {
        name: "main-component",
        data: () => ({
            showIphone: true,
        }),
        components:
        {
            PhoneApp
        }
    }
</script>

<style lang="scss">

    /* Global CSS */

    $snowblue: #2196f3;
    $dirtyellow: yellow;
    
    html
    {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
    body
    {
        margin: 0;
    }

    #appWrapper
    {
        width: 450px;
        height: 750px;
        margin: 0 auto;
        position: relative;

        @media screen and (max-width: 450px) {
            width: 100%;
        }

        @media screen and (max-width: 375px) {
            width: 375px;
        }
    }
    #iphone
    {
        width: 413px;
        height: 854px;
        background: url(/img/iphone.png);
        background-size: contain;
        margin: 0 auto;

        @media screen and (max-width: 450px) {
            display: none;
        }
    }
    #phoneAppWrapper
    {
        width: 375px;
        height: 667px;
        background: grey;
        position: absolute;
        top: 97px;
        left: 38px;
        overflow: hidden;

        @media screen and (max-width: 450px) {
            top: 0px;
            right: 0px;
            left: 0px;
            margin: 0 auto;
        }
    }
</style>