import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/CrudContextProvider";

import SearchIcon from "@mui/icons-material/Search";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={4}>
      <Paper elevation={5} sx={{ p: 2, boxShadow: "none", width: "200px" }}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel
                value="all"
                control={<Radio color="error" />}
                label="all"
              />

              <FormControlLabel
                value="strategy"
                control={<Radio color="error" />}
                label="strategy"
              />

              <FormControlLabel
                value="open world"
                control={<Radio color="error" />}
                label="open world"
              />

              <FormControlLabel
                value="shooter"
                control={<Radio color="error" />}
                label="shooter"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("price_lte", e.target.value)}
          >
            <FormControlLabel
              value="all"
              control={<Radio color="error" />}
              label="all"
            />
            <FormControlLabel
              value="200"
              control={<Radio color="error" />}
              label="less than 200$"
            />

            <FormControlLabel
              value="500"
              control={<Radio color="error" />}
              label="less than 500$"
            />

            <FormControlLabel
              value="1000"
              control={<Radio color="error" />}
              label="less than 1000$"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
