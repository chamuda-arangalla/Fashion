import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";


import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";

import "../Home.css";
import Banner from "../components/Layout/Banner";
import axios from "axios";
import { BASE_URL } from "../utils/Constants";

const Home = () => {
 

 
  const [value, setValue] = useState(0);
  const [produtDetails , setProductDetails] = useState();



  //APIS
  
 const fetchItems  = async()=>{

  await axios.get(`${BASE_URL}/items`).then(response => {
      setProductDetails(response.data)
    })
    .catch(error => {
      console.error('AxiosError:', error);
    })
}

// calling api functions
useEffect(()=>{
  fetchItems()
},[])


  return (
    <div>
      <Banner />
      <h1 className="Trending">Trending</h1>
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
