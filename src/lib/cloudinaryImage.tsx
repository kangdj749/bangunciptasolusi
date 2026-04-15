export function cloudinaryImage(
  src: string,
  type:
    | "lcp"
    | "detail"
    | "card"
    | "thumb"
    | "sponsor"
    | "natural"
    | "square"
    | "portrait"
    | "banner"
    | "icon"
    | "logo"
    | "preview"
    | "gallery"
) {
  const map = {
    //lcp: "f_auto,q_auto,dpr_auto,w_1200,h_900,c_fill,g_auto",
  
   
    natural: "f_auto,q_auto,dpr_auto,w_720,c_limit",
    square: "f_auto,q_auto,dpr_auto,w_720,h_720,c_fill,g_auto",
    portrait: "f_auto,q_auto,dpr_auto,w_720,h_900,c_fill,g_auto",
    sponsor: "f_auto,q_auto,dpr_auto,h_140,c_limit",
    icon: "f_auto,q_auto,dpr_auto,w_14,h_14,c_limit",
    logo: "f_auto,q_auto,dpr_auto,h_64,c_limit",
    lcp: "f_auto,q_auto,dpr_auto,w_1400,c_limit",

    banner: "f_auto,q_auto,dpr_auto,w_1600,c_limit",

    card: "f_auto,q_auto,dpr_auto,w_420,c_limit",

    gallery: "f_auto,q_auto,dpr_auto,w_500,h_320,c_fill,g_auto",

    // 🔥 INI KUNCI UTAMA
    detail: "f_auto,q_auto,dpr_auto,w_2000,c_limit",

    thumb: "f_auto,q_auto,dpr_auto,w_180,c_limit",

    preview: "f_auto,q_auto,dpr_auto,w_360,h_240,c_fill,g_auto",
  };

  return src.replace("/upload/", `/upload/${map[type]}/`);
}