import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

import "./style.css";
const theme = createTheme();

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}

        <Box
          sx={{
            // bgcolor: "background.paper",
            pt: 8,
          }}
        >
          <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container>
                <Grid
                  item
                  sm={12}
                  md={6}
                  sx={{ margin: "auto", fontSize: "bold" }}
                >
                  <Typography
                    component="h1"
                    variant="h4 "
                    align="start"
                    color="text.danger"
                    gutterBottom
                    mr={5}
                    sx={{ color: "black" }}
                  >
                    ТОП 10 КЛИЕНТСКИХ ОНЛАЙН ИГР
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{
                        margin: "auto",
                        marginTop: "10px",
                        verticalAlign: "middle",
                      }}
                    >
                      Клиентские онлайн игры давно стали неотъемлемой частью
                      жизни каждого геймера. Возможность поиграть в хороший и
                      качественный проект в любимом жанре с реальными
                      соперниками, делает клиентские mmo по-настоящему
                      популярными, захватывающими и интересными для сотен
                      миллионов игроков со всех уголков земного шара.
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: "100%" }}
                    image="https://top10-online-games.com/wp-content/uploads/2017/05/top-10-onlain-igr-s-klientom-m75n.jpg"
                    alt="JAWS"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={
            {
              // bgcolor: "background.paper",
            }
          }
        >
          <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container sx={{ backgroundColor: "black" }}>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: "100%" }}
                    image="https://top10-online-games.com/wp-content/uploads/2017/05/top-10-brauzernih-igr-m75n.jpg"
                    alt="JAWS"
                  />
                </Grid>
                <Grid
                  item
                  sm={12}
                  md={6}
                  sx={{
                    margin: "auto",
                    fontSize: "bold",
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h4 "
                    align="start"
                    color="text.danger"
                    gutterBottom
                    ml={5}
                    sx={{ color: "gold" }}
                  >
                    ТОП 10 БРАУЗЕРНЫХ ОНЛАЙН ИГР
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{
                        margin: "auto",
                        marginTop: "10px",
                        verticalAlign: "middle",
                        color: "white",
                      }}
                    >
                      С момента своего первого появления браузерные онлайн игры
                      до сих пор не утратили свою актуальность. Кроме того, они
                      заметно улучшились в графике, стали еще интереснее, но,
                      как и прежде не требуют скачивания и установки клиента,
                      для них не нужен мощный компьютер, достаточно быстрой
                      регистрации, чтобы сразу приступить к игре.
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container>
                <Grid
                  item
                  sm={12}
                  md={6}
                  sx={{ margin: "auto", fontSize: "bold" }}
                >
                  <Typography
                    component="h1"
                    variant="h4 "
                    align="start"
                    color="text.danger"
                    gutterBottom
                    mr={5}
                    sx={{ color: "black" }}
                  >
                    ТОП 10 MMORPG
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{
                        margin: "auto",
                        marginTop: "10px",
                        verticalAlign: "middle",
                      }}
                    >
                      Жанр MMORPG один из самых популярных среди онлайн игр.
                      Огромные игровые миры, разнообразность персонажей,
                      захватывающие сюжеты и практически безграничные
                      возможности, с головой погружают в мир вымышленных
                      фантастических вселенных.
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: "100%" }}
                    image="https://top10-online-games.com/wp-content/uploads/2017/05/top-10-igr-mmorpg-m75n.jpg"
                    alt="JAWS"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container sx={{ backgroundColor: "black" }}>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: "100%" }}
                    image="https://top10-online-games.com/wp-content/uploads/2017/05/top-10-onlain-strategiy-m75n.jpg"
                    alt="JAWS"
                  />
                </Grid>
                <Grid
                  item
                  sm={12}
                  md={6}
                  sx={{ margin: "auto", fontSize: "bold" }}
                >
                  <Typography
                    component="h1"
                    variant="h4 "
                    align="start"
                    color="text.danger"
                    gutterBottom
                    ml={5}
                    sx={{ color: "gold" }}
                  >
                    ТОП 10 ОНЛАЙН СТРАТЕГИЙ
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{
                        margin: "auto",
                        marginTop: "10px",
                        verticalAlign: "middle",
                        color: "white",
                      }}
                    >
                      По своей популярности онлайн стратегии практически ничем
                      не уступают MMORPG. Они дают возможность испытать себя в
                      роли стратега, померятся силами в тактике и экономике с
                      реальными соперниками. Привлекательность стратегического
                      жанра позволила создать множество достойных проектов. Вам
                      лишь остается выбрать в какую игру поиграть.
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        {/* End hero unit */}
      </main>

      <section class="section section-default mt-none mb-none">
        <div class="container">
          <h2 class="mb-sm">
            Our <strong>Partners</strong>
          </h2>
          <strong>
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhx4yAmXMJDfEzRSAIJx7NgeRWPTwktVMfw&usqp=CAU"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://img3.akspic.ru/crops/6/0/2/6/5/156206/156206-valorant-riot_games-multfilm-art-sobytie-1920x1080.png"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/Portals/0/img/opera3_logo.png"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/Portals/0/pegasus-logo.png"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/Portals/0/sage business partner.jpg"
                  />
                </div>
              </div>
            </div>
          </strong>
        </div>
      </section>
      {/* Footer */}
    </ThemeProvider>
  );
}
