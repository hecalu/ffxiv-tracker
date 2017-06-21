$.widget( "plugin.classjobsTable", {
 
    // Default options.
    options: {
        displayedCharacters: [],
        allClassjobs: $.parseJSON('[{"id": 1,"name": "Gladiateur","abbr": "GLA","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/gladiator.png"},{"id": 2,"name": "Pugiliste","abbr": "PGL","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/pugilist.png"},{"id": 3,"name": "Maraudeur","abbr": "MRD","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/marauder.png"},{"id": 4,"name": "Ma\u00eetre D\'hast","abbr": "HAS","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/lancer.png"},{"id": 5,"name": "Archer","abbr": "ARC","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/archer.png"},{"id": 29,"name": "Surineur","abbr": "SUR","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/rogue.png"},{"id": 6,"name": "\u00e9l\u00e9mentaliste","abbr": "\u00c9LM","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/conjurer.png"},{"id": 7,"name": "Occultiste","abbr": "OCC","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/thaumaturge.png"},{"id": 26,"name": "Arcaniste","abbr": "ACN","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/arcanist.png"},{"id": 32,"name": "Chevalier Noir","abbr": "CHN","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/darkknight.png"},{"id": 31,"name": "Machiniste","abbr": "MCH","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/machinist.png"},{"id": 33,"name": "Astromancien","abbr": "AST","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/astrologian.png"},{"id": 8,"name": "Menuisier","abbr": "MEN","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/carpenter.png"},{"id": 9,"name": "Forgeron","abbr": "FRG","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/blacksmith.png"},{"id": 10,"name": "Armurier","abbr": "ARM","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/armorer.png"},{"id": 11,"name": "Orf\u00e8vre","abbr": "ORF","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/goldsmith.png"},{"id": 12,"name": "Tanneur","abbr": "TAN","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/leatherworker.png"},{"id": 13,"name": "Couturier","abbr": "COU","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/weaver.png"},{"id": 14,"name": "Alchimiste","abbr": "ALC","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/alchemist.png"},{"id": 15,"name": "Cuisinier","abbr": "CUI","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/culinarian.png"},{"id": 16,"name": "Mineur","abbr": "MIN","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/miner.png"},{"id": 17,"name": "Botaniste","abbr": "BTN","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/botanist.png"},{"id": 18,"name": "P\u00eacheur","abbr": "P\u00caC","icon": "https:\/\/secure.xivdb.com\/img\/classes\/set2\/fisher.png"}]')
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
      
      // First set new column header
      $this.addColumnHeader(classjob);

      // Then fill table ownership for each displayed characters
      $.each($this.element.find('tbody tr'), function(i, tr){

        // Build classjob ilvl for iterated character
        if ($this.options.displayedCharacters[i].data.classjobs.hasOwnProperty(classjob.id)) {
          $(tr).append('<td>'+$this.options.displayedCharacters[i].data.classjobs[classjob.id].level+'</td>');
        } else {
          $(tr).append('<td>-</td>');
        }
      });
    },


    /**
     * Set header of a new column from classjob data.
     * 
     * @param {object} classjob Minion data to add in the new header's column
     */
    addColumnHeader: function(classjob){
      var $this = this;

      var columnHeader = $('<th><img class="classjob-icon" data-toggle="tooltip" src="'+classjob.icon+'" title="'+classjob.name+'"/></th>');
          
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
     * Sorting is made according ilvl gearset
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
        var aIlvl = $(a).find('.ilvl').length == 0 ? parseInt($(a).text()) : parseInt($(a).find('.ilvl').text()) * 1000;
        var bIlvl = $(b).find('.ilvl').length == 0 ? parseInt($(b).text()) : parseInt($(b).find('.ilvl').text()) * 1000;

        if (aIlvl == bIlvl)
          return 0;

        return aIlvl > bIlvl ?
            descSort ? -1 : 1
            : descSort ? 1 : -1;
      }, function(){
        // parentNode is the element we want to move
        return this.parentNode;
      });
    },



    /**
     * Retrieve character data by ID from API
     * 
     * @param {int} characterId Character lodestone ID
     */
    addCharacter: function(characterId) {
      var $this = this;

      // No character ID
      if (characterId == null) return;

      // Character is already displayed
      var CharacterIndex = $this.options.displayedCharacters.findIndex(character => character.lodestone_id == characterId);
      if (CharacterIndex != -1) {
          // Hightlight the character row
          $this.element.find('tbody tr:eq('+CharacterIndex +')').effect("highlight", {}, 500);
        return;
      }

      // Load character data
      $.ajax("https://api.xivdb.com/character/"+characterId)
      .done(function(newCharacter) {
        // Load gearset data
        $.ajax("https://api.xivdb.com/character/"+characterId+"?data=gearsets")
        .done(function(characterGearsets) {
          // Set gearsets to character
          newCharacter = $this._setCharacterGearsets(newCharacter, characterGearsets);  

          // Save retrieved character
          $this.options.displayedCharacters.push(newCharacter);
          
          // Update table by adding a new row
          $this.addRow(newCharacter);
        });
      });
    },

    _setCharacterGearsets: function(character, gearsets) {
      var classjobs = character.data.classjobs;
      $.each(classjobs, function(i, classjob){
        var classjobsGearset = gearsets.filter((gearset) => gearset.role.classjob_parent == classjob.id);
        // Only one gearset is registered for iterated classjob
        if(classjobsGearset.length == 1) {
          character.data.classjobs[i].ilevel = classjobsGearset[0].item_level_avg;
        
        // Several gearsets are registered for iterated classjob
        } else if (classjobsGearset.length > 1) {
          // Only keep the higher ilvl gearset
          character.data.classjobs[i].ilevel = Math.max.apply(Math,classjobsGearset.map(function(gearset){return gearset.item_level_avg;}))
        }
      });
      return character;
    },

    // Save newly added classjob
    addClassjob: function(classjob) {
      this.addColumn(classjob);
    },

    
    /**
     * Add a new row with character's classjob ilvl.
     * 
     * @param {object} character Object with character data
     */
    addRow: function(character) {
      var $this = this;

      var newLine = $('<tr>');
      newLine.append('<td><a href="#" class="remove-character">x</a><img width="40px" src="'+character.avatar+'" /><a target="_blank" class="character-name" href="http://fr.finalfantasyxiv.com/lodestone/character/'+character.lodestone_id+'">'+character.name+'</a></td>');
      
      // Build minion ownership for iterated character
      $.each(this.options.allClassjobs, function(i, classjob){
        if (character.data.classjobs.hasOwnProperty(classjob.id)) {
          if (character.data.classjobs[classjob.id].ilevel != null) {
            newLine.append('<td class="classjob-lvl-'+character.data.classjobs[classjob.id].level+'">'+character.data.classjobs[classjob.id].level+' <span class="ilvl">'+character.data.classjobs[classjob.id].ilevel+'</span></td>');

          } else {
            newLine.append('<td class="classjob-lvl-'+character.data.classjobs[classjob.id].level+'">'+character.data.classjobs[classjob.id].level+'</td>');            
          }
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
     * Bind plugin events
     */
    _bindEvents: function() {
      var $this = this;
    }
});