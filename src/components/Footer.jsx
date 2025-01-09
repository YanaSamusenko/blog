import React from 'react';
import '../styles/footer.scss';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="pt-5 mt-auto">
        <div className="d-flex py-4 border-top">
          <p className="text-body-secondary">© 2024</p>
        </div>
      </footer>
    );
  }
}
