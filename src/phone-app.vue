<template>
	<div @mousedown="handleTouchStart" @mousemove="handleTouchMove" @mouseup="handleTouchEnd">
		<div class="videoSlideshowContainer" :style="{ top: slideshowTop }">
			<menu-area></menu-area>
			<video-slideshow ref="videoSlideshow" :videos="videos"></video-slideshow>
		</div>
		<video-browser :top="browserTop" :xtransform="browserScroll" :videos="videos"></video-browser>
	</div>
</template>

<script>
	import MenuArea from './menu-area.vue'
	import VideoSlideshow from './video-slideshow.vue'
	import VideoBrowser from './video-browser.vue'
	export default
	{
		name: 'phone-app',
		data: () => ({
			xDown: null,
			yDown: null,
			currentView: "slideshow",
			slideshowTop: "0px",
			browserTop: "675px",
			browserScroll: "0px",
			maxBrowserScroll: "507px",
			videos:
			[
				{
					title: "Alaskan Adventures",
					description: "The crew adventures by boat in the Canadian Wilderness while preparing for a huge day in the Costal Range.",
					type: "SNOW",
					length: "4 min",
					video:
					{
						type: "html5",
						src: "/vid/alaskan-adventure.mp4"
					},
					previewImg: "/img/videoPreview1.JPG",
					left: "37.5px",
					active: true
				},
				{
					title: "Alex Honnold Gives Talk on Yosemite Free Solo",
					description: "At this point, we all know about how Alex Honnold, aka superman himself, free soloed El Captan early last summer",
					type: "DIRT",
					length: "7 min",
					video:
					{
						type: "iframe",
						src: "https://www.ted.com/talks/alex_honnold_how_i_climbed_a_3_000_foot_vertical_cliff_without_ropes?language=en}"
					},
					previewImg: "/img/videoPreview2.JPG",
					left: "352px",
					active: false
				},
				{
					title: "Griffin Dunne Shows Winter in NZ is Not Over",
					description: "The crew adventures by boat in the Canadian Wilderness while preparing fo a huge day in the Costal Range.",
					type: "SNOW",
					length: "3 min",
					video:
					{
						type: "html5",
						src: "/vid/griffin-dune.mp4"
					},
					previewImg: "/img/videoPreview3.JPG",
					left: "500px",
					active: false
				},
				{
					title: "Jeremy Jones' Journal: Silence in the High Sierra",
					description: "Total silence. No wind, no planes, no birds - this silence is often hard to find, but I have finally found it.",
					type: "SNOW",
					length: "2 min",
					video:
					{
						type: "html5",
						src: "/vid/jeremy-jones-journal.mp4"
					},
					previewImg: "/img/videoPreview4.JPG",
					left: "500px",
					active: false
				}
			]
		}),
        methods:
        {
        	handleTouchStart: function(event)
        	{
        		if (this.$refs.videoSlideshow.videoActive)
        		{
        			this.$refs.videoSlideshow.videoActive = false;
        		}
        		else
        		{
        			if (event.type == "mousedown")
	        		{
		        		this.xDown = event.x;
		        		this.yDown = event.y;
	        		}
	        		else
	        		{
	        			this.xDown = event.touches[0].clientX;
		        		this.yDown = event.touches[0].clientY;
	        		}
        		}
	        		
        	},
        	handleTouchMove: function(event)
        	{
        		if ( ! this.xDown || ! this.yDown ) {
			        return;
			    }

			    if (event.type == "mousemove")
			    {
			    	var xUp = event.x;                                    
				    var yUp = event.y;
			    }
			    else
			    {
			    	var xUp = event.touches[0].clientX;                                    
				    var yUp = event.touches[0].clientY;
			    }
				    

			    var xDiff = this.xDown - xUp;
			    var yDiff = this.yDown - yUp;

			    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
			        if ( xDiff > 0 ) {
			        	if (this.currentView == "slideshow")
			        	{
			        		if (xDiff > 1)
			        		{
			        			this.$refs.videoSlideshow.nextVideo();
			        		}
			        	}
			        	else
			        	{
			        		// TODO: figure out a better way to get this browser scroll to work.
			        		if (this.browserScroll == "0px")
			        		{
			        			this.browserScroll = "-270px";
			        		}
			        		else if (this.browserScroll == "-270px")
			        		{
			        			this.browserScroll = "-507px";
			        		}
			        	}
			        } else {
			        	if (this.currentView == "slideshow")
			        	{
			        		if (xDiff < -1)
			        		{
			        			this.$refs.videoSlideshow.prevVideo();
			        		}
			        	}
			        	else
			        	{
			        		if (this.browserScroll == "-270px")
			        		{
			        			this.browserScroll = "0px";
			        		}
			        		else if (this.browserScroll == "-507px")
			        		{
			        			this.browserScroll = "-270px";
			        		}
			        		
			        	}
			        }
		        	/* reset values */
			        this.xDown = null;
			   		this.yDown = null;
			    } else {
			    	this.scrolling = true;
			        if ( yDiff > 0 ) {
			        	if (yDiff > 30)
			        	{
			        		this.currentView = "browser";
			        		this.slideshowTop = "-500px";
			        		this.browserTop = "167px";
			        		/* reset values */
					        this.xDown = null;
					   		this.yDown = null;
			        	}
			        } else {
			        	if (this.slideshowTop == "-500px" && yDiff < -30)
			        	{
			        		this.currentView = "slideshow";
			        		this.slideshowTop = "0px";
			        		this.browserTop = "667px";
			        		/* reset values */
					        this.xDown = null;
					   		this.yDown = null;
			        	}
			        }                                                                 
			    }
        	},
        	handleTouchEnd: function(event)
        	{
				if (this.currentView == "browser")
				{
					this.xDown = null;
					this.yDown = null;
				}        	
        	}
        },
		components:
		{
			MenuArea,
			VideoSlideshow,
			VideoBrowser
		}
	}
</script>

<style scoped lang="scss">
	.videoSlideshowContainer
	{
		position: absolute;
    	width: 100%;
    	height: 667px;
    	transition: top .75s ease;
	}
</style>