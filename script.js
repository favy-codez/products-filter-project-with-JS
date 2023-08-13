const data = [
    {
      id: 1,
      name: "Adrianna Papell Beaded Halter Gown",
      img: "https://m.media-amazon.com/images/I/71PBls+3ZEL._MCnd_AC_UL400_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Jessica Howard Women's Style Hem Wrap",
      img: "https://m.media-amazon.com/images/I/71yYTGcDfDL._MCnd_AC_UL400_.jpg",
      price: 85,
      cat: "Dress",
      },
    {
      id: 3,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Watches",
    },
    {
      id: 4,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Watches",
    },
    {
      id: 5,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Watches",
    },
    {
      id: 6,
      name: "Deer Stags Men's Stockton Oxford",
      img: "https://m.media-amazon.com/images/I/81cFzX1Un6L._AC_UL400_.jpg",
      price: 74,
      cat: "shoes",
    },
    {
      id: 7,
      name: "Tommy Hilfiger Sleeveless Faux Wrap",
      img: "https://m.media-amazon.com/images/I/71QEMTK+v-L._MCnd_AC_UL400_.jpg",
      price: 90,
      cat: "Dress",
      },
    {
      id: 8,
      name: "Columbia Men's Sport Sandal",
      img: "https://m.media-amazon.com/images/I/71euztxFc5L._AC_UL400_.jpg",
      price: 74,
      cat: "shoes",
    },
    {
      id: 9,
      name: "Leather Suede Water Resistant Boot",
      img: "https://m.media-amazon.com/images/I/51rrrQmqxVL._AC_UL400_.jpg",
      price: 74,
      cat: "shoes",
      }
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
             // add categories Container
            categoriesContainer.innerHTML = categories.map((cat)=>
            `
                <span class="cat">${cat}</span>
            `
            ).join(" ");
            // add event listeners to each category using the parent container
            categoriesContainer.addEventListener("click", (e)=>{
                const selectedCat = e.target.textContent;

                // using ternary operator to create conditions 
                selectedCat === "All" 
                ? displayProducts(data) 
                : displayProducts(data.filter((item) => item.cat === selectedCat));
            });
        };  
        // range section
        const setPrices = () => {
            const priceList = data.map((item) => item.price);
            // console.log(priceList);
            // use math method to pick minimum and maximum
            // Math.min([2,3])=NaN so  Math.min(...[2,3])
            const minPrice = Math.min(...priceList);
            const maxPrice = Math.max(...priceList);

            priceRange.min = minPrice;
            priceRange.max = maxPrice;
            priceRange.value = maxPrice;
            priceValue.textContent = "$" + maxPrice;

            priceRange.addEventListener("input", (e)=>{
                // to filter price
                priceValue.textContent = "$" + e.target.value;
                displayProducts(data.filter((item)=>item.price <= e.target.value))
            })
        };
        setCategories ()
        setPrices()

//     priceRange.addEventListener("input", (e) => {
//       priceValue.textContent = "$" + e.target.value;
//       displayProducts(data.filter((item) => item.price <= e.target.value));
//     });
//   };
  
//   setCategories();
//   setPrices();