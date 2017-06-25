// App bootstrap
$(document).ready(function(){

  // Init elements
  $('.track-free-company').fcMembersSelect({
    loaded: function(event, data) {
      // Remove characters from current displayed table
      removeCharacters();
      addCharacters(data.members);
    }
  });

  $('table.mounts-table').mountsTable();
  $('table.minions-table').minionsTable();
  $('table.classjobs-table').classjobsTable();
  $('table.progression-table').achievementsTable();

  var mountsTable       = $('table.mounts-table').mountsTable("instance");
  var minionsTable      = $('table.minions-table').minionsTable("instance");
  var classjobsTable    = $('table.classjobs-table').classjobsTable("instance");
  var achievementsTable = $('table.progression-table').achievementsTable("instance");


  // Display notification when corresponding event is triggered
  $(document).on('notification', function(event, data) {
    $.notify({
      message: data.message
    },{
      type: data.type
    });
  });


  /**
   * Add a list of characters to the current displayed table.
   * 
   * @param {array} characters Array of Lodestone characters data
   */
  function addCharacters(characters) {
    mountsTable.addCharacters(characters);
    minionsTable.addCharacters(characters);
    classjobsTable.addCharacters(characters);
    achievementsTable.addCharacters(characters);
  }


  /**
   * Remove all characters from current displayed table
   * @return {[type]} [description]
   */
  function removeCharacters() {
    mountsTable.removeCharacters();
    minionsTable.removeCharacters();
    classjobsTable.removeCharacters();
    achievementsTable.removeCharacters();
  }

});
