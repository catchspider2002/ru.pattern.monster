const strings = {
  website: "https://ru.pattern.monster",
  title: "Pattern Monster",
  description:
    "Простой онлайн генератор шаблонов для создания повторяющихся SVG узоров.",
  description2: "Ускорьте ваш сайт без ущерба для качества изображения.",
  description3: 
    "Идеально подходит в качестве фона для веб-страниц, аптеки, брендинга, упаковки и многого другого.",
  keywords:
    "SVG шаблоны, шаблоны, SVG фоны, векторные обои, генератор шаблонов, создатель шаблонов",
  pages: [
    {
      page: "index",
      title: "SVG Генератор шаблонов",
      keywords: "",
      description: "",
      image: "",
    },
    {
      page: "changelog",
      title: "Список изменений",
      keywords: "список изменений",
      description: "Changelog for Pattern Monster.",
      image: "",
    },
    {
      page: "downloads",
      title: "Загрузки",
      keywords: "загрузки",
      description: "Downloads for Pattern Monster.",
      image: "",
    },
    {
      page: "features",
      title: "Возможности",
      keywords: "возможности",
      description: "Features for Pattern Monster.",
      image: "",
    },
    {
      page: "privacy-policy",
      title: "Политика конфиденциальности",
      keywords: "политика конфиденциальности",
      description: "Privacy Policy for Pattern Monster.",
      image: "",
    },
    {
      page: "api",
      title: "API",
      keywords: "api",
      description: "API for Pattern Monster.",
      image: "",
    },
    {
      page: "accessories",
      title: "Accessories",
      keywords: "accessories, shop",
      description: "Accessories for Pattern Monster.",
      image: "",
    },
    {
      page: "home-living",
      title: "Home & Living",
      keywords: "home, living, shop",
      description: "Home Living for Pattern Monster.",
      image: "",
    },
    {
      page: "phone-cases",
      title: "Phone Cases",
      keywords: "phone, cases, shop",
      description: "Phone Cases for Pattern Monster.",
      image: "",
    },
    {
      page: "stationery-office",
      title: "Stationery & Office",
      keywords: "stationery, office, shop",
      description: "Stationery & Office for Pattern Monster.",
      image: "",
    },
    {
      page: "stickers-skins",
      title: "Stickers & Skins",
      keywords: "stickers, skins, shop",
      description: "Stickers & Skins for Pattern Monster.",
      image: "",
    },
    {
      page: "wall-art",
      title: "Wall Art",
      keywords: "wall-art, shop",
      description: "Wall Art for Pattern Monster.",
      image: "",
    },
  ],
  versions: [
    {
      lang: "en",
      website: "https://pattern.monster",
    },
    {
      lang: "de",
      website: "https://de.pattern.monster",
    },
    {
      lang: "pl",
      website: "https://pl.pattern.monster",
    },
    {
      lang: "tr",
      website: "https://tr.pattern.monster",
    },
    {
      lang: "es",
      website: "https://es.pattern.monster",
    },
    {
      lang: "it",
      website: "https://it.pattern.monster",
    },
    {
      lang: "ro",
      website: "https://ro.pattern.monster",
    },
    {
      lang: "fr",
      website: "https://fr.pattern.monster",
    },
    {
      lang: "ar",
      website: "https://ar.pattern.monster",
    },
    {
      lang: "pt",
      website: "https://pt.pattern.monster",
    },
    {
      lang: "zh-cn",
      website: "https://cn.pattern.monster",
    },
    {
      lang: "nl",
      website: "https://nl.pattern.monster",
    },
    {
      lang: "sv",
      website: "https://sv.pattern.monster",
    },
    {
      lang: "ru",
      website: "https://ru.pattern.monster",
    },
    {
      lang: "uk",
      website: "https://uk.pattern.monster",
    },
  ],
};

const pageDetails = (page) => {
  let imagePrefix = "https://giguom.com/pattern.monster/images/";
  let pageValues =
    strings.pages.filter((currentPage) => currentPage.page === page)[0] ||
    strings.pages.filter((currentPage) => currentPage.page === "index")[0];

  let website = strings.website;
  let title = strings.title + " - " + strings.pages[0].title;
  let url = website;
  let keywords = strings.keywords;
  let desc = strings.description + " " + strings.description3;
  let image =
    pageValues.image == "" ? imagePrefix + "/TwitterBG2.png" : pageValues.image;

  let versions = strings.versions.map((version) => {
    return {
      lang: version.lang,
      website: version.website + (page === "index" ? "" : "/" + page + "/"),
    };
  });

  if (page != "index") {
    title =
      pageValues.title + " - " + strings.title + " | " + strings.pages[0].title;
    url = website + "/" + page + "/";
    desc =
      pageValues.description +
      " " +
      strings.description +
      " " +
      strings.description3;
    keywords = pageValues.keywords + ", " + strings.keywords;
  }

  return { title, url, keywords, desc, image, versions };
};

export default { strings, pageDetails };
        