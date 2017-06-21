// App bootstrap
$(document).ready(function(){
    
  // Init elements
  $('.fc-members-list').fcMembersSelect({
    enableAddFcMemberButton: function(event, data) {
      $('.add-fc-member').prop('disabled', false);
    }
  });
  $('table.mounts-table').mountsTable();
  $('table.minions-table').minionsTable();
  $('table.classjobs-table').classjobsTable();

  // When user wants to add a new character from fc members list
  $('.add-fc-member').on('click', function(e) {
    e.preventDefault();

    var characterId = $('.fc-members-list').fcMembersSelect("instance").getSelectedMemberID();
    console.log(characterId);
    if(characterId == "all") {
      var allMembers = $('.fc-members-list').fcMembersSelect("instance").getAllMembersID();
      console.log(allMembers);
      $.each(allMembers, function(i, characterId){
        addCharacter(characterId);  
      });
    } else {
      addCharacter(characterId);  
    }
  });
  
  // When user wants to add a new character from a lodestone id
  $('#add-lodestone-character').on('click', function(e) {
    e.preventDefault();

    var characterId = $('.character-id').val();
    addCharacter(characterId);
  });

  /**
   * Add selected character to current displayed table
   */
  function addCharacter(characterId) {
    var currentActiveTab = $('.tab-pane.active').attr('id');
    switch (currentActiveTab) {
      case "mounts":
        $('table.mounts-table').mountsTable("instance").addCharacter(characterId);
        break;
  
      case "minions":
        $('table.minions-table').minionsTable("instance").addCharacter(characterId);
        break;  
  
      case "classjobs":
        $('table.classjobs-table').classjobsTable("instance").addCharacter(characterId);
        break;  
    }
  }

});
