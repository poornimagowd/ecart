import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";


const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    const dispatch = useDispatch();
    const addProduct = (product) => {
      dispatch(addCart(product));
    };
    
    useEffect(() => {
        const getProducts = async () => {
             setLoading(true)
             await axios.get("https://fakestoreapi.com/products").then((response) => {
              if(componentMounted){
                setData(response.data);
                setFilter(response.data)
                setLoading(false)
                console.log('data', data)
              }
            });
            return () => {
              componentMounted = false;
            }
        }
        getProducts();
    }, []);


  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/> 
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>

      </>
    ) 
  }

  const setFilteredData = (cat) => {
    const updatedList = data.filter((x) => x.category === cat)
    setFilter(updatedList)
  }

  const ShowProducts = () => {
      return(
        <>
          <div className='mb-4 category-name' >
            <Row>
            <Col xs={1} md={1}></Col>
              <Col xs={2} md={2} onClick={() => setFilter(data)}>
                <Image src="./assets/all.jpeg"  height={100} width={100}/>
                <div className='cat-name mt-2'>All</div>
              </Col>
              <Col xs={2} md={2} onClick={() => setFilteredData("men's clothing")}>
                <Image src="./assets/men.jpeg" height={100} width={100}/>
                <div className='cat-name mt-2'>Men's</div>
              </Col>
              <Col xs={2} md={2} onClick={() => setFilteredData("women's clothing")}>
                <Image src="./assets/women.jpeg" height={100} width={100}/>
                <div className='cat-name mt-2'>women's</div>
              </Col>
              <Col xs={2} md={2} onClick={() => setFilteredData('jewelery')}>
                <Image src="./assets/jewellery.jpeg" height={100} width={100}/>
                <div className='cat-name mt-2'>Jewelery</div>
              </Col>
              <Col xs={2} md={2} onClick={() => setFilteredData('electronics')}>
                <Image src="./assets/electronics.jpeg" height={100} width={100}/>
                <div className='cat-name mt-2'>Electronics</div>
              </Col>
            </Row>
          </div>
         
     
        <div className='row'>
          { filter.map((product) => {
            return (
              <>
                <div className='col-md-3 mb-4'>
                  <div className="card h-100 text-center" key={product.id}>
                    <img className="card-img-top" src={product.image} alt="Card image cap" height={200} width={100}/>
                    <div className="card-body">
                      <h5 className="card-title">{product.title.substring(0, 12)}</h5>
                      <p className="card-text lead fw-100">${product.price}</p>
                      <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                    </div>
                  </div>
                 </div>
              </>
            )
          })
        }
        </div>
      </>
    )
  }
  return (
    <div>
      <Container className="mb-4 mt-4">
        <Row className="py-3 my-3 text-center display-6 fw-bolder">
          <div>Latest Products</div>
        </Row>
        <hr></hr>
        <Row className="py-4 my-3 text-center display-6 fw-bolder">
          {loading ? <Loading/> : <ShowProducts/>}
        </Row>
      </Container>
    </div>
  )
}

export default Product