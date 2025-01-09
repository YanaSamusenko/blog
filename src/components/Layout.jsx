import React from 'react';
import { Outlet } from 'react-router-dom';
import {Title} from './Title';
import {Header} from './Header';
import {Main} from './Main';
import {Footer} from './Footer';
import {Container} from './Container';
import '../styles/layout.scss';

export function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <Container>
        <Title>{props.title}</Title>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Container>
    </div>
  );
}
