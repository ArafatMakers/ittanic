import React, { useEffect, useState } from 'react';




import { useProducts } from '../../contexts/CrudContextProvider';
import { Box, Pagination, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';


const ProductList = () => {



  const { products, getProducts } = useProducts();
  const [searchParams] = useSearchParams();



  useEffect(() => {
    getProducts();
  }, []);

  

  useEffect(() => {
    getProducts()
    setPage(1)
  }, [searchParams])

  const [page, setPage] = useState(1)
  const itemsPerPage = 15
  const count = Math.ceil(products.length / itemsPerPage)

  const handleChange = (e,p) =>{
    setPage(p)
  }

  const currentData = () => {
    const begin = (page - 1) * itemsPerPage
    const end = begin + itemsPerPage
    return products.slice(begin, end)

  }
  



  return (
    <>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      my: '35px',
      justifyContent: 'space-evenly'

    }}
  >
    {products ? (
      currentData().map((item) => {
          
         return <ProductCard item={item} key={item.id} />
})
    ) : (
      <h2>Loading...</h2>
    )}
</Box>
  <Box sx= {{textAlign: 'center'}}>

    <Typography>Page: {page}</Typography>
    <Box my={3} display="flex" justifyContent="center">
    <Pagination count={count} page={page} onChange={handleChange} />
    </Box>
    </Box>

</>

  );
};

export default ProductList;