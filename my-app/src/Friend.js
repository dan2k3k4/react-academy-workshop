import React, {Component} from 'react';
import Favourite from 'Favourite';

class Friend extends Component {

  render() {
    const {friend, isFavourite, toggleFavourite} = this.props;
    const {
      imageUrl,
      name,
      surname,
      isOnline = false
    } = friend;

    return (
      <div
        className={isOnline ? 'online' : 'offline'}
        style={{color: 'blue', textAlign: 'center'}}>
        <img
          alt={`${name} ${surname}`}
          width="100"
          height="100"
          src={imageUrl}
        />
        <div>
          <svg width="10" height="10">
            <circle fill={isOnline ? 'green' : 'red'} cx="5" cy="5" r="5" />
          </svg>
          <b> {name} </b>
          <i> {surname} </i>
          <Favourite
            isFavourite={isFavourite}
            toggleFavourite={toggleFavourite}
          />
        </div>
      </div>
    )
  }
}

export default Friend;
