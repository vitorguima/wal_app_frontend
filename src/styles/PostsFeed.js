import styled from 'styled-components';

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background-color: #FDF4E3;
  margin: 0;
  padding-right: 2%;
  padding-left: 2%;
  padding: ${(props) => props.margin} 0 2% 0;
`;

export default FeedWrapper;
