<template>
    <div id="appWrapper">
        <div v-if="showIphone" id="iphone"></div>
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
        beforeMount: function()
        {
            this.configureSize();
            window.addEventListener('resize', this.configureSize);
        },
        methods:
        {
            configureSize: function()
            {
                var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                if (w <= 450)
                {
                    this.showIphone = false; 
                }
                else
                {
                    this.showIphone = true;
                }
            }
        },
        beforeDestroy: function ()
        {
          window.removeEventListener('resize', this.configureSize);
        },
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
    
    #appWrapper
    {
        width: 450px;
        height: 750px;
        margin: 0 auto;
        position: relative;
    }
    #iphone
    {
        width: 413px;
        height: 854px;
        background: url(/img/iphone.png);
        background-size: contain;
        margin: 0 auto;
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
    }
</style>