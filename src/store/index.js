import { createStore } from "vuex";

export default createStore({
  state: {
    services: [
      {
        name: "Lawn & Turf",
        img: require("@/assets/service/service-lawn.jpg"),
      },
      {
        name: "Hedges & Trees",
        img: require("@/assets/service/service-tree.jpg"),
      },
      {
        name: "Sculpture & Rockery",
        img: require("@/assets/service/service-sculpture.jpg"),
      },
      {
        name: "Fountains",
        img: require("@/assets/service/service-fountain.jpg"),
      },
      {
        name: "Maintenance",
        img: require("@/assets/service/service-maintenance.jpg"),
      },
      {
        name: "Driveways",
        img: require("@/assets/service/service-driveway.jpg"),
      },
    ],
    blogs: [
      {
        name: "What is the role of garden fountains in landscaping design",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Fountains",
        date: "Sep 25, 2021",
        img: require("@/assets/blog/blog1.jpg"),
        author: "Harry Potter",
        authorImg: require("@/assets/about/team1.jpg"),
      },
      {
        name: "How to choose a garden that suits your personal needs: Step-by-step guide",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Garden",
        date: "Dec 25, 2021",
        img: require("@/assets/blog/blog2.jpg"),
        author: "Ron Weasley",
        authorImg: require("@/assets/about/team3.jpg"),
      },
      {
        name: "Light up your landscape: 8 interesting ideas for a gorgeous garden design",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Fountains",
        date: "Sep 25, 2021",
        img: require("@/assets/blog/blog3.jpg"),
        author: "Hermione Granger",
        authorImg: require("@/assets/about/team2.jpg"),
      },
      {
        name: "What does the regular garden maintenane include and how much does it cost?",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Landscaping",
        date: "Sep 25, 2020",
        img: require("@/assets/blog/blog4.jpg"),
        author: "Harry Potter",
        authorImg: require("@/assets/about/team1.jpg"),
      },
      {
        name: "10 interesting ideas to steal from Los Angeles, CA gardens",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Garden",
        date: "Mar 12, 2019",
        img: require("@/assets/blog/blog5.jpg"),
        author: "Ron Weasley",
        authorImg: require("@/assets/about/team3.jpg"),
      },
      {
        name: "How to build a koi pond - Easy to follow step-by-step tutorial",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Landscaping",
        date: "Jan 19, 2021",
        img: require("@/assets/blog/blog6.jpg"),
        author: "Hermione Granger",
        authorImg: require("@/assets/about/team2.jpg"),
      },
    ],
    products: [
      {
        name: "Cactus Plant",
        price: 11.99,
        img: require("@/assets/shop/shop1.jpg"),
        imgDetail1: require("@/assets/shop/shop1-detail1.jpg"),
        imgDetail2: require("@/assets/shop/shop1-detail2.jpg"),
        imgDetail3: require("@/assets/shop/shop1-detail3.jpg"),
        weightSmall: 35,
        weightRegular: 39,
        weightLarge: 45,
        dimensionsSmall: "11 x 21 x 24",
        dimensionsRegular: "14 x 25 x 28",
        dimensionsLarge: "17 x 29 x 32",
        desc: "Curabitur in interdum viverra enim sit metus. Quisque quam amet platea penatibus. Orci et sem gravida laoreet.",
        sale: false,
        salePrice: null,
      },
      {
        name: "Pepper Face Plant",
        price: 14.99,
        img: require("@/assets/shop/shop2.jpg"),
        imgDetail1: require("@/assets/shop/shop2-detail1.jpg"),
        imgDetail2: require("@/assets/shop/shop2-detail2.jpg"),
        imgDetail3: require("@/assets/shop/shop2-detail3.jpg"),
        weightSmall: 22,
        weightRegular: 29,
        weightLarge: 39,
        dimensionsSmall: "8 x 8 x 8",
        dimensionsRegular: "12 x 12 x 12",
        dimensionsLarge: "16 x 18 x 18",
        desc: "Curabitur in interdum viverra enim sit metus. Quisque quam amet platea penatibus. Orci et sem gravida laoreet.",
        sale: true,
        salePrice: 9.99,
      },
      {
        name: "Portulacaria Plant",
        price: 8.99,
        img: require("@/assets/shop/shop3.jpg"),
        imgDetail1: require("@/assets/shop/shop3-detail1.jpg"),
        imgDetail2: require("@/assets/shop/shop3-detail2.jpg"),
        imgDetail3: require("@/assets/shop/shop3-detail3.jpg"),
        weightSmall: 8,
        weightRegular: 12,
        weightLarge: 17,
        dimensionsSmall: "13 x 21 x 13",
        dimensionsRegular: "16 x 26 x 16",
        dimensionsLarge: "21 x 29 x 21",
        desc: "Curabitur in interdum viverra enim sit metus. Quisque quam amet platea penatibus. Orci et sem gravida laoreet.",
        sale: false,
        salePrice: null,
      },
      {
        name: "Succulent Plant",
        price: 4.99,
        img: require("@/assets/shop/shop4.jpg"),
        imgDetail1: require("@/assets/shop/shop4-detail1.jpg"),
        imgDetail2: require("@/assets/shop/shop4-detail2.jpg"),
        imgDetail3: require("@/assets/shop/shop4-detail3.jpg"),
        weightSmall: 12,
        weightRegular: 16,
        weightLarge: 22,
        dimensionsSmall: "15 x 15 x 15",
        dimensionsRegular: "19 x 19 x 19",
        dimensionsLarge: "24 x 24 x 24",
        desc: "Curabitur in interdum viverra enim sit metus. Quisque quam amet platea penatibus. Orci et sem gravida laoreet.",
        sale: false,
        salePrice: null,
      },
      {
        name: "Snake Plant",
        price: 15.99,
        img: require("@/assets/shop/shop5.jpg"),
        imgDetail1: require("@/assets/shop/shop5-detail1.jpg"),
        imgDetail2: require("@/assets/shop/shop5-detail2.jpg"),
        imgDetail3: require("@/assets/shop/shop5-detail3.jpg"),
        weightSmall: 4,
        weightRegular: 8,
        weightLarge: 12,
        dimensionsSmall: "16 x 18 x 18",
        dimensionsRegular: "22 x 24 x 24",
        dimensionsLarge: "26 x 29 x 32",
        desc: "Curabitur in interdum viverra enim sit metus. Quisque quam amet platea penatibus. Orci et sem gravida laoreet.",
        sale: true,
        salePrice: 7.99,
      },
      {
        name: "Balloon Cactus Plant",
        price: 8.99,
        img: require("@/assets/shop/shop6.jpg"),
        imgDetail1: require("@/assets/shop/shop6-detail1.jpg"),
        imgDetail2: require("@/assets/shop/shop6-detail2.jpg"),
        imgDetail3: require("@/assets/shop/shop6-detail3.jpg"),
        weightSmall: 8,
        weightRegular: 13,
        weightLarge: 17,
        dimensionsSmall: "4 x 4 x 4",
        dimensionsRegular: "7 x 7 x 7",
        dimensionsLarge: "13 x 13 x 13",
        desc: "Curabitur in interdum viverra enim sit metus. Quisque quam amet platea penatibus. Orci et sem gravida laoreet.",
        sale: false,
        salePrice: null,
      },
    ],
    teams: [
      {
        name: "Harry Potter",
        img: require("@/assets/about/team1.jpg"),
        role: "Lead Landscaper",
      },
      {
        name: "Hermione Granger",
        img: require("@/assets/about/team2.jpg"),
        role: "Landscaper",
      },
      {
        name: "Ron Weasley",
        img: require("@/assets/about/team3.jpg"),
        role: "Supporter",
      },
    ],
    cartItems: [],
    showCart: false,
  },
  getters: {
    getRelatedBlogs: (state) => {
      let relatedBlogs = [];
      let idx1 = Math.floor(Math.random() * 5);
      let idx2 = Math.floor(Math.random() * 5);
      while (idx2 === idx1) {
        idx2 = Math.floor(Math.random() * 5);
      }
      relatedBlogs.push(state.blogs[idx1]);
      relatedBlogs.push(state.blogs[idx2]);
      return relatedBlogs;
    },
    getRelatedProducts: (state) => {
      let relatedProducts = [];
      let idx1 = Math.floor(Math.random() * 5);
      let idx2 = Math.floor(Math.random() * 5);
      let idx3 = Math.floor(Math.random() * 5);
      while (idx2 === idx1) {
        idx2 = Math.floor(Math.random() * 5);
      }
      while (idx3 === idx1 || idx3 === idx2) {
        idx3 = Math.floor(Math.random() * 5);
      }
      relatedProducts.push(state.products[idx1]);
      relatedProducts.push(state.products[idx2]);
      relatedProducts.push(state.products[idx3]);
      return relatedProducts;
    },
    getSingleProduct: (state) => (name) => {
      return state.products.find((product) => product.name === name);
    },
    getSingleBlog: (state) => (name) => {
      return state.blogs.find((blog) => blog.name === name);
    },
    getSingleService: (state) => (name) => {
      return state.services.find((service) => service.name === name);
    },
    getShowCart: (state) => {
      return state.showCart;
    },
  },
  mutations: {
    addItem(state, newItem) {
      const foundIdx = state.cartItems.findIndex(
        (item) => item.name === newItem.name && item.size === newItem.size
      );
      if (foundIdx !== -1) {
        let newQty = state.cartItems[foundIdx].qty + newItem.qty;
        state.cartItems[foundIdx] = {
          ...state.cartItems[foundIdx],
          qty: newQty,
        };
      } else {
        state.cartItems.push(newItem);
      }
    },
    removeItem(state, item) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.name !== item.name || cartItem.size !== item.size
      );
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
  actions: {
    addItem(context, { name, qty, size }) {
      let findItem = this.state.products.find(
        (product) => product.name == name
      );
      let newItem = {
        name: findItem.name,
        price: findItem.price,
        img: findItem.img,
        qty: qty,
        size: size,
      };
      if (findItem.sale == true) {
        newItem = {
          ...newItem,
          price: findItem.salePrice,
        };
      }
      context.commit("addItem", newItem);
    },
    removeItem(context, { item }) {
      context.commit("removeItem", item);
    },
    toggleCart(context) {
      context.commit("toggleCart");
    },
  },
  modules: {},
});
