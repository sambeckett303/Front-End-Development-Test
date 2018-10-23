<template>
	<div class="videoBrowserContainer" :style="{ top: top }">
		<h1>What to watch?</h1>
		<ul>
			<li class="active">Trending</li>
			<li>New</li>
			<li>Popular</li>
			<li>My Favorites</li>
		</ul>
		<div class="cardContainer" :style="{ left: xtransform }">
			<template v-for="(video, index) in browserVideos">
				<browser-card :index="index" :video="video"></browser-card>
			</template>
		</div>
	</div>
</template>

<script>
	import BrowserCard from './browser-card.vue'
	export default
	{
		name: 'video-browser',
		props:
		{
			top: String,
			xtransform: String,
			videos: Array
		},
		data: () => ({
			x: null,
		}),
		methods:
		{
			getLeftPosition: function(index)
			{
				switch(index)
				{
					case 0:
						return "23px";
						break;
					case 1:
					case 2:
						return "328px";
						break;
					case 3:
						return "561px";
						break;
				}
			},
			getTopPosition: function(index)
			{
				switch(index)
				{
					case 0:
					case 1:
					case 3:
						return "0px";
						break;
					case 2:
						return "195px";
						break;
				}
			}
		},
		computed:
		{
			browserVideos: function()
			{
				var vids = [];
				for (var i = 0; i < this.videos.length; i++)
				{
					var length = 
					vids.push(
					{
						title: this.videos[i].title,
						type: this.videos[i].type,
						previewImg: this.videos[i].previewImg,
						left: this.getLeftPosition(i),
						top: this.getTopPosition(i)
					});
				}
				return vids;
			}
				
		},
		components:
		{
			BrowserCard
		}
	}
</script>

<style scoped lang="scss">
	.videoBrowserContainer
	{
		height: 509px;
		width: 100%;
		position: absolute;
		transition: top .75s ease;
		background: #FFFFFF;
		font-family: myGraphik;

		h1
		{
			margin: 25px 0px 15px 20px;
		    font-size: 23px;
		}

		ul
		{
			list-style: none;
			color: #a2a2a2;
			padding-left: 0px;
    		font-size: 13px;

			li
			{
				display: inline-block;
				padding-left: 20px;
			}

			.active
			{
				font-size: 20px;
	    		color: #000000;
	    	}
		}
	}
	.cardContainer
	{
		position: relative;
		transition: left .75s ease;
	}
</style>