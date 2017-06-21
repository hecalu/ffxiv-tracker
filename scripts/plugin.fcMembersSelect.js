$.widget( "plugin.fcMembersSelect", {
 
    // Default options.
    options: {
        freeCompanyID: "9233364398528036665"
    },
  	
  	fcMembersID: [],
  
    // Constructor.
    _create: function() {

        // Init table
        this._initSelect();
    },


    /**
     * Pre-build select form component with fc members as option
     */
    _initSelect: function() {
      var $this = this;
      var select = this.element;
      
      // Build the YQL Url with FC id
      var yqlUrl = "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20htmlstring%20WHERE%20url%3D'http%3A%2F%2Ffr.finalfantasyxiv.com%2Flodestone%2Ffreecompany%2F"+$this.options.freeCompanyID+"%2Fmember%2F'%20and%20xpath%3D'%2F%2Fli%5B%40class%3D%22entry%22%5D%7C%2F%2Fp%5B%40class%3D%22entry__freecompany__name%22%5D'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

      // Retrieve the fc member html code from lodestone with YQL.
      $.getJSON(yqlUrl, function(data){
        if(data.query.count > 0) {
          var regexp = /\/lodestone\/character\/(\w*)\//;	// Prepare regexp to extract the member ID
          
          var results = $(data.query.results.result);
          var fcName = results.filter("p.entry__freecompany__name").text();  // retrieve FC name
          var fcMembers = results.find(".entry__flex");

          // First, add an option for selecting all members
        	select.append($('<option value="all">All '+fcName+'\'s members</option>'));
          
          // Then add all members
          $.each(fcMembers, function(i, li) {
            var lodestone_id = regexp.exec($(li).find('a').attr('href'))[1];	// Get member's id
            var name = $(li).find('p.entry__name').text(); // Get member's name
            select.append($('<option value="'+lodestone_id+'">'+name+'</option>'));
            $this.fcMembersID.push(lodestone_id);
          });
          // Trigger event to enable the adding member to table button.
          $this._trigger("enableAddFcMemberButton");
        }
  		});
    },

  
  	/**
     *	Return currently selected member ID 
     */
  	getSelectedMemberID: function() {
      return this.element.val();
    },
  
  
  	/**
     *	Return all FC member's ID.
     */
  	getAllMembersID: function() {
       return this.fcMembersID;
    }
});