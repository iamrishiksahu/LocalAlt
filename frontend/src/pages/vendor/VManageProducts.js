
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import VendorProductItem from "../../components/VendorProductItem";
import { getAllProduct } from "../../api/productApis";
import HeaderProgress from '../../components/HeaderProgress'
import VHeader from "./VHeader";
import { useNavigate } from "react-router-dom";

const VManageProducts = () => {
  const [data, setData] = useState([]);
  const [showProgress, setShowProgress] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    getAllProduct().then((res) => {
      if (res.isError) {
        alert('Error Occurred!')
        navigate('/vendor/home')

      } else {
        // console.log(res)
        setData(res) // Set the data from the response
      }
      setShowProgress(false)
    })
  }, [])
  return (
    <>
      <VHeader title={'Manage Products'} />
      <Box m="1.5rem 2.5rem">
        {showProgress ? <HeaderProgress /> : (
          <Box
            mt="20px"
            display="grid"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"

            sx={{
              gridTemplateColumns: { md: '1fr 1fr 1fr 1fr', sm: '1fr 1fr 1fr', xs: '1fr 1fr' }
            }}
          >
            {data.map((product) => (
              <VendorProductItem key={product.product_id} {...product} />
            ))}
          </Box>
        )}
      </Box>
    </>
  )
}

export default VManageProducts
