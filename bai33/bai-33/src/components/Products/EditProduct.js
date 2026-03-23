import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function EditProduct(props) {
  const { item, onReload } = props;
  const [isShowModal, setShowModal] = useState(false);
  const [data, setData] = useState(item);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      fetch(`http://localhost:3001/categories`)
        .then(response => response.json())
        .then(data => {
          setDataCategory(data);
        })
    }
    fetchApi();
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value
    });
  }

  const openModal = () => {
    console.log(item);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/products/${item.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          closeModal();
          onReload();
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        }
      })
  };

  return (
    <>
      <button onClick={openModal}>Edit</button>

      <Modal
        isOpen={isShowModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Tiêu đề</td>
                <td>
                  <input value={data.title} type='text' name='title' onChange={handleChange} />
                </td>
              </tr>
              {dataCategory.length > 0 && (
                <tr>
                  <td>Danh mục</td>
                  <td>
                    <select value={data.category} name='category' onChange={handleChange}>
                      {dataCategory.map((item, index) => (
                        <option value={item.slug} key={index}>{item.name}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}
              <tr>
                <td>Giá</td>
                <td>
                  <input value={data.price} type='text' name='price' onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>Giảm giá</td>
                <td>
                  <input value={data.discountPercentage} type='text' name='discountPercentage' onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>Số lượng còn lại</td>
                <td>
                  <input value={data.stock} type='number' name='stock' onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>Đường dẫn ảnh</td>
                <td>
                  <input value={data.thumbnail} type='text' name='thumbnail' onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>
                  <textarea value={data.description} rows={4} name='description' onChange={handleChange}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={closeModal}>Huỷ</button>
                </td>
                <td>
                  <input type='submit' value='Cập nhật' />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal>
    </>
  );
}

export default EditProduct;