// let factory = splitio({
//   core: {
//       authorizationKey: 'i7k5p5lr0ko0os545mg9h76n57rdvjcsgqd3',
//       key: parseInt(Math.random() * 1000, 10) // unique identifier for your user
//   },
//   urls: {
//       sdk: "https://sdk.split.io/api",
//       events: "https://events.split.io/api",
//       auth: "https://auth.split.io/api"
//   }
// });

// let client = factory.client();

// client.on(client.Event.SDK_READY, function () {
// once the SDK is ready, clear out the loader
//   const loaderContainer = document.querySelector('.loader-container');
//   loaderContainer.classList.add('hide');

//   const body = document.getElementById('body');
//   body.classList.remove('hide');

//   // get treatment
//   let treatment = client.getTreatment('css_demo');

//   // get features to flip based upon CSS classes
//   const featureA = document.querySelectorAll('.a');
//   const featureB = document.querySelectorAll('.b');

//   if (treatment === 'on') {

//       featureB.forEach(element => {
//           element.classList.add('hide')
//       })
//   } else if (treatment === 'off') {
//       featureA.forEach(element => {
//           element.classList.add('hide')
//       })
//   } else {
//       console.error('Error connecting to Split')
//       // default rule here
//       featureA.forEach(element => {
//           element.classList.add('hide')
//       })
//   }

// });

var initialize = HarnessFFSDK.initialize;
var Event = HarnessFFSDK.Event;

// var log = (msg) => {
//   document.querySelector('#log').innerHTML += `${msg}\n`;
// };

var cf = initialize('87b80abd-1201-48b8-a524-84041b544fc3', {
  identifier: 'Harness1',
  attributes: {
    lastUpdated: Date(),
    host: location.href,
  },
});

cf.on(Event.READY, (flags) => {
  //   console.log(JSON.stringify(flags, null, 2));
});

cf.on(Event.CHANGED, (flagInfo) => {
  if (flagInfo.deleted) {
    console.log('Flag is deleted');
    console.log(JSON.stringify(flagInfo, null, 2));
  } else {
    console.log('Flag is changed');
    console.log(flagInfo);
    if (flagInfo.flag === 'csstest') {
      if (flagInfo.value === 'true') {
        console.log('IT worked!');
      } else {
        console.log('its off');
      }
    }
  }
});
