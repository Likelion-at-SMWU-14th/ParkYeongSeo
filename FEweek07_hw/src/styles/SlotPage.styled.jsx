import styled from "styled-components";

export const SlotPageContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 72px;
  padding-bottom: 68px;

  background-color: #282828;
  overflow: hidden;
`;

export const SlotTitle = styled.h1`
  position: relative;
  z-index: 200;

  margin: 0;

  color: #ff893a;
  font-size: 64px;
  text-align: center;

  span {
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }
`;

export const MachineSection = styled.section`
  position: relative;

  width: 100%;
  margin-top: 88px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlotMachineFrame = styled.div`
  width: 860px;
  height: 410px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 58px 74px;

  border-radius: 52px;
  background-color: #ff893a;
`;