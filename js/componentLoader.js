// ---------- Root path resolver ----------
function getSiteRootFromScript() {
  const s = document.currentScript || (function () {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();
  const src = (s && s.src) || '';
  const idx = src.lastIndexOf('/js/');
  if (idx !== -1) return src.substring(0, idx + 1);
  const lastSlash = src.lastIndexOf('/');
  return lastSlash !== -1 ? src.substring(0, lastSlash + 1) : '';
}

const SITE_ROOT = getSiteRootFromScript();

function resolveRootPath(path) {
  if (!path) return '#';
  if (/^[a-z]+:\/\//i.test(path)) return path;
  return SITE_ROOT + path.replace(/^\//, '');
}

function rewriteRootLinks(scope = document) {
  scope.querySelectorAll('a[data-href]').forEach(a => {
    a.setAttribute('href', resolveRootPath(a.getAttribute('data-href')));
  });
  scope.querySelectorAll('img[data-src]').forEach(img => {
    img.setAttribute('src', resolveRootPath(img.getAttribute('data-src')));
  });
  scope.querySelectorAll('a[href^="/"]').forEach(a => {
    a.setAttribute('href', resolveRootPath(a.getAttribute('href')));
  });
  scope.querySelectorAll('img[src^="/"]').forEach(img => {
    img.setAttribute('src', resolveRootPath(img.getAttribute('src')));
  });
  scope.querySelectorAll('link[rel="stylesheet"][href^="/"]').forEach(l => {
    l.setAttribute('href', resolveRootPath(l.getAttribute('href')));
  });
  scope.querySelectorAll('script[src^="/"]').forEach(sc => {
    sc.setAttribute('src', resolveRootPath(sc.getAttribute('src')));
  });
}

// ---------- Components ----------
const components = {
  header: `
    <!-- Head Section -->
      <meta charset="UTF-8">
          <meta name="author" content="RaviKalyan">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <link rel="shortcut icon" type="image/x-icon" href="js/images/tab_logo.png">

      <!-- Google Fonts -->
      <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet">
      <link rel='stylesheet' id='blogus-google-fonts-css' href='//fonts.googleapis.com/css?family=ABeeZee%7CAbel%7CAbril+Fatface%7CAclonica%7CAcme%7CActor%7CAdamina%7CAdvent+Pro%7CAguafina+Script%7CAkronim%7CAladin%7CAldrich%7CAlef%7CAlegreya%7CAlegreya+SC%7CAlegreya+Sans%7CAlegreya+Sans+SC%7CAlex+Brush%7CAlfa+Slab+One%7CAlice%7CAlike%7CAlike+Angular%7CAllan%7CAllerta%7CAllerta+Stencil%7CAllura%7CAlmendra%7CAlmendra+Display%7CAlmendra+SC%7CAmarante%7CAmaranth%7CAmatic+SC%7CAmatica+SC%7CAmethysta%7CAmiko%7CAmiri%7CAmita%7CAnaheim%7CAndada%7CAndika%7CAngkor%7CAnnie+Use+Your+Telescope%7CAnonymous+Pro%7CAntic%7CAntic+Didone%7CAntic+Slab%7CAnton%7CArapey%7CArbutus%7CArbutus+Slab%7CArchitects+Daughter%7CArchivo+Black%7CArchivo+Narrow%7CAref+Ruqaa%7CArima+Madurai%7CArimo%7CArizonia%7CArmata%7CArtifika%7CArvo%7CArya%7CAsap%7CAsar%7CAsset%7CAssistant%7CAstloch%7CAsul%7CAthiti%7CAtma%7CAtomic+Age%7CAubrey%7CAudiowide%7CAutour+One%7CAverage%7CAverage+Sans%7CAveria+Gruesa+Libre%7CAveria+Libre%7CAveria+Sans+Libre%7CAveria+Serif+Libre%7CBad+Script%7CBaloo%7CBaloo+Bhai%7CBaloo+Da%7CBaloo+Thambi%7CBalthazar%7CBangers%7CBasic%7CBattambang%7CBaumans%7CBayon%7CBelgrano%7CBelleza%7CBenchNine%7CBentham%7CBerkshire+Swash%7CBevan%7CBigelow+Rules%7CBigshot+One%7CBilbo%7CBilbo+Swash+Caps%7CBioRhyme%7CBioRhyme+Expanded%7CBiryani%7CBitter%7CBlack+Ops+One%7CBokor%7CBonbon%7CBoogaloo%7CBowlby+One%7CBowlby+One+SC%7CBrawler%7CBree+Serif%7CBubblegum+Sans%7CBubbler+One%7CBuda%7CBuenard%7CBungee%7CBungee+Hairline%7CBungee+Inline%7CBungee+Outline%7CBungee+Shade%7CButcherman%7CButterfly+Kids%7CCabin%7CCabin+Condensed%7CCabin+Sketch%7CCaesar+Dressing%7CCagliostro%7CCairo%7CCalligraffitti%7CCambay%7CCambo%7CCandal%7CCantarell%7CCantata+One%7CCantora+One%7CCapriola%7CCardo%7CCarme%7CCarrois+Gothic%7CCarrois+Gothic+SC%7CCarter+One%7CCatamaran%7CCaudex%7CCaveat%7CCaveat+Brush%7CCedarville+Cursive%7CCeviche+One%7CChanga%7CChanga+One%7CChango%7CChathura%7CChau+Philomene+One%7CChela+One%7CChelsea+Market%7CChenla%7CCherry+Cream+Soda%7CCherry+Swash%7CChewy%7CChicle%7CChivo%7CChonburi%7CCinzel%7CCinzel+Decorative%7CClicker+Script%7CCoda%7CCoda+Caption%7CCodystar%7CCoiny%7CCombo%7CComfortaa%7CComing+Soon%7CConcert+One%7CCondiment%7CContent%7CContrail+One%7CConvergence%7CCookie%7CCopse%7CCorben%7CCormorant%7CCormorant+Garamond%7CCormorant+Infant%7CCormorant+SC%7CCormorant+Unicase%7CCormorant+Upright%7CCourgette%7CCousine%7CCoustard%7CCovered+By+Your+Grace%7CCrafty+Girls%7CCreepster%7CCrete+Round%7CCrimson+Text%7CCroissant+One%7CCrushed%7CCuprum%7CCutive%7CCutive+Mono%7CDamion%7CDancing+Script%7CDangrek%7CDavid+Libre%7CDawning+of+a+New+Day%7CDays+One%7CDekko%7CDelius%7CDelius+Swash+Caps%7CDelius+Unicase%7CDella+Respira%7CDenk+One%7CDevonshire%7CDhurjati%7CDidact+Gothic%7CDiplomata%7CDiplomata+SC%7CDomine%7CDonegal+One%7CDoppio+One%7CDorsa%7CDosis%7CDr+Sugiyama%7CDroid+Sans%7CDroid+Sans+Mono%7CDroid+Serif%7CDuru+Sans%7CDynalight%7CEB+Garamond%7CEagle+Lake%7CEater%7CEconomica%7CEczar%7CEk+Mukta%7CEl+Messiri%7CElectrolize%7CElsie%7CElsie+Swash+Caps%7CEmblema+One%7CEmilys+Candy%7CEngagement%7CEnglebert%7CEnriqueta%7CErica+One%7CEsteban%7CEuphoria+Script%7CEwert%7CExo%7CExo+2%7CExpletus+Sans%7CFanwood+Text%7CFarsan%7CFascinate%7CFascinate+Inline%7CFaster+One%7CFasthand%7CFauna+One%7CFederant%7CFedero%7CFelipa%7CFenix%7CFinger+Paint%7CFira+Mono%7CFira+Sans%7CFjalla+One%7CFjord+One%7CFlamenco%7CFlavors%7CFondamento%7CFontdiner+Swanky%7CForum%7CFrancois+One%7CFrank+Ruhl+Libre%7CFreckle+Face%7CFredericka+the+Great%7CFredoka+One%7CFreehand%7CFresca%7CFrijole%7CFruktur%7CFugaz+One%7CGFS+Didot%7CGFS+Neohellenic%7CGabriela%7CGafata%7CGalada%7CGaldeano%7CGalindo%7CGentium+Basic%7CGentium+Book+Basic%7CGeo%7CGeostar%7CGeostar+Fill%7CGermania+One%7CGidugu%7CGilda+Display%7CGive+You+Glory%7CGlass+Antiqua%7CGlegoo%7CGloria+Hallelujah%7CGoblin+One%7CGochi+Hand%7CGorditas%7CGoudy+Bookletter+1911%7CGraduate%7CGrand+Hotel%7CGravitas+One%7CGreat+Vibes%7CGriffy%7CGruppo%7CGudea%7CGurajada%7CHabibi%7CHalant%7CHammersmith+One%7CHanalei%7CHanalei+Fill%7CHandlee%7CHanuman%7CHappy+Monkey%7CHarmattan%7CHeadland+One%7CHeebo%7CHenny+Penny%7CHerr+Von+Muellerhoff%7CHind%7CHind+Guntur%7CHind+Madurai%7CHind+Siliguri%7CHind+Vadodara%7CHoltwood+One+SC%7CHomemade+Apple%7CHomenaje%7CIM+Fell+DW+Pica%7CIM+Fell+DW+Pica+SC%7CIM+Fell+Double+Pica%7CIM+Fell+Double+Pica+SC%7CIM+Fell+English%7CIM+Fell+English+SC%7CIM+Fell+French+Canon%7CIM+Fell+French+Canon+SC%7CIM+Fell+Great+Primer%7CIM+Fell+Great+Primer+SC%7CIceberg%7CIceland%7CImprima%7CInconsolata%7CInder%7CIndie+Flower%7CInika%7CInknut+Antiqua%7CIrish+Grover%7CIstok+Web%7CItaliana%7CItalianno%7CItim%7CJacques+Francois%7CJacques+Francois+Shadow%7CJaldi%7CJim+Nightshade%7CJockey+One%7CJolly+Lodger%7CJomhuria%7CJosefin+Sans%7CJosefin+Slab%7CJoti+One%7CJudson%7CJulee%7CJulius+Sans+One%7CJunge%7CJura%7CJust+Another+Hand%7CJust+Me+Again+Down+Here%7CKadwa%7CKalam%7CKameron%7CKanit%7CKantumruy%7CKarla%7CKarma%7CKatibeh%7CKaushan+Script%7CKavivanar%7CKavoon%7CKdam+Thmor%7CKeania+One%7CKelly+Slab%7CKenia%7CKhand%7CKhmer%7CKhula%7CKite+One%7CKnewave%7CKotta+One%7CKoulen%7CKranky%7CKreon%7CKristi%7CKrona+One%7CKumar+One%7CKumar+One+Outline%7CKurale%7CLa+Belle+Aurore%7CLaila%7CLakki+Reddy%7CLalezar%7CLancelot%7CLateef%7CLato%7CLeague+Script%7CLeckerli+One%7CLedger%7CLekton%7CLemon%7CLemonada%7CLibre+Baskerville%7CLibre+Franklin%7CLife+Savers%7CLilita+One%7CLily+Script+One%7CLimelight%7CLinden+Hill%7CLobster%7CLobster+Two%7CLondrina+Outline%7CLondrina+Shadow%7CLondrina+Sketch%7CLondrina+Solid%7CLora%7CLove+Ya+Like+A+Sister%7CLoved+by+the+King%7CLovers+Quarrel%7CLuckiest+Guy%7CLusitana%7CLustria%7CMacondo%7CMacondo+Swash+Caps%7CMada%7CMagra%7CMaiden+Orange%7CMaitree%7CMako%7CMallanna%7CMandali%7CMarcellus%7CMarcellus+SC%7CMarck+Script%7CMargarine%7CMarko+One%7CMarmelad%7CMartel%7CMartel+Sans%7CMarvel%7CMate%7CMate+SC%7CMaven+Pro%7CMcLaren%7CMeddon%7CMedievalSharp%7CMedula+One%7CMeera+Inimai%7CMegrim%7CMeie+Script%7CMerienda%7CMerienda+One%7CMerriweather%7CMerriweather+Sans%7CMetal%7CMetal+Mania%7CMetamorphous%7CMetrophobic%7CMichroma%7CMilonga%7CMiltonian%7CMiltonian+Tattoo%7CMiniver%7CMiriam+Libre%7CMirza%7CMiss+Fajardose%7CMitr%7CModak%7CModern+Antiqua%7CMogra%7CMolengo%7CMolle%7CMonda%7CMonofett%7CMonoton%7CMonsieur+La+Doulaise%7CMontaga%7CMontez%7CMontserrat%7CMontserrat+Alternates%7CMontserrat+Subrayada%7CMoul%7CMoulpali%7CMountains+of+Christmas%7CMouse+Memoirs%7CMr+Bedfort%7CMr+Dafoe%7CMr+De+Haviland%7CMrs+Saint+Delafield%7CMrs+Sheppards%7CMukta+Vaani%7CMuli%7CMystery+Quest%7CNTR%7CNeucha%7CNeuton%7CNew+Rocker%7CNews+Cycle%7CNiconne%7CNixie+One%7CNobile%7CNokora%7CNorican%7CNosifer%7CNothing+You+Could+Do%7CNoticia+Text%7CNoto+Sans%7CNoto+Serif%7CNova+Cut%7CNova+Flat%7CNova+Mono%7CNova+Oval%7CNova+Round%7CNova+Script%7CNova+Slim%7CNova+Square%7CNumans%7CNunito%7COdor+Mean+Chey%7COffside%7COld+Standard+TT%7COldenburg%7COleo+Script%7COleo+Script+Swash+Caps%7COpen+Sans%7COpen+Sans+Condensed%7COranienbaum%7COrbitron%7COregano%7COrienta%7COriginal+Surfer%7COswald%7COver+the+Rainbow%7COverlock%7COverlock+SC%7COvo%7COxygen%7COxygen+Mono%7CPT+Mono%7CPT+Sans%7CPT+Sans+Caption%7CPT+Sans+Narrow%7CPT+Serif%7CPT+Serif+Caption%7CPacifico%7CPalanquin%7CPalanquin+Dark%7CPaprika%7CParisienne%7CPassero+One%7CPassion+One%7CPathway+Gothic+One%7CPatrick+Hand%7CPatrick+Hand+SC%7CPattaya%7CPatua+One%7CPavanam%7CPaytone+One%7CPeddana%7CPeralta%7CPermanent+Marker%7CPetit+Formal+Script%7CPetrona%7CPhilosopher%7CPiedra%7CPinyon+Script%7CPirata+One%7CPlaster%7CPlay%7CPlayball%7CPlayfair+Display%7CPlayfair+Display+SC%7CPodkova%7CPoiret+One%7CPoller+One%7CPoly%7CPompiere%7CPontano+Sans%7CPoppins%7CPort+Lligat+Sans%7CPort+Lligat+Slab%7CPragati+Narrow%7CPrata%7CPreahvihear%7CPress+Start+2P%7CPridi%7CPrincess+Sofia%7CProciono%7CPrompt%7CProsto+One%7CProza+Libre%7CPuritan%7CPurple+Purse%7CQuando%7CQuantico%7CQuattrocento%7CQuattrocento+Sans%7CQuestrial%7CQuicksand%7CQuintessential%7CQwigley%7CRacing+Sans+One%7CRadley%7CRajdhani%7CRakkas%7CRaleway%7CRaleway+Dots%7CRamabhadra%7CRamaraja%7CRambla%7CRammetto+One%7CRanchers%7CRancho%7CRanga%7CRasa%7CRationale%7CRavi+Prakash%7CRedressed%7CReem+Kufi%7CReenie+Beanie%7CRevalia%7CRhodium+Libre%7CRibeye%7CRibeye+Marrow%7CRighteous%7CRisque%7CRoboto%7CRoboto+Condensed%7CRoboto+Mono%7CRoboto+Slab%7CRochester%7CRock+Salt%7CRokkitt%7CRomanesco%7CRopa+Sans%7CRosario%7CRosarivo%7CRouge+Script%7CRozha+One%7CRubik%7CRubik+Mono+One%7CRubik+One%7CRuda%7CRufina%7CRuge+Boogie%7CRuluko%7CRum+Raisin%7CRuslan+Display%7CRusso+One%7CRuthie%7CRye%7CSacramento%7CSahitya%7CSail%7CSalsa%7CSanchez%7CSancreek%7CSansita+One%7CSarala%7CSarina%7CSarpanch%7CSatisfy%7CScada%7CScheherazade%7CSchoolbell%7CScope+One%7CSeaweed+Script%7CSecular+One%7CSevillana%7CSeymour+One%7CShadows+Into+Light%7CShadows+Into+Light+Two%7CShanti%7CShare%7CShare+Tech%7CShare+Tech+Mono%7CShojumaru%7CShort+Stack%7CShrikhand%7CSiemreap%7CSigmar+One%7CSignika%7CSignika+Negative%7CSimonetta%7CSintony%7CSirin+Stencil%7CSix+Caps%7CSkranji%7CSlabo+13px%7CSlabo+27px%7CSlackey%7CSmokum%7CSmythe%7CSniglet%7CSnippet%7CSnowburst+One%7CSofadi+One%7CSofia%7CSonsie+One%7CSorts+Mill+Goudy%7CSource+Code+Pro%7CSource+Sans+Pro%7CSource+Serif+Pro%7CSpace+Mono%7CSpecial+Elite%7CSpicy+Rice%7CSpinnaker%7CSpirax%7CSquada+One%7CSree+Krushnadevaraya%7CSriracha%7CStalemate%7CStalinist+One%7CStardos+Stencil%7CStint+Ultra+Condensed%7CStint+Ultra+Expanded%7CStoke%7CStrait%7CSue+Ellen+Francisco%7CSuez+One%7CSumana%7CSunshiney%7CSupermercado+One%7CSura%7CSuranna%7CSuravaram%7CSuwannaphum%7CSwanky+and+Moo+Moo%7CSyncopate%7CTangerine%7CTaprom%7CTauri%7CTaviraj%7CTeko%7CTelex%7CTenali+Ramakrishna%7CTenor+Sans%7CText+Me+One%7CThe+Girl+Next+Door%7CTienne%7CTillana%7CTimmana%7CTinos%7CTitan+One%7CTitillium+Web%7CTrade+Winds%7CTrirong%7CTrocchi%7CTrochut%7CTrykker%7CTulpen+One%7CUbuntu%7CUbuntu+Condensed%7CUbuntu+Mono%7CUltra%7CUncial+Antiqua%7CUnderdog%7CUnica+One%7CUnifrakturCook%7CUnifrakturMaguntia%7CUnkempt%7CUnlock%7CUnna%7CVT323%7CVampiro+One%7CVarela%7CVarela+Round%7CVast+Shadow%7CVesper+Libre%7CVibur%7CVidaloka%7CViga%7CVoces%7CVolkhov%7CVollkorn%7CVoltaire%7CWaiting+for+the+Sunrise%7CWallpoet%7CWalter+Turncoat%7CWarnes%7CWellfleet%7CWendy+One%7CWire+One%7CWork+Sans%7CYanone+Kaffeesatz%7CYantramanav%7CYatra+One%7CYellowtail%7CYeseva+One%7CYesteryear%7CYrsa%7CZeyada&#038;subset=latin%2Clatin-ext' type='text/css' media='all'/>
    <!-- Header Section -->
    <header>
      <div class="logo-section logo-img-container">
        <a data-href="/home.html" href="#">
          <img class="logo-img" width="55" height="30" data-src="/js/images/logo.png" alt="Home">
        </a>
        <a class="brand-name-link" data-href="/home.html" href="#">
          <span class="brand-name">Ravish</span>
        </a>
      </div>
      <div class="header-content">
        <div class="header-items" id="headerItems">
          <a data-href="/home.html" href="#">Home</a>
          <a data-href="/java/intro.html" href="#">Java</a>
          <a data-href="/spring/intro.html" href="#">Spring</a>
          <a data-href="/springboot/intro.html" href="#">SpringBoot</a>
          <a data-href="/ms/intro.html" href="#">Microservices</a>
          <a data-href="/kafka.html" href="#">Kafka</a>
          <a data-href="/interview/iqa.html" href="#">Interview Questions</a>
        </div>
        <label class="theme-toggle">
          <input type="checkbox" id="themeToggle">
          <span class="slider"></span>
        </label>
        <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
      </div>
    </header>
  `,

  footer: `
    <!-- Footer Section -->
    <footer>
      <p>© <span id="currentYear"></span>, The content is copyrighted
      to Ravi Kalyan Kolloju.</p>
    </footer>
    <button class="back-to-top" id="backToTop" aria-label="Back to top"></button>
  `
};

// ---------- Load + Init ----------
function loadComponents() {
  document.body.insertAdjacentHTML('afterbegin', components.header);

  const sidebarType = document.body.getAttribute('data-sidebar') || 'tutorials';
  const sidebarHTML = sidebars[sidebarType] || sidebars.tutorials;
  const nav = document.querySelector('nav');
  if (nav) nav.insertAdjacentHTML('afterend', sidebarHTML);
  else document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

  document.body.insertAdjacentHTML('beforeend', components.footer);

  rewriteRootLinks(document);
  initThemeToggle();
  initHeader();
  initSidebar();
  initFooter();
  highlightCurrentPage();
}

// Theme toggle
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  if (themeToggle) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
      document.body.classList.add('dark-mode');
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
      const logoImg = document.querySelector('.logo-img');
      if (logoImg) {
        logoImg.classList.add('theme-change-animation');
        setTimeout(() => logoImg.classList.remove('theme-change-animation'), 2000);
      }
    });
  }
}

// Header
function initHeader() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const headerItems = document.getElementById('headerItems');

  if (mobileMenuBtn && headerItems) {
    mobileMenuBtn.addEventListener('click', function () {
      headerItems.classList.toggle('open');
      this.textContent = headerItems.classList.contains('open') ? '✕' : '☰';

      const sidebar = document.getElementById('sidebar');
      const mobileSidebarBtn = document.getElementById('mobileSidebarBtn');
      if (headerItems.classList.contains('open') && sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        if (mobileSidebarBtn) mobileSidebarBtn.textContent = '☰';
      }
    });
  }

  document.querySelectorAll('.header-items a').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.header-items a').forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// Sidebar
function initSidebar() {
  const mobileSidebarBtn = document.getElementById('mobileSidebarBtn');
  const sidebar = document.getElementById('sidebar');

  if (mobileSidebarBtn && sidebar) {
    mobileSidebarBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      this.textContent = sidebar.classList.contains('open') ? '✕' : '☰';

      const headerItems = document.getElementById('headerItems');
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      if (sidebar.classList.contains('open') && headerItems && headerItems.classList.contains('open')) {
        headerItems.classList.remove('open');
        if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';
      }
    });
  }
}

// Footer
function initFooter() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) backToTopBtn.classList.add('visible');
      else backToTopBtn.classList.remove('visible');
    });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Highlight current page in sidebar
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('#sidebar .nav-link').forEach(link => {
    const linkUrl = (link.getAttribute('href') || '').split('/').pop();
    if (linkUrl === currentPage) link.classList.add('active');
  });
}

// Close menus when clicking outside
document.addEventListener('click', function (event) {
  const headerItems = document.getElementById('headerItems');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (headerItems && mobileMenuBtn) {
    if (!event.target.closest('#headerItems') && !event.target.closest('#mobileMenuBtn')) {
      headerItems.classList.remove('open');
      mobileMenuBtn.textContent = '☰';
    }
  }

  const sidebar = document.getElementById('sidebar');
  const mobileSidebarBtn = document.getElementById('mobileSidebarBtn');
  if (sidebar && mobileSidebarBtn) {
    if (!event.target.closest('#sidebar') && !event.target.closest('#mobileSidebarBtn')) {
      sidebar.classList.remove('open');
      mobileSidebarBtn.textContent = '☰';
    }
  }
});

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);
