// App bootstrap
$(document).ready(function(){

  var i18nResources = [];

  // Init translation plugin
  i18n.init({
    lngWhitelist: ['en', 'de', 'fr'],
    fallbackLng: 'en'
  },function(err, t) {

    bindEvents();
    initWidgets();
    
    $('.translation').removeClass('hide');
    $('.translation .btn').removeClass('active');
    $('.translation .btn[data-lang='+i18n.detectLanguage()+']').addClass('active');

    $(document).i18n();
    $(document).trigger('change-lang', {"lang": i18n.lng()});
  });

  
  /**
   * Init all application widgets
   */
  function initWidgets() {
    $('table.mounts-table').mountsTable();
    $('table.minions-table').minionsTable();
    $('table.classjobs-table').classjobsTable();
    $('table.progression-table').achievementsTable();

    var mountsTable       = $('table.mounts-table').mountsTable("instance");
    var minionsTable      = $('table.minions-table').minionsTable("instance");
    var classjobsTable    = $('table.classjobs-table').classjobsTable("instance");
    var achievementsTable = $('table.progression-table').achievementsTable("instance");

    // Init elements
    var notifyFcLoading = null;

    $('.track-free-company').fcMembersSelect({
      // FC loading start
      start: function(event, data) {
        // Remove characters from current displayed table
        removeCharacters();

        // Notify FC loading has started
        $.notify(
          i18n.t('app.loading.start', {fcName: data.freeCompany.name}), {
          type: "success",
          allow_dismiss: false,
        });

        // Notify FC loading has started
        notifyFcLoading = $.notify(
          "", {
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
        notifyFcLoading.update('message', i18n.t('app.loading.progress', {memberName: data.member.name}));
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
  }


  /**
   * Bind all application events
   */
  function bindEvents() {
    // Display notification when corresponding event is triggered
    $(document).on('notification', function(event, data) {
      $.notify({
        message: data.message
      },{
        type: data.type
      });
    });

    // Translate document or given element, according current language
    $(document).on('ui-update', function(event, data) {

      data.variables = data.variables || {};
      
      if(data.hasOwnProperty('element')) {
        data.element.i18n(data.variables);  
      
      } else {
        $(document).i18n();
      }
    });

    // Load new translations
    $(document).on('add-translations', function(event, data) {
      i18nResources.push(data);  // Store translations in case of language switch
      i18n.addResourceBundle(data.lang, data.namespace, data.translations, true);
    });

    // Change page translation
    $('.translation .btn').on('click', function(){
      var lang = $(this).data('lang');

      if(i18n.lng() == lang) return;

      $('.translation .btn').removeClass('active');
      $(this).addClass('active');

      // Change language
      i18n.setLng(lang, function(){
        // Reload all added translations
        $.each(i18nResources, function(i, i18nResource){
          i18n.addResourceBundle(i18nResource.lang, i18nResource.namespace, i18nResource.translations, true);   
        });

        // Translate
        $(document).i18n();

        $(document).trigger('change-lang', {"lang": lang});
      });
    });
  }


  /**
   * Remove all characters from current displayed table
   * @return {[type]} [description]
   */
  function removeCharacters() {
    $(document).trigger('remove-characters');
  }

});
