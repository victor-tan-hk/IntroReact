import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { itemImages } from '../items';
import ItemType from '../types/item';
import './DetailItem.css';

function DetailItem({items}) {
    const { id } = useParams();
    const detailItem = items.find((item) => item.itemId === id);

    return (
      <div className="detail-item-component">
          <img
            className="details-image"
            src={itemImages[detailItem.imageId]}
            alt={detailItem.title}
          />
          <h2>{detailItem.title}</h2>
          <div>
            $
            {detailItem.price.toFixed(2)}
          </div>
      </div>
    );
  }

DetailItem.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};


export default DetailItem;