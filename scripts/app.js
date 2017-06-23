// App bootstrap
$(document).ready(function(){
  
  // Init elements
  $('.track-free-company').fcMembersSelect({
    fcMembersRetrieved: function(event, data) {
      // Remove characters from current displayed table
      removeCharacters();
      addCharacters(data.members);
    }
  });

  $('table.mounts-table').mountsTable();
  $('table.minions-table').minionsTable();
  $('table.classjobs-table').classjobsTable();

  // Display notification when corresponding event is triggered
  $(document).on('notification', function(event, data) {
    $.notify({
      message: data.message
    },{
      type: data.type
    });
  });

  // When user wants to add a new character from a lodestone id
  $('.add-lodestone-character').on('submit', function(e) {
    e.preventDefault();

    var characterId = $('.character-id').val();

    addCharacter(characterId);
  });


  /**
   * Add a list of characters to the current displayed table.
   * Mass ajax query performing once at a time.
   * 
   * @param {array} charactersId Array of Lodestone characters id
   */
  function addCharacters(charactersId) {
    if(charactersId.length > 0) {
      var promise = $.when(1);
      $.each(charactersId, function(i){
        promise = promise.then(function() {
          promise = addCharacter(charactersId[i]);
        });
      });
    }
  }


  /**
   * Add selected character to current displayed table
   * @param {int} charactersId Lodestone character ID 
   */
  function addCharacter(characterId) {
    var currentActiveTab = $('.tab-pane.active').attr('id');
    switch (currentActiveTab) {
      case "mounts":
        return $('table.mounts-table').mountsTable("instance").addCharacter(characterId);
        break;
  
      case "minions":
        return $('table.minions-table').minionsTable("instance").addCharacter(characterId);
        break;  
  
      case "classjobs":
        return $('table.classjobs-table').classjobsTable("instance").addCharacter(characterId);
        break;  
    }
  }


  /**
   * Remove all characters from current displayed table
   * @return {[type]} [description]
   */
  function removeCharacters() {
    var currentActiveTab = $('.tab-pane.active').attr('id');
    switch (currentActiveTab) {
      case "mounts":
        return $('table.mounts-table').mountsTable("instance").removeCharacters();
        break;
  
      case "minions":
        return $('table.minions-table').minionsTable("instance").removeCharacters();
        break;  
  
      case "classjobs":
        return $('table.classjobs-table').classjobsTable("instance").removeCharacters();
        break;  
    }
  }

});
