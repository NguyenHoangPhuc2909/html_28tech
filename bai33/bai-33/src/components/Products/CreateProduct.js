import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { getCategory } from '../../Services/categoryServices';
import { createProduct } from '../../Services/productServices';

function CreateProduct(props) {
  const { onReload } = props;
  const [isShowModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getCategory();
      setDataCategory(result);

      if (result.length > 0) {
        setData(prev => ({
          ...prev,
          category: result[0].slug
        }));
      }
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
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createProduct(data);
    if (result) {
      closeModal();
      onReload();
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    }
  };

  return (
    <>
      <button onClick={openModal}>+ Tạo sản phẩm mới</button>

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
                  <input type='text' name='title' onChange={handleChange} />
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
                  <input type='text' name='price' onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>Giảm giá</td>
                <td>
                  <input type='text' name='discountPercentage' onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>Số lượng còn lại</td>
                <td>
                  <input type='number' name='stock' onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>Đường dẫn ảnh</td>
                <td>
                  <input type='text' name='thumbnail' onChange={handleChange} required />
                </td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>
                  <textarea rows={4} name='description' onChange={handleChange}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={closeModal}>Huỷ</button>
                </td>
                <td>
                  <input type='submit' value='Tạo mới' />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal>
    </>
  );
}

export default CreateProduct;