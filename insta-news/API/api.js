// API Reference: https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741

export const categories = [
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/news.png",
      name: "general",
    },
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
      name: "business",
    },
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
      name: "entertainment",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
      name: "health",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
      name: "science",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
      name: "sports",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
      name: "technology",
    },
  ];
  
  export const country = [
    {
      code: "in",
      name: "India",
    },
    {
      code: "us",
      name: "USA",
    },
    {
      code: "au",
      name: "Australia",
    },
    {
      code: "ru",
      name: "Russia",
    },
    {
      code: "fr",
      name: "France",
    },
    {
      code: "gb",
      name: "United Kingdom",
    },
  ];
  
  export const sources = [
    {
      id: "bbc-news",
      name: "BBC News",
      pic: "https://e7.pngegg.com/pngimages/345/962/png-clipart-bbc-news-logo-area-text-brand-bbc-news-text-logo-thumbnail.png",
    },
    {
      id: "cnn",
      name: "CNN",
      pic: "https://banner2.cleanpng.com/20190102/iez/kisspng-cnn-portable-network-graphics-logo-vector-graphics-lawsuit-claims-lsu-ignored-alleged-fraternity-hazi-5c2cc207ed1272.3128007415464371279711.jpg",
    },
    {
      id: "fox-news",
      name: "Fox News",
      pic: "https://w7.pngwing.com/pngs/100/409/png-transparent-fox-news-ureport-united-states-breaking-news-united-states-television-text-logo.png",
    },
    {
      id: "google-news",
      name: "Google News",
      pic: "https://www.logodee.com/wp-content/uploads/2022/04/6.jpg",
    },
  ];
  
  export const BASE_URL = "https://saurav.tech/NewsAPI/";

  export const getSourceAPI = (source) => {
    return `${BASE_URL}/everything/${source}.json`;
  };
  
  export const getNewsAPI = (category, country = "us") => {
    return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
  };
  
