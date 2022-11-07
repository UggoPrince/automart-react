import { Component } from 'react';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import Header from '../../components/header'
import HeaderLink from '../../components/link';
import Navbar from '../../components/navbar';

export default class HomeHeader extends Component {
  componentDidMount(): void {}
  render() {
    return (
      <Header>
        <Navbar>
          <HeaderLink Icon={FiLogIn} href="/signin" text="Sign In" />
          <HeaderLink Icon={FiUserPlus} href="/signup" text="Sign Up" />
        </Navbar>
      </Header>
    );
  }
};
