import styled from 'styled-components';

const Container = styled.section`
  background-color: #222;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 100%;
  right: ${(props) => (props.sidebar ? '0' : '-100%')};
  animation: showSidebar .4s;

  @keyframes showSidebar {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  img {
    height: 33px;
  }

  button {
    background-color: transparent;
    border: none;
    height: 42px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  div {
    border-bottom: solid 1px #58595b;
    display: flex;
    justify-content: space-between;
    padding: 13px;
  }

  nav {
    padding: 20px;
  }

  nav ul {
    li {
      align-items: center;
      color: white;
      display: flex;
      justify-content: space-between;
      text-transform: uppercase;
      list-style: none;
      margin: 30px 0;
    }

    li button {
      align-items: center;
      color: white;
      display: flex;
      font-size: 16px;
      height: 19.2px;
      justify-content: space-between;
      text-transform: uppercase;
      width: 100%;
    }

    li span button {
      color: #ffc709;
    }

    li a {
      color: white;
      font-size: 16px;
      text-align: left;
      text-transform: uppercase;
      text-decoration: none;
    }

    li img {
      height: 15px;
      width: 15px;
    }
  }

  @media (min-width: 390px) {
    nav ul li a {
      font-size: 20px;
    }

    nav ul li button {
      font-size: 20px;
    }

    nav ul li {
      margin: 40px 0;
    }

    img {
      height: 40px;
    }
  }
`;

export default Container;
