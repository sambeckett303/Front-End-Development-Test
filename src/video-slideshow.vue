<template>
	<div>
		<transition-group :name="currentTransition">
			<img v-for="video in videos" v-bind:key="video.title" v-if="video.active" class="videoPreview" :src="video.previewImg">
		</transition-group>
		<div class="fader"></div>
		<template v-for="video in videos">	
			<slideshow-card :video="video" @playVideo="playVideo"></slideshow-card>
		</template>
		<div class="videoControls prevVid" @click.stop="prevVideo">
			<div class="leftArrow"></div>
			<div class="text">PREV VIDEO</div>
		</div>
		<div class="shuffleButton"></div>
		<div class="videoControls nextVid" @click.stop="nextVideo">
			<div class="text">NEXT VIDEO</div>
			<div class="rightArrow"></div>
		</div>
		<video-player :active="videoActive" :video="videoToPlay" @close="stopVideo"></video-player>
	</div>
</template>

<script>
	import SlideshowCard from './slideshow-card.vue'
	import VideoPlayer from './video-player.vue'
	export default
	{
		name: 'video-slideshow',
		props:
		{
			top: String,
			videos: Array
		},
		data: () => ({
			currentTransition: 'next',
			videoActive: false,
			videoToPlay: {}
		}),
		methods:
		{
			playVideo: function(video)
			{
				this.videoActive = true;
				this.videoToPlay = video.video;
			},
			stopVideo: function()
			{
				this.videoActive = false;
			},
			nextVideo: function()
			{
				this.currentTransition = 'next';
				for (var i = 0; i < this.videos.length; i++)
				{
					if (this.videos[i].active && i != this.videos.length - 1)
					{
						this.videos[i].active = false;
						this.videos[i].left = "-277.5px";
						if (this.videos[i - 1])
						{
							this.videos[i-1].left = "-500px";
						}
						this.videos[i+1].active = true;
						this.videos[i+1].left = "37.5px";
						if (this.videos[i+2])
						{
							this.videos[i+2].left = "352px";
						}
						break;
					}
				}
			},
			prevVideo: function()
			{
				this.currentTransition = 'prev';
				for (var i = 0; i < this.videos.length; i++)
				{
					if (this.videos[i].active && i != 0)
					{
						this.videos[i].active = false;
						this.videos[i].left = "352px";
						this.videos[i-1].active = true;
						this.videos[i-1].left = "37.5px";
						if (this.videos[i-2])
						{
							this.videos[i-2].left = "-277.5px";
						}
						if (this.videos[i+1])
						{
							this.videos[i+1].left = "500px";
						}
						
						break;
					}
				}
			}
		},
		components:
		{
			SlideshowCard,
			VideoPlayer
		}
	}
</script>

<style scoped lang="scss">
	@font-face
	{
		font-family: myNittiBasic;
		src: url(/font/NittiBasic-Black.woff) format("woff"),
			 url(/font/NittiBasic-Black.ttf) format("truetype");
	}
	.videoPreview
	{
		width: 450px;
	    height: 667px;
	    object-fit: cover;
	    object-position: left;
	    position: absolute;
	    top: 0;
	    left: -50px;
	}
	.fader
	{
		position: absolute;
	    left: 0;
	    top: 0;
	    width: 375px;
	    height: 667px;
	    background-image: linear-gradient(to bottom, rgba(0, 0,0, 0), rgba(0, 0,0, .6));
	}
	.videoControls
	{
		position: absolute;
	    bottom: 18px;
	    padding: 10px 0px;
	    cursor: pointer;

		.text
		{
			font-family: myNittiBasic;
		    color: #FFFFFF;
		    font-size: 12px;
		    display: table-cell;
		    vertical-align: middle;
		    padding: 0px 15px;
		}

		.rightArrow,
		.leftArrow
		{
			background: url(/img/arrow.png) no-repeat;
		    background-size: contain;
		    width: 16px;
		    display: table-cell;
		    vertical-align: middle;
		}

		.rightArrow
		{
		    position: relative;
    		top: 1px;
		}

		.leftArrow
		{
			transform: rotate(180deg);
			position: relative;
    		bottom: 1px;
		}
	}
	.nextVid
	{
		right: 25px;
	}

	.prevVid
	{
		left: 25px;
	}
	.shuffleButton
	{
		width: 30px;
	    height: 24px;
	    background: url(/img/shuffle.png) no-repeat;
	    background-size: contain;
	    position: absolute;
	    bottom: 23px;
	    left: 50%;
	    transform: translateX(-50%);
	}

	.next-enter
	{
		opacity: 0 !important;
		transform: translateX(5%) !important;
	}
	.next-leave-to
	{
		opacity: 0;
		transform: translateX(-5%);
	}
	.next-enter-to,
	.next-leave
	{
		opacity: 1;
		transform: translateX(0%);
	}
	.next-enter-active,
	.next-leave-active
	{
	  transition: all 2.5s;
	}


	.prev-enter
	{
		opacity: 0 !important;
		transform: translateX(-5%) !important;
	}
	.prev-leave-to
	{
		opacity: 0;
		transform: translateX(5%);
	}
	.prev-enter-to,
	.prev-leave
	{
		opacity: 1;
		transform: translateX(0%);
	}
	.prev-enter-active,
	.prev-leave-active
	{
	  transition: all 1.5s;
	}
</style>