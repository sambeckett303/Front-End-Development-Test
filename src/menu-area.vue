<template>
	<div id="menuContainer">
		<div id="menu"></div>
		<div id="tgrLogo"></div>
		<div id="searchLogo"></div>
		<div id="tgrTVLogo"></div>
	</div>
</template>

<style scoped lang="scss">
	#menuContainer
	{
		position: relative;
		z-index: 1;
	}
	#menu
	{
		width: 25px;
		height: 25px;
		background: url(/img/blocks-white.png) no-repeat;
		background-size: contain;
	    position: absolute;
    	top: 27px;
    	left: 25px;
	}
	#tgrLogo
	{
		width: 76px;
	    height: 30px;
	    background: url(/img/tgrLogo.png) no-repeat;
	    background-size: contain;
	    position: absolute;
	    top: 24px;
	    left: 76px;
	}
	#searchLogo
	{
		width: 25px;
		height: 25px;
		background: url(/img/search.png) no-repeat;
		background-size: contain;
		position: absolute;
		top: 27px;
		right: 25px;
	}
	#tgrTVLogo
	{
		width: 180px;
	    height: 65px;
	    background: url(/img/tgrTV.png) no-repeat;
	    background-size: contain;
	    position: absolute;
	    top: 80px;
	    left: 50%;
	    transform: translateX(-50%);
	}
</style>