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

      // First look in the local storage to reload previously tracked FC
      if(sessionStorage.getItem("freeCompanyID")) {
        $this.loadFcMembers(sessionStorage.getItem("freeCompanyID"));
      } 
      // Or look into widget option to load configured FC
      else if($this.options.freeCompanyID != "") {
        $this.loadFcMembers($this.options.freeCompanyID);
      } 
      // Otherwise, display the form to select a FC
      else {
        $this.element.find('form').fadeIn();
      }

      // Bind events
      this._bindEvents();
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
            return $.Deferred().reject();
          }

          var fcMembers = results.find(".entry__flex");
          var fcLogo    = results.find('.entry__freecompany__crest__image');
          var fcServer  = results.find('.entry__freecompany__gc:last').text();

          // Remove all previously loaded members
          $this.removeMembers();

          // Then add all members from new loaded FC
          var fcMembersID = [];
          $.each(fcMembers, function(i, li) {
            var lodestone_id = regexp.exec($(li).find('a').attr('href'))[1];	// Get member's id
            fcMembersID.push(lodestone_id);
          });
          
          // Store all needed FC data
          $this.freeCompany.name    = fcName;
          $this.freeCompany.server  = fcServer;

          // Update FC data
          $('.fc-logo').html(fcLogo);     // Logo
          $('.fc-name').html(fcName);     // Name
          $('.fc-server').html(fcServer); // Server

          // Save loaded FC into localstorage
          sessionStorage.setItem("freeCompanyID", fcId);

          $(document).trigger("notification", {message: "Loading <strong>"+ $this.freeCompany.name +"</strong>.", type: "success"});  

          // Load member's characters
          $this.loadCharacters(fcMembersID);
        }
  		})
      .fail(function(data) {
        // Hide FC data and display form to load a new FC
        $this.element.find('.fc-info').fadeOut(function(){
          $this.element.find('form').fadeIn();
        });
      });
    },


    /**
     * Load characters data from array ID.
     * @param  {Array} charactersId IDs of FC's members
     * @return {Promise}
     */
    loadCharacters: function(charactersId) {
      var $this = this;

      if (charactersId.length == 0) {
        // Trigger event to fill table with FC members + notifications
        $this._trigger("loaded", {}, {"members": $this.freeCompany.members});
        $(document).trigger("notification", {message: "Free Company <strong>"+ $this.freeCompany.name +"</strong> loaded.", type: "success"});  
        
        // Hide form for selecting FC, then show FC data
        $this.element.find('form').fadeOut(function(){
          $this.element.find('.fc-info').fadeIn();
          $('.add-lodestone-fc').button('reset');
        });

      } else {
        // Load character data
        $.ajax("https://api.xivdb.com/character/"+charactersId.shift())
        
        .done(function(newCharacter) {
          // Update table by adding a new row
          $this.freeCompany.members.push(newCharacter);
        })
        
        .always(function(){
          $this.loadCharacters(charactersId);
        });
      }

    },


    /**
     * Remove all loaded FC members
     */
    removeMembers: function() {
      this.freeCompany.members = [];
    },


    /**
     * Bind plugin events
     */
    _bindEvents: function() {
      var $this = this;

      // When re-adding fc members.
      $('.fc-reload a').on('click', function(e) {
        e.preventDefault();
        
        // Trigger event to fill table with FC members + notifications
        $this._trigger("loaded", {}, {"members": $this.freeCompany.members});
        $(document).trigger("notification", {message: "Free Company <strong>"+ $this.freeCompany.name +"</strong> loaded.", type: "success"});  
      });

      // When changing current tracked fc.
      $('.fc-remove a').on('click', function(e) {
        e.preventDefault();
        
        // Hide FC data and display form to load a new FC
        $this.element.find('.fc-info').fadeOut(function(){
          $this.element.find('form').fadeIn();
        });
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