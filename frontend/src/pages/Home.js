import React from "react";

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

const Home = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Banner />
      <h1 className="Trending">Trending</h1>
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
