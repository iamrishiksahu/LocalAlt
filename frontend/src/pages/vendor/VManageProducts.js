
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import VendorProductItem from "../../components/VendorProductItem";
import { getAllProduct } from "../../api/productApis";
import HeaderProgress from '../../components/HeaderProgress'
import VHeader from "./VHeader";

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
    console.log(data);
  }, [])
  return (
    <>
      <VHeader title={'Manage Products'} />
      <Box m="1.5rem 2.5rem">
        {data ? (
          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(3, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"
          >
            {data.map((product) => (
              <VendorProductItem key={product.product_id} {...product} />
            ))}
          </Box>
        ) : (
          <>Loading...</>
        )}
      </Box>
    </>
  )
}

export default VManageProducts
