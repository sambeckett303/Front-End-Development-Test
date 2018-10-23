<template>
	<div :class="[getCardClass, video.type]" :style="{ left: video.left, top: video.top }">
		<img class="cardPreview" :src="video.previewImg">
		<div class="playButton"></div>
		<div class="sportArea" :class="[video.type]">
			<div class="sportLabel">{{video.type}}</div>
			<div class="timeLabel">{{video.length}}</div>
		</div>
		<h1>{{video.title}}</h1>
	</div>
</template>

<script>
	export default
	{
		name: 'browser-card',
		props:
		{
			index: Number,
			video: Object
		},
		computed:
		{
			getCardClass: function()
			{
				if (this.index % 3 == 0)
				{
					return "primaryCard";
				}
				else
				{
					return "secondaryCard";
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	$snowblue: #2196f3;
    $dirtyellow: yellow;

    .playButton
    {
    	width: 30px;
	    height: 35px;
	    background: url(/img/play-no-ring.png) no-repeat;
	    background-size: contain;
	    margin: 0 auto;
	    position: absolute;
	    left: 50%;
	    transform: translateX(-50%);
    }
	.primaryCard
	{
		width: 295px;
	    height: 375px;
	    position: absolute;
	    border-radius: 3px;
	    
	    .sportArea
	    {
	    	width: 162px;
		    position: absolute;
		    top: 263px;
		    left: 22px; 
	    }

	    .playButton
	    {
	    	top: 151px;
	    }
	}
	.secondaryCard
	{
		position: absolute;
	    width: 222px;
	    height: 180px;

	    .sportArea
	    {
	    	width: 162px;
		    position: absolute;
		    top: 105px;
    		left: 10px;
	    }
	    h1
	    {
	    	bottom: 7px;
		    font-size: 14px;
		    left: 9px;
	    }
	    .playButton
	    {
	    	top: 50%;
    		transform: translate(-50%,-50%);
	    }
	}
	.primaryCard,
	.secondaryCard
	{
		.SNOW
		{
			border-bottom: 1px solid $snowblue;
		}
		&.SNOW
	    {
	    	border-top: 3px solid $snowblue;
	    }
	    .DIRT
	    {
	    	border-bottom: 1px solid $dirtyellow;
	    }
	    &.DIRT
	    {
	    	border-top: 3px solid $dirtyellow;
	    }
	}
	h1
    {
	    position: absolute;
	    bottom: 35px;
	    font-size: 20px;
	    left: 20px;
	    color: #FFF;
	    font-family: myGraphik;
    }
	.cardPreview
	{
		object-fit: cover;
	    width: 100%;
	    height: 100%;
	}
	.sportArea
    {
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
</style>