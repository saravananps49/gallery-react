
/* ---------------- Image Data ---------------- */
// const images = [
//   {
//     id: 1,
//     url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
//     title: "Floral Summer Dress",
//     description: "Lightweight floral dress perfect for summer days"
//   },
//   {
//     id: 2,
//     url: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
//     title: "Elegant Party Gown",
//     description: "Stylish gown designed for evening parties"
//   },
//   {
//     id: 3,
//     url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
//     title: "Traditional Wear",
//     description: "Classic traditional outfit with modern touch"
//   },
//   {
//     id: 4,
//     url: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
//     title: "Fashion Dress",
//     description: "Trending fashion wear for special occasions"
//   }
// ];

// /* ---------------- Reusable Image Card Component ---------------- */
// const ImageCard = ({ url, title, description }) => {
//   return (
//     <div className="image-card">
//       <img src={url} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };

// /* ---------------- Parent Gallery Component ---------------- */
// const App = () => {
//   return (
//     <>
//       <h1 className="heading">Dynamic Image Gallery</h1>
//       <div className="gallery">
//         {images.map((image) => (
//           <ImageCard
//             key={image.id}
//             url={image.url}
//             title={image.title}
//             description={image.description}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;


/* ---------------- Superhero Data ---------------- */
const superheroes = [
{
id: 1,
name: "Batman",
image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
description: "The Dark Knight of Gotham City"
},
{
id: 2,
name: "Spider-Man",
image: "https://images.unsplash.com/photo-1635805737707-575885ab0820",
description: "Your friendly neighborhood superhero"
},
{
id: 3,
name: "Iron Man",
image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
description: "Genius, billionaire, hero in a suit"
},
// {
// id: 4,
// name: "Wonder Woman",
// image: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64d9c",
// description: "Amazonian warrior princess"
// },
{
id: 5,
name: "Captain America",
image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd",
description: "The first Avenger and symbol of hope"
}
];


/* ---------------- Reusable Card Component ---------------- */
const SuperheroCard = ({ name, image, description }) => {
return (
<div className="hero-card">
<img src={image} alt={name} />
<h3>{name}</h3>
<p>{description}</p>
</div>
);
};


/* ---------------- Gallery Component ---------------- */
const App = () => {
return (
<>
<h1 className="title">🦸 Superhero Image Gallery</h1>
<div className="gallery">
{superheroes.map((hero) => (
<SuperheroCard
key={hero.id}
name={hero.name}
image={hero.image}
description={hero.description}
/>
))}
</div>
</>
);
};

export default App;