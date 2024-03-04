// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { toast } from 'react-toastify';




function myState(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mode, setMode] = useState('light');
  
    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(17, 24, 39)';
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products, setProducts] = useState({
      title: null,
      imageUrl: null, 
      category: null, 
      description: null, 
      time: Timestamp.now(),
      date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    });

    const addProduct = async () => {
      if (products.title == null || 
        products.imageUrl == null || 
        products.category == null || 
        products.description == null
        ) {
          return toast.error('Xin hãy điền đầy đủ thông tin.')
        }

        setLoading(true)

        try {
          
          const productRef = collection(fireDB, 'products');

          await addDoc(productRef, products)
          toast.success('Sản phẩm được thêm thành công!')

          setTimeout(() => {
            window.location.href = '/dashboard'
          }, 800);

          getProductData();
          setLoading(false)

        } catch (error) {
          console.log(error);
          setLoading(false);
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [product, setProduct] = useState([]);

    const getProductData = async () => {

      setLoading(true)

      try {
        
        const q = query(
          collection(fireDB, 'products'),
          orderBy('time')
        );

        const data = onSnapshot(q, (QuerySnapshot) => {
          let productArray = [];
          QuerySnapshot.forEach((doc) => {
            productArray.push({...doc.data(), id: doc.id});
          });
          setProduct(productArray)
          setLoading(false)
        });

        return () => data;

      } catch (error) {
        console.log(error);
        setLoading(false)
      }

    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      getProductData();
    }, []);

    // update product function
    const editHandle = (item) => {
      setProducts(item)
    }

    const updateProduct = async () => {
      setLoading(true)
      try {

        await setDoc(doc(fireDB, 'products', products.id), products);
        toast.success('Cập nhật sản phẩm thành công!')
        getProductData();
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 800);
        setLoading(false);
      } catch (error) {
          console.log(error);
          setLoading(false)
      }
    } 

    // delete product

    const deleteProduct = async (item) => {
      setLoading(true)
      try {
        
        await deleteDoc(doc(fireDB, 'products', item.id));
        toast.success('Xóa sản phẩm thành công!');
        getProductData();
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

  return (
    <MyContext.Provider value={{mode, toggleMode, loading, setLoading, 
    products, setProducts, addProduct, product, editHandle, updateProduct, deleteProduct
    }}>
        {props.children}
    </MyContext.Provider>
  )
}

export default myState