<template>
	<div class="cardContainer" :style="{ left: video.left }" :class="[video.type]">
		<transition name="fade">
			<div v-if="video.active">
				<div class="playButton" @mousedown.stop="$emit('playVideo', video)"></div>
				<div class="sportArea" :class="[video.type]">
					<div class="sportLabel">{{video.type}}</div>
					<div class="timeLabel">{{video.length}}</div>
				</div>
				<h1>{{video.title}}</h1>
				<div class="videoDescription">{{video.description}}</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default
	{
		name: 'slideshow-card',
		props:
		{
			video: Object
		}
	}
</script>

<style scoped lang="scss">
	$snowblue: #2196f3;
    $dirtyellow: yellow;
	@font-face {
		font-family: myCircular;
		src: url(/font/CircularStd-Book.woff) format("woff"),
			 url(/font/CircularStd-Book.ttf) format("truetype");
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}

	@font-face
	{
		font-family: myGraphik;
		src: url(/font/Graphik-Semibold.woff) format("woff"), 
			 url(/font/Graphik-Semibold.otf) format("opentype");
		 -moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}

	@font-face
	{
		font-family: myCompacta;
		src: url(/font/CompactaBT-Roman.woff) format("woff"),
			 url(/font/CompactaBT-Roman.ttf) format("truetype");
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}

	fade-enter-active, .fade-leave-active {
	  transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1);
	}
	.fade-enter-to, .fade-leave
	{
		opacity: 1;
	}
	.fade-enter, .fade-leave-to
	{
	  opacity: 0;
	}

	.cardContainer
	{
		position: absolute;
	    top: 166px;
	    width: 300px;
	    height: 420px;
	    box-shadow: 0px 0px 35px rgba(0,0,0,.5);
	    border-radius: 3px;
	    transition: left 2.5s cubic-bezier(0.19, 1, 0.22, 1);

		.SNOW
		{
			border-bottom: 1px solid $snowblue;
		}
		&.SNOW
		{
			border-top: 4px solid $snowblue;
		}

		.DIRT
		{
			border-bottom: 1px solid $dirtyellow;
		}
		&.DIRT
		{
			border-top: 4px solid $dirtyellow;
		}

	    h1
	    {
	    	color: #FFFFFF;
		    font-family: myGraphik;
		    font-size: 26px;
		    text-align: center;
		    position: relative;
		    top: 230px;
	    }

	    .playButton
	    {
	    	width: 30px;
		    height: 35px;
		    background: url(/img/play-no-ring.png) no-repeat;
		    background-size: contain;
		    margin: 0 auto;
		    position: absolute;
		    top: 151px;
		    left: 50%;
		    transform: translateX(-50%);
	    }

	    .videoDescription
	    {
	    	color: #FFFFFF;
		    font-family: myCircular;
		    text-align: center;
		    font-size: 14px;
		    width: 267px;
		    margin: 0 auto;
		    position: relative;
		    top: 217px;
	    }

	    .sportArea
	    {
	    	width: 162px;
		    margin: 0 auto;
		    position: relative;
		    top: 233px;

		    .sportLabel
		    {
		    	font-family: myCompacta;
		    	display: inline-block;
			    color: #FFFFFF;
			    font-size: 14px;
		    }

		    .timeLabel
		    {
		    	font-family: myGraphik;
			    font-size: 10px;
			    color: #FFFFFF;
			    float: right;
			    position: relative;
			    top: 5px;
		    }
		}
	}
</style>