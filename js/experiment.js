let factory = splitio({
  core: {
      authorizationKey: 's2959s3memm2hp1b03u34khu1sjl0106j6qr',
      key: parseInt(Math.random() * 1000, 10) // unique identifier for your user
  },
  urls: {
      sdk: "https://sdk.split.io/api",
      events: "https://events.split.io/api",
      auth: "https://auth.split.io/api"
  }
});


let client = factory.client();

client.on(client.Event.SDK_READY, function () {
  // once the SDK is ready, clear out the loader
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.classList.add('hide');

  const body = document.getElementById('body');
  body.classList.remove('hide');


  // get treatment
  let treatment = client.getTreatment('css_demo');

  // get features to flip based upon CSS classes
  const featureA = document.querySelectorAll('.a');
  const featureB = document.querySelectorAll('.b');

  if (treatment === 'on') {

      featureB.forEach(element => {
          element.classList.add('hide')
      })
  } else if (treatment === 'off') {
      featureA.forEach(element => {
          element.classList.add('hide')
      })
  } else {
      console.error('Error connecting to Split')
      // default rule here
      featureA.forEach(element => {
          element.classList.add('hide')
      })
  }

});  