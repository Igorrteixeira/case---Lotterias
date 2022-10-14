import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #e1e0e0;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
`;

export const Text = styled.p`
position: absolute;
    bottom: 10px;
    margin-left: 40vw;
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-left:5px;
    text-align: center;
  }
`
