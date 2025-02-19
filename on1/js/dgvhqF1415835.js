
    function atomiApplyParams({inputUrl}) {
      try {
        console.log(inputUrl)
        const inputUrlObj = new URL(inputUrl, window.location.origin);
        const currentPageParams = new URLSearchParams(window.location.search);
        const inputUrlParams = new URLSearchParams(inputUrlObj.search);
      
        // Iterate over all parameters in the current page's URL
        for (const [key, value] of currentPageParams) {
          // If the input URL does not already contain the parameter, add it
          if (!inputUrlParams.has(key)) {
            inputUrlParams.append(key, value);
          }
        }
      
        // Construct the final URL
        const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
        console.log(finalUrl)
        return finalUrl;
      } catch (error) {
        console.log(error);
      }
    }

    function atomiFormatDate(options = { slated: false, addDate: 0 }) {
      try {
        const defaultOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const today = new Date();

        if (options.slated) {
          const slatedDate = new Date(today);
          slatedDate.setDate(slatedDate.getDate() + (options.addDate || 0));

          const day = slatedDate.getDate().toString().padStart(2, "0");
          const month = (slatedDate.getMonth() + 1).toString().padStart(2, "0");
          const year = slatedDate.getFullYear();
          return `${day}/${month}/${year}`;
        }

        if(options.addDate){
          today.setDate(today.getDate()+options.addDate)
        }
        const formattedDate = today.toLocaleDateString(undefined, defaultOptions);

        return formattedDate;
      } catch (error) {
        console.log(error);
      }
    };

    function atomiFormatTime() {
      try {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      } catch (error) {
        console.log(error);
      }
    };
    function runDelayedFunctions(data) {
      try {
        document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
        if(data?.setDisplayed){
          localStorage.setItem(data?.setDisplayed, true);
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  
      (function() {
        try {
      const delay = 983;
      let trigger = 0;
      let userHasPlayedPanda = false;
      let autoplayStartedPanda = false;
      window.pandascripttag = window.pandascripttag || [];
      var alreadyDisplayedKey = 'atomic_panda_752b3a9_983';
      var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);
      if (alreadyElsDisplayed === 'true') {
        runDelayedFunctions();
      } else {
        window.pandascripttag.push(function() {
          const player = new PandaPlayer('panda-f50f8e9a-ee06-43e7-8ebf-530b27d804a1', {
            onReady: () => {
              setTimeout(() => {
                console.log("autoplayStartedPanda...");
                autoplayStartedPanda = true;
              }, 2000);
              setInterval(() => {
                if (player.getCurrentTime() > delay && !trigger && (userHasPlayedPanda || !player.isMuted())) {
                  console.log("player.isMuted", player.isMuted());
                  trigger = !0;
                  runDelayedFunctions({setDisplayed: alreadyDisplayedKey});
                }
              }, 500);
              player.onEvent(function ({ message }) {
                console.log("message", message);
                if (message === 'panda_play' && autoplayStartedPanda) {
                  userHasPlayedPanda = true;
                }
              })
              console.log(player);
            }
          })
        });
      }
    
        } catch (error) {
          console.log(error);
        }
      })();