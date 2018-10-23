<template>
	<div v-if="active" class="videoPlayerWrapper">
		<div class="closeIcon" @mousedown.stop="$emit('close')"></div>
		<div v-if="video.type == 'html5'">
			<video width="375" class="video" controls>
			  <source :src="video.src" type="video/mp4">
			  Your browser does not support HTML5 video.
			</video>
		</div>
		<div v-else>
			<iframe width="375" :src="video.src"></iframe>
		</div>
	</div>
</template>

<script>
	export default
	{
		name: 'video-player',
		props:
		{
			active: Boolean,
			video: Object
		}
	}
</script>

<style scoped lang="scss">
	.videoPlayerWrapper
	{
	    position: relative;
    	background: rgba(0, 0, 0, 0.5);
    	z-index: 1000;

	    div
	    {
	    	position: relative;
    		height: 667px;
	    }

	    .video
	    {
	    	position: absolute;
		    top: 50%;
		    transform: translateY(-50%);
	    }

	    .closeIcon
	    {
	    	width: 40px;
	    	height: 40px;
	    	background: url(/img/closeIcon.png) no-repeat;
	    	background-size: contain;
	    	position: absolute;
	    	top: 15px;
	    	right: 15px;
	    	z-index: 1001;
	    }
	}
</style>