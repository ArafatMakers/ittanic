import React from "react";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";

import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PaymentIcon from "@mui/icons-material/Payment";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{ background: "black", color: "white", display: "wrap" }}
        px={{ xs: 4, sm: 10 }}
        py={{ xs: 6, sm: 10 }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid
              item
              px={5}
              xs={12}
              sm={6}
              md={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography variant="h6">Новинки</Typography>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Watch Dogs
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
              >
                GTA V
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Rose wine
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Dessert wine
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Sparkling wine
              </Link>
            </Grid>

            <Grid
              item
              px={5}
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography variant="h6">CONTACTS</Typography>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Store hours
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Phone
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Address
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Store location
              </Link>
            </Grid>

            <Grid
              item
              pr={5}
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography variant="h6">COMPANY</Typography>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Company
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                About FineWine
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Partner network
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Careers
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Referral program
              </Link>
              <Link
                className="haver"
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: "#4f4f4f" }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Coupon code
              </Link>
            </Grid>
            <Grid
              item
              pt={3}
              xs={12}
              sm={6}
              md={3}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Typography variant="h6">
                Способы оплаты <PaymentIcon fontSize="large" />
              </Typography>
              <Grid py={3}>
                <img
                  style={{ margin: "5px", width: "70px", height: "40px" }}
                  src="https://cdn.icon-icons.com/icons2/1316/PNG/128/if-visa-2593666_86609.png"
                  alt=""
                />
                <img
                  style={{ margin: "5px", width: "70px", height: "40px" }}
                  src="https://mm.ge/uploaded/faq/faqFileoJqQrNLS.jpg"
                  alt=""
                />
                <img
                  style={{ margin: "5px", width: "70px", height: "40px" }}
                  src="https://cdn.icon-icons.com/icons2/1178/PNG/128/mastercard_82049.png"
                  alt=""
                />
                <img
                  style={{ margin: "5px", width: "70px", height: "40px" }}
                  src="https://raw.githubusercontent.com/gregoiresgt/payment-icons/master/Assets/Credit%20Card/UnionPay/UnionPay-card-dark.png"
                  alt=""
                />
                <img
                  style={{ margin: "5px", width: "70px", height: "40px" }}
                  src="https://www.onlinegambling24.com/wp-content/uploads/2019/12/WebMoney-Logo.jpg"
                  alt=""
                />
                <img
                  style={{ margin: "5px", width: "70px", height: "40px" }}
                  src="https://runet-id.com/files/company/5cadde81702906.52715735.jpg"
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Grid>
          <Box
            textAlign="center"
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: { xs: "column", sm: "row" },
            }}
            variant="body2"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
          >
            <Link to="/" className="logo">
              <Box sx={{ color: "white" }}>
                GAME
                <SportsEsportsIcon sx={{ color: "gold" }} fontSize="large" />
                STORE
              </Box>
            </Link>
            <Box>
              &reg; {new Date().getFullYear()} GameStore Правовая информация
            </Box>
            <Box>
              <Box component="span" p={2}>
                <TelegramIcon sx={{ color: "blue" }} fontSize="large" />
              </Box>

              <Box component="span" p={2}>
                <YouTubeIcon sx={{ color: "red" }} fontSize="large" />
              </Box>

              <Box component="span" p={2}>
                <InstagramIcon sx={{ color: "#fc466b" }} fontSize="large" />
              </Box>

              <Box component="span" p={2}>
                <TwitterIcon sx={{ color: "cyan" }} fontSize="large" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
