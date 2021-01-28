import logo from "./logo.svg";
import "./App.scss";
import Carousel from "./components/Carousel";

const carouselData = [
  {
    name: "All Copper Fittings",
    count: 780,
    image:
      "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/linkTwo/130.jpg",
  },
  {
    name: 
    "90° Street Elbows",
    count: 30,
    image:
      "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-90-Street-Elbows-147000.jpg",
  },
  {
    name: 
    "45° Elbows",
    count: 17,
    image:
      "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-45-Elbows-153000.jpg",
  },
  {
    name: "90° Street Elbows",
    count: 12,
    image:
 "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-90-Street-Elbows-147000.jpg",
  
    name: "45° Street Elbows",
    count: 12,
    image:
      "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-45-Street-Elbows-152000.jpg",
  },
  {
    name: "All Copper Fittings",
    count: 780,
    image:
      "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-x-Male-Adapters-138000.jpg",
  },
  {
    name: "Male Adapters",
    count: 39,
    image:
      "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-45-Elbows-153000.jpg",
  },
  {
    name: "Female Adapters",
    count: 28,
    image:
      "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-x-Female-Adapters-142000.jpg",
  },
  {
    name: "Tees",
    count: 17,
    image:
      "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Tees-134000.jpg",
  },
  {
    name: "Reducing Tees",
    count: 143,
    image:
      "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Reducing-Tees-24632000.jpg",
  },
  {
    name: "Couplings",
    count: 19,
    image:
      "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Couplings-144000.jpg",
  },
  {
    name: "Reducer Couplings",
    count: 48,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Reducer-Couplings-135000.jpg",
  },
  {
    name: "Fitting reducers",
    count: 53,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Fitting-Reducers-139000.jpg",
  },
  {
    name: "Unions",
    count: 20,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Unions-131000.jpg",  
 },
 {
    name: "caps",
    count: 14,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Caps-145000.jpg", 
 },
  {
    name: "90° Female Drop Ear Elbows (C x F)",
    count: 14,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/90-Drop-Ear-Elbows-CxF-151000.jpg",
    },
  {
    name: "90° Long Turn Elbows",
    count: 20,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-90-Long-Turn-Elbows-1645000.jpg",
    },
  {
    name: "90° Long Turn Street Elbows",
    count: 13,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-90-Long-Turn-Street-Elbows-1646000.jpg",
    },
  {
    name: "Fitting Brushes",
    count: 72,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Fitting-Brushes-155000.jpg",
    },
  {
    name: "Couplings(no-stop)",
    count: 16,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Couplings-Less-Stop-143000.jpg",
    },
  {
    name: "Ring Couplings",
    count: 10,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Ring-Couplings-15681000.jpg",
    },
  {
    name: "Baseboard-Tees",
    count: 4,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Baseboard-Tees-146000.jpg",
    },
  {
    name: "Tees (C x C x F)",
    count: 20,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Tees-CxCxF-133000.jpg",
    },
  {
    name: "Tees (C x F x C)",
    count: 12,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Tees-CxFxC-132000.jpg",
    },
  {
    name: "Tees (M x F x C)",
    count: 2,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Tees-MxFxC-24601000.jpg",
    },
  {
    name: "Tees (F x F x C)",
    count: 12,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Tees-FxFxC-24590000.jpg",
    },
  {
    name: "Male Street Adapters",
    count: 11,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Male-Street-Adapters-1669000.jpg",
    },
  {
    name: "Female Street Adapters",
    count: 11,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/1670.jpg",
    },
  {
    name: "Crosses",
    count: 6,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Cast-Brass-Crosses-1267000.jpg",
    },
  {
    name: "Return Bends",
    count: 12,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Return-Bends-15213000.jpg",
    },
  {
    name: "Bullhead Tees",
    count: 13,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Bullhead-Tees-24620000.jpg",
    },
  {
    name: "90° Elbows(C x M)",
    count: 8,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/90-Elbows-CxM-148000.jpg",
    },
  {
    name: "90° Elbows (C x F)",
    count: 12,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/90-Elbows-CxF-149000.jpg",
    },
  {
    name: "90° Elbows w/ Drain",
    count: 5,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-90-Elbow-w-Drain-15226000.jpg",
    },
  {
    name: "Stub Elbows",
    count: 19,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Stub-Elbows-24101000.jpg",
    },
  {
    name: "Bushings (FTG x C)",
    count: 11,
    image:
   "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Bushings-FTGxC-15232000.jpg",
    },
  {
    name: "End Plugs",
    count: 3,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Fitting-End-Plugs-15211000.jpg",
    },
  {
    name: "Repair Couplings",
    count: 4,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Repair-Couplings-15210000.jpg",
    },
  {
    name: "Copper 90° Elbows (FTG x FTG)",
    count: 4,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-90-Long-Turn-Elbows-FTGxFTG-15360000.jpg",
    },
  {
    name: "Hose Adapters",
    count: 1,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Copper-Hose-Adapters-15225000.jpg",
    },
  {
    name: "Reamed Adapters (C x IPS)",
    count: 4,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/Reamed-Adapters-C-x-IPS-24593000.jpg",
    },
  {
    name: "90° Drop Ear Elbows CxC",
    count: 4,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/31080.jpg",
    },
  {
    name: "Bushings(FTG x F)",
    count: 2,
    image:
    "https://s3.amazonaws.com/s3.supplyhouse.com/images/categories/category/32104.jpg",
    }
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1440 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 1440, min: 768 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

function App() {
  return (
    <div className="App">
      <h1>Carousel Example</h1>
      <Carousel responsive={responsive}>
        {carouselData.map((item) => {
          return (
            <div className="product">
              <img className="product-image" src={item.image} />
              <div className="description">
                <a href="#">{item.name}</a> ({item.count})
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default App;
