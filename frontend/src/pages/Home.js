import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";

import "../Home.css";
import Banner from "../components/Layout/Banner";
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { getItems } from "../api/Home";




const Home = () => {

getItems()


  const [value, setValue] = useState(0);
  const [produtDetails , setProductDetails] = useState([
    {
      _id: "659f7871bc9d2a0ddbd31cae",
      Category: "Women",
      brand: "Example Brand",
      productName: "Example Product",
      description:"this is the description",
      type: "tshirt",
      price: "19.99",
      Img: "https://cobbitaly.com/cdn/shop/products/NVFSRE4092NAVYBLUE_1.jpg?v=1665659100&width=2048",
      quantity: 100
  },
  {
    _id: "659f78b2cf2f435eb5c26d20",
    Category: "Men",
    brand: "addidas",
    productName: "Example Product 1",
    description:"this is the description",
    type: "shirt",
    price: "19.99$",
    Img: "https://cobbitaly.com/cdn/shop/products/NVFSRE4092NAVYBLUE_1.jpg?v=1665659100&width=2048",
    quantity: 10
},
{
    _id: "659f7ab59fd8b62e761546be",
    Category: "women",
    brand: "nike",
    productName: "Example Product 2",
    description:"this is the description",
    type: "shirt",
    price: "19.99$",
    Img: "https://cobbitaly.com/cdn/shop/products/NVFSRE4092NAVYBLUE_1.jpg?v=1665659100&width=2048",
    quantity: 10
},
{
    _id: "65a0b8fde653dc4508d4819e",
    Category: "kids",
    brand: "rough",
    productName: "blue wale",
    description:"this is the description",
    type: "short",
    price: "20$",
    Img: "https://cdn.webshopapp.com/shops/51009/files/400710759/minikid-camel-brown-shorts-cool-shorts-childrens-c.jpg",
    quantity: 12
}
  ]);


// produtDetails?.map((index,product)=> console.log(index,product,"check"))

  return (
    <div>
      <Banner />
      <h1 className="Trending">Trending</h1>
      <hr />
      <div className="Cards">
        <br />
{
  produtDetails?.map((product)=>
        <Card key={product._id} sx={{ maxWidth: 345, p: 2, mx: 2 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            image={product?.Img}
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {product?.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {product?.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {product?.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Box sx={{ width: 80 }}>
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  label="Favorites"
                  icon={<FavoriteIcon />}
                />
              </BottomNavigation>
            </Box>

            <Button
              className="Scart"
              size="small"
              startIcon={<AddShoppingCartTwoToneIcon />}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
        )}
       
        <br />
      </div>

      <div>
        <h1 className="Trending">Discounts</h1>
        <hr />
        <div className="Cards">
          <br />
          <Card sx={{ maxWidth: 345, p: 2, mx: 2 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              image="./Longsleevetshirt.jpeg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Long Sleve T-Shirts
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Box sx={{ width: 80 }}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteIcon />}
                  />
                </BottomNavigation>
              </Box>

              <Button
                className="Scart"
                size="small"
                startIcon={<AddShoppingCartTwoToneIcon />}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, p: 2, mx: 2 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              image="./cottonhoodie.jpeg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cotton Hoodie
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Box sx={{ width: 80 }}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteIcon />}
                  />
                </BottomNavigation>
              </Box>

              <Button
                className="Scart"
                size="small"
                startIcon={<AddShoppingCartTwoToneIcon />}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, p: 2, mx: 2 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              image="./combed-cotton-blend-tshirt.jpeg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cotton Blend T-Shirts
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Box sx={{ width: 80 }}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteIcon />}
                  />
                </BottomNavigation>
              </Box>

              <Button
                className="Scart"
                size="small"
                startIcon={<AddShoppingCartTwoToneIcon />}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, p: 2, mx: 2 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              image="./work-shorts.jpeg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                work Shorts
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Box sx={{ width: 80 }}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteIcon />}
                  />
                </BottomNavigation>
              </Box>

              <Button
                className="Scart"
                size="small"
                startIcon={<AddShoppingCartTwoToneIcon />}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
