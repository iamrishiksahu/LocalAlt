import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import VendorProductItem from "../../components/VendorProductItem";
import { getAllProduct } from "../../api/productApis";
import HeaderProgress from '../../components/HeaderProgress'

const VManageProducts = () => {
  const [data, setData] = useState([]);
  const [showProgress, setShowProgress] = useState(true)

  useEffect(() => {
    getAllProduct().then((res) => {
      if (res.isError) {
        alert('Error Occurred!')
      } else {
        setData(res) // Set the data from the response
      }
      setShowProgress(false)
    })

  }, [])
  console.log(data.products);

  return (
    <Box m="1.5rem 2.5rem">
      {showProgress ? <HeaderProgress /> : (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
        >
          {data.products?.map((product) => {
            const prod = product.data
            console.log(prod)
            return (

              <VendorProductItem id={product.data} {...prod} />
            )
          })}
        </Box>
      )}
    </Box>
  );
};

export default VManageProducts;
