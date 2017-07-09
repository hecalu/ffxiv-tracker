$.widget( "plugin.fcMembersSelect", {
 
    // Default options.
    options: {
        freeCompanyID: "9233364398528036665"
    },
  	
    freeCompany : {
      name: "",
      server: "",
      members: []
    },
  	
    // Constructor.
    _create: function() {
      // Init table
      this._initComponents();
    },


    /**
     * Constructor
     */
    _initComponents: function() {
      var $this = this;

      // check if a free company ID was filled in URL
      if($this._getUrlParameter('free-company')) {
        $this.loadFcMembers($this._getUrlParameter('free-company'));
      }
      // look in the local storage to reload previously tracked FC
      else if(sessionStorage.getItem("freeCompanyID")) {
        $this.loadFcMembers(sessionStorage.getItem("freeCompanyID"));
      } 
      // Or look into widget option to load configured FC
      else if($this.options.freeCompanyID != "") {
        $this.loadFcMembers($this.options.freeCompanyID);
      } 
      // Otherwise, display the form to select a FC
      else {
        $this.element.find('form').removeClass('hidden');
      }

      // Bind events
      this._bindEvents();
    },

    /**
     * Get value of an URL parameter
     * @param  {string} parameter Parameter to get
     * @return {string}           Parameter value
     */
    _getUrlParameter: function (sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
    },

    /**
     * Retrieve all member's ID from a specified Free Company
     *
     * @param {int} fcId Free Company ID
     */
    loadFcMembers: function(fcId) {
      var $this = this;

      // Build the YQL Url with FC id
      var yqlUrl = "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20htmlstring%20WHERE%20url%3D'http%3A%2F%2Ffr.finalfantasyxiv.com%2Flodestone%2Ffreecompany%2F"+fcId+"%2Fmember%2F'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

      // Retrieve the fc member html code from lodestone with YQL.
      return $.getJSON(yqlUrl)
        .done(function(data) {
          if(data.query.count > 0) {
            var regexp = /\/lodestone\/character\/(\w*)\//;	// Prepare regexp to extract the member ID

            var results   = $(data.query.results.result);
            var fcName    = results.find(".entry__freecompany__name").text();  // retrieve FC name
            
            // Check if FC data was correctly loaded
            if(fcName == "") {
              $(document).trigger("notification", {message: "Free Company <strong>"+fcId+"</strong> was not found in Lodestone.", type: "danger"});
              
              // Hide FC data and display form to load a new FC
              $this.element.find('.fc-info').addClass('hidden');
              $this.element.find('form').removeClass('hidden');

              return $.Deferred().reject();
            }

            var fcMembers = results.find(".entry__flex");
            var fcLogo    = results.find('.entry__freecompany__crest__image');
            var fcServer  = results.find('.entry__freecompany__gc:last').text();

            // Remove all previously loaded members
            $this.removeMembers();

            // Then add all members from new loaded FC
            var fcMembersIds = [];
            $.each(fcMembers, function(i, li) {
              var lodestone_id = regexp.exec($(li).find('a').attr('href'))[1];	// Get member's id
              fcMembersIds.push(lodestone_id);
            });

            // Store all needed FC data
            $this.freeCompany.name    = fcName;
            $this.freeCompany.server  = fcServer;
            var numberOfMembers       = fcMembersIds.length;

            // Update FC data
            $('.fc-logo').html(fcLogo);     // Logo
            $('.fc-name').html(fcName);     // Name
            $('.fc-server').html(fcServer); // Server

            // Save loaded FC into localstorage
            sessionStorage.setItem("freeCompanyID", fcId);

            $this._trigger("start", {}, {"freeCompany": $this.freeCompany});

            // Load member's characters
            $this.loadCharacters(fcMembersIds, new $.Deferred(), 0)
              
              // On each character loading
              .progress(function(character, remainingCharactersToLoad){
                
                // Notify loading progress
                var percentProgression = (numberOfMembers-remainingCharactersToLoad.length)/numberOfMembers*100;
                $this._trigger("progress", {}, {"member": character, "progression": percentProgression});
              })
              
              // When all characters are loaded
              .done(function(){
                
                // Hide form for selecting FC, then show FC data
                $this.element.find('form').addClass('hidden');
                $('.add-lodestone-fc').button('reset');
                $this.element.find('.fc-info').removeClass('hidden');
                
                // Add loaded characters to track table
                $this._trigger("complete", {}, {"members": $this.freeCompany.members, "freeCompany": $this.freeCompany});              
              });
          }
    		})
        .fail(function(data) {
          // Hide FC data and display form to load a new FC
          $this.element.find('.fc-info').addClass('hidden');
          $this.element.find('form').removeClass('hidden');
        });
    },


    /**
     * Recursively load characters data from array ID.
     * @param  {Array} charactersIds IDs of FC's members
     * @param  {Deffered} dfd Deffered object
     * @param  {Int} level Number of recursive loop
     */
    loadCharacters: function(charactersIds, dfd, level) {
      var $this = this;

      if (charactersIds.length == 0) {
          // Once loading complete
          dfd.resolve();

      } else {
        // Load character data
        $.ajax("https://api.xivdb.com/character/"+charactersIds.shift())
        
        .done(function(character) {
          dfd.notify(character, charactersIds);
          // Update table by adding a new row
          $this.freeCompany.members.push(character);
        })
        
        .always(function(){
          $this.loadCharacters(charactersIds, dfd, level+1);
        });
      }

      // At firt recursion, create the promise
      if(level == 0) {
        return dfd.promise();
      }
    },


    /**
     * Remove all loaded FC members
     */
    removeMembers: function() {
      this.freeCompany.members    = [];
    },


    /**
     * Bind plugin events
     */
    _bindEvents: function() {
      var $this = this;

      // When re-adding fc members.
      $('.fc-reload a').on('click', function(e) {
        e.preventDefault();
        
        // Reload all members
        $this.loadFcMembers($this.options.freeCompanyID);
      });

      // When changing current tracked fc.
      $('.fc-remove a').on('click', function(e) {
        e.preventDefault();
        
        // Hide FC data and display form to load a new FC
        $this.element.find('.fc-info').addClass('hidden');
        $this.element.find('form').removeClass('hidden');
      });

      // When tracking a new fc.
      $this.element.find('form').on('submit', function(e) {
        e.preventDefault();

        // Retrieve FC ID
        var fcId = $this.element.find('.fc-id').val();

        if(fcId != "") {
          // Disable button
          $('.add-lodestone-fc').button('loading');

          // Then, try to load all members
          $this.loadFcMembers(fcId);
        }
      });


    }
});