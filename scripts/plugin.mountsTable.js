$.widget( "plugin.mountsTable", {
 
    // Default options.
    options: {
        displayedCharacters: [],
        displayedMounts: [],
        preFilteredMounts: [78,90,104,98,77,76,75,116,115],
        mountsList : [
        	{ name: "Ponies", mounts : [43,40,31,30,29,28,22] }, 		// Birds
        	{ name: "Birds", 	mounts: [78,90,104,98,77,76,75] }, 	// Ponies
        	{ name: "PVP", 		mounts: [91,96,95,102,48,80] }, 	// PVP
        	{ name: "Tanks", 	mounts: [56,32,33] }, 	// Tank
        	{ name: "Wolves", mounts: [116,115] }, 	// Wolves
        ],
        // Mounts list update url : https://api.xivdb.com/mount?columns=id,name_fr,icon,info1_fr
        allMounts: $.parseJSON('[{"id":1,"name_fr":"Chocobo Destrier","icon":4401,"info1_fr":"Les grandes compagnies se fournissent aupr\u00e8s des meilleurs haras ishgardais pour obtenir leurs montures. Les roussins sont destin\u00e9s aux soldats de taille moyenne, les robustes destriers aux Roegadyns, et les petits genets belahdiens aux Lalafells."},{"id":4,"name_fr":"Goobbue","icon":4403,"info1_fr":"Le m\u00e9nestrel errant vous a offert en gage de reconnaissance une corne magique permettant d\u0027appeler un goobbue. Ces animaux ne sont g\u00e9n\u00e9ralement pas dociles, mais celui-ci est semble-t-il un m\u00e9lomane qui a suivi le barde durant ses voyages dans tout \u00c9orz\u00e9a, charm\u00e9 par sa musique."},{"id":5,"name_fr":"Chocobo Legacy","icon":4402,"info1_fr":"Vous ne pensiez pas revoir votre ch\u00e8re monture apr\u00e8s votre saut dans l\u0027avenir. C\u0027\u00e9tait sans compter sur la fid\u00e9lit\u00e9 et la t\u00e9nacit\u00e9 de votre chocobo, qui a su vous retrouver apr\u00e8s avoir err\u00e9 cinq ans sans jamais accepter d\u0027autre ma\u00eetre."},{"id":6,"name_fr":"Armure Magitek","icon":4406,"info1_fr":"Une armure magitek imp\u00e9riale de type faucheuse. Cid et ses ing\u00e9nieurs l\u0027ont modifi\u00e9e, en incorporant notamment un noyau magn\u00e9tique similaire \u00e0 ceux utilis\u00e9s dans la fabrication des pantins."},{"id":8,"name_fr":"Coeurl","icon":4405,"info1_fr":"\u00c0 l\u0027\u00e9tat sauvage, ces f\u00e9lins sont redout\u00e9s pour leur incroyable rapidit\u00e9 et leur f\u00e9rocit\u00e9. Mais au Proche-Orient, dont ils sont originaires, ils sont dress\u00e9s gr\u00e2ce \u00e0 des m\u00e9thodes particuli\u00e8res inconnues des \u00c9orz\u00e9ens et sont utilis\u00e9s comme monture. Le v\u00f4tre aurait \u00e9t\u00e9 \u00e9lev\u00e9 \u00e0 Thavnair."},{"id":9,"name_fr":"Ahriman","icon":4404,"info1_fr":"Le n\u00e9ant est une dimension par nature m\u00e9connue, mais les savants s\u0027accordent g\u00e9n\u00e9ralement pour hi\u00e9rarchiser les cr\u00e9atures qui l\u0027habitent sur douze rangs. Les ahrimans feraient partie du cinqui\u00e8me."},{"id":15,"name_fr":"Licorne","icon":4407,"info1_fr":"Rares sont ceux qui ont l\u0027occasion d\u0027apercevoir un de ces nobles \u00e9quid\u00e9s, m\u00eame dans leur Coerthas natal. Cette licorne a d\u00e9cid\u00e9 de rester \u00e0 vos c\u00f4t\u00e9s apr\u00e8s que vous l\u0027avez soign\u00e9e."},{"id":18,"name_fr":"B\u00e9h\u00e9moth","icon":4408,"info1_fr":"Imm\u00e9diatement apr\u00e8s le Fl\u00e9au, un aventurier voyageant dans une r\u00e9gion recul\u00e9e du Coerthas a trouv\u00e9 des b\u00e9b\u00e9s b\u00e9h\u00e9moth dont la m\u00e8re avait p\u00e9ri dans les flammes de Bahamut. Il les a \u00e9lev\u00e9s et est parvenu \u00e0 les dresser, \u00e0 la surprise de tous ses proches."},{"id":19,"name_fr":"Draconide De Cavalerie","icon":4409,"info1_fr":"Le dressage d\u0027un draconide de cavalerie est un processus long et ardu. S\u00e9par\u00e9s imm\u00e9diatement de leur m\u00e8re, ils sont rapidement sevr\u00e9s par leur dresseur, qui les nourrit de glandes calorif\u00e8res de vieux draconides pour s\u0027assurer qu\u0027ils soient \u00e0 la fois dociles et meurtriers."},{"id":20,"name_fr":"Goobbue Couronn\u00e9","icon":4410,"info1_fr":"Les D\u00e9natur\u00e9s se sont m\u00e9chamment amus\u00e9s \u00e0 arracher la mousse qui recouvrait le cr\u00e2ne de ce goobbue. Le chef des Sylphes du Refuge a eu piti\u00e9 de lui et l\u0027a soign\u00e9, puis lui a confectionn\u00e9 une couronne de lauriers pour cacher ses cicatrices."},{"id":21,"name_fr":"Armure Magitek Type C","icon":4411,"info1_fr":"Garlemald a vite r\u00e9alis\u00e9 apr\u00e8s quelques combats contre l\u0027Alliance \u00e9orz\u00e9enne que ses armures ne faisaient pas le poids face \u00e0 la puissance des mages. L\u0027Empire a alors mis au point ce prototype rev\u00eatu d\u0027un enduit dor\u00e9 capable de r\u00e9sister aux attaques magiques."},{"id":22,"name_fr":"Alicorne De Jais","icon":4412,"info1_fr":"Personne ne sait pourquoi les Asciens ont d\u00e9cid\u00e9 d\u0027offrir ces b\u00eates f\u00e9roces aux tribus barbares. Elles sont de nature agressive et tenace, mais \u00e9galement compl\u00e8tement loyales \u00e0 ceux qui poss\u00e8dent une fl\u00fbte enchant\u00e9e."},{"id":25,"name_fr":"Gros Chocobo","icon":4413,"info1_fr":"Gros est un euph\u00e9misme pour d\u00e9crire cet animal. Sa gloutonnerie n\u0027est jamais satisfaite, et il ne bougera pas une plume pour vous... \u00e0 moins que vous ne lui  promettiez des l\u00e9gumes de Gysahl, auquel cas rien ne l\u0027arr\u00eatera!"},{"id":26,"name_fr":"Elbst De Cavalerie","icon":4414,"info1_fr":"Pahh \u00e0 la Couv\u00e9e de Novv coupe la palmure de ces elbsts lorsqu\u0027ils sont jeunes afin qu\u0027ils soient capables de courir sur terre aussi vite que les chocobos. Ce proc\u00e9d\u00e9 les prive cependant de leur aptitude naturelle \u00e0 nager."},{"id":27,"name_fr":"Balancelle Bombo","icon":4415,"info1_fr":"Apr\u00e8s avoir compris que ses bombos ne seraient jamais des explosifs satisfaisants, l\u0027acolyte du 789e ordre Ba Go a d\u00e9cid\u00e9 de faire la seule chose raisonnable: attacher les cr\u00e9atures \u00e0 un banc pour en faire un v\u00e9hicule."},{"id":28,"name_fr":"Aithon","icon":4416,"info1_fr":"On raconte que le Primordial Ifrit, le Seigneur des flammes, a forg\u00e9 ce destrier \u00e0 partir d\u0027une alicorne de jais offerte en sacrifice par les Amalj\u0027aa."},{"id":29,"name_fr":"Xanthos","icon":4417,"info1_fr":"On raconte que la Primordiale Garuda, la Souffleuse de rafales, a cr\u00e9\u00e9 ce destrier \u00e0 partir d\u0027une alicorne de jais offerte en sacrifice par les Ixali."},{"id":30,"name_fr":"Gullfaxi","icon":4418,"info1_fr":"On raconte que le Primordial Titan, l\u0027\u00c9branleur des terres, a con\u00e7u ce destrier \u00e0 partir d\u0027une alicorne de jais offerte en sacrifice par les Kobolds."},{"id":31,"name_fr":"Enbarr","icon":4419,"info1_fr":"On raconte que le Primordial L\u00e9viathan, le D\u00e9cha\u00eeneur des mar\u00e9es, a donn\u00e9 naissance \u00e0 ce destrier \u00e0 partir d\u0027une alicorne de jais offerte en sacrifice par les Sahuagins."},{"id":32,"name_fr":"Lion De Guerre","icon":4420,"info1_fr":"Les lions ont \u00e9t\u00e9 import\u00e9s du Proche-Orient afin de servir de montures aux casques d\u0027argent. Jug\u00e9s trop impr\u00e9visibles, ceux qui n\u0027ont pas \u00e9t\u00e9 vendus au Colis\u00e9e ont \u00e9t\u00e9 rel\u00e2ch\u00e9s dans le Thanalan, et ils sont finalement retourn\u00e9s \u00e0 l\u0027\u00e9tat sauvage."},{"id":33,"name_fr":"Ours De Guerre","icon":4421,"info1_fr":"Autrefois, les guerriers en qu\u00eate de gloire avaient coutume de s\u0027aventurer dans les montagnes septentrionales d\u0027Abalathia \u00e0 la recherche de f\u00e9roces grizzlys pour les combattre et les soumettre par la force. Ceux qui survivaient revenaient dans leur village en chevauchant fi\u00e8rement leur nouvelle monture."},{"id":34,"name_fr":"Chocobo De Trait","icon":4422,"info1_fr":"Les premiers chocobos de cette race ont \u00e9t\u00e9 d\u00e9couverts et captur\u00e9s par des chasseurs ishgardais en qu\u00eate de la l\u00e9gendaire for\u00eat des chocobos. Leur taille et leur robustesse en font d\u0027excellents animaux de b\u00e2t, mais leur temp\u00e9rament violent les rend impropres \u00e0 la monte."},{"id":35,"name_fr":"Loup Sinistre","icon":4423,"info1_fr":"Les loups sinistres \u00e9taient consid\u00e9r\u00e9s comme une race \u00e9teinte jusqu\u0027\u00e0 ce que des Ixali d\u00e9couvrent une meute isol\u00e9e dans les vall\u00e9es de Xelphatol. Apr\u00e8s avoir captur\u00e9 quelques louveteaux, ils les ont \u00e9lev\u00e9s, non sans difficult\u00e9s, pour en faire des montures de guerre. Ils sont \u00e9normes, et extr\u00eamement loyaux."},{"id":36,"name_fr":"Cheval Des Temp\u00eates","icon":4424,"info1_fr":"Apr\u00e8s une campagne r\u00e9ussie de promotion des chevaux par l\u0027uma bugy\u00f4 venu de l\u0027Est, la popularit\u00e9 de ces animaux n\u0027a cess\u00e9 de cro\u00eetre parmi les aventuriers. Les grandes compagnies ont d\u00e9cid\u00e9 d\u0027offrir ces nobles montures aux soldats se distinguant au combat."},{"id":37,"name_fr":"Cheval Du Serpent","icon":4425,"info1_fr":"Apr\u00e8s une campagne r\u00e9ussie de promotion des chevaux par l\u0027uma bugy\u00f4 venu de l\u0027Est, la popularit\u00e9 de ces animaux n\u0027a cess\u00e9 de cro\u00eetre parmi les aventuriers. Les grandes compagnies ont d\u00e9cid\u00e9 d\u0027offrir ces nobles montures aux soldats se distinguant au combat."},{"id":38,"name_fr":"Cheval Des Sables","icon":4426,"info1_fr":"Apr\u00e8s une campagne r\u00e9ussie de promotion des chevaux par l\u0027uma bugy\u00f4 venu de l\u0027Est, la popularit\u00e9 de ces animaux n\u0027a cess\u00e9 de cro\u00eetre parmi les aventuriers. Les grandes compagnies ont d\u00e9cid\u00e9 d\u0027offrir ces nobles montures aux soldats se distinguant au combat."},{"id":40,"name_fr":"Markab","icon":4427,"info1_fr":"On raconte que le Primordial Ramuh, le Patriarche fulgurant, a engendr\u00e9 ce destrier \u00e0 partir d\u0027une alicorne de jais offerte en sacrifice par les Sylphes."},{"id":41,"name_fr":"Chocobo De C\u00e9r\u00e9monie","icon":4431,"info1_fr":"Ce fier volatile \u00e9lev\u00e9 dans l\u0027un des meilleurs haras ishgardais a \u00e9t\u00e9 dress\u00e9 pour parader lors de c\u00e9r\u00e9monies. Issus de croisements pr\u00e9cis, il poss\u00e8de un plumage d\u0027un blanc immacul\u00e9 et un caract\u00e8re des plus dociles."},{"id":42,"name_fr":"Sleipnir","icon":4428,"info1_fr":"Ce destrier \u00e0 l\u0027allure terrifiante aurait re\u00e7u ses pouvoirs surnaturels d\u0027Odin, le Chevalier des ombres. Lorsqu\u0027il galope, sa crini\u00e8re rouge sang ondule comme pour annoncer leur tr\u00e9pas \u00e0 ceux qui ont la malchance de croiser son chemin."},{"id":43,"name_fr":"Bor\u00e9as","icon":4429,"info1_fr":"On raconte que Shiva, la Furie des neiges, aurait choisi une licorne du Coerthas pour souffler un froid glacial sur les terres qu\u0027elle parcourait. C\u0027est en recevant ce pouvoir que la cr\u00e9ature aurait chang\u00e9 d\u0027apparence."},{"id":44,"name_fr":"Chocobo De Parade","icon":4430,"info1_fr":"Ce volatile \u00e0 l\u0027app\u00e9tit insatiable aurait \u00e9t\u00e9 livr\u00e9 \u00e0 la guilde des aventuriers lorsque celle-ci commanda des chocobos de stature imposante \u00e0 un marchand. Bien trop co\u00fbteux \u00e0 entretenir, la guilde d\u00e9cida de les offrir \u00e0 certains aventuriers pour saluer leurs exploits."},{"id":45,"name_fr":"Chocobo Noir","icon":4436,"info1_fr":"Un chocobo noir natif d\u0027Ishgard, de la race des \u201cvolants\u201d. Sire Haurchefant de la maison Fortemps a \u00e9lev\u00e9 lui-m\u00eame ce sp\u00e9cimen, qu\u0027il destinait \u00e0 un ami cher, et lui a fait subir un entra\u00eenement de son cru. Curieusement, l\u0027animal semble muscl\u00e9..."},{"id":46,"name_fr":"Adamankh\u00e9lone","icon":4434,"info1_fr":"Les adamankh\u00e9lones proviennent de la lointaine \u00eele de Thavnair. Les scientifiques uldiens ont longtemps cherch\u00e9 \u00e0 les apprivoiser afin de pouvoir profiter de leur force prodigieuse. Gr\u00e2ce au concours des occultistes, de nombreux sp\u00e9cimens ont \u00e9t\u00e9 dress\u00e9s \u00e0 \u00eatre mont\u00e9s, et certains sont m\u00eame d\u00e9sormais capables de voyager dans les airs."},{"id":47,"name_fr":"Kirin","icon":4432,"info1_fr":"Ce destrier l\u00e9gendaire, qui r\u00e8gne sur les autres cr\u00e9atures, a v\u00e9cu des mill\u00e9naires. Un ermite a fabriqu\u00e9 le \u201ccor oriental\u201d n\u00e9cessaire pour l\u0027appeler, mais on dit que seul un h\u00e9ros aussi vaillant que sage verra cette monture se pr\u00e9senter devant lui."},{"id":48,"name_fr":"Module De D\u00e9placement Sph\u00e9rique","icon":4433,"info1_fr":"Les arch\u00e9ologues de la Fondation de Saint-Coinach ont d\u00e9couvert ce module, dont le d\u00e9sarmement a \u00e9t\u00e9 confi\u00e9 aux bons soins de Nero tol Scaeva. Les frais ont \u00e9t\u00e9 rembours\u00e9s lors de la revente de l\u0027appareil, mais les r\u00e9glages semblent avoir \u00e9t\u00e9 faits \u00e0 la va-vite. L\u0027appareil s\u0027agite parfois, comme s\u0027il se pr\u00e9parait \u00e0 abattre sa cible..."},{"id":49,"name_fr":"Fenrir","icon":4435,"info1_fr":"Ce canid\u00e9 sauvage, dont les \u00c9orz\u00e9ens croyaient l\u0027esp\u00e8ce disparue depuis longtemps, r\u00e9gnait autrefois en \u00c9orz\u00e9a. On l\u0027appelle \u201cFenrir\u201d de par sa ressemblance avec la cr\u00e9ature l\u00e9gendaire du m\u00eame nom. Le froid des montagnes d\u0027Abalathia aurait-il ressuscit\u00e9 ces b\u00eates?"},{"id":50,"name_fr":"Midgardsormr","icon":4437,"info1_fr":"Une prog\u00e9niture engendr\u00e9e par Midgardsormr, le p\u00e8re de tous les dragons. Un Guerrier de la Lumi\u00e8re ayant vaincu tous les dragons est, d\u0027apr\u00e8s lui, digne de le chevaucher. Il a chang\u00e9 de forme de fa\u00e7on \u00e0 pouvoir \u00eatre mont\u00e9."},{"id":52,"name_fr":"Chocobo De Trait Rouge","icon":4444,"info1_fr":"Oiseau de grande taille captur\u00e9 dans la for\u00eat des chocobos de Dravania, il arbore un ton rouge rare chez les sp\u00e9cimens sauvages. Cette couleur \u00e9tant celle de l\u0027amour et de la fraternit\u00e9 \u00e0 Ishgard, c\u0027est la monture id\u00e9ale pour les ins\u00e9parables."},{"id":53,"name_fr":"Sanuwa","icon":4438,"info1_fr":"Luna Vanu a pass\u00e9 plusieurs lunes \u00e0 entra\u00eener ce farouche sanuwa \u00e0 ob\u00e9ir \u00e0 l\u0027homme en attendant qu\u0027un aventurier digne de le monter se pr\u00e9sente. Il est si puissant qu\u0027il peut voler sans difficult\u00e9s m\u00eame face \u00e0 la plus terrible des temp\u00eates."},{"id":54,"name_fr":"Griffon","icon":4439,"info1_fr":"Cet animal ail\u00e9 originaire des montagnes d\u0027Abalathia est extr\u00eamement f\u00e9roce. La Cit\u00e9 d\u0027Ala Mhigo a cependant r\u00e9ussi par le pass\u00e9 \u00e0 l\u0027utiliser comme monture en le dressant strictement d\u00e8s son plus jeune \u00e2ge. Cette nation avait m\u00eame constitu\u00e9 un escadron mont\u00e9 utilisant ces animaux."},{"id":55,"name_fr":"Manacutter","icon":4440,"info1_fr":"Le Manacutter est un a\u00e9ronef de petite taille con\u00e7u par Wedge et Biggs des Forges de Garlond sur une supervision de Cid nan Garlond. C\u0027est le tout premier mod\u00e8le embarquant un convertisseur fonctionnant au moyen de cristaux corrompus."},{"id":56,"name_fr":"Panth\u00e8re De Guerre","icon":4441,"info1_fr":"Ce f\u00e9lin proche du coeurl a \u00e9t\u00e9 dress\u00e9 pour le combat. Il poss\u00e8de la capacit\u00e9 naturelle d\u0027augmenter ses caract\u00e9ristiques physiques gr\u00e2ce \u00e0 la magie pour chasser. On raconte qu\u0027il aurait ainsi inspir\u00e9 les premiers chevaliers noirs pour leurs techniques d\u0027\u00e9p\u00e9e."},{"id":58,"name_fr":"Gobblind\u00e9","icon":4442,"info1_fr":"Con\u00e7u \u00e0 l\u0027origine pour remplacer les raptors de trait, cet engin a rapidement \u00e9t\u00e9 transform\u00e9 en machine de guerre par les Gobelins de la Main indigo. Ce mod\u00e8le ne dispose pas de munition et ne peut, par cons\u00e9quent, pas attaquer."},{"id":59,"name_fr":"G\u00e9mellia","icon":4443,"info1_fr":"Vou\u00e9e \u00e0 la servitude \u00e9ternelle gr\u00e2ce au dispositif qu\u0027elle porte autour du cou, cette wyverne ancienne originaire de M\u00e9racydia restera un fid\u00e8le serviteur aussi longtemps que vous poss\u00e9derez la clef d\u0027identification de son neurolien."},{"id":62,"name_fr":"Balai De Sorci\u00e8re","icon":4445,"info1_fr":"Autrefois rel\u00e9gu\u00e9 \u00e0 des t\u00e2ches de second ordre comme le balayage et... le balayage, ce balai a vu sa vie prendre un tournant d\u00e9cisif le jour o\u00f9 il a \u00e9t\u00e9 enchant\u00e9 par la femme \u00e0 t\u00eate de citrouille. Depuis, ce ne sont plus les d\u00e9chets qu\u0027il chasse, mais les nuages!"},{"id":67,"name_fr":"P\u00e9gase","icon":4447,"info1_fr":"Bien que des rumeurs d\u0027un cheval ail\u00e9 soient apparues dans divers \u00e9crits \u00e0 travers les si\u00e8cles, jusqu\u0027\u00e0 r\u00e9cemment, il n\u0027y avait aucune preuve de son existence, si l\u0027on excepte les quelques plumes et fers \u00e0 cheval pr\u00e9cieusement gard\u00e9s dans les reliquaires de monast\u00e8res oubli\u00e9s."},{"id":68,"name_fr":"Armure Magitek De Livia","icon":4448,"info1_fr":"Ce chef-d\u0027\u0153uvre de l\u0027ing\u00e9nierie imp\u00e9riale est l\u0027armure de combat personnelle de Livia sas Junius, commandante de la 14e l\u00e9gion, et celle qu\u0027elle pilotait pendant l\u0027invasion de l\u0027empire de Garlemald."},{"id":69,"name_fr":"Armure Magitek De Nero","icon":4449,"info1_fr":"Sans cesse modifi\u00e9e et am\u00e9lior\u00e9e par Nero lui-m\u00eame, cette machine de guerre garlemaldaise ressemble \u00e0 peine \u00e0 l\u0027armure magitek re\u00e7ue par tol Scaeva le jour de sa promotion au rang de commandant."},{"id":70,"name_fr":"Wyverne","icon":4450,"info1_fr":"Cette wyverne reste fid\u00e8le \u00e0 la promesse qu\u0027elle a faite \u00e0 un chevalier il y a plus d\u0027un mill\u00e9naire et continue \u00e0 prot\u00e9ger les cieux des forces du mal, ignorant l\u0027appel de ses cong\u00e9n\u00e8res pour lutter contre les humains."},{"id":72,"name_fr":"Kongamato","icon":4451,"info1_fr":"Apr\u00e8s son \u00e9closion sur les bords d\u0027une rivi\u00e8re, le kongamato passe le d\u00e9but de sa vie sur les eaux. Sa maturit\u00e9 est marqu\u00e9e par le d\u00e9but de sa transformation, durant laquelle ses ailes poussent et il apprend \u00e0 s\u0027\u00e9lever dans les airs."},{"id":73,"name_fr":"Zu","icon":4452,"info1_fr":"Cet oiseau massif chasse en saisissant sa proie dans son bec semblable \u00e0 une scie. Il l\u0027ach\u00e8ve ensuite en secouant violemment son long cou, avant de l\u0027avaler goul\u00fbment."},{"id":74,"name_fr":"B\u00e9nou","icon":4453,"info1_fr":"Cet oiseau est devenu plus puissant que jamais apr\u00e8s avoir baign\u00e9 dans l\u0027\u00e9ther qui ruisselait du corps de l\u0027immortel Ph\u00e9nix, lors de la grande bataille de Carteneau. Son nom lui vient d\u0027un ancien oiseau l\u00e9gendaire. Il signifie \u201ccelui qui s\u0027\u00e9l\u00e8ve et brille de mille feux\u201d."},{"id":75,"name_fr":"Faucon Des Brumes","icon":4454,"info1_fr":"Chevauch\u00e9s par les fiers guerriers vanu vanu, ces oiseaux virevoltent au milieu des \u00e9pais nuages de L\u0027\u00c9cume des cieux, dans la suite de Bismarck. La gr\u00e2ce avec laquelle ils planent dans les airs \u00e9voque un p\u00e9tale de fleur port\u00e9 par les d\u00e9licats vents du ponant."},{"id":76,"name_fr":"Faucon Des Lames","icon":4455,"info1_fr":"Ces faucons sont assez f\u00e9roces pour inspirer la peur aux plus braves guerriers, et leurs serres tranchent la chair aussi facilement que les Chandrahas elles-m\u00eames. Quiconque voudrait monter un de ces oiseaux se doit d\u0027avoir en lui la sauvagerie qui d\u00e9finit le Ma\u00eetre des lames."},{"id":77,"name_fr":"Faucon De La Table Ronde","icon":4456,"info1_fr":"L\u0027allure de ces faucons leur conf\u00e8re une dignit\u00e9 au moins \u00e9gale \u00e0 celle du noble roi qu\u0027ils servent. Les anciens chevaliers ishgardais pratiquaient souvent la fauconnerie, et ces oiseaux ont depuis toujours \u00e9t\u00e9 pris\u00e9s pour leur extraordinaire habilet\u00e9 \u00e0 la chasse."},{"id":78,"name_fr":"Faucon S\u00e9phirotique","icon":4457,"info1_fr":"Ces faucons sont envelopp\u00e9s d\u0027une aura verdoyante qui r\u00e9v\u00e8le la nature sauvage de leur ma\u00eetre. D\u0027apr\u00e8s les l\u00e9gendes d\u0027une ancienne tribu d\u0027\u00eatres v\u00e9g\u00e9taux de M\u00e9racydia, ce sont eux qui ont transport\u00e9 les graines qui ont fait na\u00eetre les for\u00eats sur les continents."},{"id":80,"name_fr":"Gloria","icon":4458,"info1_fr":"S\u0027inspirant du r\u00e9cit h\u00e9sitant d\u0027un r\u00eave de son grand-p\u00e8re Tatanora, Tataramu a mis en pratique son savoir encyclop\u00e9dique pour concevoir un petit mod\u00e8le d\u0027a\u00e9ronef \u00e0 rotors multiples. Son nom lui vient d\u0027un obscur roman oubli\u00e9."},{"id":81,"name_fr":"Nuage Magique","icon":4459,"info1_fr":"Il n\u0027est qu\u0027un seul homme qui soit capable de cr\u00e9er un tel prodige, et on dit qu\u0027il r\u00e9side au sommet d\u0027un pic couvert de brume dans la r\u00e9gion extr\u00eame-orientale de Doma. Seuls ceux qui ont le c\u0153ur pur parviendront \u00e0 monter sur ce nuage..."},{"id":82,"name_fr":"Gros Chocobo Original","icon":4460,"info1_fr":"C\u0027est le chocobo pionnier, celui-l\u00e0 m\u00eame qui a inspir\u00e9 des g\u00e9n\u00e9rations enti\u00e8res de volatiles en surpoids. M\u00eame si la plupart des chocobos modernes ont un plumage jaune, celui-ci est d\u0027une blancheur immacul\u00e9e, du moins quand il ne s\u0027est pas tach\u00e9 en avalant goul\u00fbment son repas."},{"id":83,"name_fr":"Ast\u00e9rope","icon":4461,"info1_fr":"Ce sp\u00e9cimen de cheval ail\u00e9 s\u0027est d\u00e9velopp\u00e9 au fil des temps au point de pouvoir supporter deux cavaliers. Malgr\u00e9 son caract\u00e8re farouche, il accepte de prendre sur son dos ceux en qui il ressent une gentillesse d\u00e9sint\u00e9ress\u00e9e."},{"id":84,"name_fr":"Gros Mog","icon":4462,"info1_fr":"Ce Mog a un app\u00e9tit insatiable digne... d\u0027un gros chocobo. Th\u00e9oriquement, il devrait \u00eatre incapable de se d\u00e9placer dans les airs avec de si petites ailes, mais la magie mog semble capable de d\u00e9fier les lois de la gravit\u00e9."},{"id":86,"name_fr":"Mogrette","icon":4463,"info1_fr":"Ce v\u00e9g\u00e9tal qui flotte g\u00e9n\u00e9ralement dans L\u0027\u00c9cume des cieux a semble-t-il des vertus apaisantes pour les Mogs c\u00e9lestes. Et alliant l\u0027utile \u00e0 l\u0027agr\u00e9able, ces derniers l\u0027ont transform\u00e9 en moyen de transport a\u00e9rien gr\u00e2ce \u00e0 leur magie."},{"id":87,"name_fr":"Whisper","icon":4464,"info1_fr":"Ce petit a\u00e9ronef, con\u00e7u pour ressembler au Yo-kai Whisper, serait digne de figurer comme attraction du Gold Saucer. Ses composants sont para\u00eet-il d\u0027excellente qualit\u00e9, et bien que le si\u00e8ge semble \u00e9troit, il est en r\u00e9alit\u00e9 tr\u00e8s confortable."},{"id":90,"name_fr":"Faucon Des Ombres","icon":4465,"info1_fr":"L\u0027influence du dragon mal\u00e9fique qu\u0027est Nidhogg ne s\u0027arr\u00eate pas au conflit qui dure depuis un mill\u00e9naire entre Dravania et Ishgard. La faune et la flore ont \u00e9galement \u00e9t\u00e9 touch\u00e9es, comme le prouve ce faucon dont l\u0027apparence cause parfois la peur chez les humains."},{"id":91,"name_fr":"Sph\u00e8re De L\u00e9vitation","icon":4466,"info1_fr":"Cette machine de guerre allagoise a \u00e9t\u00e9 d\u00e9couverte dans les Basses terres du Coerthas oriental, et bien que son armement soit hors d\u0027\u00e9tat de marche, elle peut encore servir de moyen de transport."},{"id":92,"name_fr":"T\u00eate Ail\u00e9e","icon":4468,"info1_fr":"Cette monture pour le moins \u00e9trange et terrifiante a \u00e9t\u00e9 cr\u00e9\u00e9e exp\u00e9rimentalement par le Padjal E-Una-Kotor alors qu\u0027il s\u0027int\u00e9ressait \u00e0 la statue que les gens d\u0027Amdapor avaient charg\u00e9e de prot\u00e9ger leur cit\u00e9."},{"id":94,"name_fr":"Whisper II","icon":4469,"info1_fr":"Cette version am\u00e9lior\u00e9e du petit a\u00e9ronef inspir\u00e9 par le majordome Yo-kai Whisper a \u00e9t\u00e9 cr\u00e9\u00e9e \u00e0 la demande des m\u00e9nestrel et patron errants, pour r\u00e9compenser les aventuriers qui se sont li\u00e9s d\u0027amiti\u00e9 avec de nombreux Yo-kai et ont surmont\u00e9 des \u00e9preuves en leur compagnie."},{"id":95,"name_fr":"G\u00f4ten","icon":4474,"info1_fr":"Cet \u00e9trange destrier rev\u00eatu d\u0027une armure dor\u00e9e ne r\u00e9pond qu\u0027\u00e0 l\u0027appel des guerriers les plus puissants. Seuls ceux qui ont montr\u00e9 leur valeur au bout d\u0027un entra\u00eenement au seuil de la mort sont en mesure de le chevaucher."},{"id":96,"name_fr":"Ginga","icon":4475,"info1_fr":"Cet \u00e9trange destrier rev\u00eatu d\u0027une armure argent\u00e9e ne r\u00e9pond qu\u0027\u00e0 l\u0027appel des guerriers ne comptant plus leurs ennemis terrass\u00e9s. Seuls ceux qui ont montr\u00e9 leur valeur au bout d\u0027un entra\u00eenement au seuil de la mort sont en mesure de le chevaucher."},{"id":98,"name_fr":"Faucon Sophique","icon":4471,"info1_fr":"D\u0027apr\u00e8s la l\u00e9gende, lorsque le monde a sombr\u00e9 dans le chaos, la divinit\u00e9 Sophia a envoy\u00e9 un oiseau divin afin de rapporter l\u0027\u00e9quilibre. On dit que les h\u00e9ros seraient les poids dont elle s\u0027est servie pour ajuster la balance."},{"id":100,"name_fr":"P\u00e9gase Des T\u00e9n\u00e8bres","icon":4472,"info1_fr":"On les trouverait \u00e0 Azys Lla, mais rares sont ceux \u00e0 en avoir aper\u00e7u un. On raconte que seuls les puissants peuvent les chevaucher. Si un \u00eatre ordinaire venait \u00e0 le faire, son sang purulerait et il mourrait. On a donc donn\u00e9 \u00e0 ce destrier le surnom \u201cLa mort noire\u201d."},{"id":101,"name_fr":"Messager D\u0027Arrhab\u00e9e","icon":4473,"info1_fr":"Cette unit\u00e9 d\u0027attaque sp\u00e9cialiste des interf\u00e9rences spatio-temporelles sort tout droit des cha\u00eenes de production automatis\u00e9es du g\u00e9ant m\u00e9canique Alexander. Sa programmation a \u00e9t\u00e9 enti\u00e8rement revue et corrig\u00e9e pour en faire un v\u00e9hicule de transport."},{"id":102,"name_fr":"Raigo","icon":4476,"info1_fr":"Cet \u00e9trange destrier \u00e0 l\u0027armure noire, signe du lourd karma qu\u0027il porte, ne r\u00e9pond qu\u0027\u00e0 l\u0027appel du guerrier supr\u00eame. Devant sa puissance, m\u00eame G\u00f4ten et Ginga font presque p\u00e2le figure et courbent l\u0027\u00e9chine."},{"id":103,"name_fr":"Armure Magitek De Nero","icon":4449,"info1_fr":"Sans cesse modifi\u00e9e et am\u00e9lior\u00e9e par Nero lui-m\u00eame, cette machine de guerre garlemaldaise ressemble \u00e0 peine \u00e0 l\u0027armure magitek re\u00e7ue par tol Scaeva le jour de sa promotion au rang de commandant."},{"id":104,"name_fr":"Faucon Zurvanique","icon":4477,"info1_fr":"D\u0027apr\u00e8s les l\u00e9gendes centaures du continent austral de M\u00e9racydia, Zurvan enverrait cet oiseau funeste avant de partir en guerre contre le mal afin d\u0027annoncer l\u0027imminence de son jugement."},{"id":105,"name_fr":"H\u00f4\u00f4","icon":4478,"info1_fr":"Cet animal mythique, resplendit tel le soleil et consume son \u00e9nergie vitale pour s\u0027immoler par le feu, lui permettant ainsi de rena\u00eetre de ses cendres. Seul un h\u00e9ros digne de lui serait en mesure de le chevaucher."},{"id":106,"name_fr":"L\u00e9vit\u0153uf","icon":4479,"info1_fr":"Ce dr\u00f4le d\u0027\u0153uf est en r\u00e9alit\u00e9 une machine volante con\u00e7ue par Nonotta et ses amis afin de rejouer le r\u00eave de Jihli Aliapoh. Il aurait \u00e9t\u00e9 construit \u00e0 partir de reliques ancestrales fournies par la Fondation de Saint-Coinach."},{"id":108,"name_fr":"Limier Des Enfers Solitaire","icon":4480,"info1_fr":"Ce redoutable molosse tra\u00eene d\u0027ordinaire sa silhouette solitaire et mena\u00e7ante le long des plaines hostiles du n\u00e9ant, o\u00f9 il ne doit sa survie qu\u0027\u00e0 son regard particuli\u00e8rement per\u00e7ant. Animal fier, il n\u0027admet sur son dos que les \u00e2mes les plus farouches."},{"id":109,"name_fr":"Limier Des Enfers De Meute","icon":4481,"info1_fr":"Originaire du n\u00e9ant, ce limier des enfers \u00e9volue d\u0027ordinaire accompagn\u00e9 de la meute dont il est le chef. Survivant d\u0027un monde impitoyable, sa seule pr\u00e9sence suffit \u00e0 instiller l\u0027effroi chez ses ennemis. Ceux qui grimpent sur son dos ont en g\u00e9n\u00e9ral autant soif de sang que lui."},{"id":110,"name_fr":"Chaise Des Preux","icon":4484,"info1_fr":"Cette \u00e9trange chaise volante fut d\u00e9couverte lors de fouilles conduites dans l\u0027Arri\u00e8re-pays dravanien \u00e0 Sharlayan. On suppose qu\u0027elle permettait aux visiteurs de la Grande biblioth\u00e8que de Gubal, parfois \u00e2g\u00e9s, d\u0027atteindre les ouvrages plac\u00e9s en haut des \u00e9tag\u00e8res sans effort."},{"id":111,"name_fr":"Syldra","icon":4485,"info1_fr":"Il ne faut pas se fier aux apparences, ce monstre des mers est en fait tr\u00e8s gentil. La l\u00e9gende veut que cette cr\u00e9ature ressemble \u00e0 une autre, qui s\u0027\u00e9tait li\u00e9e d\u0027amiti\u00e9 avec une femme pirate et l\u0027avait m\u00eame aid\u00e9e en tirant son bateau. \u00c0 la diff\u00e9rence des dragons, elle ne parle pas, mais elle deviendra peut-\u00eatre une grande amie."},{"id":113,"name_fr":"Limier Fantasmagorique Solitaire","icon":4482,"info1_fr":"Ce chien enrag\u00e9 venu tout droit du n\u00e9ant arbore d\u0027inqui\u00e9tants reflets pourpres sur son pelage argent\u00e9, en r\u00e9alit\u00e9 des traces de sang de ses proies pass\u00e9es. Du genre solitaire, il ne reconna\u00eet comme ma\u00eetres que les guerriers les plus acharn\u00e9s."},{"id":114,"name_fr":"Limier Fantasmagorique De Meute","icon":4483,"info1_fr":"L\u0027instinct meurtrier de cette b\u00eate sauvage venue du n\u00e9ant est si fort que son pelage d\u00e9gage une aura t\u00e9n\u00e9breuse, ce qui ne manque pas d\u0027inspirer la crainte dans les rangs de sa meute. Pour grimper sur son dos, il faut \u00eatre capable de tuer de sang-froid."},{"id":115,"name_fr":"Kamui De La Gr\u00e2ce","icon":4487,"info1_fr":"Certaines personnes pensent que ce loup serait en fait une cr\u00e9ature ordinaire que les Anantas auraient tent\u00e9 de donner en offrande \u00e0 leur d\u00e9esse, et qui aurait \u00e9t\u00e9 touch\u00e9 par la gr\u00e2ce de Lakshmi."},{"id":116,"name_fr":"Kamui De La Splendeur","icon":4488,"info1_fr":"On raconte que cette cr\u00e9ature magnanime aurait \u00e9t\u00e9 touch\u00e9e par la splendeur de Susano le jour o\u00f9 les Kojin avaient cherch\u00e9 \u00e0 la donner en offrande \u00e0 leur kami."},{"id":121,"name_fr":"Pr\u00e9dateur Magitek","icon":4489,"info1_fr":"Cet appareil a \u00e9t\u00e9 abandonn\u00e9 dans l\u0027enceinte du ch\u00e2teau d\u0027Ala Mhigo. Il s\u0027agit d\u0027un prototype de mod\u00e8le \u201cfaucheuse\u201d am\u00e9lior\u00e9, qui aurait d\u00fb \u00eatre facile \u00e0 produire et id\u00e9al pour le combat rapproch\u00e9, mais le fuselage ne comporte pas d\u0027armement et a \u00e9t\u00e9 remplac\u00e9 par un syst\u00e8me de propulsion qui lui permet de voler."},{"id":122,"name_fr":"Lion De Combat","icon":4490,"info1_fr":"Les casques d\u0027argent d\u0027Ul\u0027dah s\u0027entouraient autrefois de lions comme celui-ci, mais la pratique ayant disparu, ils se sont adress\u00e9s \u00e0 des dresseurs de l\u0027\u00eele proche-orientale de Thavnair pour les aider \u00e0 dompter ce magnifique animal."},{"id":123,"name_fr":"Ours De Combat","icon":4491,"info1_fr":"Ce sp\u00e9cimen appartiendrait \u00e0 la terrible race des ours qui vivent dans les montagnes septentrionales d\u0027Abalathia. On raconte qu\u0027il n\u0027ob\u00e9it qu\u0027aux guerriers dont il a pu lire la force dans le regard. Ceux qui montent cette cr\u00e9ature peuvent \u00eatre fiers, car rares sont les ours d\u0027Abalathia qui se laissent dominer par des humains."},{"id":124,"name_fr":"Panth\u00e8re De Combat","icon":4492,"info1_fr":"Ces panth\u00e8res, capables de manipuler d\u0027instinct la magie, r\u00e8gneraient selon certains sur toute cr\u00e9ature dans la nature. Les chevaliers noirs s\u0027en entouraient pour se d\u00e9placer en toute discr\u00e9tion et faire r\u00e9gner la justice dans l\u0027ombre."},{"id":125,"name_fr":"Yol","icon":4493,"info1_fr":"Un oiseau gigantesque qui vit dans la partie montagneuse de la Steppe d\u0027Azim. Il niche \u00e0 la Force de Bardam et attaque quiconque s\u0027introduit sur son territoire. C\u0027est un oiseau de proie f\u00e9roce, mais il sait reconna\u00eetre la valeur de certains humains et accepte m\u00eame de les laisser grimper sur son dos."},{"id":127,"name_fr":"Tigre Centurio","icon":4495,"info1_fr":"Un chasseur a d\u00e9couvert cet animal alors qu\u0027il venait d\u0027abattre un dangereux tigre tueur d\u0027hommes. Il ne savait pas que la cr\u00e9ature avait un petit et s\u0027en est rendu compte \u00e0 sa mort. Pris de remords, il a ramen\u00e9 le petit au camp et a d\u00e9cid\u00e9 de l\u0027\u00e9lever lui-m\u00eame. En l\u0027entra\u00eenant \u00e0 la magie, il lui a m\u00eame appris \u00e0 voler!"},{"id":130,"name_fr":"Ixion","icon":4496,"info1_fr":"Le Poing de Rhalgr dit qu\u0027il s\u0027agissait du destrier du Destructeur, mais un grimoire de sorcellerie mhachois raconte qu\u0027il s\u0027agit en fait d\u0027une cr\u00e9ature qui aurait \u00e9t\u00e9 modifi\u00e9e \u00e0 l\u0027aide de la magie. Tout ce que l\u0027on sait finalement, c\u0027est que cette cr\u00e9ature manipule l\u0027\u00e9lectricit\u00e9."}]')
    },


    // Constructor.
    _create: function() {

        // Init table
        this._initTable();

        // Bind events
        this._bindEvents();
    },


    /**
     * Pre-build table data with rows (characters) or columns (mounts)
     */
    _initTable: function() {
    	var $this = this;
      // Retrieves pre filtered mounts
      this.options.displayedMounts = this._getMountsByIds(this.options.preFilteredMounts);
      
      // Then build headers table by adding a new column for each mount.
      $.each(this.options.displayedMounts, function(i, mount){
        $this.addColumn(mount);
      });

      // Populate the autocomplete input.
      $('.mount-name').typeahead({
        source: $this.options.allMounts,
        displayText: function(el){ return el.name_fr}
      });

      // Set preset mounts list
      $this.setPresetMountsList($this.options.mountsList);
    },


    /**
     * Add a new mount in the table
     * Check if mount is not already in the table before add it.
     * 
     * @param {Object} newMount Mount data
     */
    addMount: function(newMount) {
	  var $this = this;

      // Check if mount is already added
      var isAlreadyAdded = ($this.options.displayedMounts.findIndex(mount => mount.id == newMount.id) != -1);

      if (!isAlreadyAdded) {
        $('.mount-name').val('');
        this.options.displayedMounts.push(newMount);
      	this.addColumn(newMount);
      
      // Mount is already displayed
      } else if (isAlreadyAdded) {
        // Hightlight the header column
        $this.element.find('img[data-mount-id="'+newMount.id+'"]').parent('th').effect("highlight", {}, 500);
      }

    },

    /**
     * Add a column in table with mount data 
     * and recalculate characters' ownership 
     * 
     * @param {object} mount Mount data
     */
    addColumn: function(mount) {
    	var $this = this;
      
      // First set new column header
      this.addColumnHeader(mount);

      // Then fill table ownership for each displayed characters
      $.each(this.element.find('tbody tr'), function(i, tr){

        // Build mount ownership for iterated character
        if ($this.options.displayedCharacters[i].data.mounts.hasOwnProperty(mount.id)) {
          $(tr).append('<td><img class="got-it" title="Got it !" src="http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/newstopics.png?1486293696"/></td>');
        } else {
          $(tr).append('<td></td>');
        }
      });
    },


    /**
     * Set header of a new column from mount data.
     * 
     * @param {object} mount Mount data to add in the new header's column
     */
    addColumnHeader: function(mount){
    	var $this = this;

      var columnHeader = $('<th><img data-toggle="popover" data-mount-id="'+mount.id+'" src="https://secure.xivdb.com/img/game/004000/00'+mount.icon+'.png" title="'+mount.name_fr+'" data-content="'+mount.info1_fr+'" /><p><a class="btn delete-column delete-mount">x</a></p>');
          
      // Add header in table
      this.element.find('thead tr').append(columnHeader.hide().fadeIn());
      
      // Enable popover
      $('[data-toggle="popover"]').popover({
        placement: "top",
        trigger: "hover"
      });

      // Set event for deletion link to remove mount column
      columnHeader.find('a.delete-mount').on('click', function(){
        // Retrieve column position at the time of deletion request.
        var columnIndex = $this.element.find('thead tr th').index($(this).parents('th'));
        $this.removeColumn(columnIndex);
        $this.removeMount(columnIndex);
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
      var CharacterIndex = this.options.displayedCharacters.findIndex(character => character.lodestone_id == characterId);
      if (CharacterIndex != -1) {
          // Hightlight the character row
          this.element.find('tbody tr:eq('+CharacterIndex +')').effect("highlight", {}, 500);
        return;
      }

      // Load character data
      return $.ajax("https://api.xivdb.com/character/"+characterId)
      .done(function(newCharacter) {
        // Save retrieved character
        $this.options.displayedCharacters.push(newCharacter);
        // Update table by adding a new row
        $this.addRow(newCharacter);
      });
    },



    /**
     * Remove a displayed mount by its index.
     * 
     * @param  {int} mountIndex Mount's position (start at 1).
     */
    removeMount: function(mountIndex) {

      this.options.displayedMounts.splice(mountIndex-1, 1);
    },

    
    /**
     * Add a new row with character's mount ownership.
     * 
     * @param {object} character Object with character data
     */
    addRow: function(character) {
      var $this = this;

      var newLine = $('<tr>');
      newLine.append('<td class="character-row"><img class="character-thumbnail" width="40px" src="'+character.avatar+'" /><div class="character-name">'+character.name+'</div><div class="character-actions"><a class="character-mounts-list" href="#"><span class="glyphicon glyphicon-th"></span> List</a><a class="remove-character" href="#"><span class="glyphicon glyphicon-remove"></span> Remove</a></td>');
      
      // Build mount ownership for iterated character
      $.each(this.options.displayedMounts, function(i, mount){
        if (character.data.mounts.hasOwnProperty(mount.id)) {
          newLine.append('<td><img class="got-it" title="Got it !" src="http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/newstopics.png?1486293696"/></td>');
        } else {
          newLine.append('<td></td>');
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

      // Set event to show the mount track progress modal on click
      newLine.find('a.character-mounts-list').on('click', function() {
        $this.showTrackProgressModal(character);
      });
    },

    
    /**
     * Remove column from table
     * 
     * @param  {int} columnNumber Column position to remove
     */
    removeColumn: function(columnNumber) {
      this.element.find('tr').find('td:eq('+columnNumber+'),th:eq('+columnNumber+')').fadeOut(300, function() { $(this).remove(); });
    },


    /**
     * Remove all characters from table
     */
    removeCharacters: function() {
      this.element.find('tbody tr').fadeOut(300, function() { $(this).remove(); });
      this.options.displayedCharacters = [];
    },


    /**
     * Build a preset list of mounts which can be quickly add to the table
     */
    setPresetMountsList: function(mountsList) {
    	var $this = this;

    	$.each(mountsList, function(i, mountList) {
    		var li = $('<li><a>'+mountList.name+'</a></li>');

    		// Bind quickload event
    		li.on('click', function() {
    			// On click, load all preset mount from the list
    			var mounts = $this._getMountsByIds(mountList.mounts)
    			$.each(mounts, function(i, mount) {
    				$this.addMount(mount);
    			});
    		});

    		// Add to DOM
    		$('.preset-mounts-list').append(li);
    	});
    },


    /**
     * Retrieves mounts data in array, from an array of mounts Ids
     * @param  {array} mountsIds Mounts IDs
     * @return {array}           Mounts data
     */
    _getMountsByIds: function(mountsIds) {

      var mounts = [];
      $.each(this.options.allMounts, function(i, mount){
        if ($.inArray(mount.id, mountsIds) != -1) {
          mounts.push(mount);  
        }
      });
      return mounts;
    },


    /**
     * Show a dialog box to view mount collection (with owned & missing items).
     * @param  {array} character Character data
     */
    showTrackProgressModal: function(character) {
        var $this = this;

        // First, build all list of existing mounts.
        var mountList = $('.items-track-progress-list').empty();

        $.each($this.options.allMounts, function(i, mount) {
            var mountItem = $('<li><img data-toggle="popover" title="'+mount.name_fr+'" data-content="'+mount.info1_fr+'" src="https://secure.xivdb.com/img/game/004000/00'+mount.icon+'.png"></li>');
            // Check if character owned iterated mount
            if (character.data.mounts.hasOwnProperty(mount.id)) {
              mountItem.addClass('owned');
            } else {
              mountItem.addClass('missing');
            }

            mountList.append(mountItem);
        });
        
        // Enable popover
        mountList.find('[data-toggle="popover"]').popover({
            placement: "left",
            trigger: "hover"
        });

        // Update the modal title as a mount counter
        $('.items-track-progress-modal').find('.modal-title').html(character.name+'\'s mounts: '+ Object.keys(character.data.mounts).length +' of '+ $this.options.allMounts.length + ' owned');

        // Then show modal box
        $('.items-track-progress-modal').modal();
    },


    /**
     * Bind plugin events
     */
    _bindEvents: function() {
      var $this = this;

      // When user wants to add a new mount
      $('#add-mount-form').on('submit', function(e) {
        e.preventDefault();

        var submittedMountName = $('.mount-name').val();
        if (submittedMountName == "") return;

        var mountIndex = $this.options.allMounts.findIndex(mount => mount.name_fr == submittedMountName);
        if(mountIndex != -1) {       
            $this.addMount($this.options.allMounts[mountIndex]);
        } else {
            $(document).trigger("notification", {message: "Mount <strong>"+submittedMountName+"</strong> was not found in Lodestone.", type: "danger"});
        }
      });
    },

});