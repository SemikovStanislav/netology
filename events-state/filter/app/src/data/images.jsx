const images_path = "public/img/"

const data = [{
    filename: "mon.jpg",
    category: "Business Cards"
}, {
    filename: "200.jpg",
    category: "Websites"
}, {
    filename: "emi_haze.jpg",
    category: "Websites"
}, {
    filename: "codystretch.jpg",
    category: "Websites"
}, {
    filename: "Triangle_003.jpg",
    category: "Business Cards"
}, {
    filename: "place200x290.png",
    category: "Websites"
}, {
    filename: "200.jpg",
    category: "Websites"
}, {
    filename: "transmission.jpg",
    category: "Business Cards"
}, {
    filename: "place200x290_1.png",
    category: "Websites"
}, {
    filename: "place200x290_2.png",
    category: "Flayers"
}, {
    filename: "the_ninetys_brand.jpg",
    category: "Websites"
}, {
    filename: "dia.jpg",
    category: "Business Cards"
}, {
    filename: "Triangle_350x197.jpg",
    category: "Websites"
}, {
    filename: "emi_haze.jpg",
    category: "Websites"
}, {
    filename: "transmission.jpg",
    category: "Business Cards"
}, {
    filename: "Triangle_350x197_1.jpg",
    category: "Websites"
}, {
    filename: "place200x290_3.png",
    category: "Flayers"
}]

export const images = data.map((image, i) => {
    return {
        category: image.category,
        component: <img key={i} src={images_path + image.filename} alt={image.category} />
    }
})