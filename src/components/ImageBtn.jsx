
import React from 'react';
import '../styles/imageBtn.scss';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import save from '../assets/save.svg';
import more from '../assets/more.svg';
import burger from '../assets/burger.svg';
import cancel from '../assets/cancel.svg';
import dark from '../assets/dark.svg';
import light from '../assets/light.svg';
import user from '../assets/user.svg';

export class ImageBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.type) {
      case 'like':
        return <img src={like} className="like" alt="like" />;
      case 'dislike':
        return <img src={dislike} className="dislike" alt="dislike" />;
      case 'save':
        return <img src={save} className="save" alt="save" />;
      case 'more':
        return <img src={more} className="more" alt="more" />;
      case 'burger':
        return <img src={burger} className="burger" alt="burger" />;
      case 'cancel':
        return <img src={cancel} className="cancel" alt="cancel" />;
      case 'dark':
        return <img src={dark} className="dark" alt="dark" />;
      case 'light':
        return <img src={light} className="light" alt="light" />;
    }
  }
}
