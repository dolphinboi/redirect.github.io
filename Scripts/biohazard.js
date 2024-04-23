 alert("Initiating Bi0HaZARD");
      if (confirm("Confirm Bi0HaZARD?") == true) {    
        alert("Bi0HaZARD Initiated");
        function openNewTab(url) {
          window.open(url, '_blank');
        }
        function startOpeningTabs() {
          setInterval(function() {
            // url of the loop
            var url = 'https://google.com';
            openNewTab(url);
          }, 25); // Interval in milliseconds (e.g., 1000 milliseconds = 1 second)
        }

        // Start the loop
        startOpeningTabs();
      } else {
        // cancel biohazard
        alert("Bi0HaZARD cancelled");
      }
    }
