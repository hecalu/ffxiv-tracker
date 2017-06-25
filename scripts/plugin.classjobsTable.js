$.widget( "plugin.classjobsTable", {
 
    // Default options.
    options: {
        displayedCharacters: [],
        // Classjobs list update url : https://api.xivdb.com/data/classjobs
        allClassjobs: $.parseJSON('[{"id": 1,"icon": "paladin","name_fr": "Paladin","abbr_fr": "PLD"}, {"id": 3,"icon": "warrior","name_fr": "Guerrier","abbr_fr": "GUE"}, {"id": 32,"icon": "darkknight","name_fr": "Chevalier Noir","abbr_fr": "CHN"},{"id": 6,"icon": "whitemage","name_fr": "Mage Blanc","abbr_fr": "MBL"}, {"id": 26,"icon": "scholar","name_fr": "\u00e9rudit","abbr_fr": "\u00c9RU"}, {"id": 33,"icon": "astrologian","name_fr": "Astromancien","abbr_fr": "AST"}, {"id": 2,"icon": "monk","name_fr": "Moine","abbr_fr": "MOI"}, {"id": 4,"icon": "dragoon","name_fr": "Chevalier Dragon","abbr_fr": "DRG"}, {"id": 29,"icon": "ninja","name_fr": "Ninja","abbr_fr": "NIN"}, {"id": 34,"icon": "samurai","name_fr": "Samoura\u00ef","abbr_fr": "SAM"}, {"id": 5,"icon": "bard","name_fr": "Barde","abbr_fr": "BRD"}, {"id": 31,"icon": "machinist","name_fr": "Machiniste","abbr_fr": "MCH"},{"id": 7,"icon": "blackmage","name_fr": "Mage Noir","abbr_fr": "MNO"},{"id": 26,"icon": "summoner","name_fr": "Invocateur","abbr_fr": "INV"}, {"id": 35,"icon": "redmage","name_fr": "Mage Rouge","abbr_fr": "MRG"}, {"id": 8,"icon": "carpenter","name_fr": "Menuisier","abbr_fr": "MEN"}, {"id": 9,"icon": "blacksmith","name_fr": "Forgeron","abbr_fr": "FRG"}, {"id": 10,"icon": "armorer","name_fr": "Armurier","abbr_fr": "ARM"}, {"id": 11,"icon": "goldsmith","name_fr": "Orf\u00e8vre","abbr_fr": "ORF"}, {"id": 12,"icon": "leatherworker","name_fr": "Tanneur","abbr_fr": "TAN"}, {"id": 13,"icon": "weaver","name_fr": "Couturier","abbr_fr": "COU"}, {"id": 14,"icon": "alchemist","name_fr": "Alchimiste","abbr_fr": "ALC"}, {"id": 15,"icon": "culinarian","name_fr": "Cuisinier","abbr_fr": "CUI"}, {"id": 16,"icon": "miner","name_fr": "Mineur","abbr_fr": "MIN"}, {"id": 17,"icon": "botanist","name_fr": "Botaniste","abbr_fr": "BTN"}, {"id": 18,"icon": "fisher","name_fr": "P\u00eacheur","abbr_fr": "P\u00caC"}]')
    },


    // Constructor.
    _create: function() {

        // Init table
        this._initTable();

        // Bind events
        this._bindEvents();
    },


    /**
     * Pre-build table data with rows (characters) or columns (classjob)
     */
    _initTable: function() {
      var $this = this;
      
      // Then build headers table by adding a new column for each classes.
      $.each($this.options.allClassjobs, function(i, classjob){
        $this.addColumn(classjob);
      });
    },


    /**
     * Add a column in table with classjob data 
     * and recalculate characters' ownership 
     * 
     * @param {object} classjob classjob data
     */
    addColumn: function(classjob) {
      var $this = this;
      
      // Set new column header
      $this.addColumnHeader(classjob);
    },


    /**
     * Set header of a new column from classjob data.
     * 
     * @param {object} classjob Minion data to add in the new header's column
     */
    addColumnHeader: function(classjob){
      var $this = this;

      var columnHeader = $('<th><img class="classjob-icon img-responsive" data-toggle="tooltip" src="https:\/\/secure.xivdb.com\/img\/classes\/set2\/'+classjob.icon+'.png" title="'+classjob.name_fr+'"/></th>');
          
      // Add header in table
      $this.element.find('thead tr').append(columnHeader.hide().fadeIn());
      
      // Enable tooltip
      $('[data-toggle="tooltip"]').tooltip();

      // Enable sorting on column
      $(columnHeader).on('click', function(){
        $this.sortTable(columnHeader);
      });

    },


    /**
     * Sort table by a specific column
     * Sorting is made according lvl
     * 
     * @param  {jQueryElement} column Column use to sort
     */
    sortTable: function(column) {
      var descSort = true;
      if(!$(column).hasClass('sort-desc')) {
        this.element.find('th').removeClass('sort-desc').removeClass('sort-asc');
        $(column).addClass('sort-desc');
      } else {
        this.element.find('th').removeClass('sort-desc').removeClass('sort-asc');
        $(column).addClass('sort-asc');
        descSort = false;
      }
      
      this.element.find('td').filter(function(){
        return $(this).index() === $(column).index();
      }).sortElements(function(a, b){
        var aLvl = $(a).find('.lvl').length == 0 ? parseInt($(a).text()) : parseInt($(a).find('.lvl').text()) * 1000;
        var bLvl = $(b).find('.lvl').length == 0 ? parseInt($(b).text()) : parseInt($(b).find('.lvl').text()) * 1000;

        if (aLvl == bLvl)
          return 0;

        return aLvl > bLvl ?
            descSort ? -1 : 1
            : descSort ? 1 : -1;
      }, function(){
        // parentNode is the element we want to move
        return this.parentNode;
      });
    },


    /**
     * Add Characters to table
     * 
     * @param {Array} characters Characters lodestone data
     */
    addCharacters: function(characters) {
      var $this = this;

      $.each(characters, function(i, character){
        $this.addCharacter(character);
      });
    },

    
    /**
     * Add Character to table
     * 
     * @param {Object} character Character lodestone data
     */
    addCharacter: function(character) {
      var $this = this;

      // Add active class in classjobs list
      character.data.classjobs[character.data.active_class.role.id] = {level : character.data.active_class.progress.level};

      // Save retrieved character
      $this.options.displayedCharacters.push(character);
      
      // Update table by adding a new row
      $this.addRow(character);
    },


    // Save newly added classjob
    addClassjob: function(classjob) {
      this.addColumn(classjob);
    },

    
    /**
     * Add a new row with character's classjob.
     * 
     * @param {object} character Object with character data
     */
    addRow: function(character) {
      var $this = this;

      var newLine = $('<tr>');
      newLine.append('<td class="character-row"><img class="character-thumbnail" width="40px" src="'+character.avatar+'" /><div class="character-name">'+character.name+'</div><div class="character-actions"><a class="remove-character" href="#"><span class="glyphicon glyphicon-remove"></span> Remove</a></td>');
      
      // Build minion ownership for iterated character
      $.each(this.options.allClassjobs, function(i, classjob){
        if (character.data.classjobs.hasOwnProperty(classjob.id)) {
          newLine.append('<td class="lvl classjob-lvl-'+character.data.classjobs[classjob.id].level+'">'+character.data.classjobs[classjob.id].level+'</td>');            
        } else {
          newLine.append('<td>-</td>');
        }
      });

      // Add the row to table with a fadeIn effect
      this.element.find('tbody').append(newLine.hide().fadeIn());
      
      // Set event for deletion link to remove character row
      newLine.find('.remove-character').on('click', function() {
        newLine.fadeOut(300, function() { $(this).remove(); });
        // Remove character from displayed characters list
        $this.options.displayedCharacters = $this.options.displayedCharacters.filter(function(el) {
          return el.lodestone_id !== character.lodestone_id;
        });
      });
    },


    /**
     * Remove all characters from table
     */
    removeCharacters: function() {
      this.element.find('tbody tr').fadeOut(300, function() { $(this).remove(); });
      this.options.displayedCharacters = [];
    },


    /**
     * Bind plugin events
     */
    _bindEvents: function() {
      var $this = this;
    }
});