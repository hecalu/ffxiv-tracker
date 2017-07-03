$.widget( "plugin.classjobsTable", {
 
    // Default options.
    options: {
        displayedCharacters: [],
        displayedClasses: [],
        preFilteredClasses: [19,21,32,24,28,33,20,22,30,34,23,31,25,27,35,8,9,10,11,12,13,14,15,16,17,18],
        // Classjobs list update url : https://api.xivdb.com/data/classjobs
        allClassjobs: $.parseJSON('[{"id":0,"icon":"adventurer","name_ja":"\u3059\u3063\u3074\u3093\u58eb","name_en":"Adventurer","name_fr":"Aventurier","name_de":"Abenteurer","abbr_ja":"ADV","abbr_en":"ADV","abbr_fr":"AVN","abbr_de":"ABE","abbr_cns":"","is_job":0,"filebase":"","classjob_category":30,"classjob_parent":0,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":1,"icon":"gladiator","name_ja":"\u5263\u8853\u58eb","name_en":"Gladiator","name_fr":"Gladiateur","name_de":"Gladiator","abbr_ja":"GLA","abbr_en":"GLA","abbr_fr":"GLA","abbr_de":"GLA","abbr_cns":"","is_job":0,"filebase":"","classjob_category":30,"classjob_parent":1,"item_starting_weapon":1601,"patch":0,"name_cns":"","name_cnt":""},{"id":2,"icon":"pugilist","name_ja":"\u683c\u95d8\u58eb","name_en":"Pugilist","name_fr":"Pugiliste","name_de":"Faustk\u00e4mpfer","abbr_ja":"PGL","abbr_en":"PGL","abbr_fr":"PGL","abbr_de":"FST","abbr_cns":"","is_job":0,"filebase":"","classjob_category":30,"classjob_parent":2,"item_starting_weapon":1680,"patch":0,"name_cns":"","name_cnt":""},{"id":3,"icon":"marauder","name_ja":"\u65a7\u8853\u58eb","name_en":"Marauder","name_fr":"Maraudeur","name_de":"Marodeur","abbr_ja":"MRD","abbr_en":"MRD","abbr_fr":"MRD","abbr_de":"MAR","abbr_cns":"","is_job":0,"filebase":"","classjob_category":30,"classjob_parent":3,"item_starting_weapon":1749,"patch":0,"name_cns":"","name_cnt":""},{"id":4,"icon":"lancer","name_ja":"\u69cd\u8853\u58eb","name_en":"Lancer","name_fr":"Ma\u00eetre D\u0027hast","name_de":"Pikenier","abbr_ja":"LNC","abbr_en":"LNC","abbr_fr":"HAS","abbr_de":"PIK","abbr_cns":"","is_job":0,"filebase":"","classjob_category":30,"classjob_parent":4,"item_starting_weapon":1819,"patch":0,"name_cns":"","name_cnt":""},{"id":5,"icon":"archer","name_ja":"\u5f13\u8853\u58eb","name_en":"Archer","name_fr":"Archer","name_de":"Waldl\u00e4ufer","abbr_ja":"ARC","abbr_en":"ARC","abbr_fr":"ARC","abbr_de":"WDL","abbr_cns":"","is_job":0,"filebase":"","classjob_category":30,"classjob_parent":5,"item_starting_weapon":1889,"patch":0,"name_cns":"","name_cnt":""},{"id":6,"icon":"conjurer","name_ja":"\u5e7b\u8853\u58eb","name_en":"Conjurer","name_fr":"\u00e9l\u00e9mentaliste","name_de":"Druide","abbr_ja":"CNJ","abbr_en":"CNJ","abbr_fr":"\u00c9LM","abbr_de":"DRU","abbr_cns":"","is_job":0,"filebase":"","classjob_category":31,"classjob_parent":6,"item_starting_weapon":1995,"patch":0,"name_cns":"","name_cnt":""},{"id":7,"icon":"thaumaturge","name_ja":"\u546a\u8853\u58eb","name_en":"Thaumaturge","name_fr":"Occultiste","name_de":"Thaumaturg","abbr_ja":"THM","abbr_en":"THM","abbr_fr":"OCC","abbr_de":"THM","abbr_cns":"","is_job":0,"filebase":"","classjob_category":31,"classjob_parent":7,"item_starting_weapon":2055,"patch":0,"name_cns":"","name_cnt":""},{"id":8,"icon":"carpenter","name_ja":"\u6728\u5de5\u5e2b","name_en":"Carpenter","name_fr":"Menuisier","name_de":"Zimmerer","abbr_ja":"CRP","abbr_en":"CRP","abbr_fr":"MEN","abbr_de":"ZMR","abbr_cns":"","is_job":0,"filebase":"","classjob_category":33,"classjob_parent":8,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":9,"icon":"blacksmith","name_ja":"\u935b\u51b6\u5e2b","name_en":"Blacksmith","name_fr":"Forgeron","name_de":"Grobschmied","abbr_ja":"BSM","abbr_en":"BSM","abbr_fr":"FRG","abbr_de":"GRS","abbr_cns":"","is_job":0,"filebase":"","classjob_category":33,"classjob_parent":9,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":10,"icon":"armorer","name_ja":"\u7532\u5191\u5e2b","name_en":"Armorer","name_fr":"Armurier","name_de":"Plattner","abbr_ja":"ARM","abbr_en":"ARM","abbr_fr":"ARM","abbr_de":"PLA","abbr_cns":"","is_job":0,"filebase":"","classjob_category":33,"classjob_parent":10,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":11,"icon":"goldsmith","name_ja":"\u5f6b\u91d1\u5e2b","name_en":"Goldsmith","name_fr":"Orf\u00e8vre","name_de":"Goldschmied","abbr_ja":"GSM","abbr_en":"GSM","abbr_fr":"ORF","abbr_de":"GLD","abbr_cns":"","is_job":0,"filebase":"","classjob_category":33,"classjob_parent":11,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":12,"icon":"leatherworker","name_ja":"\u9769\u7d30\u5de5\u5e2b","name_en":"Leatherworker","name_fr":"Tanneur","name_de":"Gerber","abbr_ja":"LTW","abbr_en":"LTW","abbr_fr":"TAN","abbr_de":"GER","abbr_cns":"","is_job":0,"filebase":"","classjob_category":33,"classjob_parent":12,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":13,"icon":"weaver","name_ja":"\u88c1\u7e2b\u5e2b","name_en":"Weaver","name_fr":"Couturier","name_de":"Weber","abbr_ja":"WVR","abbr_en":"WVR","abbr_fr":"COU","abbr_de":"WEB","abbr_cns":"","is_job":0,"filebase":"","classjob_category":33,"classjob_parent":13,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":14,"icon":"alchemist","name_ja":"\u932c\u91d1\u8853\u5e2b","name_en":"Alchemist","name_fr":"Alchimiste","name_de":"Alchemist","abbr_ja":"ALC","abbr_en":"ALC","abbr_fr":"ALC","abbr_de":"ALC","abbr_cns":"","is_job":0,"filebase":"","classjob_category":33,"classjob_parent":14,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":15,"icon":"culinarian","name_ja":"\u8abf\u7406\u5e2b","name_en":"Culinarian","name_fr":"Cuisinier","name_de":"Gourmet","abbr_ja":"CUL","abbr_en":"CUL","abbr_fr":"CUI","abbr_de":"GRM","abbr_cns":"","is_job":0,"filebase":"","classjob_category":33,"classjob_parent":15,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":16,"icon":"miner","name_ja":"\u63a1\u6398\u5e2b","name_en":"Miner","name_fr":"Mineur","name_de":"Minenarbeiter","abbr_ja":"MIN","abbr_en":"MIN","abbr_fr":"MIN","abbr_de":"MIN","abbr_cns":"","is_job":0,"filebase":"","classjob_category":32,"classjob_parent":16,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":17,"icon":"botanist","name_ja":"\u5712\u82b8\u5e2b","name_en":"Botanist","name_fr":"Botaniste","name_de":"G\u00e4rtner","abbr_ja":"BTN","abbr_en":"BTN","abbr_fr":"BTN","abbr_de":"G\u00c4R","abbr_cns":"","is_job":0,"filebase":"","classjob_category":32,"classjob_parent":17,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":18,"icon":"fisher","name_ja":"\u6f01\u5e2b","name_en":"Fisher","name_fr":"P\u00eacheur","name_de":"Fischer","abbr_ja":"FSH","abbr_en":"FSH","abbr_fr":"P\u00caC","abbr_de":"FIS","abbr_cns":"","is_job":0,"filebase":"","classjob_category":32,"classjob_parent":18,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":19,"icon":"paladin","name_ja":"\u30ca\u30a4\u30c8","name_en":"Paladin","name_fr":"Paladin","name_de":"Paladin","abbr_ja":"PLD","abbr_en":"PLD","abbr_fr":"PLD","abbr_de":"PLD","abbr_cns":"","is_job":1,"filebase":"","classjob_category":30,"classjob_parent":1,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":20,"icon":"monk","name_ja":"\u30e2\u30f3\u30af","name_en":"Monk","name_fr":"Moine","name_de":"M\u00f6nch","abbr_ja":"MNK","abbr_en":"MNK","abbr_fr":"MOI","abbr_de":"M\u00d6N","abbr_cns":"","is_job":1,"filebase":"","classjob_category":30,"classjob_parent":2,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":21,"icon":"warrior","name_ja":"\u6226\u58eb","name_en":"Warrior","name_fr":"Guerrier","name_de":"Krieger","abbr_ja":"WAR","abbr_en":"WAR","abbr_fr":"GUE","abbr_de":"KRG","abbr_cns":"","is_job":1,"filebase":"","classjob_category":30,"classjob_parent":3,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":22,"icon":"dragoon","name_ja":"\u7adc\u9a0e\u58eb","name_en":"Dragoon","name_fr":"Chevalier Dragon","name_de":"Dragoon","abbr_ja":"DRG","abbr_en":"DRG","abbr_fr":"DRG","abbr_de":"DRG","abbr_cns":"","is_job":1,"filebase":"","classjob_category":30,"classjob_parent":4,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":23,"icon":"bard","name_ja":"\u541f\u904a\u8a69\u4eba","name_en":"Bard","name_fr":"Barde","name_de":"Barde","abbr_ja":"BRD","abbr_en":"BRD","abbr_fr":"BRD","abbr_de":"BRD","abbr_cns":"","is_job":1,"filebase":"","classjob_category":30,"classjob_parent":5,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":24,"icon":"whitemage","name_ja":"\u767d\u9b54\u9053\u58eb","name_en":"White Mage","name_fr":"Mage Blanc","name_de":"Wei\u00dfmagier","abbr_ja":"WHM","abbr_en":"WHM","abbr_fr":"MBL","abbr_de":"WMA","abbr_cns":"","is_job":1,"filebase":"","classjob_category":31,"classjob_parent":6,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":25,"icon":"blackmage","name_ja":"\u9ed2\u9b54\u9053\u58eb","name_en":"Black Mage","name_fr":"Mage Noir","name_de":"Schwarzmagier","abbr_ja":"BLM","abbr_en":"BLM","abbr_fr":"MNO","abbr_de":"SMA","abbr_cns":"","is_job":1,"filebase":"","classjob_category":31,"classjob_parent":7,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":26,"icon":"arcanist","name_ja":"\u5df4\u8853\u58eb","name_en":"Arcanist","name_fr":"Arcaniste","name_de":"Hermetiker","abbr_ja":"ACN","abbr_en":"ACN","abbr_fr":"ACN","abbr_de":"HRT","abbr_cns":"","is_job":0,"filebase":"","classjob_category":31,"classjob_parent":26,"item_starting_weapon":2142,"patch":0,"name_cns":"","name_cnt":""},{"id":27,"icon":"summoner","name_ja":"\u53ec\u559a\u58eb","name_en":"Summoner","name_fr":"Invocateur","name_de":"Beschw\u00f6rer","abbr_ja":"SMN","abbr_en":"SMN","abbr_fr":"INV","abbr_de":"BSW","abbr_cns":"","is_job":1,"filebase":"","classjob_category":31,"classjob_parent":26,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":28,"icon":"scholar","name_ja":"\u5b66\u8005","name_en":"Scholar","name_fr":"\u00e9rudit","name_de":"Gelehrter","abbr_ja":"SCH","abbr_en":"SCH","abbr_fr":"\u00c9RU","abbr_de":"GLT","abbr_cns":"","is_job":1,"filebase":"","classjob_category":31,"classjob_parent":26,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":29,"icon":"rogue","name_ja":"\u53cc\u5263\u58eb","name_en":"Rogue","name_fr":"Surineur","name_de":"Schurke","abbr_ja":"ROG","abbr_en":"ROG","abbr_fr":"SUR","abbr_de":"SCH","abbr_cns":"","is_job":0,"filebase":"","classjob_category":30,"classjob_parent":29,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":30,"icon":"ninja","name_ja":"\u5fcd\u8005","name_en":"Ninja","name_fr":"Ninja","name_de":"Ninja","abbr_ja":"NIN","abbr_en":"NIN","abbr_fr":"NIN","abbr_de":"NIN","abbr_cns":"","is_job":1,"filebase":"","classjob_category":30,"classjob_parent":29,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":31,"icon":"machinist","name_ja":"\u6a5f\u5de5\u58eb","name_en":"Machinist","name_fr":"Machiniste","name_de":"Maschinist","abbr_ja":"MCH","abbr_en":"MCH","abbr_fr":"MCH","abbr_de":"MCH","abbr_cns":"","is_job":1,"filebase":"","classjob_category":30,"classjob_parent":31,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":32,"icon":"darkknight","name_ja":"\u6697\u9ed2\u9a0e\u58eb","name_en":"Dark Knight","name_fr":"Chevalier Noir","name_de":"Dunkelritter","abbr_ja":"DRK","abbr_en":"DRK","abbr_fr":"CHN","abbr_de":"DKR","abbr_cns":"","is_job":1,"filebase":"","classjob_category":30,"classjob_parent":32,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":33,"icon":"astrologian","name_ja":"\u5360\u661f\u8853\u5e2b","name_en":"Astrologian","name_fr":"Astromancien","name_de":"Astrologe","abbr_ja":"AST","abbr_en":"AST","abbr_fr":"AST","abbr_de":"AST","abbr_cns":"","is_job":1,"filebase":"","classjob_category":31,"classjob_parent":33,"item_starting_weapon":0,"patch":0,"name_cns":"","name_cnt":""},{"id":34,"icon":"samurai","name_ja":"\u4f8d","name_en":"Samurai","name_fr":"Samoura\u00ef","name_de":"Samurai","abbr_ja":"SAM","abbr_en":"SAM","abbr_fr":"SAM","abbr_de":"SAM","abbr_cns":"","is_job":1,"filebase":"","classjob_category":30,"classjob_parent":34,"item_starting_weapon":0,"patch":36,"name_cns":"","name_cnt":""},{"id":35,"icon":"redmage","name_ja":"\u8d64\u9b54\u9053\u58eb","name_en":"Red Mage","name_fr":"Mage Rouge","name_de":"Rotmagier","abbr_ja":"RDM","abbr_en":"RDM","abbr_fr":"MRG","abbr_de":"RMA","abbr_cns":"","is_job":1,"filebase":"","classjob_category":31,"classjob_parent":35,"item_starting_weapon":0,"patch":36,"name_cns":"","name_cnt":""}]')
    },


    // Constructor.
    _create: function() {
        // Load translations
        this._loadTranslations();

        // Init table
        this._initTable();

        // Bind events
        this._bindEvents();
    },


    /**
     * Load all minions translations
     */
    _loadTranslations: function() {
        var $this = this,
            enRessources = [],
            frRessources = [],
            deRessources = [];
        
        // Build translations
        $.each($this.options.allClassjobs, function(i, classjob){
            enRessources[classjob.id] = {"name": classjob.name_en};
            frRessources[classjob.id] = {"name": classjob.name_fr};
            deRessources[classjob.id] = {"name": classjob.name_de};
        });

        $(document).trigger('add-translations', {'lang': 'en', 'namespace': 'classes', 'translations': enRessources});
        $(document).trigger('add-translations', {'lang': 'fr', 'namespace': 'classes', 'translations': frRessources});
        $(document).trigger('add-translations', {'lang': 'de', 'namespace': 'classes', 'translations': deRessources});
    },


    /**
     * Pre-build table data with rows (characters) or columns (classjob)
     */
    _initTable: function() {
      var $this = this;
      
      // Then build headers table by adding a new column for each classes.
      $.each($this.options.preFilteredClasses, function(i, classjobId){
        var classjob = $this.options.allClassjobs[classjobId];
        $this.options.displayedClasses.push(classjob);
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

      var columnHeader = $('<th><img class="classjob-icon img-responsive" data-toggle="tooltip" src="https:\/\/secure.xivdb.com\/img\/classes\/set2\/'+classjob.icon+'.png" data-i18n="[data-original-title]classes:'+classjob.id+'.name" /></th>');
          
      // Add header in table
      $this.element.find('thead tr').append(columnHeader.hide().fadeIn());
      
      // Enable tooltip
      $('[data-toggle="tooltip"]').tooltip();

      // Enable sorting on column
      $(columnHeader).on('click', function(){
        $this.sortTable(columnHeader);
      });

      $(document).trigger('ui-update', {"element": columnHeader});
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
      newLine.append('<td class="character-row"><img class="character-thumbnail" width="40px" src="'+character.avatar+'" /><div class="character-name">'+character.name+'</div><div class="character-actions"><a class="remove-character" href="#"><span class="glyphicon glyphicon-remove"></span> <span data-i18n="app.characters.actions.remove"></span></a></td>');
      
      // Build minion ownership for iterated character
      $.each(this.options.displayedClasses, function(i, classjob){
        if (character.data.classjobs.hasOwnProperty(classjob.classjob_parent)) {
          newLine.append('<td class="lvl classjob-lvl-'+character.data.classjobs[classjob.classjob_parent].level+'">'+character.data.classjobs[classjob.classjob_parent].level+'</td>');            
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

      $(document).trigger('ui-update', {"element": newLine});
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

      $(document).on('remove-characters', function() {
        $this.removeCharacters();
      });
    }
});