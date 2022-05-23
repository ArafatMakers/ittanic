import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { ADMIN } from "../../helpers/consts";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import "./navbar.css";

import { getCountProductsInCart } from "../../helpers/functions";
import { useCart } from "../../contexts/CartContextProvider";

import { Badge } from "@mui/material";
import { Favorite, Person, ShoppingBag } from "@mui/icons-material";
import { useAuth } from "../../contexts/AuthContextProvider";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const pages = [
  { name: "Home", link: "/", id: 1 },

  { name: "Store", link: "/products", id: 3 },
  { name: "About Us", link: "/about", id: 4 },

  // { name: 'Admin panel', link: '/adminPage', id: 5 },
];
// const settings = ['Logout'];

const Navbar = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { addProductToCart } = useCart();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");

  React.useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <AppBar position="static" elevation={0} sx={{ background: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            fontWeight={500}
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            color="pink"
          >
            <Link to="/" className="logo">
              GAME
              <SportsEsportsIcon sx={{ color: "gold" }} fontSize="large" />
              STORE
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
                color: "black",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box>
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link to={page.link}>
                      <Typography
                        className="navbar-item"
                        sx={{
                          ml: "auto",
                          my: 1,
                          color: "black",
                          display: "block",
                        }}
                      >
                        {page.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            color="black"
          >
            <Link to="/" className="logo">
              GAME
              <SportsEsportsIcon sx={{ color: "gold" }} fontSize="large" />
              STORE
            </Link>
          </Typography>
          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link to={page.link} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ ml: "auto", my: 2, color: "black", display: "block" }}
                  className="navbar-item"
                >
                  {page.name}
                </Button>
              </Link>
            ))}

            {email == ADMIN ? (
              <Link to="/adminPage">
                <Button sx={{ my: 2, color: "black" }}>ADMIN PAGE</Button>
              </Link>
            ) : (
              <></>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <TextField 
              value={search}
          onChange={(e) => setSearch(e.target.value)}
        InputLabelProps={{className: 'textfield__label'}}
        
        id="input-with-icon-textfield"
        sx={{maxWidth:'10vw',marginRight:'1em'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="standard"
      /> */}

            <Tooltip title="Favorites" className="navbar-icon">
              <IconButton sx={{ p: 0 }}>
                <Favorite />
              </IconButton>
            </Tooltip>

            <Link to="/cart">
              <Tooltip title="Cart" className="navbar-icon">
                <IconButton sx={{ p: 0 }}>
                  <Badge badgeContent={count} color="error">
                    <ShoppingBag />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Link>

            <Tooltip title="Open settings" className="navbar-icon">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Person />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogout}>{setting}</Typography>
                  
                </MenuItem>

                
              ))} */}

              {email ? (
                <MenuItem>
                  <Typography onClick={handleLogout}>Logout</Typography>
                </MenuItem>
              ) : (
                <MenuItem>
                  <Link to="/auth">
                    <Typography>Login</Typography>
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
