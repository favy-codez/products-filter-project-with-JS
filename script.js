const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");

//   to display content section
  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map((product) => `
    <div class="product">
    <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
    </div>
    `
    // use join to not see commas
    ).join("");
  };

  displayProducts(data);

    //search bar functionalities, keyup to listen for keyboard interactions, e listening for events
    searchInput.addEventListener('keyup', (e) => {
        // convert input to lowercase
        // console.log(e.target.value); === displays search bar input
        const value = e.target.value.toLowerCase();

        // if value exist, display our product and if product does not exist, display all items 
        if (value){
            displayProducts(data.filter(
                // if the indexOf value is -1 it means it doesn't exist . if its not -1 return those items
                (item) => item.name.toLowerCase().indexOf(value) !== -1)
                );
        }else{
            displayProducts(data);
        }
    });
    //   categories section
    const setCategories = () => {
        const allCats =  data.map((item) => item.cat);
        // use i (indexOf) to avoid repetition
        const categories = [
            // created an array and used spread operator to add ALL in front of the other catedories
            "All",
            ...allCats.filter((item,i) => {
                return allCats.indexOf(item) === i 
            })];
            // console.log(categories);
        };  
    setCategories ()

  
//     categoriesContainer.innerHTML = categories
//       .map(
//         (cat) =>
//           `
//         <span class="cat">${cat}</span>
//       `
//       )
//       .join("");
  
//     categoriesContainer.addEventListener("click", (e) => {
//       const selectedCat = e.target.textContent;
  
//       selectedCat === "All"
//         ? displayProducts(data)
//         : displayProducts(data.filter((item) => item.cat === selectedCat));
//     });
//   };
  
//   const setPrices = () => {
//     const priceList = data.map((item) => item.price);
//     const minPrice = Math.min(...priceList);
//     const maxPrice = Math.max(...priceList);
  
//     priceRange.min = minPrice;
//     priceRange.max = maxPrice;
//     priceRange.value = maxPrice;
//     priceValue.textContent = "$" + maxPrice;
  
//     priceRange.addEventListener("input", (e) => {
//       priceValue.textContent = "$" + e.target.value;
//       displayProducts(data.filter((item) => item.price <= e.target.value));
//     });
//   };
  
//   setCategories();
//   setPrices();