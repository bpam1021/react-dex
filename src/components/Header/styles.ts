import styled from "styled-components";

export const Header = styled.header`
  height: 60px;
  background: #ef5350;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 80%;
    margin-left: 20px;
  }
`;

export const Icons = styled.div`
  a {
    color: #000;

    & + a {
      margin-left: 10px;
    }
  }
`;
