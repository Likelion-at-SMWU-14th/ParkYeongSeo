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
  margin: 0;

  color: #FF893A;
  font-size: 64px;
  line-height: 1.3;
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

  display: flex;
  align-items: center;
  gap: 56px;

  margin-top: 88px;
`;

export const SlotMachineFrame = styled.div`
  width: 860px;
  height: 410px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 58px 74px;

  border-radius: 52px;
  background-color: #FF893A;
`;