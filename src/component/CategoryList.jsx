import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CategoryList() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) => {
          dispatch(addCart(product))
    }

    useEffect(() => {
      const getProduct = async () => {
        setLoading(true)
        await axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
          setProduct(response.data)
          console.log(response.data,"hhhuu");
          setLoading(false)
        })
      }
      getProduct();
    }, []);

    const Loading = () => {
      return (
            <>
            <Row>
              <Col className="col-md-6">
                <Skeleton height={400}/>
              </Col>
              <Col className="col-md-6" style={{lineHeight: 2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50}/>
                <Skeleton height={150}/>
                <Skeleton height={50} width={300}/>
                <Skeleton height={50} width={300} style={{marginLeft:6}} />
              </Col>
              </Row>
            </>
      )
    }

    const ShowProducts = () => {
      return(
        <>
        <div className="row" >
        <div className="col-md-6" key={product.title}>
            <img src={product.image}  height="400px" width="400px"/>
          </div>
          <div className="col-md-6">
            <h4 className='text-uppercase text-black-50'>
              {product.category}
            </h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className='fa fa-star' />
            </p>
            <h3 className="display-6 fw-bold my-4">
                ${product.price}
            </h3>
            <p className="lead">
              {product.description}
            </p>
            <button className='btn btn-outline-dark px-4 py-2' onClick= {() => addProduct(product)}>
                Add to Cart
            </button>
            <NavLink to="/cart"className='btn btn-dark ms-2 px-3 py-2'>
                Go to Cart
            </NavLink>
          </div>
        </div>
          
        </>
      )
    }

  return (
    <div>
        <div className="container py-5">
          <div className="row py-4">
            { loading ? <Loading/> : <ShowProducts/> }
          </div>
        </div>
    </div>
  )
}
