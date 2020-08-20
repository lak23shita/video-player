var player = videojs('videoPlayer',{
	autoplay:true,
	controls:'true',
	poster:'video.jpg',
	loop:true,
	playbackRates: [0.25,.5,1,1.5,2,2.5,3,3.5,4],
	plugins:{
		hotkeys:{
			enableModifiersForNumbers: false,
			seekStep:30,
		}
	}
	}

);

// let qualityLevels = player.qualityLevels();
 
// // disable quality levels with less than 720 horizontal lines of resolution when added
// // to the list.
// qualityLevels.on('addqualitylevel', function(event) {
//   let qualityLevel = event.qualityLevel;
 
//   if (qualityLevel.height >= 720) {
//     qualityLevel.enabled = true;
//   } else {
//     qualityLevel.enabled = false;
//   }
// });
 
// // example function that will toggle quality levels between SD and HD, defining and HD
// // quality as having 720 horizontal lines of resolution or more
// let toggleQuality = (function() {
//   let enable720 = true;
 
//   return function() {
//     for (var i = 0; i < qualityLevels.length; i++) {
//       let qualityLevel = qualityLevels[i];
//       if (qualityLevel.width >= 720) {
//         qualityLevel.enabled = enable720;
//       } else {
//         qualityLevel.enabled = !enable720;
//       }
//     }
//     enable720 = !enable720;
//   };
// })();
 
// let currentSelectedQualityLevelIndex = qualityLevels.selectedIndex;
