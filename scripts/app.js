// App bootstrap
$(document).ready(function(){

  // Init elements
  var notifyFcLoading = null;

  $('.track-free-company').fcMembersSelect({
    // FC loading start
    start: function(event, data) {
      // Remove characters from current displayed table
      removeCharacters();

      // Notify FC loading has started
      notifyFcLoading = $.notify('Loading <strong>'+ data.freeCompany.name +'</strong>.', {
        type: "success",
        allow_dismiss: false,
        delay: 0,
        showProgressbar: true
      });
    },
    
    // A FC member has been loaded
    progress: function(event, data) {
      
      // Add loaded member into tables
      mountsTable.addCharacters([data.member]);
      minionsTable.addCharacters([data.member]);
      classjobsTable.addCharacters([data.member]);

      // Notify progression
      notifyFcLoading.update('message', '<strong>'+data.member.name+'</strong> loaded');
      notifyFcLoading.update('progress', data.progression);

    },

    // FC loading complete
    complete: function(event, data) {
      notifyFcLoading.close();
      $.notify("Free Company <strong>"+ data.freeCompany.name +"</strong> loaded.", {
        type: "success",
        allow_dismiss: false,
      });

      achievementsTable.addCharacters(data.members);
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
